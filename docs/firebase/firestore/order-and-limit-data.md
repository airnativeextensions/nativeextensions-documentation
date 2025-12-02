---
title: Firestore - Order and limit data
sidebar_label: Order and limit data
---

Cloud Firestore provides powerful query functionality for specifying which documents you want to retrieve from a collection. These queries can also be used with either `query()` or `addSnapshotListener()`, as described in [Get Data](get-data.md).

## Order and limit data

You can specify the sort order for your data using `orderBy()`, and you can limit the number of documents retrieved using `limit()`.

For example, you could query for the first 3 cities alphabetically with:

```actionscript
var query:Query = citiesRef
                    .orderBy( "name" )
                    .limit( 3 );
```

You could also sort in descending order to get the last 3 cities:

```actionscript
var query:Query = citiesRef
                    .orderBy( "name", QueryDirection.DESCENDING )
                    .limit( 3 );
```

You can also order by multiple fields. For example, if you wanted to order by state, and within each state order by population in descending order:


```actionscript
var query:Query = citiesRef
                    .orderBy( "state" )
                    .orderBy( "population", QueryDirection.DESCENDING );
```

You can combine `where()` filters with `orderBy()` and `limit()`. 

In the following example, the queries define a population threshold, sort by population in ascending order, and return only the first few results that exceed the threshold:

```actionscript
citiesRef
    .whereGreaterThan( "population", 100000 )
    .orderBy( "population" )
    .limit( 2 );
```

However, if you have a filter with a range comparison (`<`, `<=`, `>`, `>=`), your first ordering must be on the same field:

**Valid**: Range filter and orderBy on the same field

```actionscript
citiesRef
    .whereGreaterThan( "population", 100000 )
    .orderBy( "population" );
```

**Invalid**: Range filter and first orderBy on different fields

```actionscript
citiesRef
    .whereGreaterThan( "population", 100000 )
    .orderBy( "country" );
```


### Default order 

By default, a query retrieves all documents that satisfy the query in ascending order by document ID. 

You can alter this by using the predefined field path value: `FieldPath.documentId()` and passing it to the `orderBy()` method. For example:

```actionscript
var query:Query = citiesRef
                    .orderBy( FieldPath.documentId(), QueryDirection.DESCENDING );
```


