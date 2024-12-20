


:::info 
Note: All of the commands below should be run in a terminal / command prompt in the root directory of your application, generally the level above your source directory.
:::

import SetupAPM from '../../_includes/apm/setup-apm.mdx'

<SetupAPM />


### Install the extension 

Install the extension by running: 

```
apm install io.odeeo.OdeeoSDK
```

This will download and install the extension, required assets, and all dependencies.

Once complete `apm` will have created something like the following file structure: 

```
.
|____ ane
| |____ io.odeeo.OdeeoSDK.ane	# OdeeoSDK extension
| |____ [dependencies]
|____ apm_packages					# cache directory - ignore
|____ project.apm					# apm project file
```

- Add the `ane` directory to your IDE. *See the tutorials located [here](/docs/tutorials/getting-started) on adding an extension to your IDE.*

- You may have an `assets` directory that contains required assets for the installed extensions. 
You must add the files in the `assets/android` folder to the root of your Android application package and the `assets/ios` folder to the root of your iOS application package 
(contains the `Frameworks` folder with required dynamic frameworks). **If these folders don't exist there are no required assets for that platform.**


:::info
We suggest you use the locations directly in your builds rather than copying the files elsewhere. The reason for this is if you ever go to update the extensions using `apm` that these updates will be pulled into your build automatically.
:::


- You will need to set the configuration values for usage in the extension. Call the following to step through the configuration values for this extension:

```
apm project config set io.odeeo.OdeeoSDK
```

