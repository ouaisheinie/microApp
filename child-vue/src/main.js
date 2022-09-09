import Vue from 'vue'
import App from './App.vue'
import router from './router'
import singleSpaVue from "single-spa-vue"

Vue.config.productionTip = false

const appOptions = {
  el: "#vue", // 挂载到父应用中id为vue的标签中
  router,
  render: h => h(App)
}

const vueLifeCircle = singleSpaVue({
  Vue, appOptions
})

// 保证子应用引用的绝对路径都是自己的路径
// 如果是父应用引用的 这个值为true
if (window.singleSpaNavigate) {
  __webpack_public_path__ = 'http://localhost:10000/' // 轮到子应用的资源加载或者请求的时候，都会把这个路径拼到前面
}
// 如果不是父应用加载的， 是独立运行的
if (!window.singleSpaNavigate) {
  delete appOptions.el
  new Vue(appOptions).$mount("#app")
}

// 导出子应用3个生命周期  协议接入  父应用会调用这些方法
export const bootstrap = vueLifeCircle.bootstrap
export const mount = vueLifeCircle.mount
export const unmount = vueLifeCircle.unmount

// 我们需要父应用加载子应用，将子应用打包成一个个的lib去给父应用使用

// bootstrap  mount unmount
// single-spa-vue 导出vue单页子应用
// single-spa-react 导出react单页子应用