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
              path:'equipState/:wsCode/:ipAddress/:isEquip',
              component:EquipState
            },
            {
              name:'equipList',
              path:'equipList/:wsCode/:ipAddress/:isEquip',
              component:EquipList
            },
           
          ]
        },
        {
          name:'alarmPage',
          path:'alarm',
          component:AlarmPage
        },
        {
          name:'reportPage',
          path:'report/:wsCode/:ipAddress/:isEquip',
          // path:'report',
          component:ReportPage
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
            }
          ]
        }
      ]
    }
  ]
})
