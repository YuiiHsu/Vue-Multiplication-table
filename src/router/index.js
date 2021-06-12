import Vue from 'vue'
import Router from 'vue-router'
import MultiplicationTable from '@/components/MultiplicationTable'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MultiplicationTable',
      component: MultiplicationTable
    }
  ]
})
