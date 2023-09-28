---
title: Querying Data
sidebar_label: Querying Data
---

To query data you will create a `StatisticsQuery` and then pass it to the `execute()` method. This will query the data specified and when complete call a callback function with the result.

```actionscript
var query:StatisticQuery = ...;

Health.instance.execute( query, callback );
```

The `callback` function should be of the form:

```actionscript
function( result:HealthQueryResult, error:Error ):void
{
    // Process query result
}
```

The `HealthQueryResult` contains the result of the query including an array of `Statistic` objects in the `result.statistics` parameter. If an error occurred then the `error` parameter will be non-null and contain the details of the error.


For example:

```actionscript
var now:Date = new Date();
var startDate:Date = new Date( 2023, 0, 1 );

var stepQuery:StatisticsQuery = new StatisticsQuery( HealthType.STEP_COUNT )
        .withStartDate( startDate )
        .withEndDate( now );

Health.instance.execute(
        stepQuery,
        function ( result:HealthQueryResult, error:Error ):void
        {
            if (error != null)
            {
                trace( "ERROR: " + error.message );
                return;
            }
            // result will contain query data
            for each (var stat:Statistic in result.statistics)
            {
                trace( stat.startDate.toString() + "::" + stat.sum );
            }
        }
);
```



## Aggregating results

You can get the results aggregated into time intervals by calling the `withInterval()` method on the `StatisticsQuery`.

For example to group the results into daily totals:

```actionscript
var stepQuery:StatisticsQuery = new StatisticsQuery( HealthType.STEP_COUNT )
        .withStartDate( startDate )
        .withEndDate( now )
        .withInterval( 1, TimeUnit.DAYS );
```

This can be useful when you are displaying results in a particular format to a user.




## Manual User Entries

Filtering out entries that have been manually entered by the user can be helpful in certain situations. To do this, call the `filterManualDataEntries()` method on the `StatisticsQuery`.

For example:

```actionscript
var stepQuery:StatisticsQuery = new StatisticsQuery( HealthType.STEP_COUNT )
        .withStartDate( startDate )
        .withEndDate( now )
        .filterManualDataEntries();
```


:::caution
Filtering data entries will override aggregation requests on Android, resulting in a query that returns individual samples. Apple's HealthKit seems to have no issues with this. 

**Fit** 

With the Google FIT API service the data records are queried within the time frame and then any with a data source set to `user_input` are removed.
This was impossible when aggregated as the sources were combined together.


**HealthConnect**

Currently Health Connect seems to be inconsistent with filtering results. Similar to Google Fit the samples must be queried without aggregation to get access to the data origins, however the fields don't seem to be correctly set by certain applications so the results may be inconsistent. 
:::

