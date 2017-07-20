import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'
import Params from '@/components/params'
import Error from '@/components/error'

Vue.use(Router)

export default new Router({
  // mode 两种模式：
  // histroy: 当你使用 history 模式时，URL 就像正常的 url
  // hash: 默认 hash 模式，但是 hash 看起来就像无意义的字符排列，不太好看也不符合我们一般的网址浏览习惯
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }, {
      // 利用 url 传参
      // 正则：newsId 必须为数字
      path: '/params/:newsId(\\d+)/:newsTitle',
      component: Params,
      beforeEnter: (to,from,next) =>{  // 路由配置文件中的钩子函数，只能写 beforeEnter
        console.log(to);
        console.log(from);
        next();  // 一定要有 next()
      }
    }, {
      // 基本路由重定向
      path: '/goHome',
      redirect: '/'
    }, {
      // 重定向传参
      path: '/goParams/:newsId(\\d+)/:newsTitle',
      redirect: '/params/:newsId(\\d+)/:newsTitle'
    }, {
      // redirect：仔细观察URL，redirect是直接改变了url的值，把url变成了真实的path路径。
      // alias：URL路径没有别改变，这种情况更友好，让用户知道自己访问的路径，只是改变了<router-view>中的内容。
      path: '/hi1',
      component: Hi1,
      alias: '/hiJY'  // 路由别名
    },{
      path:'*',
      component:Error
    }
  ]
})
