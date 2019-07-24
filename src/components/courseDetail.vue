<template>
  <div>
    <!-- 固定头部 -->
    <exam-header></exam-header>
    <!-- 导航面包屑 没啥用  要他干啥 -->
    <!-- <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>
        <a href="/">课程</a>
      </el-breadcrumb-item>
      <el-breadcrumb-item>课程详情</el-breadcrumb-item>
    </el-breadcrumb>-->
    <!-- 课程详情 -->
    <el-container>
      <el-row :gutter="24" style="margin:0 auto" justify="space-around">
        <el-divider content-position="left">基础练习</el-divider>
        <el-col :span="8">
          <el-card shadow="always">
            <h4>HTML</h4>
            <p>
              <el-link icon="el-icon-edit">HTML标签和JavaScript应用</el-link>
            </p>
            <p>
              <el-link icon="el-icon-edit">HTML标签和JavaScript应用</el-link>
            </p>
            <p>
              <el-link icon="el-icon-edit">HTML标签和JavaScript应用</el-link>
            </p>
            <p>
              <el-link icon="el-icon-edit">HTML标签和JavaScript应用</el-link>
            </p>
            <p>
              <el-link icon="el-icon-edit">HTML标签和JavaScript应用</el-link>
            </p>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card shadow="always">
            <h4>HTML</h4>
            <p>
              <el-link icon="el-icon-edit">HTML标签和JavaScript应用</el-link>
            </p>
            <p>
              <el-link icon="el-icon-edit">HTML标签和JavaScript应用</el-link>
            </p>
            <p>
              <el-link icon="el-icon-edit">HTML标签和JavaScript应用</el-link>
            </p>
            <p>
              <el-link icon="el-icon-edit">HTML标签和JavaScript应用</el-link>
            </p>
            <p>
              <el-link icon="el-icon-edit">HTML标签和JavaScript应用</el-link>
            </p>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card shadow="always">
            <h4>HTML</h4>
            <p>
              <el-link icon="el-icon-edit">HTML标签和JavaScript应用</el-link>
            </p>
            <p>
              <el-link icon="el-icon-edit">HTML标签和JavaScript应用</el-link>
            </p>
            <p>
              <el-link icon="el-icon-edit">HTML标签和JavaScript应用</el-link>
            </p>
            <p>
              <el-link icon="el-icon-edit">HTML标签和JavaScript应用</el-link>
            </p>
            <p>
              <el-link icon="el-icon-edit">HTML标签和JavaScript应用</el-link>
            </p>
          </el-card>
        </el-col>

        <!-- 多个 -->
      </el-row>
    </el-container>
    <el-container>
      <el-row :gutter="24" style="margin:0 auto" justify="space-around">
        <el-divider content-position="left">基础练习</el-divider>
        <el-col :span="8">
          <el-card shadow="always">
            <h4>HTML</h4>
            <p>
              <el-link icon="el-icon-edit" @click="(1)">HTML标签和JavaScript应用</el-link>
            </p>
            <p>
              <el-link icon="el-icon-edit">HTML标签和JavaScript应用</el-link>
            </p>
            <p>
              <el-link icon="el-icon-edit">HTML标签和JavaScript应用</el-link>
            </p>
            <p>
              <el-link icon="el-icon-edit">HTML标签和JavaScript应用</el-link>
            </p>
            <p>
              <el-link icon="el-icon-edit">HTML标签和JavaScript应用</el-link>
            </p>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card shadow="always">
            <h4>HTML</h4>
            <p>
              <el-link icon="el-icon-edit">HTML标签和JavaScript应用</el-link>
            </p>
            <p>
              <el-link icon="el-icon-edit">HTML标签和JavaScript应用</el-link>
            </p>
            <p>
              <el-link icon="el-icon-edit">HTML标签和JavaScript应用</el-link>
            </p>
            <p>
              <el-link icon="el-icon-edit">HTML标签和JavaScript应用</el-link>
            </p>
            <p>
              <el-link icon="el-icon-edit">HTML标签和JavaScript应用</el-link>
            </p>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card shadow="always">
            <h4>HTML</h4>
            <p>
              <el-link icon="el-icon-edit">HTML标签和JavaScript应用</el-link>
            </p>
            <p>
              <el-link icon="el-icon-edit">HTML标签和JavaScript应用</el-link>
            </p>
            <p>
              <el-link icon="el-icon-edit">HTML标签和JavaScript应用</el-link>
            </p>
            <p>
              <el-link icon="el-icon-edit">HTML标签和JavaScript应用</el-link>
            </p>
            <p>
              <el-link icon="el-icon-edit">HTML标签和JavaScript应用</el-link>
            </p>
          </el-card>
        </el-col>

        <!-- 多个 -->
      </el-row>
    </el-container>
    <el-container>
      <el-row :gutter="24" style="margin:0 auto" justify="space-around">
        <el-divider content-position="left">基础练习</el-divider>
        <el-col :span="8">
          <el-card shadow="always">
            <h4>HTML</h4>
            <p class="hover-underline-animation">
              <el-link icon="el-icon-edit" @click="getExam(1)">HTML标签和JavaScript应用123</el-link>
            </p>
            <p>
              <el-link icon="el-icon-edit">HTML标签和JavaScript应用</el-link>
            </p>
            <p>
              <el-link icon="el-icon-edit">HTML标签和JavaScript应用</el-link>
            </p>
            <p>
              <el-link icon="el-icon-edit">HTML标签和JavaScript应用</el-link>
            </p>
            <p>
              <el-link icon="el-icon-edit">HTML标签和JavaScript应用</el-link>
            </p>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card shadow="always">
            <h4>HTML</h4>
            <p>
              <el-link icon="el-icon-edit">HTML标签和JavaScript应用</el-link>
            </p>
            <p>
              <el-link icon="el-icon-edit">HTML标签和JavaScript应用</el-link>
            </p>
            <p>
              <el-link icon="el-icon-edit">HTML标签和JavaScript应用</el-link>
            </p>
            <p>
              <el-link icon="el-icon-edit">HTML标签和JavaScript应用</el-link>
            </p>
            <p>
              <el-link icon="el-icon-edit">HTML标签和JavaScript应用</el-link>
            </p>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card shadow="always">
            <h4>HTML</h4>
            <p>
              <el-link icon="el-icon-edit">HTML标签和JavaScript应用</el-link>
            </p>
            <p>
              <el-link icon="el-icon-edit">HTML标签和JavaScript应用</el-link>
            </p>
            <p>
              <el-link icon="el-icon-edit">HTML标签和JavaScript应用</el-link>
            </p>
            <p>
              <el-link icon="el-icon-edit">HTML标签和JavaScript应用</el-link>
            </p>
            <p>
              <el-link icon="el-icon-edit">HTML标签和JavaScript应用</el-link>
            </p>
          </el-card>
        </el-col>

        <!-- 多个 -->
      </el-row>
    </el-container>
    <!-- footer -->
    <el-footer>
      <div class="login-footer">版权所有 2006 - 2019 苏ICP备16007882号-4</div>
    </el-footer>
    <!-- 回到顶部 -->
    <el-backtop :bottom="100">
      <div
        style="{
        height: 100%;
        width: 100%;
        background-color: #f2f5f6;
        box-shadow: 0 0 6px rgba(0,0,0, .12);
        text-align: center;
        line-height: 40px;
        color: #1989fa;
      }"
      >
        <i class="el-icon-caret-top"></i>
      </div>
    </el-backtop>
  </div>
</template>
<script>
export default {
  name: 'courseDetail',
  data () {
    return {

    }
  },
  methods: {
    getExam (id) {
      this.$router.push('/exam/' + id)
    }
  }
}
</script>
<style scoped>
.el-container {
  padding: 2rem;
}
.exam-course {
  text-align: left;
}
.el-divider__text.is-left {
  font-size: 1.5rem;
}
.el-footer {
  position: static;
  line-height: 60px;
  margin-bottom: 0;
  width: 100%;
  background-color: lightgrey;
}
.hover-underline-animation {
  display: inline-block;
  position: relative;
  color: #0087ca;
}
.hover-underline-animation::after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #0087ca;
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}
.hover-underline-animation:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
</style>
