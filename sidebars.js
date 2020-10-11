module.exports = {
  someSidebar: [
    { type: 'doc', id: 'index' },
    { type: 'ref', id: "tutorials/index" },
    { 
      type: 'category',
      label: 'Tutorials',
      items: [
      ],
    },
    { 
      type: 'category',
      label: 'Extensions',
      collapsed: false,
      items: [
        { type: 'ref', id: "adverts/index" },
        { type: 'ref', id: "appgroupdefaults/index" },
        { type: 'ref', id: "applesignin/index" },
        { type: 'ref', id: "application/index" },
        { type: 'ref', id: "applicationrater/index" },
        { type: 'ref', id: "audiorecorder/index" },

        { type: 'ref', id: "battery/index" },
        { type: 'ref', id: "beacon/index" },
        { type: 'ref', id: "bluetooth/index" },
        { type: 'ref', id: "bluetoothle/index" },

        { type: 'ref', id: "calendar/index" },
        { type: 'ref', id: "camera/index" },
        { type: 'ref', id: "camerarollextended/index" },
        { type: 'ref', id: "cameraui/index" },
        { type: 'ref', id: "cloudstorage/index" },
        { type: 'ref', id: "compass/index" },
        { type: 'ref', id: "contacts/index" },
        
        { type: 'ref', id: "devicemotion/index" },
        { type: 'ref', id: "dialog/index" },
        { type: 'ref', id: "dynamicicon/index" },

        { type: 'ref', id: "expansionfiles/index" },
        
        // { type: 'ref', id: "facebookapi/index" },
        // { type: 'ref', id: "firebase/index" },
        { type: 'ref', id: "flurry/index" },
        { type: 'ref', id: "forcetouch/index" },

        { type: 'ref', id: "gameservices/index" },
        { type: 'ref', id: "googleanalytics/index" },
        { type: 'ref', id: "googleidentity/index" },
        { type: 'ref', id: "googletagmanager/index" },
        { type: 'ref', id: "gyroscope/index" },

        { type: 'ref', id: "idfa/index" },
        { type: 'ref', id: "image/index" },
        { type: 'ref', id: "inappbilling/index" },
        { type: 'ref', id: "ironsource/index" },

        { type: 'ref', id: "nativewebview/index" },
      ],
    },
  ],


  

  tutorials: [
    { type: 'ref', id: 'index' },
    { type: 'doc', id: 'tutorials/index' },
    { 
      'Getting Started': [
        "tutorials/getting-started",
        { 
          "IDE": [
            "tutorials/getting-started-intellij",
            "tutorials/getting-started-flashbuilder4.7",
            "tutorials/getting-started-flashbuilder4.5",
            "tutorials/getting-started-flashdevelop",
            "tutorials/getting-started-animate"
          ]
        }
      ],
    },
    {
      "Debugging": [
        "tutorials/device-logs",
        "tutorials/android-device-debugging"
      ]
    },
    {
      "iOS Development": [
        "tutorials/ios-icons-assets-car",
        "tutorials/ios-launchscreens",
        "tutorials/ios-sdk-custom",
        "tutorials/ios-sdk-versions",
      ]
    },
    {
      "Android Development": [
        "tutorials/android-splash-screen",
        "tutorials/android-adaptive-icons"
      ]
    },
    {
      "Windows Development": [
        "tutorials/windows-appx-packaging",
        "tutorials/windows-appx-packaging-method1",
        "tutorials/windows-appx-packaging-method2",
        "tutorials/windows-appx-packaging-method3"
      ]
    },

  ],




  adverts: [
    { type: 'ref', id: 'index' },
    { type: 'doc', id: 'adverts/index' },
    { 
      "Get Started": [
        "adverts/add-the-extension",
        "adverts/initialise-the-extension"
      ]
    },
    { 
      "Usage": [
        "adverts/initialise-platform",
        "adverts/advertising-identifier",
        "adverts/banner-adverts",
        "adverts/interstitials",
        "adverts/rewarded-video-ads",
        "adverts/native-ads",
        "adverts/targeting"
      ]
    },
    { 
      "Consent": [
        "adverts/user-messaging-platform",
        "adverts/consent"
      ]
    },
    { 
      "Troubleshooting": [
        "adverts/troubleshooting",
        "adverts/migrating-to-version-10",   
        "adverts/migrating-from-version-4",   
        "adverts/migrating-to-androidx",   
      ]
    },
    { 
      "Other": [
        { type: 'doc', id: 'adverts/changelog' },
        { type: "link", label: "asdocs", href: "https://docs.airnativeextensions.com/asdocs/adverts/" },
        { type: 'link', label: 'Contact Support', href: 'http://github.com/distriqt/ANE-Adverts/issues/new' },
      ]
    },
  ],




  appgroupdefaults: [
    { type: 'ref', id: 'index' },
    { type: 'doc', id: 'appgroupdefaults/index' },
    { 
      "Get Started": [
        "appgroupdefaults/add-the-extension",
        "appgroupdefaults/ios",
        "appgroupdefaults/android",
      ]
    },
    { 
      "Usage": [
        "appgroupdefaults/usage",
      ]
    },
    { 
      "Other": [
        { type: 'doc', id: 'appgroupdefaults/changelog' },
        { type: "link", label: "asdocs", href: "https://docs.airnativeextensions.com/asdocs/appgroupdefaults/" },
        { type: 'link', label: 'Contact Support', href: 'http://github.com/distriqt/ANE-AppGroupDefaults/issues/new' },
      ]
    },
  ],



  applesignin: [
    { type: 'ref', id: 'index' },
    { type: 'doc', id: 'applesignin/index' },
    { 
      "Get Started": [
        "applesignin/add-the-extension",
        "applesignin/setup-application",
        "applesignin/setup-auth-server",
      ]
    },
    { 
      "Usage": [
        "applesignin/login-with-apple-id",
        "applesignin/get-user-credentials",
      ]
    },
    { 
      "Other": [
        { type: 'doc', id: 'applesignin/changelog' },
        { type: "link", label: "asdocs", href: "https://docs.airnativeextensions.com/asdocs/applesignin/" },
        { type: 'link', label: 'Contact Support', href: 'http://github.com/distriqt/ANE-AppleSignIn/issues/new' },
      ]
    },
  ],



  application: [
    { type: 'ref', id: 'index' },
    { type: 'doc', id: 'application/index' },
    { 
      "Get Started": [
        "application/add-the-extension",
      ]
    },
    { 
      "Device Information": [
        "application/unique-device-id",
        "application/device-information",
        "application/device-information---device-state",
        "application/device-information---display-metrics",
        "application/device-information---operating-system",
        "application/device-information---orientation-events",
        "application/device-information---phone-number",
        "application/device-information---year-class",
        "application/accessibility",
      ]
    },
    { 
      "Display and Keyboard": [
        "application/display",
        "application/soft-keyboard",
      ]
    },
    { 
      "Alarms and State Events": [
        "application/alarm-manager",
        "application/auto-start",
        "application/application-state-events",
      ]
    },
    { 
      "Storing User Data": [
        "application/defaults",
        "application/keychain",
        "application/settings",
      ]
    },
    { 
      "Helpers": [
        "application/general-helpers",
      ]
    },
    {
      "Troubleshooting": [
        "application/migrating-to-androidx"
      ]
    },
    { 
      "Other": [
        { type: 'doc', id: 'application/changelog' },
        { type: "link", label: "asdocs", href: "https://docs.airnativeextensions.com/asdocs/application/" },
        { type: 'link', label: 'Contact Support', href: 'http://github.com/distriqt/ANE-Application/issues/new' },
      ]
    },
  ],



  applicationrater: [
    { type: 'ref', id: 'index' },
    { type: 'doc', id: 'applicationrater/index' },
    { 
      "Get Started": [
        "applicationrater/add-the-extension",
      ]
    },
    { 
      "Usage": [
        "applicationrater/application-id",
        "applicationrater/application-rate-dialog",
        "applicationrater/application-rate-dialog---states",
        "applicationrater/requesting-review",
        "applicationrater/handling-stores",
      ]
    },
    { 
      "Other": [
        { type: 'doc', id: 'applicationrater/changelog' },
        { type: "link", label: "asdocs", href: "https://docs.airnativeextensions.com/asdocs/applicationrater/" },
        { type: 'link', label: 'Contact Support', href: 'http://github.com/distriqt/ANE-ApplicationRater/issues/new' },
      ]
    },
  ],


  
  audiorecorder: [
    { type: 'ref', id: 'index' },
    { type: 'doc', id: 'audiorecorder/index' },
    { 
      "Get Started": [
        "audiorecorder/add-the-extension",
        "audiorecorder/requesting-authorisation",
      ]
    },
    { 
      "Usage": [
        "audiorecorder/recording-audio",
        "audiorecorder/playback",
      ]
    },
    { 
      "Other": [
        { type: 'doc', id: 'audiorecorder/changelog' },
        { type: "link", label: "asdocs", href: "https://docs.airnativeextensions.com/asdocs/audiorecorder/" },
        { type: 'link', label: 'Contact Support', href: 'http://github.com/distriqt/ANE-AudioRecorder/issues/new' },
      ]
    },
  ],


  battery: [
    { type: 'ref', id: 'index' },
    { type: 'doc', id: 'battery/index' },
    { 
      "Get Started": [
        "battery/add-the-extension",
      ]
    },
    { 
      "Usage": [
        "battery/battery-info",
      ]
    },
    { 
      "Other": [
        { type: 'doc', id: 'battery/changelog' },
        { type: "link", label: "asdocs", href: "https://docs.airnativeextensions.com/asdocs/battery/" },
        { type: 'link', label: 'Contact Support', href: 'http://github.com/distriqt/ANE-Battery/issues/new' },
      ]
    },
  ],


  beacon: [
    { type: 'ref', id: 'index' },
    { type: 'doc', id: 'beacon/index' },
    { 
      "Get Started": [
        "beacon/add-the-extension",
        "beacon/requesting-authorisation",
      ]
    },
    { 
      "Usage": [
        "beacon/monitoring-a-region",
        "beacon/broadcasting",
        "beacon/events",
        "beacon/tools-and-resources",
      ]
    },
    { 
      "Other": [
        { type: 'doc', id: 'beacon/changelog' },
        { type: "link", label: "asdocs", href: "https://docs.airnativeextensions.com/asdocs/beacon/" },
        { type: 'link', label: 'Contact Support', href: 'http://github.com/distriqt/ANE-Beacon/issues/new' },
      ]
    },
  ],


  bluetooth: [
    { type: 'ref', id: 'index' },
    { type: 'doc', id: 'bluetooth/index' },
    { 
      "Get Started": [
        "bluetooth/add-the-extension",
      ]
    },
    { 
      "Usage": [
        "bluetooth/connecting",
      ]
    },
    { 
      "FAQ": [
        "bluetooth/ios",
      ]
    },
    { 
      "Other": [
        { type: 'doc', id: 'bluetooth/changelog' },
        { type: "link", label: "asdocs", href: "https://docs.airnativeextensions.com/asdocs/bluetooth/" },
        { type: 'link', label: 'Contact Support', href: 'http://github.com/distriqt/ANE-Bluetooth/issues/new' },
      ]
    },
  ],


  bluetoothle: [
    { type: 'ref', id: 'index' },
    { type: 'doc', id: 'bluetoothle/index' },
    { 
      "Get Started": [
        "bluetoothle/add-the-extension",
        "bluetoothle/request-authorisation",
      ]
    },
    { 
      "Usage": [
        "bluetoothle/adapter-state",
        "bluetoothle/centrals-and-peripherals",
        "bluetoothle/central-manager",
        "bluetoothle/peripheral-manager",
      ]
    },
    { 
      "Help": [
        "bluetoothle/migrating-to-androidx",
      ]
    },
    { 
      "Other": [
        { type: 'doc', id: 'bluetoothle/changelog' },
        { type: "link", label: "asdocs", href: "https://docs.airnativeextensions.com/asdocs/bluetoothle/" },
        { type: 'link', label: 'Contact Support', href: 'http://github.com/distriqt/ANE-BluetoothLE/issues/new' },
      ]
    },
  ],



  calendar: [
    { type: 'ref', id: 'index' },
    { type: 'doc', id: 'calendar/index' },
    { 
      "Get Started": [
        "calendar/add-the-extension",
        "calendar/request-authorisation",
      ]
    },
    { 
      "Usage": [
        "calendar/get-events",
        "calendar/add-events",
      ]
    },
    { 
      "Help": [
        "calendar/migrating-to-androidx",
      ]
    },
    { 
      "Other": [
        { type: 'doc', id: 'calendar/changelog' },
        { type: "link", label: "asdocs", href: "https://docs.airnativeextensions.com/asdocs/calendar/" },
        { type: 'link', label: 'Contact Support', href: 'http://github.com/distriqt/ANE-Calendar/issues/new' },
      ]
    },
  ],


  camera: [
    { type: 'ref', id: 'index' },
    { type: 'doc', id: 'camera/index' },
    { 
      "Get Started": [
        "camera/add-the-extension",
        "camera/requesting-authorisation",
      ]
    },
    { 
      "Usage": [
        "camera/selecting-a-device",
        "camera/connecting",
        "camera/preview-frames",
        "camera/capturing-images",
        "camera/camera-modes",
        "camera/parameters-flash",
        "camera/parameters-focus",
        "camera/parameters-exposure",
        "camera/parameters-white-balance",
      ]
    },
    { 
      "Help": [
        "camera/migrating-to-androidx",
      ]
    },
    { 
      "Other": [
        { type: 'doc', id: 'camera/changelog' },
        { type: "link", label: "asdocs", href: "https://docs.airnativeextensions.com/asdocs/camera/" },
        { type: 'link', label: 'Contact Support', href: 'http://github.com/distriqt/ANE-Camera/issues/new' },
      ]
    },
  ],

  camerarollextended: [
    { type: 'ref', id: 'index' },
    { type: 'doc', id: 'camerarollextended/index' },
    { 
      "Get Started": [
        "camerarollextended/add-the-extension",
        "camerarollextended/request-authorisation",
      ]
    },
    { 
      "Usage": [
        "camerarollextended/browse-for-an-asset",
        "camerarollextended/loading-an-asset",
        "camerarollextended/file-access",
        "camerarollextended/adding-files",
      ]
    },
    { 
      "Help": [
        "camerarollextended/migrating-to-androidx",
      ]
    },
    { 
      "Other": [
        { type: 'doc', id: 'camerarollextended/changelog' },
        { type: "link", label: "asdocs", href: "https://docs.airnativeextensions.com/asdocs/camerarollextended/" },
        { type: 'link', label: 'Contact Support', href: 'http://github.com/distriqt/ANE-CameraRollExtended/issues/new' },
      ]
    },
  ],

  cameraui: [
    { type: 'ref', id: 'index' },
    { type: 'doc', id: 'cameraui/index' },
    { 
      "Get Started": [
        "cameraui/add-the-extension",
        "cameraui/requesting-authorisation",
      ]
    },
    { 
      "Usage": [
        "cameraui/capture-media",
        "cameraui/camera-ui-options",
      ]
    },
    { 
      "Help": [
        "cameraui/migrating-to-androidx",
      ]
    },
    { 
      "Other": [
        { type: 'doc', id: 'cameraui/changelog' },
        { type: "link", label: "asdocs", href: "https://docs.airnativeextensions.com/asdocs/cameraui/" },
        { type: 'link', label: 'Contact Support', href: 'http://github.com/distriqt/ANE-CameraUI/issues/new' },
      ]
    },
  ],

  cloudstorage: [
    { type: 'ref', id: 'index' },
    { type: 'doc', id: 'cloudstorage/index' },
    { 
      "Get Started": [
        "cloudstorage/add-the-extension",
      ]
    },
    { 
      "Usage": [
        "cloudstorage/key-value-storage",
        "cloudstorage/document-store",
        "cloudstorage/android-testing",
      ]
    },
    { 
      "Other": [
        { type: 'doc', id: 'cloudstorage/changelog' },
        { type: "link", label: "asdocs", href: "https://docs.airnativeextensions.com/asdocs/cloudstorage/" },
        { type: 'link', label: 'Contact Support', href: 'http://github.com/distriqt/ANE-CloudStorage/issues/new' },
      ]
    },
  ],

  compass: [
    { type: 'ref', id: 'index' },
    { type: 'doc', id: 'compass/index' },
    { 
      "Get Started": [
        "compass/add-the-extension",
      ]
    },
    { 
      "Usage": [
        "compass/heading",
        "compass/magnetic-field-sensor",
      ]
    },
    { 
      "Other": [
        { type: 'doc', id: 'compass/changelog' },
        { type: "link", label: "asdocs", href: "https://docs.airnativeextensions.com/asdocs/compass/" },
        { type: 'link', label: 'Contact Support', href: 'http://github.com/distriqt/ANE-Compass/issues/new' },
      ]
    },
  ],

  contacts: [
    { type: 'ref', id: 'index' },
    { type: 'doc', id: 'contacts/index' },
    { 
      "Get Started": [
        "contacts/add-the-extension",
        "contacts/request-authorisation",
      ]
    },
    { 
      "Access the Contact List": [
        "contacts/retrieving-the-contact-list",
        "contacts/contact-images",
      ]
    },
    { 
      "Contact Selection": [
        "contacts/contact-picker-ui",
      ]
    },
    { 
      "Help": [
        "contacts/migrating-to-androidx",
      ]
    },
    { 
      "Other": [
        { type: 'doc', id: 'contacts/changelog' },
        { type: "link", label: "asdocs", href: "https://docs.airnativeextensions.com/asdocs/contacts/" },
        { type: 'link', label: 'Contact Support', href: 'http://github.com/distriqt/ANE-Contacts/issues/new' },
      ]
    },
  ],




  devicemotion: [
    { type: 'ref', id: 'index' },
    { type: 'doc', id: 'devicemotion/index' },
    { 
      "Get Started": [
        "devicemotion/add-the-extension",
      ]
    },
    { 
      "Usage": [
        "devicemotion/register-for-updates",
        "devicemotion/algorithms-and-format",
      ]
    },
    { 
      "Other": [
        { type: 'doc', id: 'devicemotion/changelog' },
        { type: "link", label: "asdocs", href: "https://docs.airnativeextensions.com/asdocs/devicemotion/" },
        { type: 'link', label: 'Contact Support', href: 'http://github.com/distriqt/ANE-DeviceMotion/issues/new' },
      ]
    },
  ],

  dialog: [
    { type: 'ref', id: 'index' },
    { type: 'doc', id: 'dialog/index' },
    { 
      "Get Started": [
        "dialog/add-the-extension",
        "dialog/dialog-views-and-builders",
      ]
    },
    { 
      "Usage": [
        "dialog/toast",
        "dialog/alerts",
        "dialog/text-view-alert",
        "dialog/action-sheet",
        "dialog/progress-dialog",
        "dialog/activity-dialog",
        "dialog/custom-picker",
        "dialog/date-time-dialog",
      ]
    },
    { 
      "Additional Features": [
        "dialog/air-fallback",
      ]
    },
    { 
      "Help": [
        "dialog/migrating-to-androidx",
      ]
    },
    { 
      "Other": [
        { type: 'doc', id: 'dialog/changelog' },
        { type: "link", label: "asdocs", href: "https://docs.airnativeextensions.com/asdocs/dialog/" },
        { type: 'link', label: 'Contact Support', href: 'http://github.com/distriqt/ANE-Dialog/issues/new' },
      ]
    },
  ],
  
  dynamicicon: [
    { type: 'ref', id: 'index' },
    { type: 'doc', id: 'dynamicicon/index' },
    { 
      "Get Started": [
        "dynamicicon/add-the-extension",
        "dynamicicon/adding-icons",
        "dynamicicon/packaging",
      ]
    },
    { 
      "Usage": [
        "dynamicicon/change-icon",
      ]
    },
    { 
      "Other": [
        { type: 'doc', id: 'dynamicicon/changelog' },
        { type: "link", label: "asdocs", href: "https://docs.airnativeextensions.com/asdocs/dynamicicon/" },
        { type: 'link', label: 'Contact Support', href: 'http://github.com/distriqt/ANE-DyanmicIcon/issues/new' },
      ]
    },
  ],



  expansionfiles: [
    { type: 'ref', id: 'index' },
    { type: 'doc', id: 'expansionfiles/index' },
    { 
      "Get Started": [
        "expansionfiles/add-the-extension",
        "expansionfiles/request-authorisation",
      ]
    },
    { 
      "Setup your Expansion Files": [
        "expansionfiles/setup-licensing",
        "expansionfiles/uploading-expansion-files",
      ]
    },
    { 
      "Usage": [
        "expansionfiles/downloading-expansion-files",
      ]
    },
    { 
      "JOBB Files": [
        "expansionfiles/jobb-files",
        "expansionfiles/mounting-an-obb-file",
        "expansionfiles/reading-an-obb-file",
      ]
    },
    { 
      "Help": [
        "expansionfiles/migrating-to-androidx",
      ]
    },
    { 
      "Other": [
        { type: 'doc', id: 'expansionfiles/changelog' },
        { type: "link", label: "asdocs", href: "https://docs.airnativeextensions.com/asdocs/expansionfiles/" },
        { type: 'link', label: 'Contact Support', href: 'http://github.com/distriqt/ANE-ExpansionFiles/issues/new' },
      ]
    },
  ],





  flurry: [
    { type: 'ref', id: 'index' },
    { type: 'doc', id: 'flurry/index' },
    { 
      "Get Started": [
        "flurry/add-the-extension",
        "flurry/initialise-the-extension",
      ]
    },
    { 
      "Analytics": [
        "flurry/analytics-sessions",
        "flurry/analytics-events",
      ]
    },
    { 
      "Other": [
        { type: 'doc', id: 'flurry/changelog' },
        { type: "link", label: "asdocs", href: "https://docs.airnativeextensions.com/asdocs/flurry/" },
        { type: 'link', label: 'Contact Support', href: 'http://github.com/distriqt/ANE-Flurry/issues/new' },
      ]
    },
  ],

  forcetouch: [
    { type: 'ref', id: 'index' },
    { type: 'doc', id: 'forcetouch/index' },
    { 
      "Get Started": [
        "forcetouch/add-the-extension",
      ]
    },
    { 
      "Usage": [
        "forcetouch/force-touch-events",
        "forcetouch/app-shortcuts",
      ]
    },
    { 
      "Other": [
        { type: 'doc', id: 'forcetouch/changelog' },
        { type: "link", label: "asdocs", href: "https://docs.airnativeextensions.com/asdocs/forcetouch/" },
        { type: 'link', label: 'Contact Support', href: 'http://github.com/distriqt/ANE-ForceTouch/issues/new' },
      ]
    },
  ],



  gameservices: [
    { type: 'ref', id: 'index' },
    { type: 'doc', id: 'gameservices/index' },
    { 
      "Setup Services": [
        "gameservices/setup-gamecenter",
        "gameservices/setup-google-play-games",
      ]
    },
    { 
      "Integration": [
        "gameservices/add-the-extension",
        "gameservices/initialise-the-extension",
        "gameservices/initialise-the-service",
      ]
    },
    { 
      "Usage": [
        "gameservices/sign-in",
        "gameservices/leaderboards",
        "gameservices/achievements",
        {
          "Saved Games": [
            "gameservices/saved-games",
            "gameservices/saved-games---conflicts",
          ]
        },
        {
          "Turn Based Multiplayer": [
            "gameservices/turn-based-multiplayer---key-concepts",
            "gameservices/turn-based-multiplayer---implementation-overview",
            "gameservices/turn-based-multiplayer---implementation",
            "gameservices/turn-based-multiplayer---invitations",
          ]
        },
        "gameservices/quests-and-events",
        "gameservices/screen-recording",
      ]
    },
    {
      "Help": [
        "gameservices/troubleshooting",
        "gameservices/migrating-to-androidx",
      ]
    },
    { 
      "Other": [
        { type: 'doc', id: 'gameservices/changelog' },
        { type: "link", label: "asdocs", href: "https://docs.airnativeextensions.com/asdocs/gameservices/" },
        { type: 'link', label: 'Contact Support', href: 'http://github.com/distriqt/ANE-GameServices/issues/new' },
      ]
    },
  ],

  googleanalytics: [
    { type: 'ref', id: 'index' },
    { type: 'doc', id: 'googleanalytics/index' },
    { 
      "Setup the Extension": [
        "googleanalytics/add-the-extension",
        "googleanalytics/tracking-ids",
      ]
    },
    { 
      "Usage": [
        "googleanalytics/create-a-tracker",
        "googleanalytics/sending-hits-and-events",
        "googleanalytics/ecommerce",
        "googleanalytics/enhanced-ecommerce",
        "googleanalytics/notes",
        "googleanalytics/install-referrer",
      ]
    },
    {
      "Help": [
        "googleanalytics/migrating-to-androidx",
      ]
    },
    { 
      "Other": [
        { type: 'doc', id: 'googleanalytics/changelog' },
        { type: "link", label: "asdocs", href: "https://docs.airnativeextensions.com/asdocs/googleanalytics/" },
        { type: 'link', label: 'Contact Support', href: 'http://github.com/distriqt/ANE-GoogleAnalytics/issues/new' },
      ]
    },
  ],

  googleidentity: [
    { type: 'ref', id: 'index' },
    { type: 'doc', id: 'googleidentity/index' },
    { 
      "Setup your Google Project": [
        "googleidentity/google-developers-console-project",
        "googleidentity/android-certificate",
        "googleidentity/google-identity-options",
      ]
    },
    { 
      "Setup the Extension": [
        "googleidentity/add-the-extension",
      ]
    },
    { 
      "Usage": [
        "googleidentity/setup",
        "googleidentity/signing-in",
        "googleidentity/disconnect",
        "googleidentity/user-information",
      ]
    },
    { 
      "Additional": [
        "googleidentity/authenticate-with-a-backend-server",
        "googleidentity/enabling-server-side-access",
      ]
    },
    {
      "Help": [
        "googleidentity/troubleshooting",
        "googleidentity/migrating-to-androidx",
        "googleidentity/migrating-from-version-1",
      ]
    },
    { 
      "Other": [
        { type: 'doc', id: 'googleidentity/changelog' },
        { type: "link", label: "asdocs", href: "https://docs.airnativeextensions.com/asdocs/googleidentity/" },
        { type: 'link', label: 'Contact Support', href: 'http://github.com/distriqt/ANE-GoogleIdentity/issues/new' },
      ]
    },
  ],

  googletagmanager: [
    { type: 'ref', id: 'index' },
    { type: 'doc', id: 'googletagmanager/index' },
    "googletagmanager/google-tag-manager-setup",
    "googletagmanager/add-the-extension",
    { 
      "Usage": [
        "googletagmanager/containers",
        "googletagmanager/datalayer",
      ]
    },
    { 
      "Other": [
        { type: 'doc', id: 'googletagmanager/changelog' },
        { type: "link", label: "asdocs", href: "https://docs.airnativeextensions.com/asdocs/googletagmanager/" },
        { type: 'link', label: 'Contact Support', href: 'http://github.com/distriqt/ANE-GoogleTagManager/issues/new' },
      ]
    },
  ],

  gyroscope: [
    { type: 'ref', id: 'index' },
    { type: 'doc', id: 'gyroscope/index' },
    "gyroscope/add-the-extension",
    "gyroscope/sensor-updates",
    { 
      "Other": [
        { type: 'doc', id: 'gyroscope/changelog' },
        { type: "link", label: "asdocs", href: "https://docs.airnativeextensions.com/asdocs/gyroscope/" },
        { type: 'link', label: 'Contact Support', href: 'http://github.com/distriqt/ANE-Gyroscope/issues/new' },
      ]
    },
  ],



  idfa: [
    { type: 'ref', id: 'index' },
    { type: 'doc', id: 'idfa/index' },
    { 
      "Get Started": [
        "idfa/add-the-extension",
      ]
    },
    { 
      "Usage": [
        "idfa/get-advertising-identifier",
      ]
    },
    {
      "Help": [
        "idfa/migrating",
        "idfa/migrating-to-androidx",
      ]
    },
    { 
      "Other": [
        { type: 'doc', id: 'idfa/changelog' },
        { type: "link", label: "asdocs", href: "https://docs.airnativeextensions.com/asdocs/idfa/" },
        { type: 'link', label: 'Contact Support', href: 'http://github.com/distriqt/ANE-IDFA/issues/new' },
      ]
    },
  ],

  image: [
    { type: 'ref', id: 'index' },
    { type: 'doc', id: 'image/index' },
    { 
      "Get Started": [
        "image/add-the-extension",
      ]
    },
    { 
      "Usage": [
        "image/request-authorisation",
        "image/saving-bitmapdata-to-file",
        "image/loading-bitmapdata-from-file",
        "image/encoding-bitmapdata-to-bytearray",
        "image/decoding-bytearray-to-bitmapdata",
        "image/saving-bitmapdata-to-the-camera-roll",
        "image/transformations",
        "image/capturing-a-screenshot",
      ]
    },
    {
      "Help": [
        "image/migrating-to-androidx",
      ]
    },
    { 
      "Other": [
        { type: 'doc', id: 'image/changelog' },
        { type: "link", label: "asdocs", href: "https://docs.airnativeextensions.com/asdocs/image/" },
        { type: 'link', label: 'Contact Support', href: 'http://github.com/distriqt/ANE-Image/issues/new' },
      ]
    },
  ],

  inappbilling: [
    { type: 'ref', id: 'index' },
    { type: 'doc', id: 'inappbilling/index' },
    { 
      "Setup your Billing Service": [
        "inappbilling/apple.apple-in-app-purchases",
        "inappbilling/google.google-play-inapp-billing",
        "inappbilling/amazon.amazon-in-app-purchasing",
        "inappbilling/huawei.huawei-appgallery",
      ]
    },
    { 
      "Setup the Extension": [
        "inappbilling/add-the-extension",
        "inappbilling/billing-service",
      ]
    },
    { 
      "Usage": [
        "inappbilling/products",
        "inappbilling/make-a-purchase",
        "inappbilling/pending-purchases",
        "inappbilling/restore-purchases",
        "inappbilling/get-purchases",
        "inappbilling/consuming-purchases",
        "inappbilling/change-a-purchase",
        "inappbilling/promotions",
        {
          "Subscription Discounts and Offers": [
            "inappbilling/discounts",
            "inappbilling/introductory-prices",
          ]
        }
      ]
    },
    { 
      "In-App Updates": [
        "inappbilling/in-app-updates",
      ]
    },
    {
      "Help": [
        "inappbilling/migration",
      ]
    },
    {
      "Testing": [
        "inappbilling/testing",
        "inappbilling/apple.testing-ios-subscriptions",
        "inappbilling/amazon.testing-amazon-in-app-purchasing",
        "inappbilling/huawei.testing-huawei-appgallery-purchases",
      ]
    },
    {
      "Advanced": [
        "inappbilling/server-side-verification",
        "inappbilling/user-data",
      ]
    },
    { 
      "Other": [
        { type: 'doc', id: 'inappbilling/changelog' },
        { type: "link", label: "asdocs", href: "https://docs.airnativeextensions.com/asdocs/inappbilling/" },
        { type: 'link', label: 'Contact Support', href: 'http://github.com/distriqt/ANE-InAppBilling/issues/new' },
      ]
    },
  ],

  ironsource: [
    { type: 'ref', id: 'index' },
    { type: 'doc', id: 'ironsource/index' },
    { 
      "Get Started": [
        "ironsource/add-the-extension",
      ]
    },
    { 
      "Usage": [
        "ironsource/initialisation",
        "ironsource/interstitials",
        "ironsource/rewarded-video",
      ]
    },
    { 
      "Mediation": [
        "ironsource/mediation---adcolony",
        "ironsource/mediation---admob",
        "ironsource/mediation---amazon",
        "ironsource/mediation---applovin",
        "ironsource/mediation---chartboost",
        "ironsource/mediation---facebook-audience",
        "ironsource/mediation---tapjoy",
        "ironsource/mediation---unityads",
      ]
    },
    {
      "Help": [
        "ironsource/migrating-to-androidx",
      ]
    },
    { 
      "Other": [
        { type: 'doc', id: 'ironsource/changelog' },
        { type: "link", label: "asdocs", href: "https://docs.airnativeextensions.com/asdocs/ironsource/" },
        { type: 'link', label: 'Contact Support', href: 'http://github.com/distriqt/ANE-IronSource/issues/new' },
      ]
    },
  ],



  nativewebview: [
    { type: 'ref', id: 'index' },
    { type: 'doc', id: 'nativewebview/index' },
    { 
      "Get Started": [
        "nativewebview/add-the-extension",
        "nativewebview/initialise-the-extension"
      ]
    },
    { 
      "Web View": [
        "nativewebview/create-a-webview",
        "nativewebview/webview-information",
        "nativewebview/position-size-visibility",
        "nativewebview/loading-packaged-files",
        "nativewebview/screenshot",
        "nativewebview/communication",
        "nativewebview/location-changes",
        "nativewebview/removing-the-webview"
      ]
    },
    { 
      "Other Features": [
        "nativewebview/browser-view"
      ]
    },
    { 
      "Troubleshooting": [
        "nativewebview/migrating-to-androidx",
        "nativewebview/migrating-to-v5"   
      ]
    },
    { 
      "Other": [
        { type: 'doc', id: 'nativewebview/changelog' },
        { type: "link", label: "asdocs", href: "https://docs.airnativeextensions.com/asdocs/nativewebview/" },
        { type: 'link', label: 'Contact Support', href: 'http://github.com/distriqt/ANE-NativeWebView/issues/new' },
      ],
    },
  ],





};
