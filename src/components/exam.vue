<template>
  <div>
    <exam-header></exam-header>
    <div>
    <el-radio v-model="radio1" label="1" border>备选项1</el-radio>
    <el-radio v-model="radio1" label="2" border>备选项2</el-radio>
    </div>
  </div>
</template>
<script>
export default {
  name: 'exam'
}
</script>
