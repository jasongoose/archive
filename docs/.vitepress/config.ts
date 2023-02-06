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
              link: "/profile/aboutme/",
            },
            {
              text: "Resume",
              link: "/profile/resume/",
            },
          ],
        },
      ],
      "/posts/api/": [
        {
          text: "API란?",
          items: [
            {
              text: "API란?",
              link: "/posts/api/api란/API란",
            },
          ],
          collapsible: true,
          collapsed: true,
        },
        {
          text: "API Specification",
          items: [
            {
              text: "Specification",
              link: "/posts/api/api_specification/Specification",
            },
            {
              text: "SOAP",
              link: "/posts/api/api_specification/SOAP",
            },
            {
              text: "RESTful",
              link: "/posts/api/api_specification/RESTful",
            },
            // {
            //   text: "GraphQL",
            //   link: "/posts/api/GraphQL",
            // },
          ],
          collapsible: true,
          collapsed: true,
        },
      ],
      "/posts/architecture/": [
        {
          text: "SW Architecture란?",
          items: [
            {
              text: "SW Architecture란?",
              link: "/posts/architecture/sw_architecture란/SW_Architecture란",
            },
          ],
          collapsible: true,
          collapsed: true,
        },
        {
          text: "History",
          items: [
            {
              text: "MVC",
              link: "/posts/architecture/history/MVC",
            },
            {
              text: "MVVM",
              link: "/posts/architecture/history/MVVM",
            },
            {
              text: "Container-Presenter",
              link: "/posts/architecture/history/Container-Presenter",
            },
            {
              text: "Flux",
              link: "/posts/architecture/history/Flux",
            },
            {
              text: "Observer-Observable",
              link: "/posts/architecture/history/Observer-Observable",
            },
            {
              text: "MVI",
              link: "/posts/architecture/history/MVI",
            },
          ],
          collapsible: true,
          collapsed: true,
        },
      ],
      "/posts/browser/": [
        {
          text: "HTML",
          items: [
            {
              text: '&lt;script src=".js"/&gt; 위치',
              link: "/posts/browser/html/script의_위치",
            },
          ],
          collapsible: true,
          collapsed: true,
        },
        {
          text: "CSS",
          items: [
            {
              text: "Pseudo Element",
              link: "/posts/browser/css/Pseudo_Element",
            },
            {
              text: "Flexbox",
              link: "/posts/browser/css/Flexbox",
            },
            {
              text: "Grid",
              link: "/posts/browser/css/Grid",
            },
          ],
          collapsible: true,
          collapsed: true,
        },
        {
          text: "Browser Runtime",
          items: [
            {
              text: "구조",
              link: "/posts/browser/browser_runtime/브라우저_런타임_구조",
            },
            {
              text: "비동기 작업 예시",
              link: "/posts/browser/browser_runtime/비동기_작업_예시",
            },
          ],
          collapsible: true,
          collapsed: true,
        },
        {
          text: "Populating the page",
          items: [
            {
              text: "Overview",
              link: "/posts/browser/populating_the_page/overview",
            },
            {
              text: "Navigation",
              link: "/posts/browser/populating_the_page/navigation",
            },
            {
              text: "Response",
              link: "/posts/browser/populating_the_page/response",
            },
            {
              text: "Critical Rendering Path",
              link: "/posts/browser/populating_the_page/crp",
            },
            {
              text: "Reflow/paint",
              link: "/posts/browser/populating_the_page/reflow_repaint",
            },
          ],
          collapsible: true,
          collapsed: true,
        },
        {
          text: "Storage",
          items: [
            {
              text: "Cookie",
              link: "/posts/browser/storage/cookie",
            },
            {
              text: "Web Storage",
              link: "/posts/browser/storage/web_storage",
            },
          ],
          collapsible: true,
          collapsed: true,
        },
        {
          text: "Rendering Strategy",
          items: [
            {
              text: "CSR",
              link: "/posts/browser/rendering_strategy/csr",
            },
            {
              text: "SSR",
              link: "/posts/browser/rendering_strategy/ssr",
            },
          ],
          collapsible: true,
          collapsed: true,
        },
        {
          text: "Web API",
          items: [
            {
              text: "DOM",
              link: "/posts/browser/web_api/dom",
            },
            {
              text: "Broadcast Channel",
              link: "/posts/browser/web_api/broadcast_channel",
            },
            {
              text: "Window",
              link: "/posts/browser/web_api/window",
            },
            {
              text: "Cache Storage",
              link: "/posts/browser/web_api/cache_storage",
            },
            {
              text: "IndexedDB",
              link: "/posts/browser/web_api/indexed_db",
            },
          ],
          collapsible: true,
          collapsed: true,
        },
      ],
      "/posts/clean_code/": [
        {
          text: "Clean Code",
          items: [
            {
              text: "Guard Clauses",
              link: "/posts/clean_code/clean_code/guard_clauses",
            },
          ],
          collapsible: true,
          collapsed: true,
        },
      ],
      "/posts/devops/": [
        {
          text: "DevOps",
          items: [
            {
              text: "DevOps란?",
              link: "/posts/devops/devops란/DevOps란",
            },
          ],
          collapsible: true,
          collapsed: true,
        },
      ],
      "/posts/frontend/": [
        {
          text: "Tree Shaking",
          items: [
            {
              text: "Tree Shaking이란?",
              link: "/posts/frontend/tree_shaking/Tree_Shaking이란",
            },
          ],
          collapsible: true,
          collapsed: true,
        },
        {
          text: "Skeleton UI",
          items: [
            {
              text: "Skeleton UI란?",
              link: "/posts/frontend/skeleton_ui/Skeleton_UI란",
            },
          ],
          collapsible: true,
          collapsed: true,
        },
        {
          text: "Lazy Loading",
          items: [
            {
              text: "Lazy Loading이란?",
              link: "/posts/frontend/lazy_loading/Lazy_Loading이란",
            },
          ],
          collapsible: true,
          collapsed: true,
        },
        {
          text: "SEO",
          items: [
            {
              text: "SEO란?",
              link: "/posts/frontend/seo/SEO란",
            },
          ],
          collapsible: true,
          collapsed: true,
        },
        {
          text: "Cross-Browsing",
          items: [
            {
              text: "Cross-Browsing이란?",
              link: "/posts/frontend/cross_browsing/Cross_Browsing이란",
            },
          ],
          collapsible: true,
          collapsed: true,
        },
      ],
      "/posts/git/": [
        {
          text: "Why Git?",
          items: [
            {
              text: "Why Git?",
              link: "/posts/git/why_git",
            },
          ],
          collapsible: true,
          collapsed: true,
        },
        {
          text: "Terms",
          items: [
            {
              text: "Pull Request",
              link: "/posts/git/terms/pull_request",
            },
            {
              text: "Staging Area",
              link: "/posts/git/terms/staging_area",
            },
          ],
          collapsible: true,
          collapsed: true,
        },
        {
          text: "Git commands",
          items: [
            {
              text: "git init",
              link: "/posts/git/git_commands/git_init",
            },
            {
              text: "git clone",
              link: "/posts/git/git_commands/git_clone",
            },
            {
              text: "git config",
              link: "/posts/git/git_commands/git_config",
            },
            {
              text: "git commit --amend",
              link: "/posts/git/git_commands/git_commit_amend",
            },
            {
              text: "git push",
              link: "/posts/git/git_commands/git_push",
            },
            {
              text: "git merge",
              link: "/posts/git/git_commands/git_merge",
            },
            {
              text: "git stash",
              link: "/posts/git/git_commands/git_stash",
            },
            {
              text: "git cherrypick",
              link: "/posts/git/git_commands/git_cherrypick",
            },
            {
              text: "git reset vs. git revert",
              link: "/posts/git/git_commands/git_reset_revert",
            },
            {
              text: "git fetch vs. git pull",
              link: "/posts/git/git_commands/git_fetch_pull",
            },
            {
              text: "git checkout",
              link: "/posts/git/git_commands/git_checkout",
            },
            {
              text: "git rebase",
              link: "/posts/git/git_commands/git_rebase",
            },
          ],
          collapsible: true,
          collapsed: true,
        },
        {
          text: "Git Flow",
          items: [
            {
              text: "Git Flow란?",
              link: "/posts/git/git_flow/Git_Flow란",
            },
            {
              text: "Main Branches",
              link: "/posts/git/git_flow/main_branches",
            },
            {
              text: "Support Branches",
              link: "/posts/git/git_flow/support_branches",
            },
          ],
          collapsible: true,
          collapsed: true,
        },
      ],
      "/posts/http/": [
        {
          text: "HTTP/1.x",
          items: [
            {
              text: "Methods",
              link: "/posts/http/http1/methods",
            },
            {
              text: "Cache",
              link: "/posts/http/http1/cache",
            },
            {
              text: "Message(start-line)",
              link: "/posts/http/http1/message/start-line",
            },
            {
              text: "Message(headers)",
              link: "/posts/http/http1/message/headers",
            },
            {
              text: "Message(body)",
              link: "/posts/http/http1/message/body",
            },
            {
              text: "Message(MIME)",
              link: "/posts/http/http1/message/mime",
            },
            {
              text: "Connection Management",
              link: "/posts/http/http1/connection_management",
            },
          ],
          collapsible: true,
          collapsed: true,
        },
        {
          text: "HTTP/2",
          items: [
            {
              text: "Binary Framing Layer",
              link: "/posts/http/http2/binary_framing_layer",
            },
            {
              text: "Stream, Message, Frame",
              link: "/posts/http/http2/stream_message_frame",
            },
            {
              text: "Multiplexing",
              link: "/posts/http/http2/multiplexing",
            },
            {
              text: "Stream Prioritization",
              link: "/posts/http/http2/stream_prioritization",
            },
          ],
          collapsible: true,
          collapsed: true,
        },
        {
          text: "Redirect",
          items: [
            {
              text: "Redirect",
              link: "/posts/http/redirect/redirect",
            },
          ],
          collapsible: true,
          collapsed: true,
        },
      ],
      "/posts/javascript/": [
        // done
        {
          text: "ECMAScript",
          items: [
            {
              text: "ECMA International",
              link: "/posts/javascript/ecmascript/ecma_international",
            },
            {
              text: "ECMA-262",
              link: "/posts/javascript/ecmascript/ecma_262",
            },
            {
              text: "ECMAScript",
              link: "/posts/javascript/ecmascript/ecmascript",
            },
            {
              text: "Javascript",
              link: "/posts/javascript/ecmascript/javascript",
            },
            {
              text: "JS Engine",
              link: "/posts/javascript/ecmascript/javascript_engine",
            },
            {
              text: "JS Runtime",
              link: "/posts/javascript/ecmascript/javascript_runtime",
            },
            {
              text: "Scripting Language",
              link: "/posts/javascript/ecmascript/scripting_language",
            },
          ],
          collapsible: true,
          collapsed: true,
        },
        {
          text: "메모리 관리",
          items: [
            {
              text: "Garbage Collector(GC)",
              link: "",
            },
            {
              text: "Reference Count",
              link: "",
            },
            {
              text: "Mark & Sweep",
              link: "",
            },
          ],
          collapsible: true,
          collapsed: true,
        },
        {
          text: "Strict Mode",
          items: [
            {
              text: "Strict Mode란?",
              link: "",
            },
            {
              text: "Invoking Strict Mode",
              link: "",
            },
            {
              text: "Changes in Strict Mode",
              link: "",
            },
            {
              text: "Strict Mode in Browsers",
              link: "",
            },
          ],
          collapsible: true,
          collapsed: true,
        },
        {
          text: "변수",
          items: [
            {
              text: "var",
              link: "",
            },
            {
              text: "const & let",
              link: "",
            },
          ],
          collapsible: true,
          collapsed: true,
        },
        {
          text: "연산자",
          items: [
            {
              text: "(==) vs. (===)",
              link: "",
            },
            {
              text: "(?.)",
              link: "",
            },
            {
              text: "(??)",
              link: "",
            },
            {
              text: "(??=)",
              link: "",
            },
          ],
          collapsible: true,
          collapsed: true,
        },
        {
          text: "Data Structures",
          items: [
            {
              text: "Array",
              link: "",
            },
            {
              text: "Object",
              link: "",
            },
            {
              text: "Symbol",
              link: "",
            },
            {
              text: "Map",
              link: "",
            },
            {
              text: "WeakMap",
              link: "",
            },
            {
              text: "Set",
              link: "",
            },
            {
              text: "WeakSet",
              link: "",
            },
          ],
          collapsible: true,
          collapsed: true,
        },
        {
          text: "Interfaces",
          items: [
            {
              text: "Blob",
              link: "",
            },
            {
              text: "FileReader",
              link: "",
            },
            {
              text: "ArrayBuffer",
              link: "",
            },
            {
              text: "FormData",
              link: "",
            },
            {
              text: "Proxy",
              link: "",
            },
            {
              text: "Reflect",
              link: "",
            },
          ],
          collapsible: true,
          collapsed: true,
        },
        {
          text: "Loop",
          items: [
            {
              text: "Protocols",
              link: "",
            },
            {
              text: "for",
              link: "",
            },
            {
              text: "for-in",
              link: "",
            },
            {
              text: "for-of",
              link: "",
            },
            {
              text: "for await-of",
              link: "",
            },
          ],
          collapsible: true,
          collapsed: true,
        },
        {
          text: "Syntatic Sugar",
          items: [
            {
              text: "async/await",
              link: "",
            },
            {
              text: "Array Intersection",
              link: "",
            },
            {
              text: "every & some",
              link: "",
            },
            {
              text: "filter falsy values",
              link: "",
            },
            {
              text: "computed property",
              link: "",
            },
            {
              text: "Bitwise NOT",
              link: "",
            },
            {
              text: "Default Parameters",
              link: "",
            },
            {
              text: "String => Array",
              link: "",
            },
            {
              text: "Truncating/Expanding Array",
              link: "",
            },
            {
              text: "How to Check Empty Array?",
              link: "",
            },
          ],
          collapsible: true,
          collapsed: true,
        },
        {
          text: "Core",
          items: [
            {
              text: "코어 자바스크립트",
              link: "/books/core_javascript/",
            },
          ],
          collapsible: true,
          collapsed: true,
        },
      ],
      "/posts/node/": [
        // done
        {
          text: "Package",
          items: [
            {
              text: "package란?",
              link: "",
            },
            {
              text: "Module Resolution",
              link: "",
            },
            {
              text: "Package Exports",
              link: "",
            },
            {
              text: "Package Imports",
              link: "",
            },
            {
              text: "node: protocol imports",
              link: "",
            },
          ],
          collapsible: true,
          collapsed: true,
        },
        {
          text: "Configuration",
          items: [
            {
              text: "package.json",
              link: "",
            },
            {
              text: "package-lock.json",
              link: "",
            },
            {
              text: ".npmrc",
              link: "",
            },
          ],
          collapsible: true,
          collapsed: true,
        },
        {
          text: "pnpm",
          items: [
            {
              text: "What is pnpm?",
              link: "",
            },
            {
              text: "node_modules 구조",
              link: "",
            },
            {
              text: "PeerDependencies Resolution",
              link: "",
            },
          ],
          collapsible: true,
          collapsed: true,
        },
      ],
      "/posts/pwa/": [
        // done
        {
          text: "Progressive Web App",
          items: [
            {
              text: "PWA란?",
              link: "",
            },
          ],
          collapsible: true,
          collapsed: true,
        },
        {
          text: "Assets and Data",
          items: [
            {
              text: "App Components",
              link: "",
            },
            {
              text: "Cache & Stroage",
              link: "",
            },
            {
              text: "Size & Lifespan",
              link: "",
            },
          ],
          collapsible: true,
          collapsed: true,
        },
        {
          text: "Service Workers",
          items: [
            {
              text: "Service Worker란?",
              link: "",
            },
            {
              text: "Scope",
              link: "",
            },
            {
              text: "Lifecycle",
              link: "",
            },
            {
              text: "Events",
              link: "",
            },
            {
              text: "Use cases",
              link: "",
            },
            {
              text: "Workbox docs",
              link: "",
            },
          ],
          collapsible: true,
          collapsed: true,
        },
      ],
      // "/posts/react/": [],
      "/posts/security/": [
        // done
        {
          text: "XSRF",
          items: [
            {
              text: "XSRF란?",
              link: "",
            },
            {
              text: "XSRF 예방하기",
              link: "",
            },
          ],
          collapsible: true,
          collapsed: true,
        },
        {
          text: "XSS",
          items: [
            {
              text: "XSS란?",
              link: "",
            },
            {
              text: "XSS 예방하기",
              link: "",
            },
          ],
          collapsible: true,
          collapsed: true,
        },
        {
          text: "JWT",
          items: [
            {
              text: "JWT란?",
              link: "",
            },
            {
              text: "구조",
              link: "",
            },
            {
              text: "작동방식",
              link: "",
            },
            {
              text: "장단점",
              link: "",
            },
            {
              text: "유의할 점",
              link: "",
            },
          ],
          collapsible: true,
          collapsed: true,
        },
        {
          text: "CORS",
          items: [
            {
              text: "CORS란?",
              link: "",
            },
            {
              text: "적용되는 시나리오",
              link: "",
            },
            {
              text: "에러 해결하는 방법",
              link: "",
            },
          ],
          collapsible: true,
          collapsed: true,
        },
        {
          text: "OAuth",
          items: [
            {
              text: "OAuth란?",
              link: "",
            },
          ],
          collapsible: true,
          collapsed: true,
        },
        {
          text: "인증(Authentication)",
          items: [
            {
              text: "인증이란?",
              link: "",
            },
          ],
          collapsible: true,
          collapsed: true,
        },
        {
          text: "인가(Authorization)",
          items: [
            {
              text: "인가란?",
              link: "",
            },
          ],
          collapsible: true,
          collapsed: true,
        },
      ],
      "/posts/typescript/": [
        // done
        {
          text: "Module System",
          items: [
            {
              text: "Module Resolution Strategy",
              link: "",
            },
            {
              text: "Module Standard",
              link: "",
            },
            {
              text: "Share Type Declaration",
              link: "",
            },
            {
              text: "Dynamic Imports",
              link: "",
            },
          ],
          collapsible: true,
          collapsed: true,
        },
        {
          text: "Working w/ Modules",
          items: [
            {
              text: "Ambient Modules",
              link: "",
            },
            {
              text: "Shorthand Ambient Modules",
              link: "",
            },
            {
              text: "Wildcard Module Declaration",
              link: "",
            },
            {
              text: "Declare Keyword",
              link: "",
            },
          ],
          collapsible: true,
          collapsed: true,
        },
        {
          text: "Module Resolution", // 위 섹션과 겹칠수도...
          items: [
            {
              text: "Module Imports",
              link: "",
            },
            {
              text: "Module Resolution Strategies",
              link: "",
            },
          ],
          collapsible: true,
          collapsed: true,
        },
        {
          text: "Namespace",
          items: [
            {
              text: "Namespace란?",
              link: "",
            },
            {
              text: "Importing",
              link: "",
            },
            {
              text: "Exporting",
              link: "",
            },
            {
              text: "Aliasing",
              link: "",
            },
            {
              text: "Modularization",
              link: "",
            },
            {
              text: "Extending",
              link: "",
            },
            {
              text: "Suggestions",
              link: "",
            },
          ],
          collapsible: true,
          collapsed: true,
        },
        {
          text: "Compilation",
          items: [
            {
              text: "root-level",
              link: "",
            },
            {
              text: "compiler options",
              link: "",
            },
          ],
          collapsible: true,
          collapsed: true,
        },
        {
          text: "Type Declaration",
          items: [
            {
              text: ".d.ts 파일",
              link: "",
            },
            {
              text: "Global Type Declaration",
              link: "",
            },
            {
              text: "Local Type Declaration",
              link: "",
            },
          ],
          collapsible: true,
          collapsed: true,
        },
        {
          text: "Type Assertion",
          items: [
            {
              text: "Non-null operator(!)",
              link: "",
            },
          ],
          collapsible: true,
          collapsed: true,
        },
        {
          text: "Conditional Type",
          items: [
            {
              text: "Condition Type이란?",
              link: "",
            },
            {
              text: "With Generic",
              link: "",
            },
            {
              text: "Constraints",
              link: "",
            },
            {
              text: "Flatten Type",
              link: "",
            },
            {
              text: "Inferring",
              link: "",
            },
            {
              text: "Distributive Type",
              link: "",
            },
          ],
          collapsible: true,
          collapsed: true,
        },
        {
          text: "Mapped Type",
          items: [
            {
              text: "Mapped Type이란?",
              link: "",
            },
            {
              text: "Mapping Modifiers",
              link: "",
            },
            {
              text: "Key Remapping w/ 'as'",
              link: "",
            },
            {
              text: "Indexed Access Types",
              link: "",
            },
          ],
          collapsible: true,
          collapsed: true,
        },
        {
          text: "Utility Types",
          items: [
            {
              text: "Union Type",
              link: "",
            },
            {
              text: "Record",
              link: "",
            },
            {
              text: "Spread Syntax(...)",
              link: "",
            },
            {
              text: "Recursion Type",
              link: "",
            },
            {
              text: "Template Literal",
              link: "",
            },
            {
              text: "Indexed Signature",
              link: "",
            },
          ],
          collapsible: true,
          collapsed: true,
        },
        {
          text: "Generic",
          items: [
            {
              text: "Generic이란?",
              link: "",
            },
            {
              text: "Constraints",
              link: "",
            },
          ],
          collapsible: true,
          collapsed: true,
        },
        {
          text: "Syntax Sugar",
          items: [
            {
              text: "Array => Object",
              link: "",
            },
            {
              text: "tuple/array",
              link: "",
            },
            {
              text: "object",
              link: "",
            },
          ],
          collapsible: true,
          collapsed: true,
        },
        {
          text: "Keywords",
          items: [
            {
              text: "type vs. interface",
              link: "",
            },
            {
              text: "as",
              link: "",
            },
            {
              text: "as const",
              link: "",
            },
            {
              text: "infer",
              link: "",
            },
            {
              text: "extends",
              link: "",
            },
            {
              text: "enum",
              link: "",
            },
            {
              text: "readonly",
              link: "",
            },
            {
              text: "typeof",
              link: "",
            },
            {
              text: "keyof",
              link: "",
            },
          ],
          collapsible: true,
          collapsed: true,
        },
      ],
      // "/posts/vite/": [],
      "/posts/vue3/": [
        // done
        {
          text: "Reactivity API",
          items: [
            {
              text: "Saving Code To Run Later",
              link: "",
            },
            {
              text: "Multiple Properties",
              link: "",
            },
            {
              text: "Multiple Reactive Objects",
              link: "",
            },
            {
              text: "Proxy & Reflect",
              link: "",
            },
            {
              text: "activeEffect",
              link: "",
            },
            {
              text: "ref",
              link: "",
            },
            {
              text: "computed",
              link: "",
            },
          ],
          collapsible: true,
          collapsed: true,
        },
        {
          text: "Rendering Mechanism",
          items: [
            {
              text: "Virtual DOM",
              link: "",
            },
            {
              text: "Render Pipeline",
              link: "",
            },
            {
              text: "Compiler-Informed VDOM",
              link: "",
            },
          ],
          collapsible: true,
          collapsed: true,
        },
        {
          text: "Component Lifecycle",
          items: [
            {
              text: "Single Component",
              link: "",
            },
            {
              text: "Child Component",
              link: "",
            },
          ],
          collapsible: true,
          collapsed: true,
        },
        {
          text: "Composables",
          items: [
            {
              text: "Option Object Parameter",
              link: "",
            },
            {
              text: "Flexible args w/ unref",
              link: "",
            },
            {
              text: "Conditional Returns",
              link: "",
            },
            {
              text: "Async w/o Await",
              link: "",
            },
          ],
          collapsible: true,
          collapsed: true,
        },
      ],
      "/posts/web/": [
        // done
        {
          text: "Domain",
          items: [
            {
              text: "구조 및 관리",
              link: "",
            },
            {
              text: "DNS Refreshing",
              link: "",
            },
            {
              text: "DNS Processing",
              link: "",
            },
          ],
          collapsible: true,
          collapsed: true,
        },
        {
          text: "URI",
          items: [
            {
              text: "URI란?",
              link: "",
            },
            {
              text: "URL이란?",
              link: "",
            },
            {
              text: "URN이란?",
              link: "",
            },
          ],
          collapsible: true,
          collapsed: true,
        },
        {
          text: "Page vs. Site",
          items: [
            {
              text: "Web Page란?",
              link: "",
            },
            {
              text: "Web Site란?",
              link: "",
            },
          ],
          collapsible: true,
          collapsed: true,
        },
        {
          text: "Web Server",
          items: [
            {
              text: "Web Server란?",
              link: "",
            },
            {
              text: "HTTP 통신",
              link: "",
            },
          ],
          collapsible: true,
          collapsed: true,
        },
        {
          text: "Search Engine",
          items: [
            {
              text: "검색엔진이란?",
              link: "",
            },
          ],
          collapsible: true,
          collapsed: true,
        },
        {
          text: "Hyperlink",
          items: [
            {
              text: "Anchor",
              link: "",
            },
            {
              text: "Links & Search Engine",
              link: "",
            },
          ],
          collapsible: true,
          collapsed: true,
        },
        {
          text: "Browsing Context",
          items: [
            {
              text: "Browsing Context란?",
              link: "",
            },
          ],
          collapsible: true,
          collapsed: true,
        },
        {
          text: "User Agent",
          items: [
            {
              text: "User Agent란?",
              link: "",
            },
          ],
          collapsible: true,
          collapsed: true,
        },
      ],
      "/books/Composing_Software/": [
        // done
        {
          text: "Introduction",
          items: [
            {
              text: "Introduction",
              link: "",
            },
            {
              text: "The Dao of Immutability",
              link: "",
            },
            {
              text: "What is FP?",
              link: "",
            },
            {
              text: "Why FP in JS?",
              link: "",
            },
            {
              text: "Forgotten History of OOP",
              link: "",
            },
          ],
          collapsible: true,
          collapsed: true,
        },
        {
          text: "Concepts",
          items: [
            {
              text: "Pure Function",
              link: "",
            },
            {
              text: "Higher Order Functions",
              link: "",
            },
            {
              text: "Curry & Function Composition",
              link: "",
            },
            {
              text: "Abstraction & Composition",
              link: "",
            },
            {
              text: "Object Composition",
              link: "",
            },
            {
              text: "Factory Functions",
              link: "",
            },
            {
              text: "Functional Mixins",
              link: "",
            },
            {
              text: "Transducers",
              link: "",
            },
          ],
          collapsible: true,
          collapsed: true,
        },
        {
          text: "Data Structure",
          items: [
            {
              text: "Functors & Categories",
              link: "",
            },
            {
              text: "Monads",
              link: "",
            },
            {
              text: "Lenses",
              link: "",
            },
            {
              text: "Composable Data Types",
              link: "",
            },
          ],
          collapsible: true,
          collapsed: true,
        },
        {
          text: "Epilogue",
          items: [
            {
              text: "Mocking is a code smell",
              link: "",
            },
          ],
          collapsible: true,
          collapsed: true,
        },
      ],
      "/books/코어_자바스크립트/": [
        // done
        {
          text: "데이터 타입",
          items: [
            {
              text: "데이터 타입 종류",
              link: "",
            },
            {
              text: "변수선언과 데이터 할당",
              link: "",
            },
            {
              text: "null",
              link: "",
            },
            {
              text: "undefined",
              link: "",
            },
          ],
          collapsible: true,
          collapsed: true,
        },
        {
          text: "실행 컨택스트",
          items: [
            {
              text: "실행 컨택스트란?",
              link: "",
            },
            {
              text: "Lexical Environment",
              link: "",
            },
            {
              text: "Variable Environment",
              link: "",
            },
            {
              text: "this Binding",
              link: "",
            },
          ],
          collapsible: true,
          collapsed: true,
        },
        {
          text: "this",
          items: [
            {
              text: "this란?",
              link: "",
            },
            {
              text: "상황에 따라 달라지는 this",
              link: "",
            },
            {
              text: "명시적 binding",
              link: "",
            },
          ],
          collapsible: true,
          collapsed: true,
        },
        {
          text: "콜백함수",
          items: [
            {
              text: "콜백함수란?",
              link: "",
            },
            {
              text: "callback HELL",
              link: "",
            },
            {
              text: "동기 / 비동기",
              link: "",
            },
          ],
          collapsible: true,
          collapsed: true,
        },
        {
          text: "클로져(Closure)",
          items: [
            {
              text: "클로져란?",
              link: "",
            },
            {
              text: "메모리 관리",
              link: "",
            },
            {
              text: "활용되는 예시",
              link: "",
            },
          ],
          collapsible: true,
          collapsed: true,
        },
        {
          text: "프로토타입",
          items: [
            {
              text: "프로토타입이란?",
              link: "",
            },
            {
              text: "constructor 속성",
              link: "",
            },
            {
              text: "프로토타입 체인",
              link: "",
            },
          ],
          collapsible: true,
          collapsed: true,
        },
        {
          text: "클래스",
          items: [
            {
              text: "클래스 상속",
              link: "",
            },
            {
              text: "class field delimiter",
              link: "",
            },
            {
              text: "class accessor",
              link: "",
            },
          ],
          collapsible: true,
          collapsed: true,
        },
      ],
      "/books/TCP_IP_완벽_가이드/": [
        {
          text: "1장",
          items: [
            {
              text: "기본 네트워킹 특성",
              link: "/books/TCP_IP_완벽_가이드/1장/1-2",
            },
            {
              text: "메시지: 패킷, 프레임, 데이터그램, 셀",
              link: "/books/TCP_IP_완벽_가이드/1장/1-3",
            },
            {
              text: "네트워크 구조 모델과 클라이언트/서버, 피어투피어 네트워킹",
              link: "/books/TCP_IP_완벽_가이드/1장/1-4",
            },
            {
              text: "세그먼트, 네트워크, 서브네트워크, 인터네트워크",
              link: "/books/TCP_IP_완벽_가이드/1장/1-6",
            },
          ],
          collapsible: true,
          collapsed: true,
        },
        {
          text: "2장",
          items: [
            {
              text: "네트워크 성능: 전체적인 관점에서 바라보기",
              link: "/books/TCP_IP_완벽_가이드/2장/2-1",
            },
            {
              text: "네트워크 성능과 기타 주요 특성 사이의 균형 조정",
              link: "/books/TCP_IP_완벽_가이드/2장/2-2",
            },
            {
              text: "성능측정",
              link: "/books/TCP_IP_완벽_가이드/2장/2-3",
            },
            {
              text: "성능 측정 단위 이해",
              link: "/books/TCP_IP_완벽_가이드/2장/2-4",
            },
            {
              text: "이론적 처리율과 실제 처리율, 네트워크 성능에 영향을 주는 요인",
              link: "/books/TCP_IP_완벽_가이드/2장/2-5",
            },
            {
              text: "단방향, 양방향, 반양방향",
              link: "/books/TCP_IP_완벽_가이드/2장/2-6",
            },
            {
              text: "서비스 품질",
              link: "/books/TCP_IP_완벽_가이드/2장/2-7",
            },
          ],
          collapsible: true,
          collapsed: true,
        },
        {
          text: "5장",
          items: [
            {
              text: "전반적인 참조 모델 이슈",
              link: "/books/TCP_IP_완벽_가이드/5장/5-2",
            },
            {
              text: "핵심 OSI 참조 모델 개념",
              link: "/books/TCP_IP_완벽_가이드/5장/5-3",
            },
          ],
          collapsible: true,
          collapsed: true,
        },
        {
          text: "6장",
          items: [
            {
              text: "물리 계층(1계층)",
              link: "/books/TCP_IP_완벽_가이드/6장/6-1",
            },
            {
              text: "데이터링크 계층(2계층)",
              link: "/books/TCP_IP_완벽_가이드/6장/6-2",
            },
            {
              text: "네트워크 계층(3계층)",
              link: "/books/TCP_IP_완벽_가이드/6장/6-3",
            },
            {
              text: "전송 계층(4계층)",
              link: "/books/TCP_IP_완벽_가이드/6장/6-4",
            },
            {
              text: "세션 계층(5계층)",
              link: "/books/TCP_IP_완벽_가이드/6장/6-5",
            },
            {
              text: "프리젠테이션 계층(6계층)",
              link: "/books/TCP_IP_완벽_가이드/6장/6-6",
            },
            {
              text: "애플리케이션 계층(7계층)",
              link: "/books/TCP_IP_완벽_가이드/6장/6-7",
            },
          ],
          collapsible: true,
          collapsed: true,
        },
        {
          text: "13장",
          items: [
            {
              text: "주소결정 개념과 이슈",
              link: "/books/TCP_IP_완벽_가이드/13장/13-1",
            },
          ],
          collapsible: true,
          collapsed: true,
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
        items: [
          {
            text: "API",
            link: "/posts/api/",
          },
          {
            text: "SW Architecture",
            link: "/posts/architecture/",
          },
          {
            text: "Browser",
            link: "/posts/browser/",
          },
          {
            text: "Clean Code",
            link: "/posts/clean_code/",
          },
          {
            text: "DevOps",
            link: "/posts/devops/",
          },
          {
            text: "FrontEnd",
            link: "/posts/frontend/",
          },
          {
            text: "Git",
            link: "/posts/git/",
          },
          {
            text: "HTTP",
            link: "/posts/http/",
          },
          {
            text: "Javascript",
            link: "/posts/javascript/",
          },
          {
            text: "Node",
            link: "/posts/node/",
          },
          {
            text: "PWA",
            link: "/posts/pwa/",
          },
          {
            text: "React",
            link: "/posts/react/",
          },
          {
            text: "Security",
            link: "/posts/security/",
          },
          {
            text: "Typescript",
            link: "/posts/typescript/",
          },
          {
            text: "Vite",
            link: "/posts/vite/",
          },
          {
            text: "Vue3",
            link: "/posts/vue3/",
          },
          {
            text: "Web",
            link: "/posts/web/",
          },
        ],
      },
      {
        text: "Articles",
        link: "/articles/",
      },
      {
        text: "Books",
        items: [
          {
            text: "Composing Software",
            link: "/books/composing_software/",
          },
          {
            text: "코어 자바스크립트",
            link: "/books/코어_자바스크립트/",
          },
          {
            text: "TCP/IP 완벽 가이드",
            link: "/books/TCP_IP_완벽_가이드/",
          },
        ],
      },
    ],
  },
});
