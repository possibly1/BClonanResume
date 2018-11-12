module.exports = {
  title: "Bradley Clonan Portfolio",
  description: "Ambitious Developer Seeking Equally Ambitious Business",
  head: [
    ["link", {
      rel: "icon",
      href: `/logo.png`
    }]
  ],
  base: "/",
  dest: "docs/.vuepress/dist",
  serviceWorker: true,
  serviceWorker: {
    updatePopup: true | {
      message: "New content is available.",
      buttonText: "Refresh"
    }
  },
  head: [
    ['link', {
      rel: 'icon',
      href: `/logo.png`
    }],
    ['link', {
      rel: 'manifest',
      href: '/manifest.json'
    }],
    ['meta', {
      name: 'theme-color',
      content: '#3eaf7c'
    }],
    ['meta', {
      name: 'apple-mobile-web-app-capable',
      content: 'yes'
    }],
    ['meta', {
      name: 'apple-mobile-web-app-status-bar-style',
      content: 'black'
    }],
    ['link', {
      rel: 'apple-touch-icon',
      href: `/icons/apple-touch-icon-152x152.png`
    }],
    ['link', {
      rel: 'mask-icon',
      href: '/icons/safari-pinned-tab.svg',
      color: '#3eaf7c'
    }],
    ['meta', {
      name: 'msapplication-TileImage',
      content: '/icons/msapplication-icon-144x144.png'
    }],
    ['meta', {
      name: 'msapplication-TileColor',
      content: '#000000'
    }]
  ],
  themeConfig: {
    repo: 'possibly1/BClonanResume',
    repoLabel: 'Contribute!',
    displayAllHeaders: true, // Default: false
    docsDir: 'docs',
    docsBranch: 'master',
    // defaults to false, set to true to enable
    editLinks: true,
    // custom text for edit link. Defaults to "Edit this page"
    editLinkText: 'Help us improve this page!',
    nav: [{
        text: 'Home',
        link: '/'
      },
      {
        text: 'About Me',
        link: '/about/'
      },
      {
        text: 'Projects',
        link: '/projects/'
      },
      {
        text: 'Contact',
        link: '/contact/'
      }
    ],
    sidebar: {
      '/about/': aboutSidebar('About Me'),
      '/projects/': projectsSidebar('Projects'),

    },
    lastUpdated: 'Last Updated'
  },

  markdown: {
    anchor: {
      permalink: false
    },
    config: md => {
      //md.use(require("markdown-it-katex"));
    }
  }
};

function aboutSidebar(title) {
  return [{
    title,
    collapsable: false,
    children: [
      '',
      'research',
    ]
  }]
}

function projectsSidebar(title) {
  return [{
    title,
    collapsable: false,
    children: [
      '',
      'featured',
      'mentions',
      'blocks',
    ]
  }]
}

function marketingSidebar(title) {
  return [{
    title,
    collapsable: false,
    children: [
      '',
      'copy',
      'ads',
      'videos',
      'gallery',
    ]
  }]
}