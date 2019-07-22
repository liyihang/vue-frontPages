<template>
  <div>
    <el-footer>
      <div class="login-footer">版权所有 2006 - 2019 苏ICP备16007882号-4</div>
    </el-footer>
  </div>
</template>
<script>
export default {
  name: 'Footer'
}
</script>
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
