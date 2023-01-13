module.exports = {
  someSidebar: [
    { type: "doc", id: "index" },
    { type: "ref", id: "tutorials/index" },
    { type: "ref", id: "faqs/index" },
    {
      type: "category",
      label: "Extensions",
      collapsed: false,
      items: [
        { type: "ref", id: "adverts/index" },
        { type: "ref", id: "appgroupdefaults/index" },
        { type: "ref", id: "applesignin/index" },
        { type: "ref", id: "application/index" },
        { type: "ref", id: "applicationrater/index" },
        { type: "ref", id: "audiorecorder/index" },

        { type: "ref", id: "battery/index" },
        { type: "ref", id: "beacon/index" },
        { type: "ref", id: "bluetooth/index" },
        { type: "ref", id: "bluetoothle/index" },
        { type: "ref", id: "branch/index" },

        { type: "ref", id: "calendar/index" },
        { type: "ref", id: "camera/index" },
        { type: "ref", id: "camerarollextended/index" },
        { type: "ref", id: "cameraui/index" },
        { type: "ref", id: "cloudstorage/index" },
        { type: "ref", id: "compass/index" },
        { type: "ref", id: "contacts/index" },

        { type: "ref", id: "devicemotion/index" },
        { type: "ref", id: "dialog/index" },
        { type: "ref", id: "dynamicicon/index" },

        { type: "ref", id: "exceptions/index" },
        { type: "ref", id: "expansionfiles/index" },

        { type: "ref", id: "facebookapi/index" },
        { type: "ref", id: "firebase/index" },
        { type: "ref", id: "flurry/index" },
        { type: "ref", id: "forcetouch/index" },

        { type: "ref", id: "gameservices/index" },
        { type: "ref", id: "googleanalytics/index" },
        { type: "ref", id: "googleidentity/index" },
        { type: "ref", id: "googletagmanager/index" },
        { type: "ref", id: "gyroscope/index" },

        { type: "ref", id: "idfa/index" },
        { type: "ref", id: "image/index" },
        { type: "ref", id: "inappbilling/index" },
        { type: "ref", id: "ironsource/index" },

        { type: "ref", id: "jobscheduler/index" },

        { type: "ref", id: "localauth/index" },
        { type: "ref", id: "location/index" },

        { type: "ref", id: "mediaplayer/index" },
        { type: "ref", id: "memory/index" },

        { type: "ref", id: "nativemaps/index" },
        { type: "ref", id: "nativewebview/index" },
        { type: "ref", id: "networkinfo/index" },
        { type: "ref", id: "nfc/index" },
        { type: "ref", id: "notifications/index" },

        { type: "ref", id: "ocr/index" },

        { type: "ref", id: "packagemanager/index" },
        { type: "ref", id: "pdfreader/index" },
        { type: "ref", id: "permissions/index" },
        { type: "ref", id: "pushnotifications/index" },

        { type: "ref", id: "restartapp/index" },
        { type: "ref", id: "rootchecker/index" },

        { type: "ref", id: "scanner/index" },
        { type: "ref", id: "share/index" },
        { type: "ref", id: "systemgestures/index" },

        { type: "ref", id: "vibration/index" },
        { type: "ref", id: "volume/index" },

        { type: "ref", id: "webp/index" },
        { type: "ref", id: "windowsstore/index" },

        { type: "ref", id: "ziputils/index" },
      ],
    },
  ],

  adverts: [
    { type: "ref", id: "index" },
    { type: "doc", id: "adverts/index" },
    {
      "Get Started": [
        "adverts/add-the-extension",
        {
          Platforms: [
            "adverts/platform/admob/index",
            "adverts/platform/huawei/index",
          ],
        },
      ],
    },
    {
      Usage: [
        "adverts/initialise-platform",
        "adverts/advertising-identifier",
        "adverts/banner-adverts",
        "adverts/interstitials",
        "adverts/rewarded-video-ads",
        "adverts/rewarded-interstitial-ads",
        "adverts/server-side-verification",
        "adverts/native-ads",
        "adverts/app-open-ads",
        "adverts/life-time-value",
        "adverts/targeting",
        "adverts/test-ads",
      ],
    },
    {
      Consent: ["adverts/user-messaging-platform", "adverts/consent"],
    },
    {
      Troubleshooting: [
        "adverts/troubleshooting",
        "adverts/migrating-to-version-13.6",
        "adverts/migrating-to-version-13",
        "adverts/migrating-to-version-12",
        "adverts/migrating-to-version-10",
        "adverts/migrating-from-version-4",
        "adverts/migrating-to-androidx",
      ],
    },
    {
      Mediation: [
        "adverts/mediation/adcolony/index",
        "adverts/mediation/applovin/index",
        "adverts/mediation/facebookaudience/index",
        "adverts/mediation/ironsource/index",
        "adverts/mediation/pangle/index",
        "adverts/mediation/tapjoy/index",
        "adverts/mediation/unityads/index",
      ],
    },
    {
      Other: [
        { type: "doc", id: "adverts/changelog" },
        {
          type: "link",
          label: "asdocs",
          href: "https://docs.airnativeextensions.com/asdocs/adverts/",
        },
        {
          type: "link",
          label: "asdocs - mediators",
          href: "https://docs.airnativeextensions.com/asdocs/adverts-mediation/",
        },
        {
          type: "link",
          label: "Contact Support",
          href: "http://github.com/distriqt/ANE-Adverts/issues/new",
        },
      ],
    },
  ],

  appgroupdefaults: [
    { type: "ref", id: "index" },
    { type: "doc", id: "appgroupdefaults/index" },
    {
      "Get Started": [
        {
          type: "category",
          label: "Setup",
          collapsed: false,
          items: ["appgroupdefaults/ios", "appgroupdefaults/android"],
        },
        "appgroupdefaults/add-the-extension",
        "appgroupdefaults/add-the-plugin",
      ],
    },
    {
      Usage: ["appgroupdefaults/usage"],
    },
    {
      Other: [
        { type: "doc", id: "appgroupdefaults/changelog" },
        {
          type: "link",
          label: "asdocs",
          href: "https://docs.airnativeextensions.com/asdocs/appgroupdefaults/",
        },
        {
          type: "link",
          label: "Contact Support",
          href: "http://github.com/distriqt/ANE-AppGroupDefaults/issues/new",
        },
      ],
    },
  ],

  applesignin: [
    { type: "ref", id: "index" },
    { type: "doc", id: "applesignin/index" },
    {
      "Get Started": [
        "applesignin/add-the-extension",
        "applesignin/setup-application",
        "applesignin/setup-auth-server",
      ],
    },
    {
      Usage: [
        "applesignin/login-with-apple-id",
        "applesignin/get-user-credentials",
      ],
    },
    {
      Other: [
        { type: "doc", id: "applesignin/changelog" },
        {
          type: "link",
          label: "asdocs",
          href: "https://docs.airnativeextensions.com/asdocs/applesignin/",
        },
        {
          type: "link",
          label: "Contact Support",
          href: "http://github.com/distriqt/ANE-AppleSignIn/issues/new",
        },
      ],
    },
  ],

  application: [
    { type: "ref", id: "index" },
    { type: "doc", id: "application/index" },
    {
      "Get Started": ["application/add-the-extension"],
    },
    {
      "Device Information": [
        "application/device-information/device",
        "application/device-information/unique-device-id",
        "application/device-information/device-state",
        "application/device-information/operating-system",
        "application/device-information/orientation-events",
        "application/device-information/phone-number",
        "application/device-information/year-class",
        "application/device-information/accessibility",
      ],
    },
    {
      "Display and Keyboard": [
        "application/display/display",
        "application/display/cutouts",
        "application/display/dark-mode",
        "application/display/display-metrics",
        "application/display/soft-keyboard",
      ],
    },
    {
      "Alarms and State Events": [
        "application/alarm-manager",
        "application/auto-start",
        "application/application-state-events",
      ],
    },
    {
      "Storing User Data": [
        "application/defaults",
        "application/keychain",
        "application/settings",
      ],
    },
    {
      Helpers: ["application/general-helpers"],
    },
    {
      Troubleshooting: ["application/migrating-to-androidx"],
    },
    {
      Other: [
        { type: "doc", id: "application/changelog" },
        {
          type: "link",
          label: "asdocs",
          href: "https://docs.airnativeextensions.com/asdocs/application/",
        },
        {
          type: "link",
          label: "Contact Support",
          href: "http://github.com/distriqt/ANE-Application/issues/new",
        },
      ],
    },
  ],

  applicationrater: [
    { type: "ref", id: "index" },
    { type: "doc", id: "applicationrater/index" },
    {
      "Get Started": [
        "applicationrater/add-the-extension",
        "applicationrater/add-the-plugin",
      ],
    },
    {
      Usage: [
        "applicationrater/application-id",
        "applicationrater/application-rate-dialog",
        "applicationrater/application-rate-dialog---states",
        "applicationrater/requesting-review",
        "applicationrater/handling-stores",
      ],
    },
    {
      "Review Controller": ["applicationrater/review-controller"],
    },
    {
      Other: [
        { type: "doc", id: "applicationrater/changelog" },
        {
          type: "link",
          label: "asdocs",
          href: "https://docs.airnativeextensions.com/asdocs/applicationrater/",
        },
        {
          type: "link",
          label: "Contact Support",
          href: "http://github.com/distriqt/ANE-ApplicationRater/issues/new",
        },
      ],
    },
  ],

  audiorecorder: [
    { type: "ref", id: "index" },
    { type: "doc", id: "audiorecorder/index" },
    {
      "Get Started": [
        "audiorecorder/add-the-extension",
        "audiorecorder/requesting-authorisation",
      ],
    },
    {
      Usage: ["audiorecorder/recording-audio", "audiorecorder/playback"],
    },
    {
      Help: ["audiorecorder/migrating-to-v3.1"],
    },
    {
      Other: [
        { type: "doc", id: "audiorecorder/changelog" },
        {
          type: "link",
          label: "asdocs",
          href: "https://docs.airnativeextensions.com/asdocs/audiorecorder/",
        },
        {
          type: "link",
          label: "Contact Support",
          href: "http://github.com/distriqt/ANE-AudioRecorder/issues/new",
        },
      ],
    },
  ],

  battery: [
    { type: "ref", id: "index" },
    { type: "doc", id: "battery/index" },
    {
      "Get Started": ["battery/add-the-extension"],
    },
    {
      Usage: ["battery/battery-info"],
    },
    {
      Other: [
        { type: "doc", id: "battery/changelog" },
        {
          type: "link",
          label: "asdocs",
          href: "https://docs.airnativeextensions.com/asdocs/battery/",
        },
        {
          type: "link",
          label: "Contact Support",
          href: "http://github.com/distriqt/ANE-Battery/issues/new",
        },
      ],
    },
  ],

  beacon: [
    { type: "ref", id: "index" },
    { type: "doc", id: "beacon/index" },
    {
      "Get Started": [
        "beacon/add-the-extension",
        "beacon/requesting-authorisation",
      ],
    },
    {
      Usage: [
        "beacon/monitoring-a-region",
        "beacon/broadcasting",
        "beacon/events",
        "beacon/tools-and-resources",
      ],
    },
    {
      Help: ["beacon/migrating-to-v5.1"],
    },
    {
      Other: [
        { type: "doc", id: "beacon/changelog" },
        {
          type: "link",
          label: "asdocs",
          href: "https://docs.airnativeextensions.com/asdocs/beacon/",
        },
        {
          type: "link",
          label: "Contact Support",
          href: "http://github.com/distriqt/ANE-Beacon/issues/new",
        },
      ],
    },
  ],

  bluetooth: [
    { type: "ref", id: "index" },
    { type: "doc", id: "bluetooth/index" },
    {
      "Get Started": ["bluetooth/add-the-extension"],
    },
    {
      Usage: ["bluetooth/connecting"],
    },
    {
      FAQ: ["bluetooth/ios"],
    },
    {
      Other: [
        { type: "doc", id: "bluetooth/changelog" },
        {
          type: "link",
          label: "asdocs",
          href: "https://docs.airnativeextensions.com/asdocs/bluetooth/",
        },
        {
          type: "link",
          label: "Contact Support",
          href: "http://github.com/distriqt/ANE-Bluetooth/issues/new",
        },
      ],
    },
  ],

  bluetoothle: [
    { type: "ref", id: "index" },
    { type: "doc", id: "bluetoothle/index" },
    {
      "Get Started": [
        "bluetoothle/add-the-extension",
        "bluetoothle/request-authorisation",
      ],
    },
    {
      Usage: [
        "bluetoothle/adapter-state",
        "bluetoothle/centrals-and-peripherals",
        "bluetoothle/central-manager",
        "bluetoothle/peripheral-manager",
      ],
    },
    {
      Help: ["bluetoothle/migrating-to-androidx"],
    },
    {
      Other: [
        { type: "doc", id: "bluetoothle/changelog" },
        {
          type: "link",
          label: "asdocs",
          href: "https://docs.airnativeextensions.com/asdocs/bluetoothle/",
        },
        {
          type: "link",
          label: "Contact Support",
          href: "http://github.com/distriqt/ANE-BluetoothLE/issues/new",
        },
      ],
    },
  ],

  branch: [
    { type: "ref", id: "index" },
    { type: "doc", id: "branch/index" },
    {
      "Get Started": ["branch/add-the-extension"],
    },
    {
      Usage: [
        "branch/initialisation",
        "branch/deep-links",
        "branch/user-identity",
        "branch/link-parameters",
        "branch/referral-credits",
        "branch/event-tracking",
      ],
    },
    {
      "Branch Universal Objects": ["branch/branch-universal-objects"],
    },
    {
      Other: [
        { type: "doc", id: "branch/changelog" },
        {
          type: "link",
          label: "asdocs",
          href: "https://docs.airnativeextensions.com/asdocs/branch/",
        },
        {
          type: "link",
          label: "Contact Support",
          href: "http://github.com/distriqt/ANE-BranchIO/issues/new",
        },
      ],
    },
  ],

  calendar: [
    { type: "ref", id: "index" },
    { type: "doc", id: "calendar/index" },
    {
      "Get Started": [
        "calendar/add-the-extension",
        "calendar/request-authorisation",
      ],
    },
    {
      Usage: ["calendar/get-events", "calendar/add-events"],
    },
    {
      Help: ["calendar/migrating-to-androidx"],
    },
    {
      Other: [
        { type: "doc", id: "calendar/changelog" },
        {
          type: "link",
          label: "asdocs",
          href: "https://docs.airnativeextensions.com/asdocs/calendar/",
        },
        {
          type: "link",
          label: "Contact Support",
          href: "http://github.com/distriqt/ANE-Calendar/issues/new",
        },
      ],
    },
  ],

  camera: [
    { type: "ref", id: "index" },
    { type: "doc", id: "camera/index" },
    {
      "Get Started": [
        "camera/add-the-extension",
        "camera/requesting-authorisation",
      ],
    },
    {
      Usage: [
        "camera/selecting-a-device",
        "camera/connecting",
        "camera/preview-frames",
        "camera/capturing-images",
        "camera/camera-modes",
        "camera/parameters-flash",
        "camera/parameters-focus",
        "camera/parameters-exposure",
        "camera/parameters-white-balance",
      ],
    },
    {
      Help: ["camera/migrating-to-androidx"],
    },
    {
      Other: [
        { type: "doc", id: "camera/changelog" },
        {
          type: "link",
          label: "asdocs",
          href: "https://docs.airnativeextensions.com/asdocs/camera/",
        },
        {
          type: "link",
          label: "Contact Support",
          href: "http://github.com/distriqt/ANE-Camera/issues/new",
        },
      ],
    },
  ],

  camerarollextended: [
    { type: "ref", id: "index" },
    { type: "doc", id: "camerarollextended/index" },
    {
      "Get Started": [
        "camerarollextended/add-the-extension",
        "camerarollextended/request-authorisation",
      ],
    },
    {
      Usage: [
        "camerarollextended/browse-for-an-asset",
        "camerarollextended/loading-an-asset",
        "camerarollextended/file-access",
        "camerarollextended/adding-files",
      ],
    },
    {
      Help: ["camerarollextended/migrating-to-androidx"],
    },
    {
      Other: [
        { type: "doc", id: "camerarollextended/changelog" },
        {
          type: "link",
          label: "asdocs",
          href: "https://docs.airnativeextensions.com/asdocs/camerarollextended/",
        },
        {
          type: "link",
          label: "Contact Support",
          href: "http://github.com/distriqt/ANE-CameraRollExtended/issues/new",
        },
      ],
    },
  ],

  cameraui: [
    { type: "ref", id: "index" },
    { type: "doc", id: "cameraui/index" },
    {
      "Get Started": [
        "cameraui/add-the-extension",
        "cameraui/requesting-authorisation",
      ],
    },
    {
      Usage: ["cameraui/capture-media", "cameraui/camera-ui-options"],
    },
    {
      Help: ["cameraui/migrating-to-androidx"],
    },
    {
      Other: [
        { type: "doc", id: "cameraui/changelog" },
        {
          type: "link",
          label: "asdocs",
          href: "https://docs.airnativeextensions.com/asdocs/cameraui/",
        },
        {
          type: "link",
          label: "Contact Support",
          href: "http://github.com/distriqt/ANE-CameraUI/issues/new",
        },
      ],
    },
  ],

  cloudstorage: [
    { type: "ref", id: "index" },
    { type: "doc", id: "cloudstorage/index" },
    {
      "Get Started": [
        "cloudstorage/add-the-extension",
        "cloudstorage/add-the-plugin",
      ],
    },
    {
      Usage: [
        "cloudstorage/key-value-storage",
        "cloudstorage/document-store",
        "cloudstorage/android-testing",
      ],
    },
    {
      Other: [
        { type: "doc", id: "cloudstorage/changelog" },
        {
          type: "link",
          label: "asdocs",
          href: "https://docs.airnativeextensions.com/asdocs/cloudstorage/",
        },
        {
          type: "link",
          label: "Contact Support",
          href: "http://github.com/distriqt/ANE-CloudStorage/issues/new",
        },
      ],
    },
  ],

  compass: [
    { type: "ref", id: "index" },
    { type: "doc", id: "compass/index" },
    {
      "Get Started": ["compass/add-the-extension"],
    },
    {
      Usage: [
        "compass/heading",
        "compass/request-authorisation",
        "compass/magnetic-field-sensor",
      ],
    },
    {
      Other: [
        { type: "doc", id: "compass/changelog" },
        {
          type: "link",
          label: "asdocs",
          href: "https://docs.airnativeextensions.com/asdocs/compass/",
        },
        {
          type: "link",
          label: "Contact Support",
          href: "http://github.com/distriqt/ANE-Compass/issues/new",
        },
      ],
    },
  ],

  contacts: [
    { type: "ref", id: "index" },
    { type: "doc", id: "contacts/index" },
    {
      "Get Started": [
        "contacts/add-the-extension",
        "contacts/request-authorisation",
      ],
    },
    {
      "Access the Contact List": [
        "contacts/retrieving-the-contact-list",
        "contacts/contact-images",
      ],
    },
    {
      "Contact Selection": ["contacts/contact-picker-ui"],
    },
    {
      Help: ["contacts/migrating-to-androidx"],
    },
    {
      Other: [
        { type: "doc", id: "contacts/changelog" },
        {
          type: "link",
          label: "asdocs",
          href: "https://docs.airnativeextensions.com/asdocs/contacts/",
        },
        {
          type: "link",
          label: "Contact Support",
          href: "http://github.com/distriqt/ANE-Contacts/issues/new",
        },
      ],
    },
  ],

  debug: [
    { type: "ref", id: "index" },
    { type: "doc", id: "debug/index" },
    {
      "Get Started": ["debug/add-the-extension"],
      "Usage": ["debug/usage"],
    },
    {
      Other: [
        { type: "doc", id: "debug/changelog" },
        {
          type: "link",
          label: "asdocs",
          href: "https://docs.airnativeextensions.com/asdocs/debug/",
        },
        {
          type: "link",
          label: "Contact Support",
          href: "http://github.com/distriqt/ANE-Debug/issues/new",
        },
      ],
    },
  ],

  devicemotion: [
    { type: "ref", id: "index" },
    { type: "doc", id: "devicemotion/index" },
    {
      "Get Started": ["devicemotion/add-the-extension"],
    },
    {
      Usage: [
        "devicemotion/register-for-updates",
        "devicemotion/algorithms-and-format",
      ],
    },
    {
      Other: [
        { type: "doc", id: "devicemotion/changelog" },
        {
          type: "link",
          label: "asdocs",
          href: "https://docs.airnativeextensions.com/asdocs/devicemotion/",
        },
        {
          type: "link",
          label: "Contact Support",
          href: "http://github.com/distriqt/ANE-DeviceMotion/issues/new",
        },
      ],
    },
  ],

  dialog: [
    { type: "ref", id: "index" },
    { type: "doc", id: "dialog/index" },
    {
      "Get Started": [
        "dialog/add-the-extension",
        "dialog/dialog-views-and-builders",
      ],
    },
    {
      Usage: [
        "dialog/toast",
        "dialog/alerts",
        "dialog/text-view-alert",
        "dialog/action-sheet",
        "dialog/progress-dialog",
        "dialog/activity-dialog",
        "dialog/custom-picker",
        "dialog/date-time-dialog",
      ],
    },
    {
      "Additional Features": ["dialog/air-fallback"],
    },
    {
      Help: ["dialog/migrating-to-androidx"],
    },
    {
      Other: [
        { type: "doc", id: "dialog/changelog" },
        {
          type: "link",
          label: "asdocs",
          href: "https://docs.airnativeextensions.com/asdocs/dialog/",
        },
        {
          type: "link",
          label: "Contact Support",
          href: "http://github.com/distriqt/ANE-Dialog/issues/new",
        },
      ],
    },
  ],

  dynamicicon: [
    { type: "ref", id: "index" },
    { type: "doc", id: "dynamicicon/index" },
    {
      "Get Started": [
        "dynamicicon/add-the-extension",
      ],
    },
    {
      Usage: [
        "dynamicicon/adding-icons",
        "dynamicicon/change-icon",
        "dynamicicon/packaging",
      ],
    },
    {
      Other: [
        { type: "doc", id: "dynamicicon/changelog" },
        {
          type: "link",
          label: "asdocs",
          href: "https://docs.airnativeextensions.com/asdocs/dynamicicon/",
        },
        {
          type: "link",
          label: "Contact Support",
          href: "http://github.com/distriqt/ANE-DyanmicIcon/issues/new",
        },
      ],
    },
  ],

  exceptions: [
    { type: "ref", id: "index" },
    { type: "doc", id: "exceptions/index" },
    { type: "doc", id: "exceptions/add-the-extension" },
    { type: "doc", id: "exceptions/usage" },
    {
      Other: [
        { type: "doc", id: "exceptions/changelog" },
        {
          type: "link",
          label: "asdocs",
          href: "https://docs.airnativeextensions.com/asdocs/exceptions/",
        },
        {
          type: "link",
          label: "Contact Support",
          href: "http://github.com/distriqt/ANE-Exceptions/issues/new",
        },
      ],
    },
  ],

  expansionfiles: [
    { type: "ref", id: "index" },
    { type: "doc", id: "expansionfiles/index" },
    {
      "Get Started": [
        "expansionfiles/add-the-extension",
        "expansionfiles/request-authorisation",
      ],
    },
    {
      "Setup your Expansion Files": [
        "expansionfiles/setup-licensing",
        "expansionfiles/uploading-expansion-files",
      ],
    },
    {
      Usage: ["expansionfiles/downloading-expansion-files"],
    },
    {
      "JOBB Files": [
        "expansionfiles/jobb-files",
        "expansionfiles/mounting-an-obb-file",
        "expansionfiles/reading-an-obb-file",
      ],
    },
    {
      Help: ["expansionfiles/migrating-to-androidx"],
    },
    {
      Other: [
        { type: "doc", id: "expansionfiles/changelog" },
        {
          type: "link",
          label: "asdocs",
          href: "https://docs.airnativeextensions.com/asdocs/expansionfiles/",
        },
        {
          type: "link",
          label: "Contact Support",
          href: "http://github.com/distriqt/ANE-ExpansionFiles/issues/new",
        },
      ],
    },
  ],

  facebookapi: [
    { type: "ref", id: "index" },
    { type: "doc", id: "facebookapi/index" },
    { type: "doc", id: "facebookapi/get-started" },
    {
      Core: [
        "facebookapi/core/overview",
        "facebookapi/core/add-the-extension",
        "facebookapi/core/initialise-the-extension",
        {
          "App Events": [
            "facebookapi/core/app-events/overview",
            "facebookapi/core/app-events/user-properties",
            "facebookapi/core/app-events/automatic-logging",
            "facebookapi/core/app-events/logging",
          ],
        },
        {
          "Graph API": [
            "facebookapi/core/graph-api/overview",
            "facebookapi/core/graph-api/basics",
            "facebookapi/core/graph-api/batch",
            "facebookapi/core/graph-api/examples",
          ],
        },
        {
          "App Links": [
            "facebookapi/core/app-links/overview",
            "facebookapi/core/app-links/support",
            "facebookapi/core/app-links/handling-incoming-links",
          ],
        },
      ],
    },
    {
      Login: [
        "facebookapi/login/overview",
        "facebookapi/login/add-the-extension",
        "facebookapi/login/facebook-login",
        "facebookapi/login/access-token",
      ],
    },
    {
      Share: [
        "facebookapi/share/overview",
        "facebookapi/share/add-the-extension",
        "facebookapi/share/content",
        "facebookapi/share/share-dialog",
      ],
    },
    {
      "Gaming Services": [
        "facebookapi/gamingservices/overview",
        "facebookapi/gamingservices/add-the-extension",
        "facebookapi/gamingservices/game-request-dialog",
        "facebookapi/gamingservices/friend-finder-dialog",
      ],
    },
    {
      Help: [
        "facebookapi/signing",
        "facebookapi/migrating-to-version-10",
        "facebookapi/migrating-to-version-9",
        "facebookapi/migrating-to-version-8",
        "facebookapi/migrating-to-androidx",
      ],
    },
    {
      Other: [
        { type: "doc", id: "facebookapi/changelog" },
        {
          type: "link",
          label: "asdocs",
          href: "https://docs.airnativeextensions.com/asdocs/facebookapi/",
        },
        {
          type: "link",
          label: "Contact Support",
          href: "http://github.com/distriqt/ANE-FacebookAPI/issues/new",
        },
      ],
    },
  ],

  "facebookapi-legacy": [
    { type: "ref", id: "index" },
    { type: "doc", id: "facebookapi-legacy/index" },
    {
      "Setup Facebook": [
        "facebookapi-legacy/facebook-application",
        "facebookapi-legacy/facebook-android-app",
        "facebookapi-legacy/facebook-ios-app",
        "facebookapi-legacy/advanced-facebook-settings",
      ],
    },
    {
      "Setup the Extension": [
        "facebookapi-legacy/add-the-extension",
        "facebookapi-legacy/initialise-the-extension",
        "facebookapi-legacy/initialise-facebook-app",
      ],
    },
    {
      "Facebook Login": [
        "facebookapi-legacy/login---overview",
        "facebookapi-legacy/login---facebook-login",
        "facebookapi-legacy/login---access-token",
      ],
    },
    {
      "App Events": [
        "facebookapi-legacy/app-events---overview",
        "facebookapi-legacy/app-events---user-properties",
        "facebookapi-legacy/app-events---automatic-logging",
        "facebookapi-legacy/app-events---logging",
      ],
    },
    {
      Sharing: [
        "facebookapi-legacy/sharing---overview",
        "facebookapi-legacy/sharing---content",
        "facebookapi-legacy/sharing---share-dialog",
        "facebookapi-legacy/sharing---message-dialog",
        "facebookapi-legacy/sharing---open-graph-stories",
        "facebookapi-legacy/sharing---share-api",
      ],
    },
    {
      "App Links": [
        "facebookapi-legacy/app-links---overview",
        "facebookapi-legacy/app-links---incoming-links",
      ],
    },
    {
      Games: [
        "facebookapi-legacy/games---overview",
        "facebookapi-legacy/games---game-request-dialog",
      ],
    },
    {
      "Graph API": [
        "facebookapi-legacy/graph-api---overview",
        "facebookapi-legacy/graph-api---basics",
        "facebookapi-legacy/graph-api---batch",
        "facebookapi-legacy/graph-api---examples",
      ],
    },
    {
      Troubleshooting: [
        "facebookapi-legacy/migrating-to-androidx",
        "facebookapi-legacy/account-kit---deprecation",
      ],
    },
    {
      Other: [
        { type: "doc", id: "facebookapi-legacy/changelog" },
        {
          type: "link",
          label: "asdocs",
          href: "https://docs.airnativeextensions.com/asdocs/facebookapi-legacy/",
        },
        {
          type: "link",
          label: "Contact Support",
          href: "http://github.com/distriqt/ANE-FacebookAPI/issues/new",
        },
      ],
    },
  ],

  firebase: [
    { type: "ref", id: "index" },
    { type: "doc", id: "firebase/index" },
    {
      "Setup Firebase for your application": [
        "firebase/setup/create-a-firebase-project",
        "firebase/setup/configuration-files",
      ],
    },
    {
      "Core / Analytics": [
        "firebase/core/introduction",
        "firebase/core/add-the-extensions",
        "firebase/core/initialise",
        "firebase/core/analytics",
      ],
    },
    {
      type: "category",
      label: "Develop",
      collapsed: false,
      items: [
        {
          Authentication: [
            "firebase/auth/introduction",
            "firebase/auth/add-the-extensions",
            "firebase/auth/initialise",
            "firebase/auth/manage-users",
            {
              Providers: [
                "firebase/auth/provider/email",
                "firebase/auth/provider/email-link",
                "firebase/auth/provider/anonymous",
                "firebase/auth/provider/google-identity",
                "firebase/auth/provider/github",
                "firebase/auth/provider/microsoft",
                "firebase/auth/provider/apple",
                "firebase/auth/provider/facebook",
                "firebase/auth/provider/twitter",
                "firebase/auth/provider/phone",
                "firebase/auth/provider/custom-auth",
              ],
            },
            "firebase/auth/link-multiple-providers",
          ],
        },
        {
          "Realtime Database": [
            "firebase/database/introduction",
            "firebase/database/add-the-extensions",
            "firebase/database/initialise",
            "firebase/database/configure-database-rules",
            {
              "Read and Write Data": [
                "firebase/database/write-data",
                "firebase/database/read-data-and-change-events",
                "firebase/database/delete-data",
                "firebase/database/transactions",
                "firebase/database/lists",
              ],
            },
            {
              Offline: [
                "firebase/database/offline",
                "firebase/database/disconnect",
              ],
            },
          ],
        },
        {
          "Cloud Firestore": [
            "firebase/firestore/introduction",
            "firebase/firestore/add-the-extension",
            {
              "Add and manage data": [
                {
                  type: "link",
                  label: "Data model (external)",
                  href: "https://firebase.google.com/docs/firestore/data-model",
                },
                {
                  type: "link",
                  label: "Structure data (external)",
                  href: "https://firebase.google.com/docs/firestore/manage-data/structure-data",
                },
                {
                  type: "link",
                  label: "Data types (external)",
                  href: "https://firebase.google.com/docs/firestore/manage-data/data-types",
                },
                "firebase/firestore/add-data",
                "firebase/firestore/transactions-and-batched-writes",
                "firebase/firestore/delete-data",
              ],
            },
            {
              "Query data": [
                "firebase/firestore/get-data",
                "firebase/firestore/get-realtime-updates",
                "firebase/firestore/perform-simple-and-compound-queries",
                "firebase/firestore/order-and-limit-data",
                "firebase/firestore/paginate-data-with-query-cursors",
                {
                  type: "link",
                  label: "Index types (external)",
                  href: "https://firebase.google.com/docs/firestore/query-data/index-overview",
                },
                {
                  type: "link",
                  label: "Manage indexes (external)",
                  href: "https://firebase.google.com/docs/firestore/query-data/indexing",
                },
              ],
            },
            {
              Security: [
                {
                  type: "link",
                  label: "Get started (external)",
                  href: "https://firebase.google.com/docs/firestore/security/get-started",
                },
              ],
            },
            "firebase/firestore/enable-offline-data",
            {
              "Further reading": [
                {
                  type: "link",
                  label: "Solutions (external)",
                  href: "https://firebase.google.com/docs/firestore/solutions/",
                },
                {
                  type: "link",
                  label: "Cloud Functions (external)",
                  href: "https://firebase.google.com/docs/firestore/extend-with-functions",
                },
                {
                  type: "link",
                  label: "User REST API (external)",
                  href: "https://firebase.google.com/docs/firestore/use-rest-api",
                },
              ],
            },
          ],
        },
        {
          Storage: [
            "firebase/storage/introduction",
            "firebase/storage/add-the-extensions",
            "firebase/storage/references",
            "firebase/storage/upload-files",
            "firebase/storage/download-files",
            "firebase/storage/file-metadata",
            "firebase/storage/delete-files",
            "firebase/storage/list-files",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Quality",
      collapsed: false,
      items: [
        {
          Crashlytics: [
            "firebase/crashlytics/introduction",
            "firebase/crashlytics/add-the-extension",
            "firebase/crashlytics/usage",
            "firebase/crashlytics/testing",
            "firebase/crashlytics/uploading-dsyms",
          ],
        },
        {
          "Performance Monitoring": [
            "firebase/performance/introduction",
            "firebase/performance/add-the-extension",
            "firebase/performance/traces",
            "firebase/performance/disable-monitoring",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Grow",
      collapsed: false,
      items: [
        {
          "Cloud Messaging": [
            "firebase/fcm/introduction",
            // { type: "ref", id: "pushnotifications/index" }
          ],
        },
        {
          "Remote Config": [
            "firebase/remoteconfig/introduction",
            "firebase/remoteconfig/set-initial-values",
            "firebase/remoteconfig/add-the-extensions",
            "firebase/remoteconfig/initialise",
            "firebase/remoteconfig/usage",
          ],
        },
        {
          "Dynamic Links": [
            "firebase/dynamiclinks/introduction",
            "firebase/dynamiclinks/add-the-extension",
            "firebase/dynamiclinks/initialise",
            "firebase/dynamiclinks/create-dynamic-links",
            "firebase/dynamiclinks/receive-dynamic-links",
            "firebase/dynamiclinks/testing",
          ],
        },
      ],
    },
    {
      "Migration Guides": [
        "firebase/migrating-to-v6",
        "firebase/migrating-to-v4",
      ],
    },
    {
      Other: [
        {
          type: "link",
          label: "Firebase Console",
          href: "https://console.firebase.google.com/",
        },
        { type: "doc", id: "firebase/changelog" },
        {
          type: "link",
          label: "asdocs",
          href: "https://docs.airnativeextensions.com/asdocs/firebase/",
        },
        {
          type: "link",
          label: "Contact Support",
          href: "http://github.com/distriqt/ANE-Firebase/issues/new",
        },
      ],
    },
  ],

  flurry: [
    { type: "ref", id: "index" },
    { type: "doc", id: "flurry/index" },
    {
      "Get Started": [
        "flurry/add-the-extension",
        "flurry/initialise-the-extension",
      ],
    },
    {
      Analytics: [
        "flurry/analytics-sessions",
        "flurry/analytics-events",
        "flurry/analytics-standard-events",
        "flurry/user-properties",
      ],
    },
    {
      "Migration Guides": ["flurry/migrating-to-v6"],
    },
    {
      Other: [
        { type: "doc", id: "flurry/changelog" },
        {
          type: "link",
          label: "asdocs",
          href: "https://docs.airnativeextensions.com/asdocs/flurry/",
        },
        {
          type: "link",
          label: "Contact Support",
          href: "http://github.com/distriqt/ANE-Flurry/issues/new",
        },
      ],
    },
  ],

  forcetouch: [
    { type: "ref", id: "index" },
    { type: "doc", id: "forcetouch/index" },
    {
      "Get Started": ["forcetouch/add-the-extension"],
    },
    {
      Usage: ["forcetouch/force-touch-events", "forcetouch/app-shortcuts"],
    },
    {
      Other: [
        { type: "doc", id: "forcetouch/changelog" },
        {
          type: "link",
          label: "asdocs",
          href: "https://docs.airnativeextensions.com/asdocs/forcetouch/",
        },
        {
          type: "link",
          label: "Contact Support",
          href: "http://github.com/distriqt/ANE-ForceTouch/issues/new",
        },
      ],
    },
  ],

  gameservices: [
    { type: "ref", id: "index" },
    { type: "doc", id: "gameservices/index" },
    {
      "Setup Services": [
        "gameservices/setup-gamecenter",
        "gameservices/setup-google-play-games",
      ],
    },
    {
      Integration: [
        "gameservices/add-the-extension",
        "gameservices/initialise-the-extension",
        "gameservices/initialise-the-service",
      ],
    },
    {
      Usage: [
        "gameservices/sign-in",
        "gameservices/leaderboards",
        "gameservices/achievements",
        {
          "Saved Games": [
            "gameservices/saved-games",
            "gameservices/saved-games---conflicts",
          ],
        },
        {
          "Turn Based Multiplayer": [
            "gameservices/turn-based-multiplayer---key-concepts",
            "gameservices/turn-based-multiplayer---implementation-overview",
            "gameservices/turn-based-multiplayer---implementation",
            "gameservices/turn-based-multiplayer---invitations",
          ],
        },
        "gameservices/quests-and-events",
        "gameservices/screen-recording",
        {
          "User Interface": [
            "gameservices/user-interface",
            "gameservices/access-point",
          ],
        },
      ],
    },
    {
      Help: [
        "gameservices/troubleshooting",
        "gameservices/migrating-to-androidx",
      ],
    },
    {
      Other: [
        { type: "doc", id: "gameservices/changelog" },
        {
          type: "link",
          label: "asdocs",
          href: "https://docs.airnativeextensions.com/asdocs/gameservices/",
        },
        {
          type: "link",
          label: "Contact Support",
          href: "http://github.com/distriqt/ANE-GameServices/issues/new",
        },
      ],
    },
  ],

  googleanalytics: [
    { type: "ref", id: "index" },
    { type: "doc", id: "googleanalytics/index" },
    {
      "Setup the Extension": [
        "googleanalytics/add-the-extension",
        "googleanalytics/tracking-ids",
      ],
    },
    {
      Usage: [
        "googleanalytics/create-a-tracker",
        "googleanalytics/sending-hits-and-events",
        "googleanalytics/ecommerce",
        "googleanalytics/enhanced-ecommerce",
        "googleanalytics/notes",
        "googleanalytics/install-referrer",
      ],
    },
    {
      Help: ["googleanalytics/migrating-to-androidx"],
    },
    {
      Other: [
        { type: "doc", id: "googleanalytics/changelog" },
        {
          type: "link",
          label: "asdocs",
          href: "https://docs.airnativeextensions.com/asdocs/googleanalytics/",
        },
        {
          type: "link",
          label: "Contact Support",
          href: "http://github.com/distriqt/ANE-GoogleAnalytics/issues/new",
        },
      ],
    },
  ],

  googleidentity: [
    { type: "ref", id: "index" },
    { type: "doc", id: "googleidentity/index" },
    {
      "Setup your Google Project": [
        "googleidentity/google-developers-console-project",
        "googleidentity/android-certificate",
        "googleidentity/google-identity-options",
      ],
    },
    {
      "Setup the Extension": ["googleidentity/add-the-extension"],
    },
    {
      Usage: [
        "googleidentity/setup",
        "googleidentity/signing-in",
        "googleidentity/disconnect",
        "googleidentity/user-information",
      ],
    },
    {
      Additional: [
        "googleidentity/authenticate-with-a-backend-server",
        "googleidentity/enabling-server-side-access",
      ],
    },
    {
      Help: [
        "googleidentity/troubleshooting",
        "googleidentity/migrating-to-androidx",
        "googleidentity/migrating-from-version-1",
      ],
    },
    {
      Other: [
        { type: "doc", id: "googleidentity/changelog" },
        {
          type: "link",
          label: "asdocs",
          href: "https://docs.airnativeextensions.com/asdocs/googleidentity/",
        },
        {
          type: "link",
          label: "Contact Support",
          href: "http://github.com/distriqt/ANE-GoogleIdentity/issues/new",
        },
      ],
    },
  ],

  googletagmanager: [
    { type: "ref", id: "index" },
    { type: "doc", id: "googletagmanager/index" },
    "googletagmanager/google-tag-manager-setup",
    "googletagmanager/add-the-extension",
    {
      Usage: ["googletagmanager/containers", "googletagmanager/datalayer"],
    },
    {
      Other: [
        { type: "doc", id: "googletagmanager/changelog" },
        {
          type: "link",
          label: "asdocs",
          href: "https://docs.airnativeextensions.com/asdocs/googletagmanager/",
        },
        {
          type: "link",
          label: "Contact Support",
          href: "http://github.com/distriqt/ANE-GoogleTagManager/issues/new",
        },
      ],
    },
  ],

  gyroscope: [
    { type: "ref", id: "index" },
    { type: "doc", id: "gyroscope/index" },
    "gyroscope/add-the-extension",
    "gyroscope/sensor-updates",
    {
      Other: [
        { type: "doc", id: "gyroscope/changelog" },
        {
          type: "link",
          label: "asdocs",
          href: "https://docs.airnativeextensions.com/asdocs/gyroscope/",
        },
        {
          type: "link",
          label: "Contact Support",
          href: "http://github.com/distriqt/ANE-Gyroscope/issues/new",
        },
      ],
    },
  ],

  idfa: [
    { type: "ref", id: "index" },
    { type: "doc", id: "idfa/index" },
    {
      "Get Started": ["idfa/add-the-extension"],
    },
    {
      Usage: ["idfa/get-advertising-identifier"],
    },
    {
      Help: ["idfa/migrating", "idfa/migrating-to-androidx"],
    },
    {
      Other: [
        { type: "doc", id: "idfa/changelog" },
        {
          type: "link",
          label: "asdocs",
          href: "https://docs.airnativeextensions.com/asdocs/idfa/",
        },
        {
          type: "link",
          label: "Contact Support",
          href: "http://github.com/distriqt/ANE-IDFA/issues/new",
        },
      ],
    },
  ],

  image: [
    { type: "ref", id: "index" },
    { type: "doc", id: "image/index" },
    {
      "Get Started": ["image/add-the-extension"],
    },
    {
      Usage: [
        "image/request-authorisation",
        "image/saving-bitmapdata-to-file",
        "image/loading-bitmapdata-from-file",
        "image/encoding-bitmapdata-to-bytearray",
        "image/decoding-bytearray-to-bitmapdata",
        "image/saving-bitmapdata-to-the-camera-roll",
        "image/transformations",
        "image/capturing-a-screenshot",
      ],
    },
    {
      Help: ["image/migrating-to-androidx"],
    },
    {
      Other: [
        { type: "doc", id: "image/changelog" },
        {
          type: "link",
          label: "asdocs",
          href: "https://docs.airnativeextensions.com/asdocs/image/",
        },
        {
          type: "link",
          label: "Contact Support",
          href: "http://github.com/distriqt/ANE-Image/issues/new",
        },
      ],
    },
  ],

  inappbilling: [
    { type: "ref", id: "index" },
    { type: "doc", id: "inappbilling/index" },
    "inappbilling/overview",
    "inappbilling/add-the-extension",
    {
      "Billing Services": [
        {
          "Apple In-App Purchases": [
            "inappbilling/add-the-extension",
            "inappbilling/apple/apple-in-app-purchases",
            "inappbilling/apple/server-side-verification",
            "inappbilling/apple/testing",
            "inappbilling/apple/troubleshooting",
          ],
        },
        {
          "Google Play Billing": [
            "inappbilling/add-the-extension",
            "inappbilling/google/google-play-inapp-billing"
          ],
        },
        {
          "Amazon In-App Purchasing": [
            "inappbilling/amazon/add-the-extension",
            "inappbilling/amazon/amazon-in-app-purchasing",
            "inappbilling/amazon/testing",
          ],
        },
        {
          "Huawei AppGallery": [
            "inappbilling/huawei/add-the-extension",
            "inappbilling/huawei/huawei-appgallery", 
            "inappbilling/huawei/testing"
          ],
        },
        {
          "Samsung In-App Purchases": [
            "inappbilling/samsung/add-the-extension",
            "inappbilling/samsung/samsung-in-app-purchases",
            "inappbilling/samsung/testing",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Usage",
      collapsed: false,
      items: [
        "inappbilling/billing-service",
        "inappbilling/products",
        "inappbilling/make-a-purchase",
        "inappbilling/pending-purchases",
        "inappbilling/restore-purchases",
        "inappbilling/get-purchases",
        "inappbilling/consuming-purchases",
        "inappbilling/change-a-purchase",
        "inappbilling/promotions",
        {
          "Subscription Offers": ["inappbilling/subscription-offers", "inappbilling/introductory-prices"],
        },
        "inappbilling/testing",
      ],
    },
    {
      "In-App Updates": ["inappbilling/in-app-updates"],
    },
    {
      Help: [
        "inappbilling/migration-v14",
        "inappbilling/migration"
      ],
    },
    {
      Advanced: ["inappbilling/user-data"],
    },
    {
      Other: [
        { type: "doc", id: "inappbilling/changelog" },
        {
          type: "link",
          label: "asdocs",
          href: "https://docs.airnativeextensions.com/asdocs/inappbilling/",
        },
        {
          type: "link",
          label: "Contact Support",
          href: "http://github.com/distriqt/ANE-InAppBilling/issues/new",
        },
      ],
    },
  ],
  

  ironsource: [
    { type: "ref", id: "index" },
    { type: "doc", id: "ironsource/index" },
    {
      "Get Started": ["ironsource/add-the-extension"],
    },
    {
      Usage: [
        "ironsource/initialisation",
        "ironsource/interstitials",
        "ironsource/rewarded-video",
        "ironsource/banner-ads",
        "ironsource/offerwall",
        "ironsource/errors",
      ],
    },
    {
      Mediation: [
        "ironsource/mediation/adcolony/adcolony",
        "ironsource/mediation/admob/admob",
        "ironsource/mediation/amazon/amazon",
        "ironsource/mediation/applovin/applovin",
        "ironsource/mediation/chartboost/chartboost",
        "ironsource/mediation/facebook-audience/facebook-audience",
        "ironsource/mediation/tapjoy/tapjoy",
        "ironsource/mediation/unityads/unityads",
        "ironsource/mediation/vungle/vungle",
      ],
    },
    {
      Help: ["ironsource/migrating-to-androidx"],
    },
    {
      Other: [
        { type: "doc", id: "ironsource/changelog" },
        {
          type: "link",
          label: "asdocs",
          href: "https://docs.airnativeextensions.com/asdocs/ironsource/",
        },
        {
          type: "link",
          label: "Contact Support",
          href: "http://github.com/distriqt/ANE-IronSource/issues/new",
        },
      ],
    },
  ],

  jobscheduler: [
    { type: "ref", id: "index" },
    { type: "doc", id: "jobscheduler/index" },
    { type: "doc", id: "jobscheduler/add-the-extension" },
    { type: "doc", id: "jobscheduler/application-termination" },
    {
      Other: [
        { type: "doc", id: "jobscheduler/changelog" },
        {
          type: "link",
          label: "asdocs",
          href: "https://docs.airnativeextensions.com/asdocs/jobscheduler/",
        },
        {
          type: "link",
          label: "Contact Support",
          href: "http://github.com/distriqt/ANE-JobScheduler/issues/new",
        },
      ],
    },
  ],

  localauth: [
    { type: "ref", id: "index" },
    { type: "doc", id: "localauth/index" },
    {
      "Get Started": ["localauth/add-the-extension"],
    },
    {
      Usage: [
        "localauth/biometric-authentication",
        "localauth/request-authorisation",
      ],
    },
    {
      Other: [
        { type: "doc", id: "localauth/changelog" },
        {
          type: "link",
          label: "asdocs",
          href: "https://docs.airnativeextensions.com/asdocs/localauth/",
        },
        {
          type: "link",
          label: "Contact Support",
          href: "http://github.com/distriqt/ANE-LocalAuth/issues/new",
        },
      ],
    },
  ],

  location: [
    { type: "ref", id: "index" },
    { type: "doc", id: "location/index" },
    {
      "Get Started": [
        "location/add-the-extension",
        "location/initialise-the-extension",
      ],
    },
    {
      Usage: [
        "location/request-authorisation",
        "location/device-location-settings",
        "location/location-monitoring",
        "location/geofences",
        "location/geocoding",
        "location/location-utils---distance",
      ],
    },
    {
      Testing: ["location/ios-location-simulation"],
    },
    {
      Help: ["location/migrating-to-androidx"],
    },
    {
      Other: [
        { type: "doc", id: "localauth/changelog" },
        {
          type: "link",
          label: "asdocs",
          href: "https://docs.airnativeextensions.com/asdocs/localauth/",
        },
        {
          type: "link",
          label: "Contact Support",
          href: "http://github.com/distriqt/ANE-LocalAuth/issues/new",
        },
      ],
    },
  ],

  mediaplayer: [
    { type: "ref", id: "index" },
    { type: "doc", id: "mediaplayer/index" },
    {
      "Get Started": ["mediaplayer/add-the-extension"],
    },
    {
      "Media Player View": [
        "mediaplayer/media-player---create",
        "mediaplayer/media-player---loading-media",
        "mediaplayer/media-player---control-playback",
        "mediaplayer/media-player---playback-events",
      ],
    },
    {
      "Audio Player": [
        "mediaplayer/audio-player",
        "mediaplayer/audio-player---background-audio",
      ],
    },
    {
      "Sound Pool": ["mediaplayer/sound-pool"],
    },
    {
      "System Integration": [
        "mediaplayer/remote-command-center",
        "mediaplayer/system-control",
      ],
    },
    {
      Troubleshooting: [
        "mediaplayer/migrating-to-androidx",
        "mediaplayer/migrating-from-version-1",
      ],
    },
    {
      Other: [
        { type: "doc", id: "mediaplayer/changelog" },
        {
          type: "link",
          label: "asdocs",
          href: "https://docs.airnativeextensions.com/asdocs/mediaplayer/",
        },
        {
          type: "link",
          label: "Contact Support",
          href: "http://github.com/distriqt/ANE-MediaPlayer/issues/new",
        },
      ],
    },
  ],

  memory: [
    { type: "ref", id: "index" },
    { type: "doc", id: "memory/index" },
    { type: "doc", id: "memory/add-the-extension" },
    { type: "doc", id: "memory/usage" },
    {
      Other: [
        { type: "doc", id: "memory/changelog" },
        {
          type: "link",
          label: "asdocs",
          href: "https://docs.airnativeextensions.com/asdocs/memory/",
        },
        {
          type: "link",
          label: "Contact Support",
          href: "http://github.com/distriqt/ANE-Memory/issues/new",
        },
      ],
    },
  ],

  message: [
    { type: "ref", id: "index" },
    { type: "doc", id: "message/index" },
    {
      "Get Started": ["message/add-the-extension"],
    },
    {
      Usage: ["message/email", "message/sms"],
    },
    {
      Troubleshooting: ["message/migrating-to-androidx"],
    },
    {
      Other: [
        { type: "doc", id: "message/changelog" },
        {
          type: "link",
          label: "asdocs",
          href: "https://docs.airnativeextensions.com/asdocs/message/",
        },
        {
          type: "link",
          label: "Contact Support",
          href: "http://github.com/distriqt/ANE-Message/issues/new",
        },
      ],
    },
  ],

  nativemaps: [
    { type: "ref", id: "index" },
    { type: "doc", id: "nativemaps/index" },
    {
      "Setup your mapping provider": [
        "nativemaps/apple-maps",
        "nativemaps/google-maps",
      ],
    },
    {
      "Setup the Extension": [
        "nativemaps/add-the-extension",
        "nativemaps/initialise-the-extension",
        "nativemaps/request-authorisation",
      ],
    },
    {
      Usage: [
        "nativemaps/create-a-map",
        "nativemaps/controlling-the-view",
        "nativemaps/touch-events",
        {
          Overlays: [
            "nativemaps/overlays",
            "nativemaps/overlays---markers",
            "nativemaps/overlays---polylines",
            "nativemaps/overlays---polygons",
          ],
        },
      ],
    },
    {
      Troubleshooting: ["nativemaps/migrating-to-androidx"],
    },
    {
      Other: [
        { type: "doc", id: "nativemaps/changelog" },
        {
          type: "link",
          label: "asdocs",
          href: "https://docs.airnativeextensions.com/asdocs/nativemaps/",
        },
        {
          type: "link",
          label: "Contact Support",
          href: "http://github.com/distriqt/ANE-NativeMaps/issues/new",
        },
      ],
    },
  ],

  nativetext: [
    { type: "ref", id: "index" },
    { type: "doc", id: "nativetext/index" },
    {
      "Get Started": [
        "nativetext/add-the-extension",
      ],
    },
    {
      Usage: [
        "nativetext/keyboard-input",
      ],
    },
    {
      Other: [
        { type: "doc", id: "nativetext/changelog" },
        {
          type: "link",
          label: "asdocs",
          href: "https://docs.airnativeextensions.com/asdocs/nativetext/",
        },
        {
          type: "link",
          label: "Contact Support",
          href: "http://github.com/airnativeextensions/ANE-NativeText/issues/new",
        },
      ],
    },
  ],

  nativewebview: [
    { type: "ref", id: "index" },
    { type: "doc", id: "nativewebview/index" },
    {
      "Get Started": [
        "nativewebview/add-the-extension",
        "nativewebview/initialise-the-extension",
      ],
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
        "nativewebview/removing-the-webview",
      ],
    },
    {
      "Other Features": ["nativewebview/browser-view"],
    },
    {
      Troubleshooting: [
        "nativewebview/migrating-to-androidx",
        "nativewebview/migrating-to-v5",
      ],
    },
    {
      Other: [
        { type: "doc", id: "nativewebview/changelog" },
        {
          type: "link",
          label: "asdocs",
          href: "https://docs.airnativeextensions.com/asdocs/nativewebview/",
        },
        {
          type: "link",
          label: "Contact Support",
          href: "http://github.com/distriqt/ANE-NativeWebView/issues/new",
        },
      ],
    },
  ],

  networkinfo: [
    { type: "ref", id: "index" },
    { type: "doc", id: "networkinfo/index" },
    {
      "Get Started": ["networkinfo/add-the-extension"],
    },
    {
      Usage: ["networkinfo/network-change-monitoring", "networkinfo/telephony"],
    },
    {
      Other: [
        { type: "doc", id: "networkinfo/changelog" },
        {
          type: "link",
          label: "asdocs",
          href: "https://docs.airnativeextensions.com/asdocs/networkinfo/",
        },
        {
          type: "link",
          label: "Contact Support",
          href: "http://github.com/distriqt/ANE-NetworkInfo/issues/new",
        },
      ],
    },
  ],

  nfc: [
    { type: "ref", id: "index" },
    { type: "doc", id: "nfc/index" },
    {
      "Get Started": ["nfc/add-the-extension", "nfc/add-the-plugin"],
    },
    {
      Scanning: ["nfc/scanning", "nfc/dispatch-mode", "nfc/reader-mode"],
    },
    {
      Other: [
        { type: "doc", id: "nfc/changelog" },
        {
          type: "link",
          label: "asdocs",
          href: "https://docs.airnativeextensions.com/asdocs/nfc/",
        },
        {
          type: "link",
          label: "Contact Support",
          href: "http://github.com/distriqt/ANE-NFC/issues/new",
        },
      ],
    },
  ],

  notifications: [
    { type: "ref", id: "index" },
    { type: "doc", id: "notifications/index" },
    {
      "Get Started": [
        "notifications/add-the-extension",
        "notifications/add-the-extension---windows",
        "notifications/request-authorisation",
        "notifications/setup-your-service",
      ],
    },
    {
      Notifications: [
        "notifications/register-for-notifications",
        "notifications/displaying-notifications",
        "notifications/notification-types",
        "notifications/notification-icons",
        "notifications/emojis",
        "notifications/sounds",
        "notifications/receiving-notifications",
        "notifications/delay-and-repeat-interval",
        "notifications/cancel-notifications",
      ],
    },
    {
      "Other features": ["notifications/set-badge-number"],
    },
    {
      Troubleshooting: [
        "notifications/migrating-to-androidx",
        "notifications/migrating-to-6.3",
        "notifications/migrating-to-6.4",
      ],
    },
    {
      Other: [
        { type: "doc", id: "notifications/changelog" },
        {
          type: "link",
          label: "asdocs",
          href: "https://docs.airnativeextensions.com/asdocs/notifications/",
        },
        {
          type: "link",
          label: "Contact Support",
          href: "http://github.com/distriqt/ANE-Notifications/issues/new",
        },
      ],
    },
  ],

  ocr: [
    { type: "ref", id: "index" },
    { type: "doc", id: "ocr/index" },
    {
      "Get Started": ["ocr/add-the-extension", "ocr/training-data"],
    },
    {
      Usage: ["ocr/recognising-text", "ocr/tips-for-improving-ocr-results"],
    },
    {
      Troubleshooting: ["ocr/migrating-to-androidx"],
    },
    {
      Other: [
        { type: "doc", id: "ocr/changelog" },
        {
          type: "link",
          label: "asdocs",
          href: "https://docs.airnativeextensions.com/asdocs/ocr/",
        },
        {
          type: "link",
          label: "Contact Support",
          href: "http://github.com/distriqt/ANE-OCR/issues/new",
        },
      ],
    },
  ],

  packagemanager: [
    { type: "ref", id: "index" },
    { type: "doc", id: "packagemanager/index" },
    {
      "Get Started": ["packagemanager/add-the-extension"],
    },
    {
      Usage: [
        "packagemanager/package-events",
        "packagemanager/installing-apps",
        "packagemanager/installed-application-info",
      ],
    },
    {
      Troubleshooting: ["packagemanager/migrating-to-androidx"],
    },
    {
      Other: [
        { type: "doc", id: "packagemanager/changelog" },
        {
          type: "link",
          label: "asdocs",
          href: "https://docs.airnativeextensions.com/asdocs/packagemanager/",
        },
        {
          type: "link",
          label: "Contact Support",
          href: "http://github.com/distriqt/ANE-PackageManager/issues/new",
        },
      ],
    },
  ],

  pdfreader: [
    { type: "ref", id: "index" },
    { type: "doc", id: "pdfreader/index" },
    {
      "Get Started": ["pdfreader/add-the-extension"],
    },
    {
      Usage: ["pdfreader/create-a-pdf-view", "pdfreader/pages"],
    },
    {
      Troubleshooting: ["pdfreader/migrating-to-androidx"],
    },
    {
      Other: [
        { type: "doc", id: "pdfreader/changelog" },
        {
          type: "link",
          label: "asdocs",
          href: "https://docs.airnativeextensions.com/asdocs/pdfreader/",
        },
        {
          type: "link",
          label: "Contact Support",
          href: "http://github.com/distriqt/ANE-PDFReader/issues/new",
        },
      ],
    },
  ],

  permissions: [
    { type: "ref", id: "index" },
    { type: "doc", id: "permissions/index" },
    {
      "Get Started": ["permissions/add-the-extension"],
    },
    {
      Usage: [
        "permissions/set-permissions",
        "permissions/requesting-access",
        "permissions/file-folder-access", 
        "permissions/system-settings",
      ],
    },
    {
      Troubleshooting: ["permissions/migrating-to-androidx"],
    },
    {
      Other: [
        { type: "doc", id: "permissions/changelog" },
        {
          type: "link",
          label: "asdocs",
          href: "https://docs.airnativeextensions.com/asdocs/permissions/",
        },
        {
          type: "link",
          label: "Contact Support",
          href: "http://github.com/distriqt/ANE-Permissions/issues/new",
        },
      ],
    },
  ],

  pushnotifications: [
    { type: "ref", id: "index" },
    { type: "doc", id: "pushnotifications/index" },
    "pushnotifications/add-the-extension",
    {
      "Notification services": [
        {
          "Apple Push Notification Service": [
            "pushnotifications/apple/add-the-extension",
            "pushnotifications/apple/apple-push-notification-service",
          ],
        },
        {
          "Firebase Messaging": [
            "pushnotifications/firebase/add-the-extension",
            "pushnotifications/firebase/firebase-cloud-messaging",
            "pushnotifications/migrating-to-v10.1",
          ],
        },
        {
          "One Signal": [
            "pushnotifications/onesignal/add-the-extension",
            "pushnotifications/onesignal/onesignal",
            "pushnotifications/migrating-to-v10.2",
            "pushnotifications/migrating-to-v11.2",
            "pushnotifications/migrating-to-v11.3",
          ],
        },
        {
          Windows: [
            "pushnotifications/windows/add-the-extension",
            "pushnotifications/windows/windows-notification-service",
          ],
        },
        "pushnotifications/azure/azure-notifications",
        "pushnotifications/pushy/pushy",
      ],
    },
    {
      "Setup, authorisation, and registration": [
        "pushnotifications/setup-your-service",
        {
          "Service Type Details": [
            "pushnotifications/azure/setup-your-service",
            "pushnotifications/onesignal/setup-your-service",
          ],
        },
        "pushnotifications/request-authorisation",
        "pushnotifications/register-for-notifications",
        "pushnotifications/topics",
        "pushnotifications/tags",
        "pushnotifications/user-consent",
        "pushnotifications/inapp-messaging",
      ],
    },
    {
      Notifications: [
        "pushnotifications/receiving-notifications",
        "pushnotifications/icons",
        "pushnotifications/handling-startup-notifications",
        "pushnotifications/notification-scenarios",
        "pushnotifications/sounds",
      ],
    },
    {
      "Other features": ["pushnotifications/set-badge-number"],
    },
    {
      Payloads: [
        "pushnotifications/apple/ios-apns-payload",
        "pushnotifications/firebase/fcm-gcm-payload",
        "pushnotifications/windows/windows-wns-payload",
        "pushnotifications/pushy/pushy-payload",
      ],
    },
    {
      "Sending Messages": [
        "pushnotifications/apple/ios-apns-message",
        "pushnotifications/firebase/firebase-cloud-message",
        "pushnotifications/windows/windows-wns-message",
        "pushnotifications/pushy/pushy-message",
      ],
    },
    {
      Troubleshooting: [
        "pushnotifications/migrating-to-v10.2",
        "pushnotifications/migrating-to-v10.1",
        "pushnotifications/migrating-to-v11.2",
        "pushnotifications/migrating-to-androidx",
      ],
    },
    {
      Other: [
        { type: "doc", id: "pushnotifications/changelog" },
        {
          type: "link",
          label: "asdocs",
          href: "https://docs.airnativeextensions.com/asdocs/pushnotifications/",
        },
        {
          type: "link",
          label: "Contact Support",
          href: "http://github.com/distriqt/ANE-PushNotifications/issues/new",
        },
      ],
    },
  ],

  restartapp: [
    { type: "ref", id: "index" },
    { type: "doc", id: "restartapp/index" },
    { type: "doc", id: "restartapp/add-the-extension" },
    { type: "doc", id: "restartapp/restart-application" },
    {
      Other: [
        { type: "doc", id: "restartapp/changelog" },
        {
          type: "link",
          label: "asdocs",
          href: "https://docs.airnativeextensions.com/asdocs/restartapp/",
        },
        {
          type: "link",
          label: "Contact Support",
          href: "http://github.com/distriqt/ANE-RestartApp/issues/new",
        },
      ],
    },
  ],

  rootchecker: [
    { type: "ref", id: "index" },
    { type: "doc", id: "rootchecker/index" },
    { type: "doc", id: "rootchecker/add-the-extension" },
    { type: "doc", id: "rootchecker/root-check" },
    {
      Other: [
        { type: "doc", id: "rootchecker/changelog" },
        {
          type: "link",
          label: "asdocs",
          href: "https://docs.airnativeextensions.com/asdocs/rootchecker/",
        },
        {
          type: "link",
          label: "Contact Support",
          href: "http://github.com/distriqt/ANE-RootChecker/issues/new",
        },
      ],
    },
  ],

  scanner: [
    { type: "ref", id: "index" },
    { type: "doc", id: "scanner/index" },
    {
      "Get Started": ["scanner/add-the-extension"],
    },
    {
      Usage: [
        "scanner/requesting-access",
        "scanner/scanning",
        "scanner/scanning-bitmap-data",
      ],
    },
    {
      Troubleshooting: [
        "scanner/migrating-to-version-5",
        "scanner/migrating-to-androidx",
      ],
    },
    {
      Other: [
        { type: "doc", id: "scanner/changelog" },
        {
          type: "link",
          label: "asdocs",
          href: "https://docs.airnativeextensions.com/asdocs/scanner/",
        },
        {
          type: "link",
          label: "Contact Support",
          href: "http://github.com/distriqt/ANE-Scanner/issues/new",
        },
      ],
    },
  ],

  sensormanager: [
    { type: "ref", id: "index" },
    { type: "doc", id: "sensormanager/index" },
    {
      "Get Started": ["sensormanager/add-the-extension"],
    },
    {
      Usage: ["sensormanager/proximity"],
    },
    {
      Other: [
        { type: "doc", id: "sensormanager/changelog" },
        {
          type: "link",
          label: "asdocs",
          href: "https://docs.airnativeextensions.com/asdocs/sensormanager/",
        },
        {
          type: "link",
          label: "Contact Support",
          href: "http://github.com/airnativeextensions/ANE-SensorManager/issues/new",
        },
      ],
    },
  ],

  share: [
    { type: "ref", id: "index" },
    { type: "doc", id: "share/index" },
    {
      "Get Started": ["share/add-the-extension", "share/add-the-plugin"],
    },
    {
      Usage: [
        "share/simple-share",
        "share/share-files",
        "share/launch-applications",
        "share/android-events",
        "share/positioning",
        "share/email",
        "share/sms",
      ],
    },
    {
      "iOS App Extension": [
        "share/appextension---introduction",
        "share/appextension---setup",
        "share/appextension---share-extension",
      ],
    },
    {
      Troubleshooting: [
        "share/migrating-from-message",
        "share/migrating-to-androidx",
      ],
    },
    {
      Other: [
        { type: "doc", id: "share/changelog" },
        {
          type: "link",
          label: "asdocs",
          href: "https://docs.airnativeextensions.com/asdocs/share/",
        },
        {
          type: "link",
          label: "Contact Support",
          href: "http://github.com/distriqt/ANE-Share/issues/new",
        },
      ],
    },
  ],

  speech: [
    { type: "ref", id: "index" },
    { type: "doc", id: "speech/index" },
    {
      "Get Started": [
        "speech/add-the-extension",
        "speech/authorisation",
      ],
    },
    {
      Usage: [
        "speech/recognition",
      ],
    },
    {
      Other: [
        { type: "doc", id: "speech/changelog" },
        {
          type: "link",
          label: "asdocs",
          href: "https://docs.airnativeextensions.com/asdocs/speech/",
        },
        {
          type: "link",
          label: "Contact Support",
          href: "http://github.com/airnativeextensions/ANE-Speech/issues/new",
        },
      ],
    },
  ],

  systemgestures: [
    { type: "ref", id: "index" },
    { type: "doc", id: "systemgestures/index" },
    {
      "Get Started": ["systemgestures/add-the-extension"],
    },
    {
      Usage: [
        "systemgestures/defer-system-gestures",
        "systemgestures/home-indicator",
        "systemgestures/native-gesture-events",
      ],
    },
    {
      Other: [
        { type: "doc", id: "systemgestures/changelog" },
        {
          type: "link",
          label: "asdocs",
          href: "https://docs.airnativeextensions.com/asdocs/systemgestures/",
        },
        {
          type: "link",
          label: "Contact Support",
          href: "http://github.com/distriqt/ANE-SystemGestures/issues/new",
        },
      ],
    },
  ],

  vibration: [
    { type: "ref", id: "index" },
    { type: "doc", id: "vibration/index" },
    {
      "Get Started": [
        "vibration/add-the-extension",
        "vibration/add-the-plugin",
      ],
    },
    {
      Usage: [
        "vibration/vibrate",
        "vibration/feedback-generators",
        "vibration/haptic-engine",
      ],
    },
    {
      Other: [
        { type: "doc", id: "vibration/changelog" },
        {
          type: "link",
          label: "asdocs",
          href: "https://docs.airnativeextensions.com/asdocs/vibration/",
        },
        {
          type: "link",
          label: "Contact Support",
          href: "http://github.com/distriqt/ANE-Vibration/issues/new",
        },
      ],
    },
  ],

  volume: [
    { type: "ref", id: "index" },
    { type: "doc", id: "volume/index" },
    {
      "Get Started": ["volume/add-the-extension"],
    },
    {
      Usage: [
        "volume/volume-control",
        "volume/streams",
        "volume/silent-switch",
      ],
    },
    {
      Other: [
        { type: "doc", id: "volume/changelog" },
        {
          type: "link",
          label: "asdocs",
          href: "https://docs.airnativeextensions.com/asdocs/volume/",
        },
        {
          type: "link",
          label: "Contact Support",
          href: "http://github.com/distriqt/ANE-Volume/issues/new",
        },
      ],
    },
  ],

  webp: [
    { type: "ref", id: "index" },
    { type: "doc", id: "webp/index" },
    {
      "Get Started": ["webp/add-the-extension"],
    },
    {
      Usage: [
        "webp/webploader",
        "webp/load-a-webp-file",
        "webp/parse-webp-data",
      ],
    },
    {
      Other: [
        { type: "doc", id: "webp/changelog" },
        {
          type: "link",
          label: "asdocs",
          href: "https://docs.airnativeextensions.com/asdocs/webp/",
        },
        {
          type: "link",
          label: "Contact Support",
          href: "http://github.com/distriqt/ANE-WebP/issues/new",
        },
      ],
    },
  ],

  windowsstore: [
    { type: "ref", id: "index" },
    { type: "doc", id: "windowsstore/index" },
    {
      "Setup the Extension": [
        "windowsstore/add-the-extension",
        "windowsstore/initialise-the-extension",
        {
          Windows: [
            "windowsstore/windows-overview",
            "windowsstore/windows-developer-account",
            "windowsstore/windows-desktop-app-converter",
          ],
        },
      ],
    },
    {
      Usage: [
        "windowsstore/products",
        "windowsstore/purchases",
        "windowsstore/make-purchase",
        "windowsstore/consumables",
      ],
    },
    {
      Other: [
        { type: "doc", id: "windowsstore/changelog" },
        {
          type: "link",
          label: "asdocs",
          href: "https://docs.airnativeextensions.com/asdocs/windowsstore/",
        },
        {
          type: "link",
          label: "Contact Support",
          href: "http://github.com/distriqt/ANE-WindowsStore/issues/new",
        },
      ],
    },
  ],

  ziputils: [
    { type: "ref", id: "index" },
    { type: "doc", id: "ziputils/index" },
    {
      "Setup the Extension": ["ziputils/add-the-extension"],
    },
    {
      Usage: ["ziputils/unzipping-a-file", "ziputils/zipping"],
    },
    {
      Other: [
        { type: "doc", id: "ziputils/changelog" },
        {
          type: "link",
          label: "asdocs",
          href: "https://docs.airnativeextensions.com/asdocs/ziputils/",
        },
        {
          type: "link",
          label: "Contact Support",
          href: "http://github.com/distriqt/ANE-ZipUtils/issues/new",
        },
      ],
    },
  ],

  faqs: [
    { type: "ref", id: "index" },
    { type: "doc", id: "faqs/index" },
    "faqs/ld-unknown-option",
    "faqs/ld-warning",
    "faqs/ld-framework-not-found",
    "faqs/error-context-create",
    "faqs/error-404",
  ],

  tutorials: [
    { type: "ref", id: "index" },
    { type: "doc", id: "tutorials/index" },
    {
      "Getting Started": [
        "tutorials/getting-started",
        {
          IDE: [
            "tutorials/getting-started-intellij",
            "tutorials/getting-started-flashbuilder4.7",
            "tutorials/getting-started-flashbuilder4.5",
            "tutorials/getting-started-flashdevelop",
            "tutorials/getting-started-animate",
          ],
        },
      ],
    },
    {
      Debugging: [
        "tutorials/device-logs",
        "tutorials/android-device-debugging",
      ],
    },
    {
      "iOS Development": [
        "tutorials/ios-icons-assets-car",
        "tutorials/ios-launchscreens",
        "tutorials/ios-sdk-custom",
        "tutorials/ios-sdk-versions",
      ],
    },
    {
      "Android Development": [
        "tutorials/android-splash-screen",
        "tutorials/android-adaptive-icons",
        "tutorials/android-resources",
      ],
    },
    {
      "Windows Development": [
        "tutorials/windows-appx-packaging",
        "tutorials/windows-appx-packaging-method1",
        "tutorials/windows-appx-packaging-method2",
        "tutorials/windows-appx-packaging-method3",
      ],
    },
  ],
};
