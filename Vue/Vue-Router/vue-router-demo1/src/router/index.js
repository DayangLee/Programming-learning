import Vue from 'vue'  //引入Vue
import Router from 'vue-router'  //引入vue-router
import Hello from '@/components/Hello'  //引入根目录下的Hello.vue组件
import Hi from '@/components/Hi'    //引入根目录下的Hi.vue组件
import Hi1 from '@/components/Hi1'    //引入根目录下的Hi1.vue组件
import Hi2 from '@/components/Hi2'    //引入根目录下的Hi2.vue组件

Vue.use(Router)  //Vue全局使用Router

export default new Router({
  routes: [               //配置路由，这里是个数组
    {                     //每一个链接都是一个对象
      path: '/',          //链接路径
      name: 'Hello',      //路由名称
      component: Hello    //对应的组件模板
    }, {
      path: '/hi',
      name: 'Hi',
      component: Hi,
      children: [
        { path: '/', name: 'Hi', component: Hi },
        { path: 'hi1', name: 'Hi1', component: Hi1 },
        { path: 'hi2', name: 'Hi2', component: Hi2 }
      ]
    }
  ]
})
