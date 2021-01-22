firebase: [
    { type: 'ref', id: 'index' },
    { type: 'doc', id: 'firebase/index' },
    { 
      "Setup Firebase for your application": [
        "firebase/setup/create-a-firebase-project",
        "firebase/setup/configuration-files",
      ]
    },
    { 
      "Core / Analytics": [
        "firebase/core/introduction",
        "firebase/core/add-the-extensions",
        "firebase/core/initialise",
        "firebase/core/analytics",
      ]
    },
    { 
      type: 'category',
      label: 'Develop',
      collapsed: false,
      items: [
        {
          "Authentication": [
            "firebase/auth/introduction",
            "firebase/auth/add-the-extensions",
            "firebase/auth/initialise",
            "firebase/auth/manage-users",
            {
              "Providers": [
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
              ]
            },
            "firebase/auth/link-multiple-providers"
          ]
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
              ]
            },
            {
              "Offline": [
                "firebase/database/offline",
                "firebase/database/disconnect",
              ]
            }
          ]
        },
        {
          "Cloud Firestore": [
            "firebase/firestore/introduction",
            "firebase/firestore/add-the-extension",
            {
              "Add and manage data": [
                { type: "link", label: "Data model (external)", href: "https://firebase.google.com/docs/firestore/data-model"},
                { type: "link", label: "Structure data (external)", href: "https://firebase.google.com/docs/firestore/manage-data/structure-data"},
                { type: "link", label: "Data types (external)", href: "https://firebase.google.com/docs/firestore/manage-data/data-types"},
                "firebase/firestore/add-data",
                "firebase/firestore/transactions-and-batched-writes",
                "firebase/firestore/delete-data",
              ]
            },
            {
              "Query data": [
                "firebase/firestore/get-data",
                "firebase/firestore/get-realtime-updates",
                "firebase/firestore/perform-simple-and-compound-queries",
                "firebase/firestore/order-and-limit-data",
                "firebase/firestore/paginate-data-with-query-cursors",
                { type: "link", label: "Index types (external)", href: "https://firebase.google.com/docs/firestore/query-data/index-overview"},
                { type: "link", label: "Manage indexes (external)", href: "https://firebase.google.com/docs/firestore/query-data/indexing"},
              ]
            },
            {
              "Security": [
                { type: "link", label: "Get started (external)", href: "https://firebase.google.com/docs/firestore/security/get-started"},
              ]
            },
            "firebase/firestore/enable-offline-data",
            {
              "Further reading": [
                { type: "link", label: "Solutions (external)", href: "https://firebase.google.com/docs/firestore/solutions/"},
                { type: "link", label: "Cloud Functions (external)", href: "https://firebase.google.com/docs/firestore/extend-with-functions"},
                { type: "link", label: "User REST API (external)", href: "https://firebase.google.com/docs/firestore/use-rest-api"},
              ]
            }
          ]
        },
        {
          "Storage": [
            "firebase/storage/introduction",
            "firebase/storage/add-the-extensions",
            "firebase/storage/references",
            "firebase/storage/upload-files",
            "firebase/storage/download-files",
            "firebase/storage/file-metadata",
            "firebase/storage/delete-files",
          ]
        },
      ]
    },
    {
      type: 'category',
      label: "Quality",
      collapsed: false,
      items: [
        {
          "Crashlytics": [
            "firebase/crashlytics/introduction",
            "firebase/crashlytics/add-the-extension",
            "firebase/crashlytics/usage",
            "firebase/crashlytics/testing",
            "firebase/crashlytics/uploading-dsyms",
          ]
        },
        {
          "Performance Monitoring" : [
            "firebase/performance/introduction",
            "firebase/performance/add-the-extension",
            "firebase/performance/traces",
            "firebase/performance/disable-monitoring",
          ]
        },
      ]
    },
    {
      type: 'category',
      label: "Grow",
      collapsed: false,
      items: [
        {
          "Cloud Messaging": [
            "firebase/fcm/introduction",
            // { type: "ref", id: "pushnotifications/index" }
          ]
        },
        {
          "Remote Config" : [
            "firebase/remoteconfig/introduction",
            "firebase/remoteconfig/set-initial-values",
            "firebase/remoteconfig/add-the-extensions",
            "firebase/remoteconfig/initialise",
            "firebase/remoteconfig/usage",
          ]
        },
        {
          "Dynamic Links" : [
            "firebase/dynamiclinks/introduction",
            "firebase/dynamiclinks/add-the-extension",
            "firebase/dynamiclinks/initialise",
            "firebase/dynamiclinks/create-dynamic-links",
            "firebase/dynamiclinks/receive-dynamic-links",
            "firebase/dynamiclinks/testing",
          ]
        },
      ]
    },
    {
        "Migration Guides": [
            "firebase/migrating-to-v6",
            "firebase/migrating-to-v4"
        ]
    },
    { 
      "Other": [
        { type: "link", label: "Firebase Console", href: "https://console.firebase.google.com/" },
        { type: 'doc', id: 'firebase/changelog' },
        { type: "link", label: "asdocs", href: "https://docs.airnativeextensions.com/asdocs/firebase/" },
        { type: 'link', label: 'Contact Support', href: 'http://github.com/distriqt/ANE-Firebase/issues/new' },
      ]
    },
  ],
