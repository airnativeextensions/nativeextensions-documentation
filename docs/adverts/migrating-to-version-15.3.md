---
title: Migrating to version 15.3
sidebar_label: Migrating to version 15.3
---

Version 15.3 brings an important improvement to the initialisaton process of AdMob which should reduce the number of ANR (application not responding) issues.


If you are updating via `apm` then you should just need to update the extension and use apm to regenerate your application descriptor. 


If you are updating manually then you need to add the following flag to your manifest additions in your application descriptor:

```xml
...
  <application>
      ...
      <meta-data
          android:name="com.google.android.gms.ads.flag.OPTIMIZE_AD_LOADING"
          android:value="true"/>
  </application>
```
