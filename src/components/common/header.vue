<template>
  <div>
    <!-- 头部导航 -->
    <el-header>
      <div class="line"></div>
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#333"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item index="1">
          <router-link to="/">首页</router-link>
        </el-menu-item>
        <el-menu-item index="2">学院网站</el-menu-item>
        <el-menu-item index="3">Tlias系统</el-menu-item>
        <el-menu-item index="4">MOOC视屏</el-menu-item>
        <el-menu-item index="5">
          <a href="#" target="_blank">意见反馈</a>
        </el-menu-item>
        <el-menu-item class="exam-info">
          <el-link href="/login">登录</el-link>/
          <el-link type="danger" href="/register">注册</el-link>
        </el-menu-item>
      </el-menu>
    </el-header>
  </div>
</template>
<script>
export default {
  data () {
    return {
      activeIndex: '1'
    }
  },
  name: 'Header',
  methods: {
    handleSelect () {

    }
  }
}
</script>
<style scoped>
.el-header {
  padding: 0;
}
.el-menu.el-menu--horizontal {
  padding-left: 20%;
  background-color: black;
}
.exam-info {
  float: right;
  margin-right: 30%;
}
</style>
