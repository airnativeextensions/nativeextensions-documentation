---
title: Setup Auth Server
sidebar_label: Setup Auth Server
---

## Setup Auth Server

When implementing Sign in with Apple on Android devices you need to setup a server that will receive the authorisation code and return data to the application.
This server application catches the user data posted by Apple and passes it to the extension. The extension will then use this information to further gather the identity token and user identifier.

The below is an NodeJS example (taken from https://github.com/johncodeos-blog/SignInWithAppleBackendServer) which works with our implementation of Sign In with Apple on Android.

This needs to be installed the server redirect url that you verified earlier and you should change the `/appleoauth` endpoint to match your needs. 

To correctly setup the application you will need to enter all the information you gathered earlier into the `.env` configuration file, including the filename of the key (`p8` file) that you created. You must upload this file to the server alongside this code making sure it's not publicly accessible.

If you wish to create your own version, you can use the logic in the below code.

`app.js`
```js
require('dotenv').config();

const express = require('express');
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const getClientSecret = () => {
        const time = new Date().getTime() / 1000; // Current time in seconds since Epoch
        const privateKey = fs.readFileSync(process.env.PRIVATE_KEY_FILE);
        const headers = {
                kid: process.env.KEY_ID,
                typ: undefined
        }
        const claims = {
                'iss': process.env.TEAM_ID,
                'iat': time, // The time the token was generated
                'exp': time + 86400 * 180, // Token expiration date
                'aud': 'https://appleid.apple.com',
                'sub': process.env.SERVICE_ID,
        }
        token = jwt.sign(claims, privateKey, {
                algorithm: 'ES256',
                header: headers
        });
        return token
}

app.post('/appleoauth', bodyParser.urlencoded({ extended: true }), (req, res) => {
        if (res.statusCode == 200) {
                var returnURL = "";
                var firstName = "";
                var middleName = "";
                var lastName = "";
                var email = "";
                if (req.body.hasOwnProperty('user')) {
                        const userdata = req.body.user;
                        const user = JSON.parse(userdata);
                        firstName = '&first_name=' + user.name['firstName'];
                        middleName = '&middle_name=' + user.name['middleName'];
                        lastName = '&last_name=' + user.name['lastName'];
                        email = '&email=' + user.email;
                }
                var code = '&code=' + req.body.code;
                var clientSecret = '&client_secret=' + getClientSecret();
                returnURL = '?success=true' + code + clientSecret + firstName + middleName + lastName + email;
                res.redirect(returnURL);
        } else {
                res.redirect('?success=false');
        }
})

var port = process.env.PORT;
app.listen(port, () => console.log(`Your app is listening on port ` + port + '.'))
```


`.env`
```
# Private Key .p8 file name
PRIVATE_KEY_FILE=YOUR_KEY_NAME.p8

# Key ID (Certificates, Identifiers & Profiles > Keys > Choose your app > Key ID)
KEY_ID=YYYYYYYYYY

# Team ID (Membership > Team ID)
TEAM_ID=XXXXXXXXXX

# Service ID (Certificates, Identifiers & Profiles > Identifiers > Change to Service IDs on the top right corner -> Choose your app -> Identifier)
SERVICE_ID=YOUR.SERVICE.IDENTIFIER

# The port to run the app
PORT=3000
```
