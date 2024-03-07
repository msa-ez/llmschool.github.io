const c1 = () => import(/* webpackChunkName: "page--src--templates--vue-page-vue" */ "/Users/dufwjdrndl/Desktop/uengine/llmschool.github.io/src/templates/VuePage.vue")
const c2 = () => import(/* webpackChunkName: "page--src--pages--404-vue" */ "/Users/dufwjdrndl/Desktop/uengine/llmschool.github.io/src/pages/404.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/dufwjdrndl/Desktop/uengine/llmschool.github.io/src/pages/Index.vue")

export default [
  {
    path: "/operation/llm/open-web-ui/",
    component: c1
  },
  {
    path: "/operation/introduction/sw/",
    component: c1
  },
  {
    path: "/operation/llm/ollama/",
    component: c1
  },
  {
    path: "/operation/operate/kubectl-ai/",
    component: c1
  },
  {
    path: "/operation/llm/llm-model/",
    component: c1
  },
  {
    path: "/operation/llm/llm-setting/",
    component: c1
  },
  {
    path: "/operation/introduction/legacy/",
    component: c1
  },
  {
    path: "/operation/operate/ai-ops-trouble-shooting/",
    component: c1
  },
  {
    path: "/operation/operate/copilot-dockerising/",
    component: c1
  },
  {
    path: "/operation/planning/ai-auto-modeling/",
    component: c1
  },
  {
    path: "/operation/implement/gpt-engineer-dev/",
    component: c1
  },
  {
    path: "/operation/introduction/ide/",
    component: c1
  },
  {
    path: "/operation/introduction/gpt-engineer/",
    component: c1
  },
  {
    path: "/operation/implement/copilot-dev/",
    component: c1
  },
  {
    path: "/operation/introduction/continue/",
    component: c1
  },
  {
    path: "/operation/planning/",
    component: c1
  },
  {
    path: "/operation/operate/",
    component: c1
  },
  {
    path: "/operation/llm-msaez/",
    component: c1
  },
  {
    path: "/operation/llm/",
    component: c1
  },
  {
    path: "/operation/implement/",
    component: c1
  },
  {
    path: "/operation/introduction/",
    component: c1
  },
  {
    path: "/operation/course/",
    component: c1
  },
  {
    name: "404",
    path: "/404/",
    component: c2
  },
  {
    name: "home",
    path: "/",
    component: c3
  },
  {
    name: "*",
    path: "*",
    component: c2
  }
]
