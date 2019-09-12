import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/pages/HelloWorld'
import LayOut from "@/components/LayOut";
import ImageUpload from "@/pages/ImageUpload"


Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/LayOut',
      name: 'LayOut',
      component:LayOut,
      children:[
        {
          path:'/ImageUpload',
          name:'ImageUpload',
          component:ImageUpload,
          meta:{
            name:['导航栏',"test","test1"],
            path:['/','/Lay','']
          }
        }
      ],
    }
  ]
})
