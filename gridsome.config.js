// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
require('dotenv').config()

module.exports = {
    siteName: "llmschool",
    icon: {
        favicon: "./static/favicon.png",
        touchicon: "./static/favicon.png"
    },

    runtimeCompiler: true,
    siteUrl: process.env.SITE_URL ? process.env.SITE_URL :'https://llmschool.github.io',
    settings: {
        web: process.env.URL_WEB || false,
        twitter: process.env.URL_TWITTER || false,
        github: process.env.URL_GITHUB || false,
        nav: {
            links: [
                // { path: "/introduction/", title: "도구 소개" },
                // { path: "/planning/", title: "분석/설계" },
                // { path: "/implement", title: "구현" },
                // { path: "/operate", title: "배포/운영" },
                // { path: "/llm", title: "설치형 LLM" },
                // { path: "/llm-msaez", title: "설치형 LLM 기반 MSAEZ연동" },
                // { path: "/course", title: "교육과정 소개" }
            ]
        },
        sidebar: [
            {
                name: "docs",
                sections: [
                    {
                        title: "최종수립!!!",
                        items: [
                            "/docs/",
                            "/docs/installation/",
                            "/docs/writing-content/",
                            "/docs/deploying/"
                        ]
                    },
                    {
                        title: "Configuration",
                        items: ["/docs/settings/", "/docs/sidebar/"]
                    }
                ]
            },
            // {
            //     name: "msaschool",
            //     sections: [
            //         {
            //             title: "LLM School",
            //             items: [
            //                 '/msaschool/operation/introduction/',
            //                 '/msaschool/operation/planning/',
            //                 '/msaschool/operation/implement/',
            //                 '/msaschool/operation/operate/',
            //                 '/msaschool/operation/llm/',
            //                 '/msaschool/operation/llm-msaez/',
            //                 '/msaschool/operation/course/',
            //             ]
            //         },
            //     ]
            // }
        ]
    },
    chainWebpack: config => config.mode('development'),
    // chainWebpack: config => {
    //     config
    //         .plugin('env')
    //         .use(require.resolve('webpack/lib/EnvironmentPlugin'), ['MEANING_OF_LIFE'])
    // },
    plugins: [
        // {
        //   use: "@gridsome/source-filesystem",
        //   options: {
        //     baseDir: "./content",
        //     path: "**/*.md",
        //     typeName: "MarkdownPage"
        //   }
        // },
        {
            use: "@gridsome/source-filesystem",
            options: {
                typeName: "VuePage",
                baseDir: "./src/content/msaschool",
                path: "**/*.vue",
                plugins: ["@gridsome/remark-prismjs"]
                // remark: {
                //   externalLinksTarget: '_blank',
                //   externalLinksRel: ['noopener', 'noreferrer'],
                //   plugins: [
                //     '@gridsome/remark-prismjs'
                //   ]
                // }
            }
        },
        {
            use: "gridsome-plugin-tailwindcss",
            options: {
                tailwindConfig: "./tailwind.config.js",
                purgeConfig: {
                    // Prevent purging of prism classes.
                    whitelistPatternsChildren: [/token$/]
                }
            }
        },
        {
            use: "@gridsome/plugin-google-analytics",
            options: {
                id: 'UA-153107610-2'
            }
        },
        {
            use: "@gridsome/plugin-sitemap",
            options: {}
        },
    ],
    // transformers: {
    //   remark: {
    //     plugins: [
    //       '@gridsome/remark-prismjs',
    //         'remark-attr'
    //     ]
    //   }
    // }
};
