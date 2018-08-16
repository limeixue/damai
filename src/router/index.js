import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import Home from "@/components/Home"
import Login from "@/pages/Login/Login"
import Admin from '@/pages/Admin/Admin'
import OrderMenu from '@/components/Order/OrderMenu'
import MyMsg from "@/components/Order/MyMsg"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },{
      path: '/admin',
      name: "Admin",
      component: Admin,
      children:[{
        path:"",
        name:"OrderMenu",
        component:OrderMenu
      },{
        path: 'ordermenu',
        name: 'OrderMenu',
        component: OrderMenu
      },{
        path:"mymsg",
        name: 'MyMsg',
        component: MyMsg
      }]
    }
  ]
})
