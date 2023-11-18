import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Archive",
  base: "/archive/",
  themeConfig: {
    socialLinks: [{ icon: "github", link: "https://github.com/jasongoose" }],
    sidebar: {
      "/studies/architecture/": [
        {
          text: "Service",
          items: [
            {
              text: "Microservice",
              link: "/studies/architecture/microservice",
            },
            {
              text: "Micro Frontend",
              link: "/studies/architecture/microfrontend",
            },
            {
              text: "BFF",
              link: "/studies/architecture/bff",
            },
          ],
        },
        {
          text: "Project",
          items: [
            {
              text: "FSD",
              link: "/studies/architecture/fsd",
            },
          ],
        },
      ],
      "/studies/patterns/": [
        {
          text: "Patterns",
          items: [
            {
              text: "Patterns",
              link: "/studies/patterns/patterns",
            },
            {
              text: "MVC",
              link: "/studies/patterns/mvc",
            },
            {
              text: "MVVM",
              link: "/studies/patterns/mvvm",
            },
            {
              text: "Container-Presenter",
              link: "/studies/patterns/container_presenter",
            },
            {
              text: "Flux",
              link: "/studies/patterns/flux",
            },
            {
              text: "Observer-Observable",
              link: "/studies/patterns/observer_observable",
            },
            {
              text: "MVI",
              link: "/studies/patterns/mvi",
            },
          ],
        },
      ],
      "/studies/browser/": [
        {
          text: "HTML",
          items: [
            {
              text: "script의 위치",
              link: "/studies/browser/html/script의_위치",
            },
          ],
        },
        {
          text: "CSS",
          items: [
            {
              text: "Pseudo Element",
              link: "/studies/browser/css/Pseudo_Element",
            },
            {
              text: "Flexbox",
              link: "/studies/browser/css/Flexbox",
            },
            {
              text: "Grid",
              link: "/studies/browser/css/Grid",
            },
          ],
        },
        {
          text: "Browser Runtime",
          items: [
            {
              text: "구조",
              link: "/studies/browser/browser_runtime/브라우저_런타임_구조",
            },
            {
              text: "비동기 작업 예시",
              link: "/studies/browser/browser_runtime/비동기_작업_예시",
            },
          ],
        },
        {
          text: "Populating the page",
          items: [
            {
              text: "Overview",
              link: "/studies/browser/populating_the_page/overview",
            },
            {
              text: "Navigation",
              link: "/studies/browser/populating_the_page/navigation",
            },
            {
              text: "Response",
              link: "/studies/browser/populating_the_page/response",
            },
            {
              text: "Critical Rendering Path",
              link: "/studies/browser/populating_the_page/crp",
            },
            {
              text: "Reflow, Repaint",
              link: "/studies/browser/populating_the_page/reflow_repaint",
            },
          ],
        },
        {
          text: "Storage",
          items: [
            {
              text: "Session, Cookie",
              link: "/studies/browser/storage/session_cookie",
            },
            {
              text: "Web Storage",
              link: "/studies/browser/storage/web_storage",
            },
          ],
        },
        {
          text: "Rendering Strategy",
          items: [
            {
              text: "CSR",
              link: "/studies/browser/rendering_strategy/csr",
            },
            {
              text: "SSR",
              link: "/studies/browser/rendering_strategy/ssr",
            },
          ],
        },
        {
          text: "Web API",
          items: [
            {
              text: "DOM",
              link: "/studies/browser/web_api/dom",
            },
            {
              text: "Broadcast Channel",
              link: "/studies/browser/web_api/broadcast_channel",
            },
            {
              text: "Window",
              link: "/studies/browser/web_api/window",
            },
            {
              text: "Cache Storage",
              link: "/studies/browser/web_api/cache_storage",
            },
            {
              text: "IndexedDB",
              link: "/studies/browser/web_api/indexed_db",
            },
          ],
        },
      ],
      "/studies/clean_code/": [
        {
          text: "Clean Code",
          items: [
            {
              text: "Guard Clauses",
              link: "/studies/clean_code/clean_code/guard_clauses",
            },
          ],
        },
      ],
      "/studies/frontend/": [
        {
          text: "Techniques",
          items: [
            {
              text: "Tree Shaking",
              link: "/studies/frontend/tree_shaking",
            },
            {
              text: "Skeleton UI",
              link: "/studies/frontend/skeleton_ui",
            },
            {
              text: "Lazy Loading",
              link: "/studies/frontend/lazy_loading",
            },
            {
              text: "SEO",
              link: "/studies/frontend/seo",
            },
            {
              text: "Cross-Browsing",
              link: "/studies/frontend/cross_browsing",
            },
          ],
        },
      ],
      "/studies/git/": [
        {
          text: "Why Git?",
          items: [
            {
              text: "Why Git?",
              link: "/studies/git/why_git/why_git",
            },
          ],
        },
        {
          text: "Terms",
          items: [
            {
              text: "Pull Request",
              link: "/studies/git/terms/pull_request",
            },
            {
              text: "Staging Area",
              link: "/studies/git/terms/staging_area",
            },
          ],
        },
        {
          text: "Git commands",
          items: [
            {
              text: "git init",
              link: "/studies/git/git_commands/git_init",
            },
            {
              text: "git clone",
              link: "/studies/git/git_commands/git_clone",
            },
            {
              text: "git config",
              link: "/studies/git/git_commands/git_config",
            },
            {
              text: "git commit --amend",
              link: "/studies/git/git_commands/git_commit_amend",
            },
            {
              text: "git push",
              link: "/studies/git/git_commands/git_push",
            },
            {
              text: "git merge",
              link: "/studies/git/git_commands/git_merge",
            },
            {
              text: "git stash",
              link: "/studies/git/git_commands/git_stash",
            },
            {
              text: "git cherrypick",
              link: "/studies/git/git_commands/git_cherrypick",
            },
            {
              text: "git reset vs. git revert",
              link: "/studies/git/git_commands/git_reset_revert",
            },
            {
              text: "git fetch vs. git pull",
              link: "/studies/git/git_commands/git_fetch_pull",
            },
            {
              text: "git checkout",
              link: "/studies/git/git_commands/git_checkout",
            },
            {
              text: "git rebase",
              link: "/studies/git/git_commands/git_rebase",
            },
          ],
        },
        {
          text: "Git Flow",
          items: [
            {
              text: "Git Flow",
              link: "/studies/git/git_flow/git_flow",
            },
            {
              text: "Main Branches",
              link: "/studies/git/git_flow/main_branches",
            },
            {
              text: "Support Branches",
              link: "/studies/git/git_flow/support_branches",
            },
          ],
        },
      ],
      "/studies/http/": [
        {
          text: "HTTP/1.x",
          items: [
            {
              text: "Methods",
              link: "/studies/http/http1/methods",
            },
            {
              text: "Cache",
              link: "/studies/http/http1/cache",
            },
            {
              text: "Message Structure",
              link: "/studies/http/http1/message_structure",
            },
            {
              text: "MIME",
              link: "/studies/http/http1/mime",
            },
            {
              text: "Connection Management",
              link: "/studies/http/http1/connection_management",
            },
          ],
        },
        {
          text: "HTTP/2",
          items: [
            {
              text: "Binary Framing Layer",
              link: "/studies/http/http2/binary_framing_layer",
            },
            {
              text: "Stream, Message, Frame",
              link: "/studies/http/http2/stream_message_frame",
            },
            {
              text: "Multiplexing",
              link: "/studies/http/http2/multiplexing",
            },
            {
              text: "Stream Prioritization",
              link: "/studies/http/http2/stream_prioritization",
            },
          ],
        },
        {
          text: "Redirect",
          items: [
            {
              text: "Redirect",
              link: "/studies/http/redirect/redirect",
            },
          ],
        },
      ],
      "/studies/javascript/": [
        {
          text: "ECMAScript",
          items: [
            {
              text: "ECMA International",
              link: "/studies/javascript/ecmascript/ecma_international",
            },
            {
              text: "ECMA-262",
              link: "/studies/javascript/ecmascript/ecma_262",
            },
            {
              text: "ECMAScript",
              link: "/studies/javascript/ecmascript/ecmascript",
            },
            {
              text: "Javascript",
              link: "/studies/javascript/ecmascript/javascript",
            },
            {
              text: "JS Engine",
              link: "/studies/javascript/ecmascript/javascript_engine",
            },
            {
              text: "JS Runtime",
              link: "/studies/javascript/ecmascript/javascript_runtime",
            },
            {
              text: "Scripting Language",
              link: "/studies/javascript/ecmascript/scripting_language",
            },
          ],
        },
        {
          text: "메모리 관리",
          items: [
            {
              text: "Garbage Collector",
              link: "/studies/javascript/memory_management/garbage_collector",
            },
          ],
        },
        {
          text: "Strict Mode",
          items: [
            {
              text: "Strict Mode",
              link: "/studies/javascript/strict_mode/strict_mode",
            },
            {
              text: "Invoking Strict Mode",
              link: "/studies/javascript/strict_mode/invoking_strict_mode",
            },
            {
              text: "Changes in Strict Mode",
              link: "/studies/javascript/strict_mode/changes_in_strict_mode",
            },
          ],
        },
        {
          text: "변수",
          items: [
            {
              text: "Declare → Initialize → Assign",
              link: "/studies/javascript/variable/declare_initialize_assign",
            },
            {
              text: "var",
              link: "/studies/javascript/variable/var",
            },
            {
              text: "const, let",
              link: "/studies/javascript/variable/const_let",
            },
          ],
        },
        {
          text: "연산자",
          items: [
            {
              text: "(==)",
              link: "/studies/javascript/operators/equality",
            },
            {
              text: "(===)",
              link: "/studies/javascript/operators/strict_equality",
            },
            {
              text: "(?.)",
              link: "/studies/javascript/operators/optional_chaining",
            },
            {
              text: "(??)",
              link: "/studies/javascript/operators/nullish_coalescing",
            },
            {
              text: "(??=)",
              link: "/studies/javascript/operators/logical_nullish_assignment",
            },
          ],
        },
        {
          text: "Data Structures",
          items: [
            {
              text: "Array",
              link: "/studies/javascript/data_structures/array",
            },
            {
              text: "Object",
              link: "/studies/javascript/data_structures/object",
            },
            {
              text: "Symbol",
              link: "/studies/javascript/data_structures/symbol",
            },
            {
              text: "Map",
              link: "/studies/javascript/data_structures/map",
            },
            {
              text: "WeakMap",
              link: "/studies/javascript/data_structures/weakmap",
            },
            {
              text: "Set",
              link: "/studies/javascript/data_structures/set",
            },
            {
              text: "WeakSet",
              link: "/studies/javascript/data_structures/weakset",
            },
          ],
        },
        {
          text: "Interfaces",
          items: [
            {
              text: "Blob",
              link: "/studies/javascript/interfaces/blob",
            },
            {
              text: "FileReader",
              link: "/studies/javascript/interfaces/filereader",
            },
            {
              text: "ArrayBuffer",
              link: "/studies/javascript/interfaces/arraybuffer",
            },
            {
              text: "FormData",
              link: "/studies/javascript/interfaces/formdata",
            },
            {
              text: "Proxy",
              link: "/studies/javascript/interfaces/proxy",
            },
            {
              text: "Reflect",
              link: "/studies/javascript/interfaces/reflect",
            },
          ],
        },
        {
          text: "Loop",
          items: [
            {
              text: "Protocols",
              link: "/studies/javascript/loop/protocols",
            },
            {
              text: "for",
              link: "/studies/javascript/loop/for",
            },
            {
              text: "for-in",
              link: "/studies/javascript/loop/for_in",
            },
            {
              text: "for-of",
              link: "/studies/javascript/loop/for_of",
            },
            {
              text: "for await-of",
              link: "/studies/javascript/loop/for_await_of",
            },
          ],
        },
        {
          text: "Syntatic Sugar",
          items: [
            {
              text: "async/await",
              link: "/studies/javascript/syntatic_sugar/async_await",
            },
            {
              text: "Array Intersection",
              link: "/studies/javascript/syntatic_sugar/array_intersection",
            },
            {
              text: "every & some",
              link: "/studies/javascript/syntatic_sugar/every_some",
            },
            {
              text: "Filter Falsy Values",
              link: "/studies/javascript/syntatic_sugar/filter_falsy_values",
            },
            {
              text: "Computed Property",
              link: "/studies/javascript/syntatic_sugar/computed_property",
            },
            {
              text: "-1 bit",
              link: "/studies/javascript/syntatic_sugar/-1_bit",
            },
            {
              text: "Default Parameters",
              link: "/studies/javascript/syntatic_sugar/default_parameters",
            },
            {
              text: "String To Array",
              link: "/studies/javascript/syntatic_sugar/string_to_array",
            },
            {
              text: "Truncating, Expanding Array",
              link: "/studies/javascript/syntatic_sugar/truncating_expanding_array",
            },
            {
              text: "How to check empty array?",
              link: "/studies/javascript/syntatic_sugar/how_to_check_empty_array",
            },
          ],
        },
      ],
      "/studies/nextjs": [
        {
          text: "Learn basics",
          items: [
            {
              text: "Pre-rendering and Data Fetching",
              link: "/studies/nextjs/learn_basics/prerendering_and_data_fetching",
            },
          ],
        },
      ],
      "/studies/node/": [
        {
          text: "Package",
          items: [
            {
              text: "Package",
              link: "/studies/node/package/package",
            },
            {
              text: "Module Resolution",
              link: "/studies/node/package/module_resolution",
            },
            {
              text: "Package Exports",
              link: "/studies/node/package/package_exports",
            },
            {
              text: "Package Imports",
              link: "/studies/node/package/package_imports",
            },
          ],
        },
        {
          text: "Configuration",
          items: [
            {
              text: "package.json",
              link: "/studies/node/configuration/package_json",
            },
            {
              text: "package-lock.json",
              link: "/studies/node/configuration/package_lock_json",
            },
          ],
        },
        {
          text: "pnpm",
          items: [
            {
              text: "pnpm",
              link: "/studies/node/pnpm/pnpm",
            },
            {
              text: "node_modules 구조",
              link: "/studies/node/pnpm/node_modules의_구조",
            },
            {
              text: "peerDependencies Resolution",
              link: "/studies/node/pnpm/peerDependencies_resolution",
            },
          ],
        },
      ],
      "/studies/react/": [
        {
          text: "Learn React",
          items: [
            {
              text: "Keeping Components Pure",
              link: "/studies/react/learn_react/keeping_components_pure",
            },
            {
              text: "Responding to Events",
              link: "/studies/react/learn_react/responding_to_events",
            },
            {
              text: "State: A Component’s Memory",
              link: "/studies/react/learn_react/state_a_components_memory",
            },
            {
              text: "Render and Commit",
              link: "/studies/react/learn_react/render_and_commit",
            },
            {
              text: "State as a Snapshot",
              link: "/studies/react/learn_react/state_as_a_snapshot",
            },
            {
              text: "Queueing a Series of State Updates",
              link: "/studies/react/learn_react/queueing_a_series_of_state_updates",
            },
            {
              text: "Updating Objects in State",
              link: "/studies/react/learn_react/updating_objects_in_state",
            },
            {
              text: "Updating Arrays in State",
              link: "/studies/react/learn_react/updating_arrays_in_state",
            },
            {
              text: "Reacting to Input with State",
              link: "/studies/react/learn_react/reacting_to_input_with_state",
            },
            {
              text: "Choosing the State Structure",
              link: "/studies/react/learn_react/choosing_the_state_structure",
            },
            {
              text: "Sharing State Between Components",
              link: "/studies/react/learn_react/sharing_state_between_components",
            },
            {
              text: "Preserving and Resetting State",
              link: "/studies/react/learn_react/preserving_and_resetting_state",
            },
            {
              text: "Extracting State Logic into a Reducer",
              link: "/studies/react/learn_react/extracting_state_logic_into_a_reducer",
            },
            {
              text: "Passing Data Deeply w/ Context",
              link: "/studies/react/learn_react/passing_data_deeply_with_context",
            },
            {
              text: "Scaling Up with Reducer and Context",
              link: "/studies/react/learn_react/scaling_up_with_reducer_and_context",
            },
            {
              text: "Referencing Values with Refs",
              link: "/studies/react/learn_react/referencing_values_with_refs",
            },
            {
              text: "Manipulating the DOM w/ Refs",
              link: "/studies/react/learn_react/manipulating_the_dom_with_refs",
            },
            {
              text: "Synchronizing w/ Effects",
              link: "/studies/react/learn_react/synchronizing_with_effects",
            },
            {
              text: "You Might Not Need an Effect",
              link: "/studies/react/learn_react/you_might_not_need_an_effect",
            },
            {
              text: "Lifecyle of Reactive Effects",
              link: "/studies/react/learn_react/lifecycle_of_reactive_effects",
            },
            {
              text: "Seperating Events from Effects",
              link: "/studies/react/learn_react/seperating_events_from_effects",
            },
            {
              text: "Removing Effect Dependencies",
              link: "/studies/react/learn_react/removing_effect_dependencies",
            },
          ],
        },
        {
          text: "Devloper Way: React",
          items: [
            {
              text: "How to write performant React code: rules, patterns, do's and don'ts",
              link: "/studies/react/developer_way_react/how_to_write_performant_react_code",
            },
            {
              text: "Why custom react hooks could destroy your app performance",
              link: "/studies/react/developer_way_react/no_custom_hooks",
            },
            {
              text: "How to write performant React apps with Context",
              link: "/studies/react/developer_way_react/performant_react_apps_with_context",
            },
            {
              text: "React component as prop: the right way",
              link: "/studies/react/developer_way_react/react_component_as_prop",
            },
            {
              text: "Higher-Order Components in React Hooks era",
              link: "/studies/react/developer_way_react/hoc",
            },
            {
              text: "Implementing advanced usePrevious hook with React useRef",
              link: "/studies/react/developer_way_react/useprevious_hooks_with_useref",
            },
            {
              text: "React components composition: how to get it right",
              link: "/studies/react/developer_way_react/react_components_composition",
            },
            {
              text: "React key attribute: best practices for performant lists",
              link: "/studies/react/developer_way_react/react_key_attributes",
            },
            {
              text: "How to useMemo and useCallback: you can remove most of them",
              link: "/studies/react/developer_way_react/usememo_and_usecallback",
            },
            {
              text: "The mystery of React Element, children, parents and re-renders",
              link: "/studies/react/developer_way_react/mystery",
            },
            {
              text: "How to fetch data in React with performance in mind",
              link: "/studies/react/developer_way_react/fetch_data",
            },
            {
              text: "Fetching data in React: the case of lost Promises",
              link: "/studies/react/developer_way_react/fetch_data_lost_promises",
            },
            {
              text: "How to debounce and throttle in React without losing your mind",
              link: "/studies/react/developer_way_react/debounce_throttle",
            },
            {
              text: "How to handle errors in React: full guide",
              link: "/studies/react/developer_way_react/handle_errors",
            },
          ],
        },
      ],
      "/studies/security/": [
        {
          text: "Concepts",
          items: [
            {
              text: "XSRF",
              link: "/studies/security/xsrf",
            },
            {
              text: "XSS",
              link: "/studies/security/xss",
            },
            {
              text: "JWT",
              link: "/studies/security/jwt",
            },
            {
              text: "CORS",
              link: "/studies/security/cors",
            },
            {
              text: "OAuth",
              link: "/studies/security/oauth",
            },
          ],
        },
      ],
      "/studies/typescript/": [
        {
          text: "Module",
          items: [
            {
              text: "Module Imports",
              link: "/studies/typescript/module/module_imports",
            },
            {
              text: "Module Resolution Strategies",
              link: "/studies/typescript/module/module_resolution_strategies",
            },
            {
              text: "Module Standard",
              link: "/studies/typescript/module/module_standard",
            },
            {
              text: "Share Type Declaration",
              link: "/studies/typescript/module/share_type_declaration",
            },
            {
              text: "Dynamic Imports",
              link: "/studies/typescript/module/dynamic_imports",
            },
            {
              text: "Declare Keyword",
              link: "/studies/typescript/module/declare_keyword",
            },
            {
              text: "Ambient Modules",
              link: "/studies/typescript/module/ambient_modules",
            },
          ],
        },
        {
          text: "Namespace",
          items: [
            {
              text: "Namespace",
              link: "/studies/typescript/namespace/namespace",
            },
          ],
        },
        {
          text: "Type Declaration",
          items: [
            {
              text: ".d.ts 파일",
              link: "/studies/typescript/type_declaration/_d_ts_파일",
            },
            {
              text: "Local Type Declaration",
              link: "/studies/typescript/type_declaration/local_type_declaration",
            },
            {
              text: "Global Type Declaration",
              link: "/studies/typescript/type_declaration/global_type_declaration",
            },
          ],
        },
        {
          text: "Type Assertion",
          items: [
            {
              text: "Type Assertion",
              link: "/studies/typescript/type_assertion/type_assertion",
            },
          ],
        },
        {
          text: "Conditional Types",
          items: [
            {
              text: "Conditional Types",
              link: "/studies/typescript/conditional_types/conditional_types",
            },
          ],
        },
        {
          text: "Mapped Types",
          items: [
            {
              text: "Mapped Types",
              link: "/studies/typescript/mapped_types/mapped_types",
            },
          ],
        },
        {
          text: "Utility Types",
          items: [
            {
              text: "Union Type",
              link: "/studies/typescript/utility_types/union_type",
            },
            {
              text: "Record Type",
              link: "/studies/typescript/utility_types/record_type",
            },
            {
              text: "Spread Syntax",
              link: "/studies/typescript/utility_types/spread_syntax",
            },
            {
              text: "Recursion Type",
              link: "/studies/typescript/utility_types/recursion_type",
            },
            {
              text: "Template Literal Type",
              link: "/studies/typescript/utility_types/template_literal_type",
            },
            {
              text: "Indexed Signature",
              link: "/studies/typescript/utility_types/indexed_signature",
            },
          ],
        },
        {
          text: "Generic",
          items: [
            {
              text: "Generic",
              link: "/studies/typescript/generic/generic",
            },
          ],
        },
        {
          text: "Syntax Sugar",
          items: [
            {
              text: "Array Type",
              link: "/studies/typescript/syntax_sugar/array_type",
            },
            {
              text: "Tuple Type",
              link: "/studies/typescript/syntax_sugar/tuple_type",
            },
            {
              text: "Object Type",
              link: "/studies/typescript/syntax_sugar/object_type",
            },
          ],
        },
        {
          text: "Keywords",
          items: [
            {
              text: "infer",
              link: "/studies/typescript/keywords/infer",
            },
            {
              text: "enum",
              link: "/studies/typescript/keywords/enum",
            },
            {
              text: "type vs. interface",
              link: "/studies/typescript/keywords/type_vs_interface",
            },
          ],
        },
      ],
      "/studies/vue3/": [
        {
          text: "Reactivity API",
          items: [
            {
              text: "Saving Code To Run Later",
              link: "/studies/vue3/reactivity_api/saving_code_to_run_later",
            },
            {
              text: "Multiple Properties",
              link: "/studies/vue3/reactivity_api/multiple_properties",
            },
            {
              text: "Multiple Reactive Objects",
              link: "/studies/vue3/reactivity_api/multiple_reactive_objects",
            },
            {
              text: "Proxy, Reflect",
              link: "/studies/vue3/reactivity_api/proxy_reflect",
            },
            {
              text: "activeEffect",
              link: "/studies/vue3/reactivity_api/active_effect",
            },
            {
              text: "ref",
              link: "/studies/vue3/reactivity_api/ref",
            },
            {
              text: "computed",
              link: "/studies/vue3/reactivity_api/computed",
            },
          ],
        },
        {
          text: "Rendering Mechanism",
          items: [
            {
              text: "Virtual DOM",
              link: "/studies/vue3/rendering_mechanism/virtual_dom",
            },
            {
              text: "Render Pipeline",
              link: "/studies/vue3/rendering_mechanism/render_pipeline",
            },
            {
              text: "Compiler-Informed VDOM",
              link: "/studies/vue3/rendering_mechanism/compiler_informed_virtual_dom",
            },
          ],
        },
        {
          text: "Component Lifecycle",
          items: [
            {
              text: "Component Lifecycle",
              link: "/studies/vue3/component_lifecycle/component_lifecycle",
            },
          ],
        },
        {
          text: "Composables",
          items: [
            {
              text: "Option Object Parameter",
              link: "/studies/vue3/composable/option_object_parameter",
            },
            {
              text: "Flexible arguments",
              link: "/studies/vue3/composable/flexible_arguments",
            },
            {
              text: "Async Without Await",
              link: "/studies/vue3/composable/async_without_await",
            },
          ],
        },
      ],
      "/studies/web_용어정리/": [
        {
          text: "Domain",
          items: [
            {
              text: "Domain",
              link: "/studies/web_용어정리/domain/domain",
            },
            {
              text: "Page vs. Site",
              link: "/studies/web_용어정리/domain/page_vs_site",
            },
          ],
        },
        {
          text: "URI",
          items: [
            {
              text: "URI",
              link: "/studies/web_용어정리/uri/uri",
            },
            {
              text: "URL",
              link: "/studies/web_용어정리/uri/url",
            },
            {
              text: "URN",
              link: "/studies/web_용어정리/uri/urn",
            },
            {
              text: "Encoding",
              link: "/studies/web_용어정리/uri/encoding",
            },
          ],
        },
        {
          text: "Web Server",
          items: [
            {
              text: "Web Server",
              link: "/studies/web_용어정리/web_server/web_server",
            },
          ],
        },
        {
          text: "Search Engine",
          items: [
            {
              text: "Search Engine",
              link: "/studies/web_용어정리/search_engine/search_engine",
            },
          ],
        },
        {
          text: "Hyperlink",
          items: [
            {
              text: "HyperLink",
              link: "/studies/web_용어정리/hyperlink/hyperlink",
            },
          ],
        },
        {
          text: "Browsing Context",
          items: [
            {
              text: "Browsing Context",
              link: "/studies/web_용어정리/browsing_context/browsing_context",
            },
          ],
        },
        {
          text: "User Agent",
          items: [
            {
              text: "User Agent",
              link: "/studies/web_용어정리/user_agent/user_agent",
            },
          ],
        },
        {
          text: "API",
          items: [
            {
              text: "API",
              link: "/studies/web_용어정리/api/api",
            },
          ],
        },
      ],
      "/books/composing_software/": [
        {
          text: "Introduction",
          items: [
            {
              text: "Introduction",
              link: "/books/composing_software/introduction/introduction",
            },
            {
              text: "The Dao of Immutability",
              link: "/books/composing_software/introduction/the_dao_of_immutability",
            },
            {
              text: "What is FP?",
              link: "/books/composing_software/introduction/what_is_fp",
            },
            {
              text: "Why FP in JS?",
              link: "/books/composing_software/introduction/why_fp_in_js",
            },
            {
              text: "Forgotten History of OOP",
              link: "/books/composing_software/introduction/forgotten_history_of_oop",
            },
          ],
        },
        {
          text: "Concepts",
          items: [
            {
              text: "Pure Function",
              link: "/books/composing_software/concepts/pure_function",
            },
            {
              text: "Higher Order Function",
              link: "/books/composing_software/concepts/higher_order_function",
            },
            {
              text: "Curry Function",
              link: "/books/composing_software/concepts/curry_function",
            },
            {
              text: "Abstraction, Composition",
              link: "/books/composing_software/concepts/abstraction_composition",
            },
            {
              text: "Object Composition",
              link: "/books/composing_software/concepts/object_composition",
            },
            {
              text: "Factory Function",
              link: "/books/composing_software/concepts/factory_function",
            },
            {
              text: "Functional Mixin",
              link: "/books/composing_software/concepts/functional_mixin",
            },
            {
              text: "Transducer",
              link: "/books/composing_software/concepts/transducer",
            },
          ],
        },
        {
          text: "Data Structure",
          items: [
            {
              text: "Functor, Category",
              link: "/books/composing_software/data_structure/functor_category",
            },
            {
              text: "Monad",
              link: "/books/composing_software/data_structure/monad",
            },
            {
              text: "Lens",
              link: "/books/composing_software/data_structure/lens",
            },
            {
              text: "Composable Data Types",
              link: "/books/composing_software/data_structure/composable_data_types",
            },
          ],
        },
      ],
      "/books/코어_자바스크립트/": [
        {
          text: "데이터 타입",
          items: [
            {
              text: "데이터 타입 종류",
              link: "/books/코어_자바스크립트/데이터_타입/데이터_타입_종류",
            },
            {
              text: "변수선언과 데이터 할당",
              link: "/books/코어_자바스크립트/데이터_타입/변수선언과_데이터_할당",
            },
          ],
        },
        {
          text: "실행 컨택스트",
          items: [
            {
              text: "실행 컨택스트",
              link: "/books/코어_자바스크립트/실행_컨택스트/실행_컨택스트",
            },
            {
              text: "lexical environment",
              link: "/books/코어_자바스크립트/실행_컨택스트/lexical_environment",
            },
            {
              text: "variable environment",
              link: "/books/코어_자바스크립트/실행_컨택스트/variable_environment",
            },
            {
              text: "this binding",
              link: "/books/코어_자바스크립트/실행_컨택스트/this_binding",
            },
          ],
        },
        {
          text: "this",
          items: [
            {
              text: "this",
              link: "/books/코어_자바스크립트/this/this",
            },
            {
              text: "상황에 따라 달라지는 this",
              link: "/books/코어_자바스크립트/this/상황에_따라_달라지는_this",
            },
            {
              text: "명시적 바인딩",
              link: "/books/코어_자바스크립트/this/명시적_바인딩",
            },
          ],
        },
        {
          text: "콜백함수",
          items: [
            {
              text: "콜백함수",
              link: "/books/코어_자바스크립트/콜백함수/콜백함수",
            },
          ],
        },
        {
          text: "클로져",
          items: [
            {
              text: "클로져",
              link: "/books/코어_자바스크립트/클로져/클로져",
            },
            {
              text: "활용예시",
              link: "/books/코어_자바스크립트/클로져/활용예시",
            },
          ],
        },
        {
          text: "프로토타입",
          items: [
            {
              text: "프로토타입",
              link: "/books/코어_자바스크립트/프로토타입/프로토타입",
            },
            {
              text: "프로토타입 체인",
              link: "/books/코어_자바스크립트/프로토타입/프로토타입_체인",
            },
          ],
        },
        {
          text: "클래스",
          items: [
            {
              text: "클래스 상속",
              link: "/books/코어_자바스크립트/클래스/클래스_상속",
            },
            {
              text: "class field delimiter",
              link: "/books/코어_자바스크립트/클래스/class_field_delimeter",
            },
          ],
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
        },
      ],
      "/books/nodejs_교과서": [
        {
          text: "1장",
          items: [
            {
              text: "1-1장",
              link: "/books/nodejs_교과서/1장/1-1장",
            },
            {
              text: "1-2장",
              link: "/books/nodejs_교과서/1장/1-2장",
            },
          ],
        },
        {
          text: "2장",
          items: [
            {
              text: "2-1장",
              link: "/books/nodejs_교과서/2장/2-1장",
            },
            {
              text: "2-2장",
              link: "/books/nodejs_교과서/2장/2-2장",
            },
          ],
        },
        {
          text: "3장",
          items: [
            {
              text: "3-1장",
              link: "/books/nodejs_교과서/3장/3-1장",
            },
            {
              text: "3-2장",
              link: "/books/nodejs_교과서/3장/3-2장",
            },
            {
              text: "3-3장",
              link: "/books/nodejs_교과서/3장/3-3장",
            },
            {
              text: "3-4장",
              link: "/books/nodejs_교과서/3장/3-4장",
            },
            {
              text: "3-5장",
              link: "/books/nodejs_교과서/3장/3-5장",
            },
            {
              text: "3-6장",
              link: "/books/nodejs_교과서/3장/3-6장",
            },
            {
              text: "3-7장",
              link: "/books/nodejs_교과서/3장/3-7장",
            },
            {
              text: "3-8장",
              link: "/books/nodejs_교과서/3장/3-8장",
            },
          ],
        },
        {
          text: "4장",
          items: [
            {
              text: "4-5장",
              link: "/books/nodejs_교과서/4장/4-5장",
            },
          ],
        },
        {
          text: "5장",
          items: [
            {
              text: "5-2장",
              link: "/books/nodejs_교과서/5장/5-2장",
            },
            {
              text: "5-3장",
              link: "/books/nodejs_교과서/5장/5-3장",
            },
            {
              text: "5-4장",
              link: "/books/nodejs_교과서/5장/5-4장",
            },
          ],
        },
        {
          text: "11장",
          items: [
            {
              text: "11-1장",
              link: "/books/nodejs_교과서/11장/11-1장",
            },
            {
              text: "11-2장",
              link: "/books/nodejs_교과서/11장/11-2장",
            },
            {
              text: "11-3장",
              link: "/books/nodejs_교과서/11장/11-3장",
            },
            {
              text: "11-4장",
              link: "/books/nodejs_교과서/11장/11-4장",
            },
            {
              text: "11-5장",
              link: "/books/nodejs_교과서/11장/11-5장",
            },
            {
              text: "11-6장",
              link: "/books/nodejs_교과서/11장/11-6장",
            },
          ],
        },
        {
          text: "12장",
          items: [
            {
              text: "12-1장",
              link: "/books/nodejs_교과서/12장/12-1장",
            },
          ],
        },
      ],
      "/코테준비/": [
        {
          text: "자료구조",
          items: [
            {
              text: "Array",
              link: "/코테준비/자료구조/array",
            },
            {
              text: "Stack",
              link: "/코테준비/자료구조/stack",
            },
            {
              text: "Queue",
              link: "/코테준비/자료구조/queue",
            },
            {
              text: "Linked List",
              link: "/코테준비/자료구조/linked_list",
            },
            {
              text: "Tree",
              link: "/코테준비/자료구조/tree",
            },
            {
              text: "Trie",
              link: "/코테준비/자료구조/trie",
            },
            {
              text: "Heap",
              link: "/코테준비/자료구조/heap",
            },
            {
              text: "Hash Table",
              link: "/코테준비/자료구조/hash_table",
            },
          ],
        },
        {
          text: "알고리즘",
          items: [
            {
              text: "Recursion",
              link: "/코테준비/알고리즘/recursion",
            },
            {
              text: "Sort",
              link: "/코테준비/알고리즘/sort",
            },
            {
              text: "Binary Search",
              link: "/코테준비/알고리즘/binary_search",
            },
            {
              text: "DFS, BFS",
              link: "/코테준비/알고리즘/dfs_bfs",
            },
            {
              text: "Memoization, Dynamic Programming",
              link: "/코테준비/알고리즘/memoization_dynamic_programming",
            },
            {
              text: "Bit Manipulation",
              link: "/코테준비/알고리즘/bit_manipulation",
            },
            {
              text: "순열, 조합",
              link: "/코테준비/알고리즘/순열_조합",
            },
            {
              text: "소수",
              link: "/코테준비/알고리즘/소수",
            },
            {
              text: "Greedy Algorithm",
              link: "/코테준비/알고리즘/greedy_algorithm",
            },
            {
              text: "Prefix Sum",
              link: "/코테준비/알고리즘/prefix_sum",
            },
            {
              text: "최소공배수, 최대공약수",
              link: "/코테준비/알고리즘/lcm_gcd.md",
            },
          ],
        },
      ],
    },
    nav: [
      {
        text: "Posts",
        link: "/posts/",
      },
      {
        text: "Studies",
        items: [
          {
            text: "Architecture",
            link: "/studies/architecture/",
          },
          {
            text: "Patterns",
            link: "/studies/patterns/",
          },
          {
            text: "Browser",
            link: "/studies/browser/",
          },
          {
            text: "Clean Code",
            link: "/studies/clean_code/",
          },
          {
            text: "Frontend",
            link: "/studies/frontend/",
          },
          {
            text: "Git",
            link: "/studies/git/",
          },
          {
            text: "HTTP",
            link: "/studies/http/",
          },
          {
            text: "Javascript",
            link: "/studies/javascript/",
          },
          {
            text: "NextJS",
            link: "/studies/nextjs/",
          },
          {
            text: "Node",
            link: "/studies/node/",
          },
          {
            text: "React",
            link: "/studies/react/",
          },
          {
            text: "Security",
            link: "/studies/security/",
          },
          {
            text: "Typescript",
            link: "/studies/typescript/",
          },
          // {
          //   text: "Vite",
          //   link: "/studies/vite/",
          // },
          {
            text: "Vue3",
            link: "/studies/vue3/",
          },
          {
            text: "Web 용어정리",
            link: "/studies/web_용어정리/",
          },
        ],
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
          {
            text: "Node.js 교과서(개정 3판)",
            link: "/books/nodejs_교과서/",
          },
        ],
      },
      {
        text: "코테준비",
        link: "/코테준비/",
      },
      {
        text: "Articles",
        link: "/articles/",
      },
    ],
  },
});
