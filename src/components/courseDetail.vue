<template>
  <div>
    <!-- 固定头部 -->
    <exam-header></exam-header>
    <!-- 课程详情 -->
    <h1>{{$route.params}}</h1>
  </div>
</template>
<script>
export default {
  name: 'courseDetail'
}
</script>
<style scoped>
</style>
