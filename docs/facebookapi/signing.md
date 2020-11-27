---
title: iOS Signing
sidebar_label: iOS Signing
---

In some circumstances the AIR SDK doesn't correctly sign all the packaged frameworks in an application. 

This will result in an error when attempting an AppStore submission and installing development builds will fail with a signature validation error. Something like:

```
ERROR: Install failed. Got error "ApplicationVerificationFailed" with code 0xe8008001: Failed to verify code signature of
```

To get around this, before you upload or install your application you will need to run a script to resign your IPA. This script is available below.

:::info
This script will only work on a macOS machine with Xcode installed and your certificate installed in Keychain
:::

Copy this script to a directory in your development environment.

Firstly edit the script to change the details of the IPA, provisioning profile and signing identity for your application. These details are located at the top of the script.

Now open a Terminal at the script location. *You will need to run the script from this directory.*

```
./resign
```

This should output a few informational items to the console and then once complete you should have a new IPA file in the directory named: `yourApp_resigned.ipa`. If there were any errors or warnings displayed, make sure the information above is all correct.

This resigned IPA is the file you should use.


## Cause 

The cause of this issue has been long standing and we have been in discussions about it with the AIR developers (Adobe and now Harman) for a long time: 

- https://tracker.adobe.com/#/view/AIR-4198407

Please help us in getting attention to the issue by voting for it here:

- https://github.com/Gamua/Adobe-Runtime-Support/issues/521



## Resign Script

