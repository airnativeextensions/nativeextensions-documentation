---
title: User Information
sidebar_label: User Information
---


When your user is successfully signed in you will receive their information as part 
of the `SIGN_IN` event.

```actionscript
private function signInHandler( event:GoogleIdentityEvent ):void
{
	// event.user contains the GoogleUser instance
	// You should store this for reference in your application eg:
	_user = event.user;
}
```

The `GoogleUser` contains the user identifier, access to the authentication object 
and profile information:

- `userID` : The Google user ID
- `authentication`: The `GoogleAuthentication` object for the user
- `profile`: The `GoogleProfileData` object containing profile information




## Profile Data

The `GoogleProfileData` object contains personal details about the user that you can 
use to customise their experience in your application.

This includes:

- `name`: The user's display name
- `givenName`: The given name of the signed in user
- `familyName`: The family name of the signed in user
- `email`: The Google user's email
- `photoUrl`: The photo url of the signed in user



## Authentication Information

The `GoogleAuthentication` object contains tokens required to access other services 
acting on behalf of the user. 

This includes:

- `idToken`
- `refreshToken`
- `accessToken`

Each of these tokens has their different uses, which the services you are using will explain.
