<template>
  <div id="app">
    <header>
      <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
        <el-radio-button :label="false">展开</el-radio-button>
        <el-radio-button :label="true">收起</el-radio-button>
      </el-radio-group>
    </header>
    <div class="rootBox">
      <div class="leftNav">
        <el-menu @select="selected" default-active="1-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">首页</span>
            </template>
              <el-menu-item index="1-1">helloWorld</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span slot="title">案例</span>
            </template>
              <el-menu-item index="2-1">案例1</el-menu-item>
              <el-menu-item index="2-2">DemoMapCharts</el-menu-item>
              <el-menu-item index="2-3">demo-components</el-menu-item>
              <el-menu-item index="2-4">baidu-map</el-menu-item>
          </el-submenu>
          <!--<el-menu-item index="3" disabled>-->
            <!--<i class="el-icon-document"></i>-->
            <!--<span slot="title">导航三</span>-->
          <!--</el-menu-item>-->
          <!--<el-menu-item index="4">-->
            <!--<i class="el-icon-setting"></i>-->
            <!--<span slot="title">导航四</span>-->
          <!--</el-menu-item>-->
        </el-menu>
        <!--<el-menu :default-active="defaultActive" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">-->
          <!--<el-submenu v-for="nav in menuList" :index="nav.index" :key="nav.index" :disabled="nav.disabled">-->
            <!--<template slot="title">-->
              <!--<i :class="nav.icon"></i>-->
              <!--<span slot="title">{{nav.title}}</span>-->
            <!--</template>-->
            <!--<el-menu-item-group v-for="(group,index) in nav.childrens" v-if="nav.hasChildren && group.isGroup" :key="index">-->
              <!--<span slot="title">{{group.groupName}}</span>-->
              <!--<el-menu-item v-for="item in group.groupList" :index="item.index" :key="item.index">{{item.name}}</el-menu-item>-->
            <!--</el-menu-item-group>-->
            <!--<el-menu-item v-for="(item,index) in nav.childrens" v-if="nav.hasChildren && !item.isGroup" :key="index" :index="item.index">选项1</el-menu-item>-->
          <!--</el-submenu>-->
          <!--</el-menu>-->
      </div>
      <div class="rightContent">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      isCollapse: false,
      defaultActive: '1'
      // menuList: [
      //   {
      //     index: '1', // 排序编号
      //     title: '导航1', // 导航名称
      //     icon: 'el-icon-location',
      //     disabled: false, // 是否可用
      //     hasChildren: true,
      //     childrens: [
      //       {
      //         isGroup: true,
      //         groupName: '分组1',
      //         groupList: [
      //           {
      //             index: '1-1',
      //             name: '选项1',
      //             path: ''
      //           }
      //         ]
      //       },
      //       {
      //         isGroup: true,
      //         groupName: '分组2',
      //         groupList: [
      //           {
      //             index: '1-2',
      //             name: '选项2',
      //             path: ''
      //           },
      //           {
      //             index: '1-3',
      //             name: '选项3',
      //             path: '',
      //             hasChildren: true,
      //             children: [
      //               {
      //                 index: '1-3-1',
      //                 name: '选项4',
      //                 path: ''
      //               }
      //             ]
      //           }
      //         ]
      //       }
      //     ]
      //   },
      //   {
      //     index: '2',
      //     title: '导航2',
      //     icon: 'el-icon-service',
      //     hasChildren: true,
      //     childrens: [
      //       {
      //         index: '2-1',
      //         name: '选项5',
      //         path: ''
      //       },
      //       {
      //         index: '2-2',
      //         name: '选项6',
      //         path: ''
      //       }
      //     ]
      //   },
      //   {
      //     index: '3',
      //     title: '导航2',
      //     icon: 'el-icon-service',
      //     hasChildren: false
      //   }
      // ]
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    selected (index, path) {
      console.log(index, path)
      switch (index) {
        case '2-1': this.$router.push({path: '/demoExample'}); break
        case '2-2': this.$router.push({path: '/demo-mapCharts'}); break
        case '2-3': this.$router.push({path: '/demo-components'}); break
        case '2-4': this.$router.push({path: '/baidu-map'}); break
        default : this.$router.push({path: '/index'})
      }
    }
  }
}
</script>

<style>
#app {
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background: url("./assets/image/fengjing.jpg") no-repeat fixed;
  /*background-size: cover;*/
}
header{
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  z-index: 1000;
  background: rgba(0,0,0,0.3);
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  height: 100%;
}
  .rootBox{
    display: flex;
    height: 100%;
    padding-top: 60px;
    box-sizing: border-box;
  }
.rootBox .leftNav{
  height: 100%;
}
  .rootBox .rightContent{
    flex: 1;
    /*background-color: #fff;*/
    padding: 10px;
    overflow: auto;
  }
</style>