```
#!/bin/bash

#####################################
## CONFIG

# You need to set the values below for your application
# We suggest they are full paths to the files. 

# The path to the ipa generated from your AIR application packaging
IPA="/path/to/yourApp.ipa"

# The provisioning profile for your application
PROVISIONING_PROFILE="/path/to/profile.mobileprovision"

# The name of the signing identity. You get this by running the following in a terminal 
# and selecting the name of your certificate:
# 
# security find-identity -v -p codesigning
SIGNING_IDENTITY="iPhone Distribution: XXXXXXXXX (XXXXX)"

## END CONFIG
#####################################




OUTPUT=.
WORKING_DIR=.tmp
WORKING_PROFILE="profile.mobileprovision"
IPA_NAME=$(basename ${IPA%.*})

cp -f "$PROVISIONING_PROFILE" "$WORKING_PROFILE"

rm -rf "$WORKING_DIR"
unzip -qq -o $IPA -d $WORKING_DIR
find . -iname '$WORKING_DIR/*.DS_Store' -delete 

rm -rf "$WORKING_DIR/Payload/$APP_NAME/_CodeSignature/"
rm -f "$WORKING_DIR/Payload/$APP_NAME/embedded.mobileprovision"

APP_NAME=$(ls -1 $WORKING_DIR/Payload)


#####################################
echo "Create Signing Entitlements"
ENTITLEMENTS="$OUTPUT/Entitlements.plist"
rm -f "$ENTITLEMENTS" 
WORKING_PROFILE_PLIST="$OUTPUT/$WORKING_PROFILE.plist"
security cms -D -i "$WORKING_PROFILE" > "$WORKING_PROFILE_PLIST"


TEAM_IDENTIFIER=$(/usr/libexec/Plistbuddy -c "Print :TeamIdentifier:0" "$WORKING_PROFILE_PLIST")
APPLICATION_IDENTIFIER_PREFIX=$(/usr/libexec/Plistbuddy -c "Print :ApplicationIdentifierPrefix:0" "$WORKING_PROFILE_PLIST")
BUNDLE_IDENTIFIER=$(/usr/libexec/Plistbuddy -c "Print :CFBundleIdentifier" "$WORKING_DIR/Payload/$APP_NAME/Info.plist")
APS_ENVIRONMENT=$(/usr/libexec/Plistbuddy -c "Print Entitlements:aps-environment" "$WORKING_PROFILE_PLIST")
BETA_REPORTS=$(/usr/libexec/Plistbuddy -c "Print Entitlements:beta-reports-active" "$WORKING_PROFILE_PLIST")
PROVISIONING_GET_TASK_ALLOW=$(/usr/libexec/Plistbuddy -c "Print :Entitlements:get-task-allow" "$WORKING_PROFILE_PLIST")
 
echo "  APP_NAME = $APP_NAME"
echo "  TEAM_IDENTIFIER = $TEAM_IDENTIFIER"
echo "  APPLICATION_IDENTIFIER_PREFIX = $APPLICATION_IDENTIFIER_PREFIX"
echo "  BUNDLE_IDENTIFIER = $BUNDLE_IDENTIFIER"
echo "  APS_ENVIRONMENT = $APS_ENVIRONMENT"
echo "  BETA_REPORTS = $BETA_REPORTS"
echo "  PROVISIONING_GET_TASK_ALLOW = $PROVISIONING_GET_TASK_ALLOW"


/usr/libexec/PlistBuddy -c "Add :application-identifier string $APPLICATION_IDENTIFIER_PREFIX.$BUNDLE_IDENTIFIER" "$ENTITLEMENTS"
/usr/libexec/PlistBuddy -c "Add :get-task-allow bool $PROVISIONING_GET_TASK_ALLOW" "$ENTITLEMENTS"
/usr/libexec/PlistBuddy -c "Add :keychain-access-groups array" "$ENTITLEMENTS"
/usr/libexec/PlistBuddy -c "Add :keychain-access-groups:0 string $APPLICATION_IDENTIFIER_PREFIX.$BUNDLE_IDENTIFIER" "$ENTITLEMENTS"
if [ $APS_ENVIRONMENT ]; then
    echo "Setting aps-environment=$APS_ENVIRONMENT" 
    /usr/libexec/PlistBuddy -c "Add :aps-environment string $APS_ENVIRONMENT" "$ENTITLEMENTS"
fi
if [ $BETA_REPORTS ]; then
    echo "Setting beta-reports-active=$BETA_REPORTS" 
    /usr/libexec/PlistBuddy -c "Add :beta-reports-active bool $BETA_REPORTS" "$ENTITLEMENTS"
fi

# Apple Sign-In
#/usr/libexec/PlistBuddy -c "Add :com.apple.developer.applesignin array" "$ENTITLEMENTS"
#/usr/libexec/PlistBuddy -c "Add :com.apple.developer.applesignin:0 string Default" "$ENTITLEMENTS"

cp "$ENTITLEMENTS" "$WORKING_DIR/Payload/$APP_NAME/archived-expanded-entitlements.xcent"

#####################################
echo "Sign Frameworks" 

function sign_framework() {
    FRAMEWORK=$1.framework
    if [ -d "$WORKING_DIR/Payload/$APP_NAME/Frameworks/$FRAMEWORK" ];
    then
        codesign --force --sign "$SIGNING_IDENTITY" --verbose "$WORKING_DIR/Payload/$APP_NAME/Frameworks/$FRAMEWORK"
    fi
}


sign_framework FBSDKCoreKit
sign_framework FBSDKLoginKit
sign_framework FBSDKShareKit




#####################################
echo "Sign Application"
codesign --force --entitlements "$ENTITLEMENTS" --sign "$SIGNING_IDENTITY" "$WORKING_DIR/Payload/$APP_NAME" --verbose
codesign --verify --verbose --no-strict "$WORKING_DIR/Payload/$APP_NAME"

OUTPUT_IPA="$OUTPUT/"$IPA_NAME"_resigned.ipa"
cd $WORKING_DIR
zip -q --symlinks --recurse-paths "../.tmp_output.ipa" .
cd ..
mv ".tmp_output.ipa" "$OUTPUT_IPA"


# Cleanup
rm -Rf "$WORKING_DIR"
rm -f "$ENTITLEMENTS" 
rm -f "$WORKING_PROFILE_PLIST"
rm -f "$WORKING_PROFILE"
```