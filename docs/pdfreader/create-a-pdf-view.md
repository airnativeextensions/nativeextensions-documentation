---
title: Create a PDF View
sidebar_label: Create a PDF View
---

A PDF View represents a viewer that loads and displays a specified PDF. 
To create a `PDFView` you use the `PDFReader.service.createView()` function 
and an instance of a `PDFViewBuilder`.

The builder allows you to easily construct the correct parameters to 
create the PDFView.

Once you create a view you can set the viewport and listen for view 
events (such as `SHOWN` and `HIDDEN`) and finally call show to present 
the view to the user, as shown in the example below:

```actionscript
var view:PDFView = PDFReader.service.createView( 
	new PDFViewBuilder()
		.setPath( "native/path/to/file.pdf" )
		.showDoneButton( true )
		.showTitle( true )
		.build()
	);
	
view.setViewport( 50, 100, 400, 500 );
view.addEventListener( PDFViewEvent.SHOWN, pdfView_shownHandler );
view.addEventListener( PDFViewEvent.HIDDEN, pdfView_hiddenHandler );

view.show();
```

```actionscript
private function pdfView_shownHandler( event:PDFViewEvent ):void
{
	trace( "view shown" );
}

private function pdfView_hiddenHandler( event:PDFViewEvent ):void
{
	trace( "view hidden" );
}
```