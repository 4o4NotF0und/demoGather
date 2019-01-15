<template>
  <div class="index">
    <el-alert
      title="欢迎来到我的主页"
      type="success"
      description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……">
    </el-alert>
    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="item in bannerImgList" :key="item">
        <img :src="item" alt="">
      </el-carousel-item>
    </el-carousel>
    <el-row :gutter="20">
      <el-col :span="6"><div class="grid-content bg-purple">
        导航
      </div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple">
        案例
      </div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple">
        博客
      </div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple">
        收藏
      </div></el-col>
    </el-row>
  </div>
</template>

<script>
import img1 from './../../assets/image/banner/1.jpg'
import img2 from './../../assets/image/banner/2.jpg'
import img3 from './../../assets/image/banner/3.jpg'
import img4 from './../../assets/image/banner/4.jpg'
import img5 from './../../assets/image/banner/5.gif'
import img6 from './../../assets/image/banner/6.jpg'
import img7 from './../../assets/image/banner/7.jpg'
import img8 from './../../assets/image/banner/8.jpg'
import img9 from './../../assets/image/banner/9.jpg'
import img10 from './../../assets/image/banner/10.jpg'
import img11 from './../../assets/image/banner/11.jpg'
import img12 from './../../assets/image/banner/12.jpg'
export default {
  name: 'index',
  data () {
    return {
      bannerImgList: [
        img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../lib/reset.scss';
  .index{
    font-size: 14px;
    /*background-color: white;*/
    .el-carousel__item h3 {
      color: #475669;
      font-size: 14px;
      opacity: 0.75;
      line-height: 200px;
      margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
      background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
      background-color: #d3dce6;
    }
    .el-row {
      margin-bottom: 20px;
      &:last-child {
        margin-bottom: 0;
      }
    }
    .el-col {
      border-radius: 4px;
    }
    .bg-purple-dark {
      background: #99a9bf;
    }
    .bg-purple {
      background: #d3dce6;
    }
    .bg-purple-light {
      background: #e5e9f2;
    }
    .grid-content {
      border-radius: 4px;
      min-height: 360px;
      cursor: pointer;
      transition: 0.5s;
      &:hover{
        transform: translateY(-10px);
        box-shadow:0px 0px  10px 0px #409EFF;
      }
    }
    .row-bg {
      padding: 10px 0;
      background-color: #f9fafc;
    }
  }
</style>
