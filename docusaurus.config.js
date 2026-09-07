// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'TaskPulse Docs',
  tagline: 'Fast, lightweight developer task & workflow automation',
  favicon: 'img/favicon.ico',

  // Production URL for GitHub Pages
  url: 'https://anumitaray.github.io',
  // Base URL matching GitHub repository name
  baseUrl: '/product-docs/',

  // GitHub pages deployment config
  organizationName: 'anumitaray',
  projectName: 'product-docs',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/anumitaray/product-docs/tree/main/',
        },
        blog: false, // Disabling blog for pure product documentation
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        defaultMode: 'dark',
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'TaskPulse',
        logo: {
          alt: 'TaskPulse Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          {
            to: '/docs/getting-started',
            label: 'Getting Started',
            position: 'left',
          },
          {
            to: '/docs/installation',
            label: 'Installation',
            position: 'left',
          },
          {
            to: '/docs/user-guide',
            label: 'User Guide',
            position: 'left',
          },
          {
            href: 'https://github.com/anumitaray/product-docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'Overview',
                to: '/docs/intro',
              },
              {
                label: 'Installation',
                to: '/docs/installation',
              },
              {
                label: 'Getting Started',
                to: '/docs/getting-started',
              },
              {
                label: 'User Guide',
                to: '/docs/user-guide',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub Issues',
                href: 'https://github.com/anumitaray/product-docs/issues',
              },
              {
                label: 'Discord Community',
                href: 'https://discord.gg/taskpulse',
              },
            ],
          },
          {
            title: 'Repository',
            items: [
              {
                label: 'GitHub Repo',
                href: 'https://github.com/anumitaray/product-docs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} TaskPulse. Published on GitHub Pages.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
