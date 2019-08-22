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
        <el-divider content-position="left" class="easing-variables">基础练习</el-divider>
        <el-col :span="8" v-for="(pass, index) in passList" :key="index">
          <el-card shadow="always">
            <h4 class="easing-variables">{{pass.title}}</h4>
            <p v-for="(question, index) in pass.questionList" v-if="index < 5">
              <el-link icon="el-icon-edit" @click="getExam(question, pass.id)">{{question.title}}</el-link>
            </p>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card shadow="always">
            <h4 class="easing-variables">HTML</h4>
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
            <h4 class="easing-variables">HTML</h4>
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
        <el-divider content-position="left">编程练习</el-divider>
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
        <el-divider content-position="left">综合练习</el-divider>
        <el-col :span="8">
          <el-card shadow="always">
            <h4>HTML</h4>
            <p>
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
    <!-- footer -->
    <el-footer>
      <div class="login-footer">版权所有 2006 - 2019 苏ICP备16007882号-4</div>
    </el-footer>
  </div>
</template>
<script>
export default {
  name: 'courseDetail',
  data () {
    return {
      passList: []
    }
  },
  methods: {
    getExam (question, passId) {
      this.$router.push('/exam/' + question.id + '?passId=' + passId + "&firstLevelPassId=" +this.$route.params.id )
    },
    getList(){
      this.$http.get('/api/pass?pid=' + this.$route.params.id )
        .then(res => {
          this.passList = res.data
        })
    }
  },
  created(){
    this.getList()
  }
}
</script>
<style scoped>
.el-col-8 {
  width: 28rem;
}
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
:root {
  /* Place variables in here to use globally */
}
.easing-variables {
  --ease-in-quad: cubic-bezier(0.55, 0.085, 0.68, 0.53);
  --ease-in-cubic: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  --ease-in-quart: cubic-bezier(0.895, 0.03, 0.685, 0.22);
  --ease-in-quint: cubic-bezier(0.755, 0.05, 0.855, 0.06);
  --ease-in-expo: cubic-bezier(0.95, 0.05, 0.795, 0.035);
  --ease-in-circ: cubic-bezier(0.6, 0.04, 0.98, 0.335);
  --ease-out-quad: cubic-bezier(0.25, 0.46, 0.45, 0.94);
  --ease-out-cubic: cubic-bezier(0.215, 0.61, 0.355, 1);
  --ease-out-quart: cubic-bezier(0.165, 0.84, 0.44, 1);
  --ease-out-quint: cubic-bezier(0.23, 1, 0.32, 1);
  --ease-out-expo: cubic-bezier(0.19, 1, 0.22, 1);
  --ease-out-circ: cubic-bezier(0.075, 0.82, 0.165, 1);
  --ease-in-out-quad: cubic-bezier(0.455, 0.03, 0.515, 0.955);
  --ease-in-out-cubic: cubic-bezier(0.645, 0.045, 0.355, 1);
  --ease-in-out-quart: cubic-bezier(0.77, 0, 0.175, 1);
  --ease-in-out-quint: cubic-bezier(0.86, 0, 0.07, 1);
  --ease-in-out-expo: cubic-bezier(1, 0, 0, 1);
  --ease-in-out-circ: cubic-bezier(0.785, 0.135, 0.15, 0.86);
  display: inline-block;
  width: 15rem;
  height: 2rem;
  color: black;
  text-align: center;
  transition: transform 1s var(--ease-out-quart);
}
.easing-variables:hover {
  transform: rotate(128000deg);
}
h4 {
  margin: 0;
}
.el-backtop {
  position: sticky;
  float: right;
}
</style>
