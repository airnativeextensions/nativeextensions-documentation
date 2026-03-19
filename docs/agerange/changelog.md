### 2026.03.20 [v0.3.0]

```
feat(android): handle null values for user status both from return values and fake result (resolves https://github.com/airnativeextensions/ANE-AgeRange/issues/4)
feat(android): add ability to set fake error for testing errors (resolves https://github.com/airnativeextensions/ANE-AgeRange/issues/5)
feat(ios): add ability to set fake error for testing errors
feat(airpackage): setup correct dependencies and info for airpackage
```

### 2026.03.12 [v0.2.0]

```
This update implements v0.0.3 of the Play Age Signals API, which implements the `SELF_DECLARED` status and introduces a new error code `SDK_VERSION_OUTDATED`. 

The `SELF_DECLARED` status allows the API to distinguish between a user who has manually declared their age versus one who is VERIFIED (via official ID/Credit Card) or SUPERVISED (via Family Link). 

The new error code `SDK_VERSION_OUTDATED`, will require particular attention. When this error occurs, the API will not return any age signals. Your app should have a "graceful degradation" plan. 

For example, you could use this error code to trigger a fallback to an alternative method of age verification, such as asking the user to input their age or using a third-party age verification service. You could also use this error code to log the issue and monitor how often it occurs, which could help you identify if there are a significant number of users who are affected by this issue and prioritize updating the SDK in your app.

### Updates

feat(android): update play signals api to v0.0.3 (resolves https://github.com/airnativeextensions/ANE-AgeRange/issues/3) 
```

### 2026.01.14 [v0.1.0]

```
feat(amazon): implementation for the amazon app store user age verification sdk
feat: add initialise / isServiceSupported functionality to specify service for use 
```

### 2026.01.14 [v0.1.0]

```
feat(amazon): implementation for the amazon app store user age verification sdk
feat: add initialise / isServiceSupported functionality to specify service for use 
```

### 2025.12.22 [v0.0.4]

```
feat(ios): add isEligibleForAgeRange call to check if the user's region is affected by age range controls
```

### 2025.12.11 [v0.0.3]

```
feat(android): update play signals api to v0.0.2
```

### 2025.12.05 [v0.0.2]

```
This release adds the ability to test using the "fake" results and also implements and defines error codes associated with the common errors. 

### Updates 

feat(android): add error codes and fake result implementation for testing
feat(ios): add basic testing functionality to return fake result
fix(docs): correct issues with asdocs generation
```

### 2025.11.27 [v0.0.1]

```
initial beta release
```

