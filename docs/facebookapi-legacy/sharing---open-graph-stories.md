---
title: Sharing - Open Graph Stories
sidebar_label: Sharing - Open Graph Stories
---

:::caution
This is the legacy extension documentation. Find the new documentation [here](../facebookapi/)
:::

Available in v5.5

## Open Graph Stories

With Open Graph people can share stories from your app to Facebook through a structured, strongly typed API.

When people engage with these stories they can go to your app or if they don't have your app installed, to your app's App Store page. This drives engagement and distribution for your app.

There are two ways to publish an Open Graph story:

- Using the Share dialog
- Using your own custom interface using the Graph API

The Share dialog lets people publish stories from your app without Facebook Login or the publish_actions permission.

The Share dialog does this with a fast app-switch to the native Facebook for Android app installed in the device. Once a story is published, control returns to your app.



### Creating Open Graph Stories

Open Graph stories are made up of a verb, or action and noun, known as object. To create a story, you need to define the action and object for your app's content.


To demonstrate the concepts we will use an example of a story about "reading a book".

Create an object with the object type `books.book` and set the properties on the object:

```actionscript
var shareOpenGraphObject:Object = new ShareOpenGraphObjectBuilder()
    .putString( "og:type", "books.book" )
    .putString( "og:title", "A Game of Thrones" )
    .putString( "og:description", "In the frozen wastes to the north of Winterfell, sinister and supernatural forces are mustering." )
    .putString( "books:isbn", "0-553-57340-3" )
    .build();
```

Then create an action and link the object to the action.

```actionscript
var shareOpenGraphAction:Object = new ShareOpenGraphActionBuilder()
    .setActionType( "books.reads" )
    .putObject( "book", shareOpenGraphObject )
    .build();
```

Finally, create the content model to represent the Open Graph story.

```actionscript
var openGraphContent:Object = new ShareOpenGraphContentBuilder()
    .setPreviewPropertyName("book")
    .setAction( shareOpenGraphAction )
    .build();
```

>
> All objects and action types in your code must be lowercase. All property names require namespaces.
>



### Show the Share Dialog

Present the Share dialog by using the show method on ShareDialog.

```actionscript
FacebookAPI.service.shareDialog.show( openGraphContent );
```

In past versions of the SDK for Android, your app had to check for a native, installed Facebook app before it could open the Share Dialog. If the person didn't have the app installed, you had to provide your own code to call a fallback dialog.

Now the SDK automatically checks for the native Facebook app. If it isn't installed the Web Share dialog launches as a fallback.




