### 2026.10.07 [v0.2.1]

```
fix(airpackage): correct package requirements
```

### 2026.10.07 [v0.2.0]

```
Windows now uses an improved unique-ID and storage approach, with its implementation moved to the core libraries for more consistent logging. Android adds ProGuard rules, and Android and iOS have been updated to the latest core libraries. iOS also now uses a centralized context.

## Updates 

feat(windows): improve unique id approach and storage
feat(windows): move to core libraries approach with improved logging
feat(android): add proguard rules
feat(android,ios): updates for latest core libs
feat(ios): move to new centralised context
```

### 2026.09.03 [v0.1.1]

```
Small update to correct some minor issues

## Updates

- feat(docs): update docs for migration
- feat(airpackage): correct air package dependencies
```

### 2026.01.14 [v0.1.0]

```
Initial release

This extension was created to pull the system information related functionality out of the Application extension. 

## Support 

This extension supports the major platforms: Android, iOS, macOS and Windows. We have extended the functionality from the Application extension to both macOS and Windows.

Includes the following features:

- Device unique Id provided by the various platforms;
- System information:
  - Operating system details;
  - Hardware information;
  - Timezone and locale information;
- Device state (orientation, idle and power modes);
- Device orientation events irrespective of UI Lock;
```

