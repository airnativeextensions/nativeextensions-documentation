module.exports = {
  someSidebar: [
    { type: 'doc', id: 'index' },
    { 
      type: 'category',
      label: 'Tutorials',
      items: [
        { type: 'ref', id: "tutorials/index" },
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

        { type: 'ref', id: "nativewebview/index" },
      ],
    },
  ],


  

  tutorials: [
    { type: 'ref', id: 'index' },
    { type: 'doc', id: 'tutorials/index' },
    { 
      type: 'category',
      label: 'Getting Started',
      items: [
        { type: 'doc', id: "tutorials/getting-started" },
        { 
          type: "category",
          label: "IDE",
          items: [
            "tutorials/getting-started-intellij",
            "tutorials/getting-started-flashbuilder4.7",
            "tutorials/getting-started-flashbuilder4.5",
            "tutorials/getting-started-flashdevelop",
            "tutorials/getting-started-animate"
          ]
        }
      ],
    }
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
