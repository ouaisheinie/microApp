import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Base',
    component: Home
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// motion 做下面这个  才不会在子路由内部切换路由后，再切换到其他子路由的时候报错。
router.beforeEach((to, from, next) => {
  console.log(history.state.current)
  if (_.isEmpty(history.state.current)) { // _ lodash的写法
    console.log(123)
    _.assign(history.state, { current: from.fullPath });
  }
  next();
})

export default router
