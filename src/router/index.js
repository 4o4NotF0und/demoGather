import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '../pages/index/index'
import DemoExample from '../pages/demoExample/index'
import DemoMapCharts from '../pages/demo-mapCharts/index'
import DemoComponents from '../pages/demo-components/index'
import BaiduMap from '../pages/baidu-map/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/demoExample',
      name: 'DemoExample',
      component: DemoExample
    },
    {
      path: '/demo-mapCharts',
      name: 'demo-mapCharts',
      component: DemoMapCharts
    },
    {
      path: '/demo-components',
      name: 'demo-components',
      component: DemoComponents
    },
    {
      path: '/baidu-map',
      name: 'baidu-map',
      component: BaiduMap
    }
  ]
})
