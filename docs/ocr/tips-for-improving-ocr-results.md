---
title: Tips for Improving OCR Results
sidebar_label: Tips for Improving OCR Results
---


Tesseract is a library for performing optical character recognition, but it's important to know 
that Tesseract performs OCR best when it is given a preprocessed image that is ideally crystal 
clear black text on a pure white background.


The Tesseract library has a Wiki page on some processes that will improve the recognition results 
here: https://github.com/tesseract-ocr/tesseract/wiki/ImproveQuality


The key points for optimal recognition are:

- Use a decently scale image (> 300dpi)
- Use a black and white image
- Remove as much noise as possible
- Use a straight image (not skewed)
- Remove any borders
