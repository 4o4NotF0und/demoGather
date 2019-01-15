import {} from './getData'
// import {BMap} from 'http://api.map.baidu.com/api?v=2.0&ak=lxANEukr2ZsSGK2wcm0bSTDC7FR0bBau'
export default {
  name: 'baidu-map',
  mounted () {
    this.mapInit()
  },
  methods: {
    mapInit () {
      let map = new BMap.Map('container')
      let point = new BMap.Point(116.404, 39.915)
      map.centerAndZoom(point, 15)
      map.enableScrollWheelZoom()
      map.addControl(new BMap.NavigationControl()) // 导航
      map.addControl(new BMap.ScaleControl()) // 比例尺
      map.addControl(new BMap.OverviewMapControl()) // 缩略图
      map.addControl(new BMap.MapTypeControl()) // 图层
      map.setCurrentCity("北京") // 仅当设置城市信息时，MapTypeControl的切换功能才能可用
      // window.setTimeout(function () {
      //   map.panTo(new BMap.Point(116.409, 39.918))
      // }, 5000)
    }
  }
}
