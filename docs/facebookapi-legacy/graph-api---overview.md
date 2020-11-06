---
title: Graph API - Overview
sidebar_label: Graph API - Overview
---

:::caution
This is the legacy extension documentation. Find the new documentation [here](../facebookapi/)
:::

## Graph API

The Graph API is the primary way to get data out of, and put date into Facebook's platform. 
It's a low-level HTTP-based API that you can use to programmatically query data, post new 
stories, manage ads, upload photos, and perform a variety of other tasks that an app might 
implement.


### The Basics

The Graph API is named after the idea of a 'social graph' - a representation of the information on Facebook composed of:

- nodes - basically "things" such as a User, a Photo, a Page, a Comment
- edges - the connections between those "things", such as a Page's Photos, or a Photo's Comments
- fields - info about those "things", such as a person's birthday, or the name of a Page

The Graph API is HTTP-based, so it works with any language that has an HTTP library, 
such as cURL and urllib. We'll explain a bit more about what you can do with this in 
the section below, but it means you can also use the Graph API directly in your browser, 
for example a Graph API request is equivalent to:

```
GET graph.facebook.com
  /facebook/picture?
    redirect=false
```

Most Graph API requests require the use of access tokens, which your app can generate by implementing Facebook Login.

- [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api/)


The implementation in this extension will help you construct these graph queries, however
it will still involve knowledge of the API.


### Load the Graph API Explorer

The easiest way to understand the Graph API is to use it with the Graph API Explorer, 
a low-level tool you can use to query, add and remove data. It's a very handy resource 
to have at your fingertips while you integrate with Facebook. 

So your next step is to go to the [Graph API Explorer](https://developers.facebook.com/tools/explorer).


### Further Information

- [Graph API Documentation](https://developers.facebook.com/docs/graph-api)
