---
title: Capturing sessions
sidebar_label: Capturing sessions
---

BugSnag tracks the number of “sessions” that happen within your application. This allows you to compare stability scores between releases and helps you to understand the quality of your releases.

Sessions are captured and reported by default. This behavior can be disabled using the [`autoTrackSessions` configuration option](configuration#auto-track-sessions).



## Automatic tracking

BugSnag will automatically report a session each time the app is launched or enters the foreground after being in the background for at least 30 seconds.


## Manual session handling

If you want control over what is deemed a session, you can switch off automatic session tracking with the `autoTrackSessions` option, and manage the session lifecycle using `startSession()`, `pauseSession()` and `resumeSession()` on the Bugsnag client.

:::info
You should call these methods at the appropriate time in your application’s lifecycle when you wish to have an active session. Any errors which occur in your application outside of a session will still be reported to BugSnag but will not count towards your application’s stability score.
:::

### `startSession`


Starts a new session to which subsequent handled and unhandled events will be attributed to.

```actionscript
BugSnag.instance.startSession()
```

If there is already an active session, it will be replaced with a new one. Use `resumeSession()` if you only want to start a session when one doesn’t already exist.


### `pauseSession`

Prevents further events being attributed to the current session until the session is resumed or a new session is started.

```actionscript
BugSnag.instance.pauseSession()
```

This can be advantageous if, for example, you do not wish the stability score to include crashes in a background service.


### `resumeSession`

Resumes tracking events against the current session, if it was previously paused. If there is was no previous session, a new session is started. This method returns `true` if there was a session to resume or `false` if a new session was created.

```actionscript
if (BugSnag.instance.resumeSession())
{
    // Session was resumed
} 
else 
{
    // New session created
}
```

Sessions are stored in memory for the lifetime of the application process and are not persisted on disk. Therefore calling this method on app startup would start a new session, rather than continuing any previous session.

