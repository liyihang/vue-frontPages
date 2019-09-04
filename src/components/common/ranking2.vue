<template>
  <div>
    <el-card>
      <el-row>
        <el-col :span="24">
          <el-table :data="rankingData">
            <el-table-column type="index"></el-table-column>
            <el-table-column label="姓名" prop="name"></el-table-column>
            <el-table-column label="班级" prop="class"></el-table-column>
            <el-table-column label="积分" prop="score"></el-table-column>
          </el-table>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>
<script>
export default {
  data () {
    return {
      rankingData: [
        { name: '张三', class: 'Java1班', score: '90' },
        { name: '张三', class: 'Java1班', score: '90' },
        { name: '张三', class: 'Java1班', score: '90' },
        { name: '张三', class: 'Java1班', score: '90' },
        { name: '张三', class: 'Java1班', score: '90' },
        { name: '张三', class: 'Java1班', score: '90' },
        { name: '张三', class: 'Java1班', score: '90' }
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
</style>