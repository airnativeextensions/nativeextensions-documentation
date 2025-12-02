---
title: Firestore - Perform simple and compound queries
sidebar_label: Perform simple and compound queries
---

Cloud Firestore provides powerful query functionality for specifying which documents you want to retrieve from a collection. These queries can also be used with either `query()` or `addSnapshotListener()`, as described in [Get Data](get-data.md) and [Get Realtime Updates](get-realtime-updates.md).


## Simple queries

The following query returns all cities with state `CA`:

```actionscript
// Create a reference to the cities collection
var citiesRef:CollectionReference = FirebaseFirestore.service.collection("cities");

// Create a query against the collection.
var query:Query = citiesRef.whereEqualTo("state", "CA");
```

The following query returns all the capital cities:


```actionscript
var query:Query = FirebaseFirestore.service.collection("cities").whereEqualTo("capital", true);
```

There are several variants of the `where...` method each take two parameters, a field to filter on and a value.

Some example filters:

```actionscript
citiesRef.whereEqualTo("state", "CA");
citiesRef.whereLessThan("population", 100000);
citiesRef.whereGreaterThanOrEqualTo("name", "San Francisco");
```


## Compound queries

You can also chain multiple `where...` methods to create more specific queries (logical AND). However, to combine the equality operator (`==`) with a range or array-contains clause ( `<`, `<=`, `>`, `>=`, or `array_contains`), make sure to create a [composite index](https://firebase.google.com/docs/firestore/query-data/indexing).


```actionscript
citiesRef.whereEqualTo("state", "CO").whereEqualTo("name", "Denver");
citiesRef.whereEqualTo("state", "CA").whereLessThan("population", 1000000);
```

You can only perform range comparisons (`<`, `<=`, `>`, `>=`) on a single field.

**Valid**: Range filters on only one field

```actionscript
citiesRef.whereGreaterThanOrEqualTo("state", "CA")
        .whereLessThanOrEqualTo("state", "IN");
citiesRef.whereEqualTo("state", "CA")
        .whereGreaterThan("population", 1000000);
```

**Invalid**: Range filters on different fields:

```actionscript
citiesRef.whereGreaterThanOrEqualTo("state", "CA").whereGreaterThan("population", 100000);
```


## OR queries

You can combine constraints with a logical OR. For example:

```actionscript
var query:Query = collection.where(
        Filter.or(
                Filter.equalTo( "capital", true),
                Filter.greaterThanOrEqualTo("population", 1000000)
));
```
  
Firestore uses your composite indexes to serve OR queries. If your indexes do not support the query, Firestore suggests additional indexes for your database.

You can combine OR queries with compound queries to filter on combinations of OR and AND operations. For example:

```actionscript
var query:Query = collection.where(
        Filter.and(
                Filter.equalTo("state", "CA"),
                Filter.or(
                        Filter.equalTo("capital", true),
                        Filter.greaterThanOrEqualTo("population", 1000000)
                )
        )
);
```


### Limitations

Note the following limitations for OR queries:

- Firestore limits a query to a maximum of 30 disjunctions based on the query's disjunctive normal form. You are more likely to reach this limit when performing an AND of multiple OR groups.
- You can't combine not-in with in, array-contains-any, or or in the same query.



## Query limitations

The following list summarizes Firestore query limitations:

- Firestore provides support for logical OR queries through the or, in, and array-contains-any operators. These queries are limited to 30 disjunctions based on the query's disjunctive normal form.
- You can use at most one `array-contains` clause per disjunction (`or` group). You can't combine `array-contains` with `array-contains-any` in the same disjunction.
- You can't combine `not-in` with `in`, `array-contains-any`, or `or` in the same query.
- Only a single `not-in` or `!=` is allowed per query.
- `not-in` supports up to 10 comparison values.
- The sum of filters, sort orders, and parent document path (1 for a subcollection, 0 for a root collection) in a query cannot exceed 100. This is calculated based on the disjunctive normal form of the query.
A query with an inequality filter on a field implies ordering by that field and filters for existence of that field.


- For a full description of limitations, see [Query limitations](https://cloud.google.com/firestore/docs/query-data/queries#query_limitations).

