<template>
  <div>
    <!--  -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>我的学习</el-breadcrumb-item>
      <el-breadcrumb-item>已做习题</el-breadcrumb-item>
    </el-breadcrumb>
    <el-divider></el-divider>
    <!-- personnel  study history -->
    <el-timeline>
      <el-timeline-item
        :timestamp="item.time"
        placement="top"
        type="success"
        v-for="(item, index) in items"
        :key="index"
      >
        <el-card>
          <h4>{{item.title}}</h4>
          <p>{{item.username}} 提交于 {{item.time}}</p>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // study history
      items: [
        { id: 1, time: '2019/8/2', title: 'MySQL基础', username: '李二狗' },
        { id: 1, time: '2019/9/2', title: 'MySQL基础', username: '李二狗' },
        { id: 1, time: '2019/10/2', title: 'MySQL基础', username: '李二狗' },
        { id: 1, time: '2019/11/2', title: 'MySQL基础', username: '李二狗' },
        { id: 1, time: '2019/12/2', title: 'MySQL基础', username: '李二狗' },
        { id: 1, time: '2019/7/2', title: 'MySQL基础', username: '李二狗' },
        { id: 1, time: '2019/6/2', title: 'MySQL基础', username: '李二狗' }
      ]
    }
  }
}
</script>

<style scoped>
.el-timeline {
  margin-top: 5rem;
}
/* .el-timeline-item__timestamp.is-top {
  margin-bottom: 0px;
  padding-top: 0px;
}
.el-timeline-item__timestamp .is-top {
  float: left;
  margin-top: -35px;
}
.el-timeline-item {
  padding-bottom: 40px;
} */
</style>
