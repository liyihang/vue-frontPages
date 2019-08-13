<template>
  <div>
    <el-page-header title content="重置密码"></el-page-header>
    <el-divider></el-divider>
    <!-- reset password form -->
    <el-form :label-position="labelPosition" label-width="80px" :model="resetForm">
      <el-form-item label="旧密码">
        <el-input type="password" v-model="resetForm.oldPassword"></el-input>
      </el-form-item>
      <el-form-item label="新密码">
        <el-input type="password" v-model="resetForm.newPassword"></el-input>
      </el-form-item>
      <el-form-item>
          <el-button type="primary">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      labelPosition: 'right',
      resetForm: {
        oldPassword: '',
        newPassword: ''
      }
    }
  }
}
</script>

<style scoped>
.el-form{
    margin: 5rem;
}
.el-input{
    float: left;
    width: 30%;
}
.el-button{
    float: left;
}
</style>
