---
title: Feedback Generators
sidebar_label: Feedback Generators
---

Haptic feedback provides a tactile response, such as a tap, that draws attention and reinforces both actions and events. While many system-provided interface elements (for example, pickers, switches, and sliders) automatically provide haptic feedback, you can use feedback generators to add your own feedback to custom views and controls.

When providing feedback:

- Always use feedback for its intended purpose. Don’t select a haptic because of the way it feels.
- The source of the feedback must be clear to the user. For example, the feedback must match a visual change in the user interface, or must be in response to a user action. Feedback should never come as a surprise.
- Don’t overuse feedback. Overuse can cause confusion and diminish the feedback’s significance.



## Create a Feedback Generator

To create a feedback generator you call the `createFeedbackGenerator()` function and specify the type of the feedback this generator will be used for. This function will return an instance of a `FeedbackGenerator` which you can then use to perform feedback.

For example, to create an impact feedback generator:

```actionscript title="AIR"
var generator:FeedbackGenerator = Vibration.service.createFeedbackGenerator( FeedbackGeneratorType.IMPACT );
```


```csharp title="Unity"
FeedbackGenerator generator = Vibration.Instance.CreateFeedbackGenerator( FeedbackGeneratorType.IMPACT );
```



## Perform Feedback

Once you have created your generator, performing feedback is a simple matter of calling the `performFeedback` function:

```actionscript title="AIR"
generator.performFeedback();
```

```csharp title="Unity"
generator.PerformFeedback();
```

>
> Note: calling these methods does not play haptics directly. Instead, it informs the system of the event.
> The system then determines whether to play the haptics based on the device, the application’s state, the amount of battery power remaining, and other factors.
>
> On Android this will additionally depend on whether the user has disabled haptic feedback in the device settings.
>





## Prepare

If you are attempting to time the feedback more precisely, for example, to align with sounds, you should use the `prepare` function a short time before requiring feedback to ensure the hardware is in a state ready to provide feedback. 

This is currently mainly required on iOS, however it is intended to perform the same operation on Android so you should use it in the same places on all platfroms.

#### iOS Documentation

> 
> When you call this method, the generator is placed into a prepared state for a short period of time. While the generator is prepared, you can trigger feedback with lower latency.
>
> Think about when you can best prepare your generators. Call prepare() before the event that triggers feedback. The system needs time to prepare the Taptic Engine for minimal latency. Calling prepare() and then immediately triggering feedback (without any time in between) does not improve latency.
> 
> To conserve power, the Taptic Engine returns to an idle state after any of the following events:
> - You trigger feedback on the generator.
> - A short period of time passes (typically seconds).
> - The generator is deallocated.
> 
> After feedback is triggered, the Taptic Engine returns to its idle state. If you might trigger additional feedback within the next few seconds, immediately call prepare() to keep the Taptic Engine in the prepared state.
> 
> You can also extend the prepared state by repeatedly calling the prepare() method. However, if you continue calling prepare() without ever triggering feedback, the system may eventually place the Taptic Engine back in an idle state and ignore any further prepare() calls until after you trigger feedback at least once.
> 
> 


To prepare your generator simply call the `prepare()` function:

```actionscript title="AIR"
generator.prepare();
```

```csharp title="Unity"
generator.Prepare();
```

