<template>
  <div>
    <el-card>
      <!-- page header -->
      <el-page-header title content="个人资料"></el-page-header>
      <el-divider></el-divider>
      <!-- user settings  -->
      <h4 class="userInfo">个人资料</h4>
      <div></div>
      <el-form
        :model="userForm"
        :rules="rules"
        ref="userRef"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="头像" prop="useravatar">
          <el-avatar shape="circle" :size="userForm.size" :src="userForm.useravatar"></el-avatar>
        </el-form-item>
        <el-form-item label="用户名" prop="username">
          <el-input v-model="userForm.username" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="sex">
          <template>
            <el-radio-group v-model="userForm.radio">
              <el-radio :label="3">男</el-radio>
              <el-radio :label="6">女</el-radio>
              <el-radio :label="9">其他</el-radio>
            </el-radio-group>
          </template>
        </el-form-item>
        <el-form-item label="个人简介">
          <el-input type="textarea" v-model="userForm.desc"></el-input>
        </el-form-item>
        <el-button type="primary" class="save-class">保存</el-button>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userForm: {
        username: '',
        useravatar: 'https://pic.feizl.com/upload/allimg/171218/4ekvskl45tm121833.jpg',
        size: 'large',
        radio: '3',
        desc:''
      },
      rules: {

      },
    }
  }
}
</script>
<style scoped>
.userInfo {
  float: left;
}
.el-form {
  clear: both;
}
.el-avatar {
  float: left;
  margin-left: 1rem;
}
.el-input {
  float: left;
  width: 30%;
}
.el-radio-group {
  float: left;
  margin: 12px;
}
.el-textarea{
    float: left;
    width: 30%;
}
.save-class{
    float: left;
    margin-left: 14rem;
    margin-bottom: 1rem;
}
</style>
