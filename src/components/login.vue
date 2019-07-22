<template>
  <div class="login">
    <el-container>
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
      <el-main>
        <!-- logo -->
        <div class="login-logo">
          <img src="../assets/logo.png" alt />
        </div>
        <div class="login-main">
          <!-- 注册表单 -->
          <el-form
            ref="form"
            :model="sizeForm"
            label-width="60px"
            size="normal"
            label-position="left"
          >
            <el-form-item label="用户名:">
              <el-input v-model="sizeForm.name"></el-input>
            </el-form-item>
            <el-form-item label="密码:">
              <el-input type="password" v-model="sizeForm.password"></el-input>
            </el-form-item>
            <!-- 注册按钮 -->
            <el-row>
              <el-col>
                <el-link type="primary" href="#">已有账号请登录</el-link>
              </el-col>
            </el-row>
            <!-- 登录  重置按钮 -->
            <el-row>
              <el-col>
                <el-button type="primary" @click="login">注册</el-button>
                <el-button type="info" @click="resetForm">重置</el-button>
              </el-col>
            </el-row>
          </el-form>
        </div>
      </el-main>
      <el-footer>
        <div class="login-footer">版权所有 2006 - 2019 苏ICP备16007882号-4</div>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'Login',
  props: {
    msg: String
  },
  data () {
    return {
      sizeForm: {
        name: ''
      }
    }
  },
  methods: {
    onSubmit () {
      console.log('123')
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-container.is-vertical{
  height: 100%;
}
.login {
  height: 100%;
  width: 100%;
}
.login-logo {
  padding: 10px;
}
.login-main {
  margin: 0 auto;
  width: 30%;
}
.el-header {
  padding: 0;
}
.el-footer{
  position: static;
  line-height: 60px;
  margin-bottom: 0;
  width: 100%;
  background-color: lightgrey;
}
.el-main {
  margin-top: 6%;
  padding-bottom: -60px;
}
.el-link{
  float: right;
  margin-bottom: 10px;
}
</style>
