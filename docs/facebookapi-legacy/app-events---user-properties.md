---
title: App Events - User Properties
sidebar_label: App Events - User Properties
---

:::caution
This is the legacy extension documentation. Find the new documentation [here](../facebookapi/)
:::

## User Properties

App events allow you to measure user activity which, combined with Facebook Analytics, 
allows you to understand user behavior. One of the key features of Facebook Analytics is 
segments. Segments allow you to better understand your audience by analyzing the behavior 
and demographics of a group of people that you define.

Many businesses also want to create segments based on other things they know about their customers. For example, an airline might want to create a segment based on values from their customer relationship management (CRM) system, such as frequent flyer status or the year that a customer became a member of their frequent flyer program.

With user properties, businesses can use their own CRM data to understand and analyze behavior. You can create user properties directly in your app or by using our API.

>
> User IDs and user properties can't include any personally identifying information, such as people's names or email addresses.
>

### User ID 

By calling the setUserID function, you can assign an ID to a user of your app. For example, you could create a number that associates the user with information you collected when they installed your app. Typically, this is your identifier for the user in your own CRM or other back-end systems. The setUserID function is helpful if you expect to upload data from your app and use the API because it ensures that properties are attributed to the same user.

```actionscript
FacebookAPI.service.appEvents.setUserID( "user1234" );
```

The length of the user ID must be less than 100 characters.

When you set a user ID, this ID is stored on the user's device, and is included in app events logged from that device.




### Properties

Once you have called setUserID, then you can also create a table with custom fields for user properties, that you can update with custom values. For example, you could have a user property like "Customer Loyalty Status" with values like "Gold," "Silver," or "Bronze." This would allow you to see and segment analytics based on these values in Analytics.

```actionscript
FacebookAPI.service.appEvents.setUserProperties( 
	{
		test_prop: "test_value"
	});
```




### Further Information

More information can be found in the [Facebook documentation](https://developers.facebook.com/docs/analytics/properties)
