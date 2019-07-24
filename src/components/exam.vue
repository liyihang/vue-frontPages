<template>
  <div>
    <exam-header></exam-header>
    <div class="exam-item">
      <div class="exam-header">
        <el-divider content-position="left">
          <h3>
            <i class="el-icon-edit"></i>选择题
          </h3>
        </el-divider>
      </div>
      <div class="exam-title">
        <el-row :gutter="24">
          <el-col :span="24">
            <p>
              <i class="el-icon-medal-1">1</i>言中的标识符只能由字母，数字和下划线三种字符组成，且第一个字符（）。
            </p>
          </el-col>
        </el-row>
      </div>
      <div class="exam-content">
        <el-card>
          <ul>
            <li>
              <el-radio v-model="radio1" label="1">可以是数字或者下划线驼峰命名法可以是数字或者下划线驼峰命名法可以是数字或者下划线驼峰命名法</el-radio>
            </li>
            <li>
              <el-radio v-model="radio1" label="2">可以是数字或者下划线驼峰命名法</el-radio>
            </li>
            <li>
              <el-radio v-model="radio1" label="3">可以是数字或者下划线驼峰命名法</el-radio>
            </li>
            <li>
              <el-radio v-model="radio1" label="4">可以是数字或者下划线驼峰命名法</el-radio>
            </li>
          </ul>
        </el-card>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'exam',
  data () {
    return {
      radio1: 1
    }
  }
}
</script>
<style scoped>
.exam-title p {
  float: left;
  padding: 2rem;
}
.exam-item {
  margin: 2rem auto;
  height: 80rem;
  width: 80%;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.el-card__header {
  float: left;
}
.el-divider {
  top: 2rem;
}
/* 题目 */
.exam-content li {
  padding: 1rem;
  list-style-type: decimal;
  float: left;
  clear: both;
}
.el-icon-medal-1 {
  padding: 5px;
}
</style>
