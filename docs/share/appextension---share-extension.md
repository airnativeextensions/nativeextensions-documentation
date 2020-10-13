---
title: AppExtension - Share Extension
sidebar_label: AppExtension - Share Extension
---

## Share Extension Functionality


TODO::


Some code for your main App Extension file:

Your view controller should look something like the following to start:

```objc
@interface ShareViewController ()

@end

@implementation ShareViewController

- (BOOL)isContentValid {
    // Do validation of contentText and/or NSExtensionContext attachments here
    return YES;
}

- (void)didSelectPost {
    // This is called after the user selects Post. Do the upload of contentText and/or NSExtensionContext attachments.
    
    // Inform the host that we're done, so it un-blocks its UI. Note: Alternatively you could call super's -didSelectPost, which will similarly complete the extension context.
    [self.extensionContext completeRequestReturningItems:@[] completionHandler:nil];
}

- (NSArray *)configurationItems {
    // To add configuration options via table cells at the bottom of the sheet, return an array of SLComposeSheetConfigurationItem here.
    return @[];
}

@end
```

This is just a rough dump of some code I was playing with to get a url to share 

```objc
@implementation ShareViewController
{
	NSUInteger _itemCount;
	NSString* _invokeArgs;
}


- (BOOL) isContentValid
{
	// Do validation of contentText and/or NSExtensionContext attachments here
	return YES;
}

- (void) didSelectPost
{
	// This is called after the user selects Post. Do the upload of contentText and/or NSExtensionContext attachments.
	NSLog( @"distriqt:SHAREEXTENSION:didSelectPost" );
	
	NSLog( @"distriqt:SHAREEXTENSION:%@", self.contentText );
	
	NSExtensionItem* item = self.extensionContext.inputItems.firstObject;

	_invokeArgs = NULL;
	_itemCount = item.attachments.count;
	
	for (NSItemProvider* itemProvider in item.attachments)
	{
		if ([itemProvider hasItemConformingToTypeIdentifier: (NSString*)kUTTypeURL])
		{
			NSLog( @"distriqt:SHAREEXTENSION:item is url" );
			[itemProvider loadItemForTypeIdentifier: (NSString*)kUTTypeURL
											options: nil
								  completionHandler:^(id<NSSecureCoding>  _Nullable item, NSError * _Null_unspecified error)
			{
				NSURL* url = (NSURL*)item;
				NSLog( @"distriqt:SHAREEXTENSION:loaded:%@", url );
				if ([url.absoluteString rangeOfString: @"youtube"].location == NSNotFound)
				{
					
				}
				else
				{
					
				}
				[self invokeApp: url.absoluteString];
			}];
		}
		else if ([itemProvider hasItemConformingToTypeIdentifier: (NSString*)kUTTypeImage])
		{
			NSLog( @"distriqt:SHAREEXTENSION:item is image" );
			[itemProvider loadItemForTypeIdentifier: (NSString*)kUTTypeImage
											options: nil
								  completionHandler:^(id<NSSecureCoding>  _Nullable item, NSError * _Null_unspecified error)
			{
				[self invokeApp: @""];
			}];
		}
	}

}


- (NSArray *) configurationItems
{
	// To add configuration options via table cells at the bottom of the sheet, return an array of SLComposeSheetConfigurationItem here.
	return @[];
}


- (void) invokeApp: (NSString *)invokeArgs
{
	// Prepare the URL request
	// this will use the custom url scheme of your app
	// and the paths to the photos you want to share:
	NSString * urlString = [NSString stringWithFormat: @"%@://%@", @"distriqt-test", ( NULL == invokeArgs ? @"" : invokeArgs ) ];
	NSURL * url = [NSURL URLWithString: urlString];
	
	NSString *className = @"UIApplication";
	if (NSClassFromString( className ))
	{
		id object = [ NSClassFromString(className) performSelector: @selector(sharedApplication) ];
		[object performSelector: @selector(openURL:) withObject: url];
	}
	
	// Now let the host app know we are done, so that it unblocks its UI:
	[super didSelectPost];
}

@end
```



This code uses a custom url scheme to launch the application so you'll need to add the following to your InfoAdditions in your application descriptor:

```xml
	<key>CFBundleURLTypes</key>
	<array>
		<dict>
			<key>CFBundleURLSchemes</key>
			<array>
				<string>distriqt-test</string>
			</array>
		</dict>
	</array>
```














