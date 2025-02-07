import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  // "/home",
  { text: "安装指南", icon: "creative", link: "/deploy.md" },
  { text: "功能配置", icon: "config", link: "/configs/" },
  { text: "常见问题", icon: "info", link: "/question.md" },
  { text: "致谢", icon: "advance", link: "/thanks.md" },
  // { text: "Github主页", icon: "github", link: "https://github.com/CMHopeSunshine/LittlePaimon" },
  { text: "QQ频道交流", icon: "slides", link: "https://pd.qq.com/s/kl9dor"},
  { text: "爱发电", icon: "note", link: "https://afdian.net/a/cherishmoon" },
  // {
  //   text: "博文",
  //   icon: "edit",
  //   prefix: "/posts/",
  //   children: [
  //     {
  //       text: "文章 1-4",
  //       icon: "edit",
  //       prefix: "article/",
  //       children: [
  //         { text: "文章 1", icon: "edit", link: "article1" },
  //         { text: "文章 2", icon: "edit", link: "article2" },
  //         "article3",
  //         "article4",
  //       ],
  //     },
  //     {
  //       text: "文章 5-12",
  //       icon: "edit",
  //       children: [
  //         {
  //           text: "文章 5",
  //           icon: "edit",
  //           link: "article/article5",
  //         },
  //         {
  //           text: "文章 6",
  //           icon: "edit",
  //           link: "article/article6",
  //         },
  //         "article/article7",
  //         "article/article8",
  //       ],
  //     },
  //     { text: "文章 9", icon: "edit", link: "article9" },
  //     { text: "文章 10", icon: "edit", link: "article10" },
  //     "article11",
  //     "article12",
  //   ],
  // },
  // {
  //   text: "主题文档",
  //   icon: "note",
  //   link: "https://vuepress-theme-hope.github.io/v2/zh/",
  // },
]);
