import Vue from 'vue'
import Router from 'vue-router'
//import Hello from '@/components/Hello'


const framework                 = resolve => require(['../views/framework'], resolve);

Vue.use(Router)

export default new Router({
  routes: [
      {
          path: '/',
          name: '框架',
          component: framework
      }
  ]
})
