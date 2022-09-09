import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { registerApplication, start } from "single-spa"
Vue.config.productionTip = false

async function loadScript(url) {
  return new Promise((resolve, reject) => {
    let script = document.createElement("script")
    script.src = url
    script.onload = resolve // 加载完函数onload 直接resolve
    script.onerror = reject // 加载失败onerror 直接reject
    document.head.appendChild(script)
  })
}

/* 
  single-spa 缺陷是不够灵活，不能动态加载js文件，样式也不隔离
  全局对象没有js沙箱的机智，加载不同的应用每次切换的时候都是用的同一个window
*/
registerApplication("myVueApp", 
  async () => {
    console.log("load")
    // 这里可以用systemjs
    await loadScript("http://localhost:10000/js/chunk-vendors.js")
    await loadScript("http://localhost:10000/js/app.js")
    // 加载后的模块必须返回3个方法
    return window.singleVue // bootstrap mount unmount
  },
  location => location.pathname.startsWith("/vue"), // 用户切换到了/vue的路径下， 我需要加载刚定义的子应用
  
)

start()


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
