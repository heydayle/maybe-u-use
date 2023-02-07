import Vue from 'vue'
// import VueCodeHighlight from 'vue-code-highlight'
//
//
// const components = { PrismEditor }
//
// Object.entries(components).forEach(([name, component]) => {
//   Vue.component(name, component)
// })
import 'highlight.js/styles/stackoverflow-light.css'
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import hljsVuePlugin from 'highlight.js/lib/core';

hljs.registerLanguage('javascript', javascript)
Vue.use(hljsVuePlugin)

import VueHighlightJS from 'vue-highlightjs'

import 'highlight.js/styles/github-dark.css'

Vue.use(VueHighlightJS, {
  languages: {
    javascript
  },
})
