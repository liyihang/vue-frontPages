<template>
  <div>
    <exam-header></exam-header>
    <!-- 标题和选项 -->
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
              <i class="el-icon-medal-1">1</i>言中的标识符只能由字母，数字和下划线三种字符组成，且第一个字符言中的标识符只能由字母，数字和下划线三种字符组成，且第一个字符（）且第一个字符言中的标识符只能由字母，数字和下划线三种字符组成，且第一个字符（）。
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
      <!-- 收藏转发  反馈 -->
      <div class="exam-collection">
        <el-row>
          <el-badge class="item">
            <el-button size="small">收藏</el-button>
          </el-badge>
          <el-badge class="item">
            <el-button size="small" type="primary">关注</el-button>
          </el-badge>
          <el-badge class="item">
            <el-button size="small" type="info">反馈</el-button>
          </el-badge>
          <el-badge class="item">
            <el-button size="small">屏蔽本题</el-button>
          </el-badge>
          <!-- 上下题按钮 -->
          <span class="exam-submit">
            <el-button type="warning">结束考试</el-button>
            <el-button type="primary">下一题</el-button>
          </span>
        </el-row>
      </div>
      <!-- 分页 -->
      <el-pagination background layout="prev, pager, next" :total="100"></el-pagination>
    </div>
    <!-- footer -->
    <el-footer>
      <div class="login-footer">版权所有 2006 - 2019 苏ICP备16007882号-4</div>
    </el-footer>
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
  height: 35rem;
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
  color: red;
}
/* 收藏  点赞  反馈  ……*/
.el-badge {
  padding: 2rem 0rem 1rem 2rem;
}
.exam-collection {
  float: left;
}
.exam-submit {
  margin-left: 25rem;
}
.el-footer {
  position: static;
  line-height: 60px;
  margin-bottom: 0;
  width: 100%;
  background-color: lightgrey;
}
.el-pagination{
  clear: both;
  margin: 6rem;
}
</style>
