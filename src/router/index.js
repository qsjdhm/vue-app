import Vue from 'vue';
import Router from 'vue-router';

const framework   = resolve => require(['../views/framework'], resolve);
const home        = resolve => require(['../views/home'], resolve);
const todo        = resolve => require(['../views/todo'], resolve);
const address     = resolve => require(['../views/address'], resolve);

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: '框架',
            component: framework,
            children: [
                {
                    meta: { id: 0 },
                    path: 'home',
                    name: '首页',
                    component: home
                },
                {
                    meta: { id: 1 },
                    path: 'todo',
                    name: '待办',
                    component: todo
                },
                {
                    meta: { id: 2 },
                    path: 'address',
                    name: '通讯录',
                    component: address
                }
            ]
        }
    ]
});
