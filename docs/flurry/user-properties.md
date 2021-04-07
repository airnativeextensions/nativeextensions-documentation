---
title: User Properties
sidebar_label: User Properties
---

User Properties allow you to label your users based on preferences, behaviors or attributes unique to your app.

:::info
For details on the different types and using User Properties see the [official documentation](https://developer.yahoo.com/flurry/docs/analytics/userproperties/).
:::


## Client Side API

The user properties state is on the server, and the SDK is a pass thru agent for client state change requests. There are 4 groups of operations (**set**, **add**, **remove**, **flag**).

- For (**set**, **add**), the fist parameter is a key, and the second parameter is a value.
- For (**remove**), the first parameter is a key, and the second parameter is a value, or omitted to remove all values.
- For (**flag**), the first parameter is a key and there is no second parameter.


#### Set

Sets and replaces (if any exist) the value(s) for the property.

```actionscript
Flurry.service.analytics.userProperties.setValue( "key", "value" );
```

#### Add

Adds a User Property value(s). Adding values already included in the state has no effect and does not error.

```actionscript
Flurry.service.analytics.userProperties.addValue( "key", "value" );
```

#### Remove

Removes a specific User Property value(s) or removes all values. Removing values not already included in the state has no effect and does not error.

```actionscript
// Removes the value from the property
Flurry.service.analytics.userProperties.removeValue( "key", "value" );
```

or remove all values from the property:

```actionscript
Flurry.service.analytics.userProperties.remove( "key" );
```

#### Flag

Exactly set, or replace if any previously exists, any value for the property to a single true state Implies that value is boolean and should only be flagged and cleared.

```actionscript
// Sets key to true
Flurry.service.analytics.userProperties.flag( "key" );
```
