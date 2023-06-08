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


