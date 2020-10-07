module.exports = {
  title: "AIR Native Extensions",
  tagline: "Documentation for distriqt's Native Extensions",
  url: 'https://docs.airnativeextensions.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'airnativeextensions', // Usually your GitHub org/user name.
  projectName: 'nativeextensions-documentation', // Usually your repo name.
  themeConfig: {
    // announcementBar: {
    //   id: 'support_us', // Any value that will identify this message.
    //   content:
    //     'We are looking to revamp our docs, please fill <a target="_blank" rel="noopener noreferrer" href="#">this survey</a>',
    //   backgroundColor: '#fafbfc', // Defaults to `#fff`.
    //   textColor: '#091E42', // Defaults to `#000`.
    //   isCloseable: false, // Defaults to `true`.
    // },

    prism: {
      theme: require('prism-react-renderer/themes/github'),
      darkTheme: require('prism-react-renderer/themes/vsDark'),
      additionalLanguages: ['actionscript'],
      defaultLanguage: 'actionscript'
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
          to: 'docs',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'right',
        },
        { 
          to: 'news',
          label: 'News', 
          position: 'right'
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
          editUrl: 'https://github.com/airnativeextensions/nativeextensions-documentation/edit/master/website/',
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
          editUrl: 'https://github.com/airnativeextensions/nativeextensions-documentation/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
