


:::info 
Note: All of the commands below should be run in a terminal / command prompt in the root directory of your application, generally the level above your source directory.
:::

import SetupAPM from '../../../_includes/apm/setup-apm.mdx'

<SetupAPM />


### Install the extension 

Install the extension by running: 

```
apm install com.distriqt.PushNotifications-Amazon
```

This will download and install the extension, required assets, and all dependencies.

Once complete `apm` will have created something like the following file structure: 

```
.
|____ ane
| |____ com.distriqt.PushNotifications.Amazon.ane	# PushNotifications extension
| |____ [dependencies]
|____ apm_packages									# cache directory - ignore
|____ project.apm									# apm project file
```

- Add the `ane` directory to your IDE. *See the tutorials located [here](/docs/tutorials/getting-started) on adding an extension to your IDE.*

:::info
We suggest you use the locations directly in your builds (rather than copying the files elsewhere) so that updates with `apm` will be pulled automatically into your build.
:::


- You must set a few pieces of configuration information for APNS. This will allow `apm` to automatically insert them into the correct position in your application descriptor. This includes:

	- `bundleSeedId`: Bundle Seed Id (or App ID Prefix) for your iOS application
	- `apsEnvironment`: `production` for release builds and `development` for development builds
	- `getTaskAllow`: `false` for release builds and `true` for development builds

You can call the following to step through the all the configuration values for this extension:

```
apm project config set com.distriqt.PushNotifications
```

:::note Build Types
We suggest creating a [build type](https://github.com/airsdk/apm/wiki/Usage-ProjectsAndPackages#build-types) to allow you to easily switch between the production and development configurations. To do this run the following additional commands (assuming you setup the main configuration for production): 

```
apm -b development project config set apsEnvironment development
apm -b development project config set getTaskAllow true
```

This will set the values of those properties to be different for the "development" build type. 
:::


