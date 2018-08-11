import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index'
import Content from '@/page/content'
import List from '@/page/list'
import WorkPlan from '@/page/workPlan'
import Goods from '@/components/goods/goods'
import Marks from '@/components/marks/marks'

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
    },
    {
      path: '/workPlan',
      name: 'workPlan',
      component: WorkPlan
    },
    {
      path: '/goods',
      name: 'goods',
      component: Goods
    },
    {
      path: '/marks',
      name: 'marks',
      component: Marks
    }
  ]
})
