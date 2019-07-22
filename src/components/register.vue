<template>
  <div class="login">
    <el-container>
      <!-- 头部组件 -->
      <exam-header name="Header"></exam-header>
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
                <el-link type="primary" href="/login">已有账号请登录</el-link>
              </el-col>
            </el-row>
            <!-- 登录  重置按钮 -->
            <el-row>
              <el-col>
                <el-button type="primary">注册</el-button>
                <el-button type="info">重置</el-button>
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
  data () {
    return {
      sizeForm: {
        name: ''
      }
    }
  },
  methods: {
    onSubmit () {
      console.log('')
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-container.is-vertical {
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
.el-footer {
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
.el-link {
  float: right;
  margin-bottom: 10px;
}
</style>
