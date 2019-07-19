<template>
  <div class="hello">
    <el-container>
      <el-header>123123</el-header>
      <el-main>
        <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
          <el-form-item label="用户名">
            <el-input v-model="sizeForm.name"></el-input>
          </el-form-item>
        </el-form>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'Login',
  props: {
    msg: String
  },
  data() {
    return {
      sizeForm: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      }
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  background-image: url("../assets/loginbg.png");
  background-repeat: no-repeat;
  background-size: 100%;
}
.el-header,
.el-footer {
  color: #333;
  text-align: center;
  /* line-height: 60px; */
  height: 15%;
}
.el-main {
  color: #333;
  text-align: center;
  line-height: 600px;
  width: 100%;
  height: 70%;
}

body > .el-container {
  margin-bottom: 0px;
}
</style>
