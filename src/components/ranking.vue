<template>
  <div>
    <exam-header name="Header"></exam-header>
    <el-container>
      <el-aside width="200px">
        <el-row>
          <el-col>
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              background-color="#fff"
              text-color="#000"
              active-text-color="#ffd04b"
              router
            >
              <el-menu-item index="/ranking/1">
                <i class="el-icon-menu"></i>
                <span slot="title">排行榜</span>
              </el-menu-item>
              <el-menu-item index="/ranking/2">
                <i class="el-icon-menu"></i>
                <span slot="title">积分榜</span>
              </el-menu-item>
              <el-menu-item index="/ranking/3">
                <i class="el-icon-menu"></i>
                <span slot="title">勤劳榜</span>
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
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

<style scoped>
li {
  list-style: none;
  color: black;
}
.el-link.el-link--default {
  color: gold;
  font-size: 1.5rem;
}
.el-link {
  margin: 1rem;
  font-size: 2rem;
}
.el-icon-trophy {
  color: gold;
}
.el-card {
}
</style>