
:::info 
Note: All of the commands below should be run in a terminal / command prompt in the root directory of your application, generally the level above your source directory.
:::

import SetupAPM from '../../../_includes/apm/setup-apm.mdx'

<SetupAPM />


### Install the extension 

Install the extension by running: 

```
apm install com.distriqt.facebook.Login
```

This will download and install the extension, required assets, and all dependencies.

Once complete `apm` will have created something like the following file structure: 

```
.
|____ assets
| |____ ios 
| | |____ Frameworks
| | | |____ [dynamic frameworks]
|____ ane
| |____ com.distriqt.facebook.Login.ane		# Facebook Login extension
| |____ com.distriqt.facebook.Core.ane		# Facebook Core extension
| |____ [dependencies]
|____ apm_packages							# cache directory - ignore
|____ project.apm							# apm project file
```

- Add the `ane` directory to your IDE. *See the tutorials located [here](/docs/tutorials/getting-started) on adding an extension to your IDE.*

- You will have an `assets` directory that contains required assets for the installed extensions. You must add the `assets/ios` folder to the root of your iOS application package. (The `ios` folder contains a `Frameworks` folder with the required iOS dynamic frameworks). 

:::info
We suggest you use the locations directly in your builds rather than copying the files elsewhere. The reason for this is if you ever go to update the extensions using `apm` that these updates will be pulled into your build automatically.
:::


- You will need to set some configuration items such as the Facebook application identifier. If you installed `com.distriqt.facebook.Core` already you would have set these configuration values then.  If not, call the following to step through the configuration values:

```
apm project config set com.distriqt.facebook.Core
```

- You will need to set the iOS App ID Prefix or "bundle id" for your application. This will be a unique ten character string and you can find it in the developer center in the details for your App ID. To set this value call:

```
apm project config set com.distriqt.facebook.Login
```


