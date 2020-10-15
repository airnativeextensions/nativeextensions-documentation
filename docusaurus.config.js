module.exports = {
  title: "air native extensions",
  tagline: "Documentation for distriqt's Native Extensions",
  url: 'https://docs.airnativeextensions.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'airnativeextensions', // Usually your GitHub org/user name.
  projectName: 'nativeextensions-documentation', // Usually your repo name.
  themeConfig: {
    announcementBar: {
      id: 'development', // Any value that will identify this message.
      content:
        'This is the new airnativeextensions documentation site and is currently under development. <a href="https://github.com/airnativeextensions/nativeextensions-documentation/issues">Please let us know if you find any issues.</a>',
      backgroundColor: '#880000', // Defaults to `#fff`.
      textColor: '#FFF', // Defaults to `#000`.
      isCloseable: false, // Defaults to `true`.
    },
    
    image: 'img/ane-icon-black.png',
    colorMode: {
      disableSwitch: false,
      switchConfig: {
        darkIcon: ' ',
        lightIcon: ' '
      }
    },

    prism: {
      theme: require('prism-react-renderer/themes/github'),
      darkTheme: require('prism-react-renderer/themes/vsDark'),
      additionalLanguages: ['actionscript', 'csharp'],
      // defaultLanguage: 'actionscript'
    },
    algolia: {
      apiKey: 'f3ad51a28b5bae2a9f439e0b6f8d6fb9',
      indexName: 'airnativeextensions',

      // Optional: see doc section bellow
      contextualSearch: true,

      // Optional: Algolia search parameters
      searchParameters: {},

      //... other Algolia params
    },
    navbar: {
      title: 'AIR Native Extensions',
      logo: {
        alt: 'AIR Native Extensions',
        src: 'img/ane-icon-black.png',
        srcDark: 'img/ane-icon-white.png'
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        { 
          to: 'news/',
          label: 'News', 
          position: 'left'
        }
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'tutorials',
              to: '/docs/tutorials/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'twitter',
              href: 'https://twitter.com/distriqt',
            },
            {
              label: 'stack overflow',
              href: 'https://stackoverflow.com/questions/tagged/distriqt',
            },
            {
              label: 'starling',
              href: 'https://forum.starling-framework.org/'
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'news',
              to: 'news',
            },
            {
              label: 'privacy',
              href: 'https://airnativeextensions.com/privacy',
            },
            {
              label: 'license',
              href: 'https://airnativeextensions.com/license',
            },
          ],
        },
      ],
      copyright: `<br/><a href="https://airnativeextensions.com">airnativeextensions.com</a> copyright © ${new Date().getFullYear()} <br/><br/><a href="https://distriqt.com"><img src="/img/logo.png" alt="distriqt" /></a>`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/docs',
          // editUrl: 'https://github.com/airnativeextensions/nativeextensions-documentation/',
        },
        blog: {
          blogDescription: 'distriqt // Native Extension News',
          showReadingTime: true,
          routeBasePath: 'news',
          path: './news',
          feedOptions: {
            type: 'all',
            copyright: `Copyright © ${new Date().getFullYear()} distriqt Pty Ltd`,
          },
          // editUrl: 'https://github.com/airnativeextensions/nativeextensions-documentation/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
