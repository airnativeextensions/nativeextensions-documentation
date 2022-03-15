


:::info 
Note: All of the commands below should be run in a terminal / command prompt in the root directory of your application, generally the level above your source directory.
:::

**If you don't have an APM project setup, expand the guide below to setup an APM project before installing the extension.**

<details><summary>Setup APM</summary>
<p>

### Install APM

If you haven't installed `apm` follow the install guide on [airsdk.dev](https://airsdk.dev/docs/basics/install-apm).


### Setup an APM project 

You will need an APM project for your application.


There are many ways to do this and for more options see the [APM documentation](https://github.com/airsdk/apm/wiki/Usage-ProjectsAndPackages#initialise). Here we will just initialise a new empty project:

```
apm init
```

#### Check your github token

We use github to secure our extensions so you must have created a github personal access token and configured `apm` to use it. 

To do this create a token using this [guide from github](https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token) and then set it in your apm config using:

```
apm config set github_token ghp_XXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

If you don't do this correctly you may find the install will fail.

</p>
</details>


### Install the extension 

Install the extension by running: 

```
apm install com.distriqt.PushNotifications-OneSignal
```

This will download and install the extension, required assets, and all dependencies.

Once complete `apm` will have created something like the following file structure: 

```
.
|____ ane
| |____ com.distriqt.PushNotifications.OneSignal.ane	# PushNotifications extension
| |____ [dependencies]
|____ apm_packages										# cache directory - ignore
|____ project.apm										# apm project file
```

- Add the `ane` directory to your IDE. *See the tutorials located [here](/docs/tutorials/getting-started) on adding an extension to your IDE.*

:::info
We suggest you use the locations directly in your builds (rather than copying the files elsewhere) so that updates with `apm` will be pulled automatically into your build.
:::


- You must set a few pieces of configuration information for OneSignal. This will allow `apm` to automatically insert them into the correct position in your application descriptor. This includes:

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


