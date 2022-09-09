import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import store from './store'
import less from 'less'
import { registerMicroApps, start } from 'qiankun'

const apps = [
  {
    name: 'vueApp',
    entry: "//localhost:10000", // 默认会加载这个html，解析里面的js 动态地执行 (子应用必须支持跨域) fetch
    container: '#vue',
    activeRule: '/vue',
    props: {
      a: 0
    }
  },
  {
    name: 'reactApp',
    entry: "//localhost:20000", // 默认会加载这个html，解析里面的js 动态地执行 (子应用必须支持跨域) fetch
    container: '#react',
    activeRule: '/react',
    props: {
      a: 1
    }
  }
]


registerMicroApps(apps)
start({
  prefetch: false, // 取消预加载
})

createApp(App).use(less).use(ElementPlus).use(store).use(router).mount('#app')
