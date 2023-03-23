import { defineConfig } from "vitepress";

export default defineConfig({
  themeConfig: {
    sidebar: {
      "/posts/architecture/": [
        {
          text: "Architecture",
          items: [
            {
              text: "Architecture",
              link: "/posts/architecture/architecture/architecture",
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
              text: "script의 위치",
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
              text: "Reflow, Repaint",
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
              text: "Session, Cookie",
              link: "/posts/browser/storage/session_cookie",
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
              text: "DevOps",
              link: "/posts/devops/devops/devops",
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
              text: "Tree Shaking",
              link: "/posts/frontend/tree_shaking/tree_shaking",
            },
          ],
          collapsible: true,
          collapsed: true,
        },
        {
          text: "Skeleton UI",
          items: [
            {
              text: "Skeleton UI",
              link: "/posts/frontend/skeleton_ui/skeleton_ui",
            },
          ],
          collapsible: true,
          collapsed: true,
        },
        {
          text: "Lazy Loading",
          items: [
            {
              text: "Lazy Loading",
              link: "/posts/frontend/lazy_loading/lazy_loading",
            },
          ],
          collapsible: true,
          collapsed: true,
        },
        {
          text: "SEO",
          items: [
            {
              text: "SEO",
              link: "/posts/frontend/seo/seo",
            },
          ],
          collapsible: true,
          collapsed: true,
        },
        {
          text: "Cross-Browsing",
          items: [
            {
              text: "Cross-Browsing",
              link: "/posts/frontend/cross_browsing/cross_browsing",
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
              text: "Git Flow",
              link: "/posts/git/git_flow/git_flow",
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
              text: "Message Structure",
              link: "/posts/http/http1/message_structure",
            },
            {
              text: "MIME",
              link: "/posts/http/http1/mime",
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
              text: "Garbage Collector",
              link: "/posts/javascript/memory_management/garbage_collector",
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
              link: "/posts/javascript/strict_mode/strict_mode란",
            },
            {
              text: "Invoking Strict Mode",
              link: "/posts/javascript/strict_mode/invoking_strict_mode",
            },
            {
              text: "Changes in Strict Mode",
              link: "/posts/javascript/strict_mode/changes_in_strict_mode",
            },
          ],
          collapsible: true,
          collapsed: true,
        },
        {
          text: "변수",
          items: [
            {
              text: "Declare → Initialize → Assign",
              link: "/posts/javascript/variable/declare_initialize_assign",
            },
            {
              text: "var",
              link: "/posts/javascript/variable/var",
            },
            {
              text: "const, let",
              link: "/posts/javascript/variable/const_let",
            },
          ],
          collapsible: true,
          collapsed: true,
        },
        {
          text: "연산자",
          items: [
            {
              text: "(==)",
              link: "/posts/javascript/operators/equality",
            },
            {
              text: "(===)",
              link: "/posts/javascript/operators/strict_equality",
            },
            {
              text: "(?.)",
              link: "/posts/javascript/operators/optional_chaining",
            },
            {
              text: "(??)",
              link: "/posts/javascript/operators/nullish_coalescing",
            },
            {
              text: "(??=)",
              link: "/posts/javascript/operators/logical_nullish_assignment",
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
              link: "/posts/javascript/data_structures/array",
            },
            {
              text: "Object",
              link: "/posts/javascript/data_structures/object",
            },
            {
              text: "Symbol",
              link: "/posts/javascript/data_structures/symbol",
            },
            {
              text: "Map",
              link: "/posts/javascript/data_structures/map",
            },
            {
              text: "WeakMap",
              link: "/posts/javascript/data_structures/weakmap",
            },
            {
              text: "Set",
              link: "/posts/javascript/data_structures/set",
            },
            {
              text: "WeakSet",
              link: "/posts/javascript/data_structures/weakset",
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
              link: "/posts/javascript/interfaces/blob",
            },
            {
              text: "FileReader",
              link: "/posts/javascript/interfaces/filereader",
            },
            {
              text: "ArrayBuffer",
              link: "/posts/javascript/interfaces/arraybuffer",
            },
            {
              text: "FormData",
              link: "/posts/javascript/interfaces/formdata",
            },
            {
              text: "Proxy",
              link: "/posts/javascript/interfaces/proxy",
            },
            {
              text: "Reflect",
              link: "/posts/javascript/interfaces/reflect",
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
              link: "/posts/javascript/loop/protocols",
            },
            {
              text: "for",
              link: "/posts/javascript/loop/for",
            },
            {
              text: "for-in",
              link: "/posts/javascript/loop/for_in",
            },
            {
              text: "for-of",
              link: "/posts/javascript/loop/for_of",
            },
            {
              text: "for await-of",
              link: "/posts/javascript/loop/for_await_of",
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
              link: "/posts/javascript/syntatic_sugar/async_await",
            },
            {
              text: "Array Intersection",
              link: "/posts/javascript/syntatic_sugar/array_intersection",
            },
            {
              text: "every & some",
              link: "/posts/javascript/syntatic_sugar/every_some",
            },
            {
              text: "Filter Falsy Values",
              link: "/posts/javascript/syntatic_sugar/filter_falsy_values",
            },
            {
              text: "Computed Property",
              link: "/posts/javascript/syntatic_sugar/computed_property",
            },
            {
              text: "-1 bit",
              link: "/posts/javascript/syntatic_sugar/-1_bit",
            },
            {
              text: "Default Parameters",
              link: "/posts/javascript/syntatic_sugar/default_parameters",
            },
            {
              text: "String To Array",
              link: "/posts/javascript/syntatic_sugar/string_to_array",
            },
            {
              text: "Truncating, Expanding Array",
              link: "/posts/javascript/syntatic_sugar/truncating_expanding_array",
            },
            {
              text: "How to check empty array?",
              link: "/posts/javascript/syntatic_sugar/how_to_check_empty_array",
            },
          ],
          collapsible: true,
          collapsed: true,
        },
      ],
      "/posts/node/": [
        {
          text: "Package",
          items: [
            {
              text: "Package",
              link: "/posts/node/package/package",
            },
            {
              text: "Module Resolution",
              link: "/posts/node/package/module_resolution",
            },
            {
              text: "Package Exports",
              link: "/posts/node/package/package_exports",
            },
            {
              text: "Package Imports",
              link: "/posts/node/package/package_imports",
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
              link: "/posts/node/configuration/package_json",
            },
            {
              text: "package-lock.json",
              link: "/posts/node/configuration/package_lock_json",
            },
          ],
          collapsible: true,
          collapsed: true,
        },
        {
          text: "pnpm",
          items: [
            {
              text: "pnpm",
              link: "/posts/node/pnpm/pnpm",
            },
            {
              text: "node_modules 구조",
              link: "/posts/node/pnpm/node_modules의_구조",
            },
            {
              text: "peerDependencies Resolution",
              link: "/posts/node/pnpm/peerDependencies_resolution",
            },
          ],
          collapsible: true,
          collapsed: true,
        },
      ],
      "/posts/pwa/": [
        {
          text: "Progressive Web App",
          items: [
            {
              text: "PWA란?",
              link: "/posts/pwa/pwa/pwa란",
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
              link: "/posts/pwa/assets_and_data/app_components",
            },
            {
              text: "Cache & Stroage",
              link: "/posts/pwa/assets_and_data/cache_storage",
            },
            {
              text: "Size & Lifespan",
              link: "/posts/pwa/assets_and_data/size_lifespan",
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
              link: "/posts/pwa/service_workers/service_worker란",
            },
            {
              text: "Scope",
              link: "/posts/pwa/service_workers/scope",
            },
            {
              text: "Lifecycle",
              link: "/posts/pwa/service_workers/lifecycle",
            },
          ],
          collapsible: true,
          collapsed: true,
        },
      ],
      // "/posts/react/": [],
      "/posts/security/": [
        {
          text: "XSRF",
          items: [
            {
              text: "XSRF란?",
              link: "/posts/security/xsrf/xsrf란",
            },
            {
              text: "XSRF 예방하기",
              link: "/posts/security/xsrf/xsrf_예방하기",
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
              link: "/posts/security/xss/xss란",
            },
            {
              text: "XSS 예방하기",
              link: "/posts/security/xss/xss_예방하기",
            },
          ],
          collapsible: true,
          collapsed: true,
        },
        {
          text: "JWT",
          items: [
            {
              text: "JWT",
              link: "/posts/security/jwt/jwt",
            },
          ],
          collapsible: true,
          collapsed: true,
        },
        {
          text: "CORS",
          items: [
            {
              text: "CORS",
              link: "/posts/security/cors/cors",
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
              link: "/posts/security/oauth/oauth",
            },
          ],
          collapsible: true,
          collapsed: true,
        },
      ],
      "/posts/typescript/": [
        {
          text: "Module",
          items: [
            {
              text: "Module Imports",
              link: "/posts/typescript/module/module_imports",
            },
            {
              text: "Module Resolution Strategies",
              link: "/posts/typescript/module/module_resolution_strategies",
            },
            {
              text: "Module Standard",
              link: "/posts/typescript/module/module_standard",
            },
            {
              text: "Share Type Declaration",
              link: "/posts/typescript/module/share_type_declaration",
            },
            {
              text: "Dynamic Imports",
              link: "/posts/typescript/module/dynamic_imports",
            },
            {
              text: "Declare Keyword",
              link: "/posts/typescript/module/declare_keyword",
            },
            {
              text: "Ambient Modules",
              link: "/posts/typescript/module/ambient_modules",
            },
          ],
          collapsible: true,
          collapsed: true,
        },
        {
          text: "Namespace",
          items: [
            {
              text: "Namespace",
              link: "/posts/typescript/namespace/namespace",
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
              link: "/posts/typescript/type_declaration/.d.ts_파일",
            },
            {
              text: "Local Type Declaration",
              link: "/posts/typescript/type_declaration/local_type_declaration",
            },
            {
              text: "Global Type Declaration",
              link: "/posts/typescript/type_declaration/global_type_declaration",
            },
          ],
          collapsible: true,
          collapsed: true,
        },
        {
          text: "Type Assertion",
          items: [
            {
              text: "Type Assertion",
              link: "/posts/typescript/type_assertion/type_assertion",
            },
          ],
          collapsible: true,
          collapsed: true,
        },
        {
          text: "Conditional Types",
          items: [
            {
              text: "Conditional Types",
              link: "/posts/typescript/conditional_types/conditional_types",
            },
          ],
          collapsible: true,
          collapsed: true,
        },
        {
          text: "Mapped Types",
          items: [
            {
              text: "Mapped Types",
              link: "/posts/typescript/mapped_types/mapped_types",
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
              link: "/posts/typescript/utility_types/union_type",
            },
            {
              text: "Record Type",
              link: "/posts/typescript/utility_types/record_type",
            },
            {
              text: "Spread Syntax",
              link: "/posts/typescript/utility_types/spread_syntax",
            },
            {
              text: "Recursion Type",
              link: "/posts/typescript/utility_types/recursion_type",
            },
            {
              text: "Template Literal Type",
              link: "/posts/typescript/utility_types/template_literal_type",
            },
            {
              text: "Indexed Signature",
              link: "/posts/typescript/utility_types/indexed_signature",
            },
          ],
          collapsible: true,
          collapsed: true,
        },
        {
          text: "Generic",
          items: [
            {
              text: "Generic",
              link: "/posts/typescript/generic/generic",
            },
          ],
          collapsible: true,
          collapsed: true,
        },
        {
          text: "Syntax Sugar",
          items: [
            {
              text: "Array Type",
              link: "/posts/typescript/syntax_sugar/array_type",
            },
            {
              text: "Tuple Type",
              link: "/posts/typescript/syntax_sugar/tuple_type",
            },
            {
              text: "Object Type",
              link: "/posts/typescript/syntax_sugar/object_type",
            },
          ],
          collapsible: true,
          collapsed: true,
        },
        {
          text: "Keywords",
          items: [
            {
              text: "infer",
              link: "/posts/typescript/keywords/infer",
            },
            {
              text: "enum",
              link: "/posts/typescript/keywords/enum",
            },
          ],
          collapsible: true,
          collapsed: true,
        },
      ],
      // "/posts/vite/": [],
      "/posts/vue3/": [
        {
          text: "Reactivity API",
          items: [
            {
              text: "Saving Code To Run Later",
              link: "/posts/vue3/reactivity_api/saving_code_to_run_later",
            },
            {
              text: "Multiple Properties",
              link: "/posts/vue3/reactivity_api/multiple_properties",
            },
            {
              text: "Multiple Reactive Objects",
              link: "/posts/vue3/reactivity_api/multiple_reactive_objects",
            },
            {
              text: "Proxy, Reflect",
              link: "/posts/vue3/reactivity_api/proxy_reflect",
            },
            {
              text: "activeEffect",
              link: "/posts/vue3/reactivity_api/active_effect",
            },
            {
              text: "ref",
              link: "/posts/vue3/reactivity_api/ref",
            },
            {
              text: "computed",
              link: "/posts/vue3/reactivity_api/computed",
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
              link: "/posts/vue3/rendering_mechanism/virtual_dom",
            },
            {
              text: "Render Pipeline",
              link: "/posts/vue3/rendering_mechanism/render_pipeline",
            },
            {
              text: "Compiler-Informed VDOM",
              link: "/posts/vue3/rendering_mechanism/compiler_informed_virtual_dom",
            },
          ],
          collapsible: true,
          collapsed: true,
        },
        {
          text: "Component Lifecycle",
          items: [
            {
              text: "Component Lifecycle",
              link: "/posts/vue3/component_lifecycle/component_lifecycle",
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
              link: "/posts/vue3/composable/option_object_parameter",
            },
            {
              text: "Flexible arguments",
              link: "/posts/vue3/composable/flexible_arguments",
            },
            {
              text: "Async Without Await",
              link: "/posts/vue3/composable/async_without_await",
            },
          ],
          collapsible: true,
          collapsed: true,
        },
      ],
      "/posts/web_용어정리/": [
        {
          text: "Domain",
          items: [
            {
              text: "Domain",
              link: "/posts/web_용어정리/domain/domain",
            },
            {
              text: "Page vs. Site",
              link: "/posts/web_용어정리/domain/page_vs_site",
            },
          ],
          collapsible: true,
          collapsed: true,
        },
        {
          text: "URI",
          items: [
            {
              text: "URI",
              link: "/posts/web_용어정리/uri/uri",
            },
            {
              text: "Encoding",
              link: "/posts/web_용어정리/uri/encoding",
            },
          ],
          collapsible: true,
          collapsed: true,
        },
        {
          text: "Web Server",
          items: [
            {
              text: "Web Server",
              link: "/posts/web_용어정리/web_server/web_server",
            },
          ],
          collapsible: true,
          collapsed: true,
        },
        {
          text: "Search Engine",
          items: [
            {
              text: "Search Engine",
              link: "/posts/web_용어정리/search_engine/search_engine",
            },
          ],
          collapsible: true,
          collapsed: true,
        },
        {
          text: "Hyperlink",
          items: [
            {
              text: "HyperLink",
              link: "/posts/web_용어정리/hyperlink/hyperlink",
            },
          ],
          collapsible: true,
          collapsed: true,
        },
        {
          text: "Browsing Context",
          items: [
            {
              text: "Browsing Context",
              link: "/posts/web_용어정리/browsing_context/browsing_context",
            },
          ],
          collapsible: true,
          collapsed: true,
        },
        {
          text: "User Agent",
          items: [
            {
              text: "User Agent",
              link: "/posts/web_용어정리/user_agent/user_agent",
            },
          ],
          collapsible: true,
          collapsed: true,
        },
        {
          text: "API",
          items: [
            {
              text: "API",
              link: "/posts/web_용어정리/api/api",
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
            {
              text: "TCP/IP 주소 결정 프로토콜",
              link: "/books/TCP_IP_완벽_가이드/13장/13-2",
            },
            {
              text: "ARP 캐싱",
              link: "/books/TCP_IP_완벽_가이드/13장/13-3",
            },
            {
              text: "프록시 ARP",
              link: "/books/TCP_IP_완벽_가이드/13장/13-4",
            },
            {
              text: "IP 멀티캐스트 주소의 TCP/IP 주소 결정",
              link: "/books/TCP_IP_완벽_가이드/13장/13-5",
            },
          ],
          collapsible: true,
          collapsed: true,
        },
      ],
    },
    nav: [
      {
        text: "Posts",
        items: [
          {
            text: "Architecture",
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
          // {
          //   text: "React",
          //   link: "/posts/react/",
          // },
          {
            text: "Security",
            link: "/posts/security/",
          },
          {
            text: "Typescript",
            link: "/posts/typescript/",
          },
          // {
          //   text: "Vite",
          //   link: "/posts/vite/",
          // },
          {
            text: "Vue3",
            link: "/posts/vue3/",
          },
          {
            text: "Web 용어정리",
            link: "/posts/web_용어정리/",
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
