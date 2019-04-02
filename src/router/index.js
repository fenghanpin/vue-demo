import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index'
import Content from '@/page/content'
import List from '@/page/list'

Vue.use(Router)

export default new Router({
    routes: [
        {
            name: 'index',
            path: '/',
            component: Index
        },
        {
            path: '/list',
            name: 'list',
            component: List
        },
        {
            path: '/content/:id',
            name: 'content',
            component: Content
        }
    ]
})
