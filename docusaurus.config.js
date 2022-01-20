// @ts-nocheck
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "enableOps",
  tagline: "Effortless GitOps, CI/CD on Kubernetes for developers",
  url: "https://enableops.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "enableops", // Usually your GitHub org/user name.
  projectName: "enableops.github.io", // Usually your repo name.
  trailingSlash: false,
  deploymentBranch: "gh-pages",

  customFields: {
    description:
      "enableOps was designed from the ground up to be easily installed and used to get your infrastructure up and running quickly.",
  },
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "enableOps",
        logo: {
          alt: "enableOps Logo",
          src: "img/small-logo.png",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Documentation",
          },
          {
            to: "/blog",
            label: "Blog",
            position: "left",
          },
          {
            type: "doc",
            docId: "intro",
            position: "right",
            label: "Create cluster 🚀",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Manual",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Socials",
            items: [
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/company/enableops",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/enableops",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/enableops",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} enableOps. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        disableSwitch: true,
        respectPrefersColorScheme: true,
      },
    }),
};

module.exports = config;
