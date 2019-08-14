<template>
  <div class="user-container">
    <!-- 固定头部 -->
    <exam-header1></exam-header1>
    <el-container>
      <el-aside width="200px">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          background-color="#2c3e50"
          text-color="#fff"
          active-text-color="#fff"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-edit"></i>
              <span>我的学习</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">
                 <router-link to="/mycourse"><a class="router-class">我的课程 </a> </router-link>
              </el-menu-item>
              <el-menu-item index="1-3">我的收藏</el-menu-item>
              <el-menu-item index="1-4">我的点赞</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
           <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-s-custom"></i>
              <span>个人中心</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1">
                <router-link to="/usersettings"><a class="router-class">资料修改 </a> </router-link>
              </el-menu-item>
              <el-menu-item index="2-2">
                <router-link to="/resetpassword"><a class="router-class">密码修改 </a> </router-link>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>
<script>
export default {
  name: 'user'
}
</script>
<style scoped>
.user-container {
  height: 100%;
}
.el-container {
  height: calc(100% - 60px);
}
.el-aside {
  background-color: #2c3e50;
  color: #333;
  text-align: center;
}
.router-class{
  color: #fff;
  text-decoration: none
}
</style>
