
## Extension IDs

The following should be added to your `extensions` node in your application descriptor to identify all the required ANEs in your application:

```xml
<extensions>
    <extensionID>com.distriqt.Speech</extensionID>
	<extensionID>com.distriqt.Core</extensionID>
</extensions>
```



## iOS 


### Info Additions 


The following additions are for the `InfoAdditions` node of the iPhone section in your application descriptor:

```xml
<iPhone>
	<InfoAdditions><![CDATA[

		<!-- OTHER ADDITIONS -->

		<key>NSSpeechRecognitionUsageDescription</key>
		<string>Speech Recognition Usage Description</string>

		<key>NSMicrophoneUsageDescription</key>
		<string>Microphone is required to record audio</string>

		<key>MinimumOSVersion</key>
		<string>11.0</string>

	]]></InfoAdditions>
</iPhone>
```




