---
title: Training Data
sidebar_label: Training Data
---

You will need to provide a trained data file for a language. 

https://github.com/tesseract-ocr/tessdata


Currently this ANE supports v3 of the language data.

https://github.com/tesseract-ocr/tessdata/releases/tag/3.04.00


You need to provide the files for the languages you intend on scanning for. 
The extension will search for the `.traineddata` language file in the `tessdata` 
directory. For example, specifying `eng+ita` will search for `eng.traineddata` and
`ita.traineddata`. 

You should make sure that this `tessdata` directory is contained at the top level of 
your AIR application. 

On Android you can specify a different location for the `tessdata` directory if you
require however we suggest using the same location as iOS. 
