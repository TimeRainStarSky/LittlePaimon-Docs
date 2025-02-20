import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "https://docs.paimon.cherishmoon.fun",

  author: {
    name: "惜月",
    url: "https://github.com/CMHopeSunshine",
  },

  iconAssets: "iconfont",

  logo: "https://s1.ax1x.com/2023/02/05/pS62DJK.png",

  repo: "CMHopeSunshine/LittlePaimon",

  docsRepo: "https://github.com/CMHopeSunshine/LittlePaimon-Docs",

  docsBranch: "master",

  docsDir: "docs",

  print: false,

  // navbar
  navbar: navbar,

  // sidebar
  sidebar: sidebar,

  footer: "<a href=\"https://beian.miit.gov.cn\" target=\"_blank\">粤ICP备2022050246号</a>",

  displayFooter: true,

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime", "PageView"],

  fullscreen: true,

  themeColor: {
    blue: "#2196f3",
    red: "#f26d6d",
    green: "#3eaf7c",
    orange: "#fb9b5f",
  },

  // blog: {
  //   description: "一个前端开发者",
  //   intro: "/intro.html",
  //   medias: {
  //     Baidu: "https://example.com",
  //     Bitbucket: "https://example.com",
  //     Dingding: "https://example.com",
  //     Discord: "https://example.com",
  //     Dribbble: "https://example.com",
  //     Email: "https://example.com",
  //     Evernote: "https://example.com",
  //     Facebook: "https://example.com",
  //     Flipboard: "https://example.com",
  //     Gitee: "https://example.com",
  //     GitHub: "https://example.com",
  //     Gitlab: "https://example.com",
  //     Gmail: "https://example.com",
  //     Instagram: "https://example.com",
  //     Lines: "https://example.com",
  //     Linkedin: "https://example.com",
  //     Pinterest: "https://example.com",
  //     Pocket: "https://example.com",
  //     QQ: "https://example.com",
  //     Qzone: "https://example.com",
  //     Reddit: "https://example.com",
  //     Rss: "https://example.com",
  //     Steam: "https://example.com",
  //     Twitter: "https://example.com",
  //     Wechat: "https://example.com",
  //     Weibo: "https://example.com",
  //     Whatsapp: "https://example.com",
  //     Youtube: "https://example.com",
  //     Zhihu: "https://example.com",
  //   },
  // },

  // encrypt: {
  //   config: {
  //     "/guide/encrypt.html": ["1234"],
  //   },
  // },

  plugins: {
    copyCode: {
      showInMobile: true
    },
    // blog: {
    //   autoExcerpt: true,
    // },

    // 如果你不需要评论，可以直接删除 comment 配置，
    // 以下配置仅供体验，如果你需要评论，请自行配置并使用自己的环境，详见文档。
    // 为了避免打扰主题开发者以及消耗他的资源，请不要在你的正式环境中直接使用下列配置!!!!!
    // comment: {
    //   /**
    //    * Using Giscus
    //    */
    //   provider: "Giscus",
    //   repo: "vuepress-theme-hope/giscus-discussions",
    //   repoId: "R_kgDOG_Pt2A",
    //   category: "Announcements",
    //   categoryId: "DIC_kwDOG_Pt2M4COD69",
    //
    //   /**
    //    * Using Twikoo
    //    */
    //   // provider: "Twikoo",
    //   // envId: "https://twikoo.ccknbc.vercel.app",
    //
    //   /**
    //    * Using Waline
    //    */
    //   // provider: "Waline",
    //   // serverURL: "https://vuepress-theme-hope-comment.vercel.app",
    // },
    comment: {
      provider: "Waline",
      serverURL: "comment.cherishmoon.fun", // your server url
      dark: 'auto',
      meta: ['nick', 'mail'],
      requiredMeta: ['nick'],
      reaction: true
    },

    mdEnhance: {
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
    },
  },
});
