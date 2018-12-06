import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import DetailPage from '@/components/DetailPage'
import AlarmPage from '@/components/AlarmPage'
import ReportPage from '@/components/ReportPage'
import ConfigPage from '@/components/ConfigPage'
import EquipState from '@/components/DetailPageComponents/EquipState'
import EquipList from '@/components/DetailPageComponents/EquipList'
import JKDConfig from '@/components/ConfigPageComponents/JKDConfigPage'
import RYConfig from '@/components/ConfigPageComponents/RYConfigPage'
import WBGSConfig from '@/components/ConfigPageComponents/WBGSConfigPage'
import SXJConfig from '@/components/ConfigPageComponents/SXJConfigPage'
import DN1Page from '@/components/ReportPageComponents/DN1Page'
import DN2Page from '@/components/ReportPageComponents/DN2Page'
import AlarmDetail from '@/components/AlarmPageComponets/AlarmDetailPage.vue'
import ChartDemo from '@/components/AlarmPageComponets/ChartDemo.vue'

import CartPage from '@/components/CartPage'
import CartSettlement from '@/components/CartPageComponents/CartSettlement'
import GoodsList from '@/components/CartPageComponents/GoodsList' 


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      //重定向到子路由，显示默认子路由页面
      redirect: '/detail',
      component: HelloWorld,
      children:[
        {
          name:'detailPage',
          path:'detail',
          component:DetailPage,
          children:[
            {
              name:'equipState',
              path:'equipState/:nodeLevel/:wsCode/:ipAddress',
              component:EquipState
            },
            {
              name:'equipList',
              //path:'equipList',
              path:'equipList/:nodeLevel/:wsCode/:ipAddress',
              component:EquipList
            },
           
          ]
        },
        {
          name:'alarmPage',
          path:'alarm',
          component:AlarmPage,
          redirect:'alarm/alarmDetail',
          children:[
            {
              name:'alarmDetail',
              path:'alarmDetail',
              component:AlarmDetail
            },
            {
              name:'chartDemo',
              path:'chartDemo',
              component:ChartDemo
            }
           
          ]
        },
        {
          name:'reportPage',
          //path:'report/:nodeLevel/:wsCode/:ipAddress',
          path:'report',
          component:ReportPage,
          redirect:'report/dn1',
          children:[
            {
              name:'DN1Page',
              path:'dn1',
              component:DN1Page
            },
            {
              name:'DN2Page',
              path:'dn2',
              component:DN2Page
            }

          ]
        },
        {
          name:'configPage',
          path:'config',
          component:ConfigPage,
          redirect: 'config/jkdConfig',
          component: ConfigPage,
          children:[
            {
              name:'jkdConfig',
              path:'jkdConfig',
              component:JKDConfig
            },
            {
              name:'ryConfig',
              path:'ryConfig',
              component:RYConfig
            },
            {
              name:'wbgsConfig',
              path:'wbgsConfig',
              component:WBGSConfig
            },
            {
              name:'sxjConfig',
              path:'sxjConfig',
              component:SXJConfig
            }
          ]
        },
        {
          name:'cart',
          path:'cart',
          component:CartPage,
          redirect:'cart/goodsList',
          children:[
            {
              name:'cartSettlement',
              path:'cartSettlement',
              component:CartSettlement
            },
            {
              name:'goodsList',
              path:'goodsList',
              component:GoodsList
            }
          ]
        }
      ]
    }
  ]
})
