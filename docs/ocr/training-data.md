---
title: Training Data
sidebar_label: Training Data
---

You will need to provide a trained data file for a language. Trained data files can be found in the [Tesseract Tessdata Repository](https://github.com/tesseract-ocr/tessdata).

Currently this extension supports v4 of the language data which can be found in github in the below release:

https://github.com/tesseract-ocr/tessdata/releases/tag/4.1.0


You need to provide the files for the languages you intend on scanning for. The extension will search for the `LANG.traineddata` language file in the `tessdata` directory. 

You should make sure that this `tessdata` directory is contained at the root (top level) of your AIR application. 


For example, specifying `eng+ita` will search for `eng.traineddata` and `ita.traineddata`. 

```
.
|___ tessdata
  |____ eng.traineddata
  |____ ita.traineddata
```

You specify the languages to use in the `OCROptions` instance:

```actionscript
var options:OCROptions = new OCROptions();
options.language = "eng+ita";

OCR.service.recognise( bitmapData, options );
```

By default, `language` is set to `eng`.


:::note Android
On Android you can specify a different location for the `tessdata` directory by changing the `OCROptions.dataPath` property to point to an alternative location. However we suggest using the same location as iOS to keep your builds inline. 
:::
