---
title: Auth - Provider - Microsoft
sidebar_label: Microsoft
---

# Authenticate Using Microsoft

You can let your users authenticate with Firebase using OAuth providers like Microsoft Azure Active Directory by integrating web-based generic OAuth Login into your app using the Firebase SDK to carry out the end to end sign-in flow.



## Before you begin

To sign in users using Microsoft accounts (Azure Active Directory and personal Microsoft accounts), you must first enable Microsoft as a sign-in provider for your Firebase project:

1. Add Firebase to your project.
2. In the [Firebase console](https://console.firebase.google.com/), open the Auth section.
3. On the Sign in method tab, enable the Microsoft provider.
4. Add the Client ID and Client Secret from that provider's developer console to the provider configuration:
  - To register a Microsoft OAuth client, follow the instructions in [Quickstart: Register an app with the Azure Active Directory v2.0 endpoint](https://docs.microsoft.com/en-us/azure/active-directory/develop/quickstart-v2-register-an-app). Note that this endpoint supports sign-in using Microsoft personal accounts as well as Azure Active Directory accounts. [Learn more](https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-overview) about Azure Active Directory v2.0.
  - When registering apps with these providers, be sure to register the `*.firebaseapp.com` domain for your project as the redirect domain for your app.
5. Click Save.
6. If you haven't yet specified your app's SHA-1 fingerprint, do so from the [Settings page](https://console.firebase.google.com/project/_/settings/general/) of the Firebase console. Refer to [Authenticating Your Client](https://developers.google.com/android/guides/client-auth) for details on how to get your app's SHA-1 fingerprint.





## Handle the sign-in flow with the Firebase SDK

If you are building an Android app, the easiest way to authenticate your users with Firebase using their Microsoft accounts is to handle the entire sign-in flow with the Firebase SDK.

To handle the sign-in flow with the Firebase Android SDK, follow these steps:

1. Construct an instance of an `OAuthProvider` with the provider ID `microsoft.com`.

```actionscript
var provider:OAuthProvider = new OAuthProvider( "microsoft.com" );
```


2. **Optional**: Specify additional custom OAuth parameters that you want to send with the OAuth request.

```actionscript
// Force re-consent.
provider.addCustomParameter("prompt", "consent");

// Target specific email with login hint.
provider.addCustomParameter("login_hint", "user@firstadd.onmicrosoft.com");
```

For the parameters Microsoft supports, see the [Microsoft OAuth documentation](https://docs.microsoft.com/en-us/azure/active-directory/develop/v1-protocols-oauth-code). Note that you can't pass Firebase-required parameters with `setCustomParameters()`. These parameters are client_id, response_type, redirect_uri, state, scope and response_mode.

To allow only users from a particular Azure AD tenant to sign into the application, either the friendly domain name of the Azure AD tenant or the tenant's GUID identifier can be used. This can be done by specifying the "tenant" field in the custom parameters object.

```actionscript
// Optional "tenant" parameter in case you are using an Azure AD tenant.
// eg. '8eaef023-2b34-4da1-9baa-8bc8c9d6a490' or 'contoso.onmicrosoft.com'
// or "common" for tenant-independent tokens.
// The default value is "common".
provider.addCustomParameter("tenant", "TENANT_ID");
```

3. **Optional**: Specify additional OAuth 2.0 scopes beyond basic profile that you want to request from the authentication provider.

```actionscript
provider.setScopes([ "mail.read", "calendars.read" ]);
```

To learn more, refer to the [Microsoft permissions and consent documentation](https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-permissions-and-consent).


4. Authenticate with Firebase using the OAuth provider object by calling `startSignInWithProvider` and awaiting the `FirebaseAuthEvent.SIGNIN_WITH_PROVIDER_COMPLETE`. Note that unlike other FirebaseAuth operations, this will take control of your UI by opening a Custom Chrome Tab. 



```actionscript
FirebaseAuth.service.startSignInWithProvider( provider );
```

This completes with the `FirebaseAuthEvent.SIGNIN_WITH_PROVIDER_COMPLETE` event:


```actionscript
FirebaseAuth.service.addEventListener(
        FirebaseAuthEvent.SIGNIN_WITH_PROVIDER_COMPLETE,
        startSignInWithProvider_completeHandler
);

FirebaseAuth.service.startSignInWithProvider( provider );

function startSignInWithProvider_completeHandler( event:FirebaseAuthEvent ):void
{
    trace( "startSignInWithProvider_completeHandler():complete:" + event.success );
}
```



## Next Steps

Once you have completed the authentication with Firebase you should expect the normal `FirebaseAuthEvent.AUTHSTATE_CHANGED` event indicating that a user was authenticated and then you will be able to retrieve the user's details using the standard `getCurrentUser()` where one of the providers will be the Microsoft details.

```actionscript
var user:FirebaseUser = FirebaseAuth.service.getCurrentUser();
if (user != null)
{
    log( "identifier:  " + user.identifier );
    log( "displayName: " + user.displayName );
    log( "email:       " + user.email );
    
    for each (var info:UserInfo in user.providers)
    {
        log( "------------------" );
        log( "\tprovider:    " + info.providerId );
        log( "\tidentifier:  " + info.identifier );
        log( "\tdisplayName: " + info.displayName );
        log( "\temail:       " + info.email );
        log( "\tphone:       " + info.phoneNumber );
    }
}
```

Unlike other providers supported by Firebase Auth, Microsoft does not provide a photo URL and instead, the binary data for a profile photo has to be requested via Microsoft Graph API.






