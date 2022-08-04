---
title: Packaging
sidebar_label: Packaging
---


In order to change the contents of your IPA after packaging, we need to extract the IPA, change the contents (in particular the `Info.plist` file) and then importantly package and **sign** the IPA again. 

If we don't correctly resign the application then it will be rejected by the AppStore (or when installing a debug IPA).


The `resign` script provided is designed to handle this process, (including extracting your IPA, updating the `Info.plist` and resigning the application).

>
> IMPORTANT: This script must be run on a macOS machine with Xcode installed and your signing certificate(s) installed into Keychain
>

Firstly, open the `resign` script. You will need to update the configuration parameters at the top of the script.


- `IPA`: The full path to your application
- `PROVISIONING_PROFILE`: The full path to your mobile provisioning profile 
- `SIGNING_IDENTITY`: The name of the signing identity

Optional:

- `INFO_PLIST`: The full path to your `Info.plist` if you don't place it alongside the script


The paths should be fairly self explanitory. However you get the signing identity string by running the following in a terminal and selecting the name of the appropriate certificate:

```
security find-identity -v -p codesigning
```

>
> IMPORTANT: You must ensure you are using the correct mobile provisioning profile and certificate. If you are testing a debug build make sure you are using a developer profile and certificate, and if you are publishing a release make sure you are using the distribution profile and certificate.
>

Once you have made these changes, run the script in a terminal:

```
./resign
```

This will produce an IPA alongside the script named: `APPNAME_resigned.ipa`

You can then use the IPA produced by the script to either upload to the app store or install on a device for debugging.




## `resign`

The below is the current `resign` script. You will find this script in the repository as well.

```shell
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

# 
INFO_PLIST="./Info.plist"

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

cp $INFO_PLIST "$WORKING_DIR/Payload/$APP_NAME/Info.plist"

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

# Uncomment these lines if you are using AppleSignIn
#/usr/libexec/PlistBuddy -c "Add :com.apple.developer.applesignin array" "$ENTITLEMENTS"
#/usr/libexec/PlistBuddy -c "Add :com.apple.developer.applesignin:0 string Default" "$ENTITLEMENTS"


#####################################
echo "Sign Frameworks"

find $WORKING_DIR/Payload/$APP_NAME/Frameworks/ -name "*.framework" -exec codesign --force --sign "$SIGNING_IDENTITY" --generate-entitlement-der {} \;


#####################################
echo "Sign Application"
codesign --force --entitlements "$ENTITLEMENTS" --sign "$SIGNING_IDENTITY" "$WORKING_DIR/Payload/$APP_NAME" --verbose

#codesign --verify --verbose --deep --no-strict "$WORKING_DIR/Payload/$APP_NAME"


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

#  ideviceinstaller -i "$OUTPUT_IPA"
```




