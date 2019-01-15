<template>
  <div class="demo-components">
    <el-row :gutter="20">
      <el-col :span="16"><div class="grid-content bg-purple">
        <div class="progress">
          <MyProgressbar :text-inside="true" :stroke-width="18" :percentage="76" :show-text="true" class="my-progress"></MyProgressbar>
        </div>
      </div></el-col>
      <el-col :span="8"><div class="grid-content bg-purple">
        <div class="progress">
          进度条
        </div>
      </div></el-col>
    </el-row>
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss" scoped></style>
