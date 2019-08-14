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
        :unique-opened="true"
      >
        <el-menu-item index="1">
          <router-link to="/">首页</router-link>
        </el-menu-item>
        <el-menu-item index="2">学院网站</el-menu-item>
        <el-menu-item index="3">Tlias系统</el-menu-item>
        <el-menu-item index="4">MOOC在线</el-menu-item>
        <el-menu-item index="5">
          <a href="#" target="_blank">意见反馈</a>
        </el-menu-item>
        <el-menu-item class="exam-info">
          <el-popover placement="bottom" width="300" trigger="hover">
            <el-row class="exam-pop-top">
              <div>
                <img
                  src="http://www.ghost64.com/qqtupian/zixunImg/local/2018/09/07/15362759764251.jpg"
                  alt
                />
              </div>
              <div class="exam-expre">
                <p class="user-title">江湖很小，总会再见</p>
                <p>1790积分 10点经验</p>
              </div>
            </el-row>
            <el-divider></el-divider>
            <el-row class="exam-swrap">
              <ul class="exam-hover">
                <li>
                  <el-link>我的课程</el-link>
                </li>
                <li>
                  <el-link>个人设置</el-link>
                </li>
              </ul>
              <el-link>安全退出</el-link>
            </el-row>
            <el-link slot="reference">
              <div>
                <el-avatar
                  src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                ></el-avatar>
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
      activeIndex: '1'
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
  border: solid 0px #e6e6e6;
  padding-left: 20%;
  background-color: black;
}
.exam-info {
  float: right;
  margin-right: 30%;
}
.exam-pop-top img {
  height: 80px;
  width: 80px;
  border-radius: 50%;
  float: left;
}
.exam-expre {
  float: right;
  margin-right: 50px;
}
.exam-hover {
  list-style: none;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
.exam-swrap li {
  padding-top: 15px;
}
.user-title {
  font-size: 16px;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
    'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  color: aquamarine;
}
</style>
