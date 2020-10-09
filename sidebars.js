module.exports = {
  someSidebar: [
    { type: 'doc', id: 'home' },
    { 
      type: 'category',
      label: 'Extensions',
      items: [
        { type: 'ref', id: "nativewebview/home" },
      ],
    },
    { 
      type: 'category',
      label: 'Tutorials',
      items: [
        { type: 'ref', id: "tutorials/index" },
      ],
    },
  ],


  

  tutorials: [
    { type: 'ref', id: 'home' },
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
    { type: 'ref', id: 'home' },
    { type: 'doc', id: 'nativewebview/home' },
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
        { type: "link", label: "ASDocs", href: "/asdocs/nativewebview/" },
        { type: 'link', label: 'Contact Support', href: 'http://github.com/distriqt/ANE-NativeWebView/issues/new' }
      ]
    },




  ] 


};
