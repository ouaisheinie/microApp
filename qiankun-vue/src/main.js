import Vue from 'vue'
import App from './App.vue'
import router from './router'

let instance = null

function render(props = {}) {
  const { container } = props
  instance = new Vue({
    router,
    render: h => h(App)
  }).$mount(container ? container.querySelector('#app') : '#app') // 这里是挂在到子项目自己的html种，基座会拿到这个挂载后的html将其插入父应用对应位置
}


if (window.__POWERED_BY_QIANKUN__) { // 如果是qiankun基座使用的子应用
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__
}
if (!window.__POWERED_BY_QIANKUN__) { // 如果是一个独立运行的应用(不依赖基座 直接访问)
  render() // 直接渲染
}

// 子组件必须导出这3个方法
export async function bootstrap(props){
  console.log(props)
}
export async function mount(props){
  render(props)
}
export async function unmount(props){
  instance.$destroy()
}