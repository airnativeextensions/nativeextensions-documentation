---
title: Cancel Notifications
sidebar_label: Cancel Notifications
---

Once a notification has been created you may wish to cancel it, especially in the case of 
recurring or delayed notifications that are no longer required.

## Cancel All Notifications

The simplest and most destructive call is `cancelAll`. This cancels all delayed, recurring 
and displayed notifications.

```actionscript
Notifications.service.cancelAll();
```


## Cancel by ID

More than likely the above won't suit your needs regularly. So instead you can cancel a 
notification by ID. 

This ID is the notification identifier that you used to create your notification eg:

```actionscript
Notifications.service.notify(
	new NotificationBuilder()
		.setId( id )
		...
```

You can use that `id` to then cancel the notification, by calling `cancel`


```actionscript
Notifications.service.cancel( id );
```

>
> Note:
> 
> On iOS < 10, this function can only cancel delayed or recurring notifications that 
> are yet to be delivered. Any notifications that have already been displayed in the 
> notification area are not removed.
>
> With iOS < 10 they can only be removed from the notification area either by the
> user or by calling `cancelAll`.
>




