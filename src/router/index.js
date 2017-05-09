import Vue from 'vue';
import Router from 'vue-router';

const framework     = resolve => require(['../views/framework'], resolve);
const home          = resolve => require(['../views/home'], resolve);
const todo          = resolve => require(['../views/todo'], resolve);
const address       = resolve => require(['../views/address'], resolve);
const settings      = resolve => require(['../views/settings'], resolve);
const department    = resolve => require(['../views/department'], resolve);

const settingsList  = resolve => require(['../views/settings/settings-list'], resolve);
const settingsMsg   = resolve => require(['../views/settings/settings-msg'], resolve);

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
                },
                {
                    meta: { id: 3 },
                    path: 'settings',
                    name: '设置',
                    component: settings
                },
                {
                    meta: { id: 4 },
                    path: 'department',
                    name: '部门通讯录',
                    component: department
                }
            ]
        },
        {
            path: '/settingsList',
            name: '设置列表',
            component: settingsList,

        },
        {
            path: '/settingsList/msg',
            name: '设置消息',
            component: settingsMsg
        },
    ]
});
