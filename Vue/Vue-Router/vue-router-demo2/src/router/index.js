import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      components: {    // 注意，是components，要加s
        default: Hello,
        left: Hi1,
        right: Hi2
      }
    }, {
      path: '/2',
      components: {
        default: Hello,
        left: Hi2,
        right: Hi1
      }
    }
  ]
})
