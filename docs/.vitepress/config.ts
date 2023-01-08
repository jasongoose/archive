import { defineConfig } from "vitepress";

export default defineConfig({
  themeConfig: {
    sidebar: {
      "/profile/": [
        {
          text: "Profile",
          items: [
            {
              text: "About me",
              link: "/profile/aboutme",
            },
            {
              text: "Resume",
              link: "/profile/resume",
            },
          ],
        },
      ],
      "/posts/": [
        {
          text: "Javascript",
          items: [],
        },
        {
          text: "Typescript",
          items: [],
        },
        {
          text: "Node",
          items: [],
        },
        {
          text: "Browser",
          items: [],
        },
        {
          text: "Git",
          items: [],
        },
        {
          text: "API",
          items: [],
        },
        {
          text: "Vue3",
          items: [],
        },
        {
          text: "React",
          items: [],
        },
        {
          text: "Develop",
          items: [],
        },
        {
          text: "Security",
          items: [],
        },
        {
          text: "Mobile",
          items: [],
        },
        {
          text: "Architecture",
          items: [],
        },
        {
          text: "DevOps",
          items: [],
        },
        {
          text: "Vite",
          items: [],
        },
        {
          text: "HTTP",
          items: [],
        },
        {
          text: "Clean Code",
          items: [],
        },
        {
          text: "Book Studies",
          items: [],
        },
      ],
    },
    nav: [
      {
        text: "Profile",
        link: "/profile/",
      },
      {
        text: "Posts",
        link: "/posts/",
      },
    ],
  },
});
