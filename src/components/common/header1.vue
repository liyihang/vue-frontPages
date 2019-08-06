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
          <el-popover placement="bottom" width="200" trigger="hover">
            <el-row class="exam-pop-top">
              <div>
                <img src="http://www.ghost64.com/qqtupian/zixunImg/local/2018/09/07/15362759764251.jpg" alt="">
              </div>
              <div class="exam-expre">
                <p>我不想努力了，只想要杨超越</p>
                <p>1790积分</p>
              </div>
            </el-row>
            <el-row class="exam-swrap">
              <ul class="exam-hover">
                <li>休息下</li>
                <li>休息下</li>
                <li>休息下</li>
                <li>休息下</li>
                <li>休息下</li>
                <li>休息下</li>
              </ul>
            </el-row>
            <el-link slot="reference">
              <div>
                <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
              </div>
            </el-link>
          </el-popover>
        </el-menu-item>
      </el-menu>
    </el-header>
  </div>
</template>
<script>
export default {
  data () {
    return {
      activeIndex: '1',
    }
  },
  name: 'Header1',
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
.exam-pop-top img{
  height: 80px;
  width:80px;
  border-radius: 50%;
  float: left;
}
.exam-expre{
  margin-left: 5px;
}
.exam-hover{
  list-style: none;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
</style>
