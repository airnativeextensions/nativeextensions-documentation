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




  nativewebview: [
    { type: 'ref', id: 'index' },
    { type: 'doc', id: 'nativewebview/index' },
    { 
      type: 'category', 
      label: "Get Started", 
      items: [
        "nativewebview/add-the-extension",
        "nativewebview/initialise-the-extension"
      ]
    },
    { 
      type: 'category', 
      label: "Web View", 
      items: [
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
      type: 'category', 
      label: "Other Features", 
      items: [
        "nativewebview/browser-view"
      ]
    },
    { 
      type: 'category', 
      label: "Troubleshooting", 
      items: [
        "nativewebview/migrating-to-androidx",
        "nativewebview/migrating-to-v5"   
      ]
    },
    { 
      type: 'category', 
      label: "External Links", 
      collapsed: false,
      items: [
        { type: "link", label: "ASDocs", href: "https://docs.airnativeextensions.com/asdocs/nativewebview/" },
        { type: 'link', label: 'Contact Support', href: 'http://github.com/distriqt/ANE-NativeWebView/issues/new' }
      ],
    }
  ],

  adverts: [
    { type: 'ref', id: 'index' },
    { type: 'doc', id: 'adverts/index' },
    { 
      type: 'category', 
      label: "Get Started", 
      items: [
        "adverts/add-the-extension",
        "adverts/initialise-the-extension"
      ]
    },
    { 
      type: 'category', 
      label: "Usage", 
      items: [
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
      type: 'category', 
      label: "Consent", 
      items: [
        "adverts/user-messaging-platform",
        "adverts/consent"
      ]
    },
    { 
      type: 'category', 
      label: "Troubleshooting", 
      items: [
        "adverts/troubleshooting",
        "adverts/migrating-to-version-10",   
        "adverts/migrating-from-version-4",   
        "adverts/migrating-to-androidx",   
      ]
    },
    { 
      type: 'category', 
      label: "External Links", 
      collapsed: false,
      items: [
        { type: "link", label: "ASDocs", href: "https://docs.airnativeextensions.com/asdocs/adverts/" },
        { type: 'link', label: 'Contact Support', href: 'http://github.com/distriqt/ANE-Adverts/issues/new' }
      ]
    },
  ],


};
