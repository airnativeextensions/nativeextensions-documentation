---
title: Pages
sidebar_label: Pages
---

You can get information about the pages in the current document:

- `currentPage` returns the current page displayed
- `totalPages` returns the number of pages in the loaded document

For example the following will trace out something like, `Page 1 / 8`:

```
trace( "Page " + view.currentPage + " / " + view.totalPages );
```


### Set Current Page

To change the current page displayed you can use the `setPage` function, eg to change to page 4:

```actionscript
view.setPage( 4 );
```






