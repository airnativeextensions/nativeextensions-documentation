---
title: Add the Extension - macOS
sidebar_label: Add the Extension - macOS
---

## Requirements

Build and distribute a macOS AIR application with Apple Developer Program membership. The signing certificates have separate purposes:

- **Developer ID Application** signs the `.app`. It is required for distributing the application outside the Mac App Store and for notarization.
- **Developer ID Installer** signs a `.pkg` installer. It is only required when distributing a signed installer package; it does not sign the application itself.

Local notifications use `UNUserNotificationCenter` on macOS 10.14 and later. No notification-specific entitlement is required for local notifications. The `aps-environment` entitlement is only for remote push notifications.

## Create Certificates

1. Sign in to [Certificates, Identifiers & Profiles](https://developer.apple.com/account/resources/certificates/list) with the Apple Developer account that owns the application.
2. Choose **Certificates**, then select **Add** (`+`).
3. Create a **Developer ID Application** certificate. Create a certificate signing request with Keychain Access when prompted, download the certificate, and open it to add it to the login keychain.
4. Repeat the process for **Developer ID Installer** only if you will create a signed `.pkg` installer.

The application certificate is named `Developer ID Application: Company Name (TEAMID)`. The installer certificate is named `Developer ID Installer: Company Name (TEAMID)`.

## Configure Signing

Use the full certificate names as shown by `security find-identity` when invoking `adt`, `codesign`, `pkgbuild`, and `productbuild`. Replace the certificate names and paths in the commands below with your own values.

Use a stable AIR application `<id>` (for example, `com.example.product`) and do not change its signing team between builds. macOS associates notification authorization with the installed application's identity.

The AIR descriptor must target a supported macOS version:

```xml
<macOS>
	<InfoAdditions><![CDATA[
		<key>LSMinimumSystemVersion</key>
		<string>10.15</string>
	]]></InfoAdditions>
</macOS>
```

## Test a Signed App

Before packaging, prepare a directory containing the current AIR application descriptor, SWF, assets, and ANE files. The following commands use these placeholders:

- `AIR_HOME`: path to the AIR SDK
- `application.xml`: AIR application descriptor
- `build/MyApp.swf`: compiled application SWF
- `ane`: directory containing the ANE files
- `build/MyApp.app`: final application bundle

Create an AIR bundle. The initial `adt` signature must use your normal AIR code-signing certificate (PKCS#12 is shown below); the final signing step applies the Developer ID Application identity from the macOS keychain:

```sh
"$AIR_HOME/bin/adt" -package \
	-storetype PKCS12 \
	-keystore /path/to/air-signing-certificate.p12 \
	-storepass "your-air-certificate-password" \
	-target bundle \
	build/MyApp.unsigned.app \
	application.xml \
	-C build MyApp.swf \
	-extdir ane
```

Sign all embedded native frameworks before signing the outer AIR application:

```sh
find build/MyApp.unsigned.app/Contents/Frameworks -type d -name '*.framework' -prune -print0 |
	xargs -0 -n 1 codesign --force --sign "Developer ID Application: Company Name (TEAMID)" --options runtime --timestamp

"$AIR_HOME/bin/adt" -sign \
	-storetype KeychainStore \
	-alias "Developer ID Application: Company Name (TEAMID)" \
	-target bundle \
	build/MyApp.unsigned.app \
	build/MyApp.app
```

Request notification authorization only after the packaged app is running. Test the installed app, not ADL: this extension reports local notifications as unsupported when the host bundle identifier is `com.adobe.air.ADL`.

For a normal distribution test, complete the notarization process below before installing the app.

## Create and Notarize an Installer

Create a component package with `pkgbuild`, then produce the distributable installer with `productbuild`. Both commands sign with the Developer ID Installer certificate:

```sh
pkgbuild \
	--sign "Developer ID Installer: Company Name (TEAMID)" \
	--component build/MyApp.app \
	--install-location /Applications \
	build/MyApp-component.pkg

productbuild \
	--sign "Developer ID Installer: Company Name (TEAMID)" \
	--package-path build \
	--distribution config/macdist.xml \
	--resources . \
	build/MyApp.pkg
```

Before the first submission, save notarization credentials in the keychain. Use an app-specific password for the Apple ID, not the Apple ID password:

```sh
xcrun notarytool store-credentials "my-notary-profile" \
	--apple-id "developer@example.com" \
	--team-id "TEAMID" \
	--password "app-specific-password"
```

Submit and staple the final installer:

```sh
xcrun notarytool submit build/MyApp.pkg --keychain-profile "my-notary-profile" --wait
xcrun stapler staple build/MyApp.pkg
```

For direct `.app` distribution, archive the app with `ditto -c -k --keepParent`, submit that ZIP to `notarytool`, then staple the app.

## Troubleshooting and Advanced Checks

Use these commands only when signing, installation, or launch fails.

### Check Certificates

Confirm that macOS can find your certificates:

```sh
security find-identity -v -p codesigning
security find-identity -v -p basic
```

### Check the App Signature

Verify the final application and inspect the signing identity:

```sh
codesign --verify --deep --strict --verbose=2 build/MyApp.app
codesign -dvv build/MyApp.app
```

The output should identify your Developer ID Application certificate.

### Check Entitlements

Inspect the entitlements added to the final application:

```sh
codesign -d --entitlements :- build/MyApp.app
```

Do not include `get-task-allow` in a Developer ID distribution build. It is a debugging entitlement and must be removed from the macOS `Entitlements` section of the AIR application descriptor.

### Check Gatekeeper

Check whether Gatekeeper accepts a notarized app or installer:

```sh
spctl --assess --type execute --verbose=4 build/MyApp.app
spctl --assess --type install --verbose=4 build/MyApp.pkg
```

If the app is rejected as an unnotarized Developer ID app, submit it to Apple using `notarytool`, wait for acceptance, and staple the notarization ticket before testing it.

