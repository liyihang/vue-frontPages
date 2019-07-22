<template>
  <div>
    <!-- 头部导航 -->
    <el-header>
      <div class="line"></div>
      <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item index="1">学院网站</el-menu-item>
        <el-menu-item index="2">Tlias系统</el-menu-item>
        <el-menu-item index="3">MOOC视屏</el-menu-item>
        <el-menu-item index="4">
          <a href="#" target="_blank">意见反馈</a>
        </el-menu-item>
      </el-menu>
    </el-header>
  </div>
</template>
<script>
export default {
    name: 'Header'
}
</script>
<style scoped>
.el-header {
  padding: 0;
}
</style>
