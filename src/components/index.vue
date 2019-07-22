<template>
  <div>
    <!-- header -->
    <exam-header></exam-header>
    <!-- 轮播 -->
    <el-carousel :interval="5000" arrow="always">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
    <!-- 设置题目标签 -->
    <div class="tag-group">
      <span class="tag-group__title">标签：</span>
      <el-tag
        v-for="(item, index) in tag_items"
        :key="index"
        size="medium"
        disable-transitions="true"
        effect="dark"
      >{{item.label}}</el-tag>
    </div>
    <!-- 分割线 -->
    <el-divider></el-divider>
    <!-- 各种学科展示 -->
    <el-container>
      <el-row :gutter="24">
        <el-col :span="6">
          <el-card shadow="hover">
            <img src="../assets/java.png" alt class="exam-img" />
            <p>Java从入门到放弃</p>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card shadow="hover">
            <img src="../assets/java.png" alt class="exam-img" />
            <p>Java从入门到放弃</p>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card shadow="hover">
            <img src="../assets/java.png" alt class="exam-img" />
            <p>Java从入门到放弃</p>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card shadow="hover">
            <img src="../assets/java.png" alt class="exam-img" />
            <p>Java从入门到放弃</p>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card shadow="hover">
            <img src="../assets/java.png" alt class="exam-img" />
            <p>Java从入门到放弃</p>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card shadow="hover">
            <img src="../assets/java.png" alt class="exam-img" />
            <p>Java从入门到放弃</p>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card shadow="hover">
            <img src="../assets/java.png" alt class="exam-img" />
            <p>Java从入门到放弃</p>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card shadow="hover">
            <img src="../assets/java.png" alt class="exam-img" />
            <p>Java从入门到放弃</p>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card shadow="hover">
            <img src="../assets/java.png" alt class="exam-img" />
            <p>Java从入门到放弃</p>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card shadow="hover">
            <img src="../assets/java.png" alt class="exam-img" />
            <p>Java从入门到放弃</p>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card shadow="hover">
            <img src="../assets/java.png" alt class="exam-img" />
            <p>Java从入门到放弃</p>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card shadow="hover">
            <img src="../assets/java.png" alt class="exam-img" />
            <p>Java从入门到放弃</p>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card shadow="hover">
            <img src="../assets/java.png" alt class="exam-img" />
            <p>Java从入门到放弃</p>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card shadow="hover">
            <img src="../assets/java.png" alt class="exam-img" />
            <p>Java从入门到放弃</p>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card shadow="hover">
            <img src="../assets/java.png" alt class="exam-img" />
            <p>Java从入门到放弃</p>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card shadow="hover">
            <img src="../assets/java.png" alt class="exam-img" />
            <p>Java从入门到放弃</p>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card shadow="hover">
            <img src="../assets/java.png" alt class="exam-img" />
            <p>Java从入门到放弃</p>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card shadow="hover">
            <img src="../assets/java.png" alt class="exam-img" />
            <p>Java从入门到放弃</p>
          </el-card>
        </el-col>
      </el-row>
    </el-container>
    <!-- 分割线 -->
    <h1>公司面试真题</h1>
    <el-divider></el-divider>
    <el-container>
      <el-row :gutter="12">
        <el-col :span="6">
          <el-card shadow="always">
            <h3>如何追踪变化</h3>
            <p>当你把一个普通的 JavaScript 对象传入 Vue 实例作为 data 选项，Vue 将遍历此对象所有的属性，并使用 Object.defineProperty</p>
            <el-link href="#">阅读更多</el-link>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card shadow="always">
            <h3>如何追踪变化</h3>
            <p>当你把一个普通的 JavaScript 对象传入 Vue 实例作为 data 选项，Vue 将遍历此对象所有的属性，并使用 Object.defineProperty</p>
            <el-link href="#">阅读更多</el-link>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card shadow="always">
            <h3>如何追踪变化</h3>
            <p>当你把一个普通的 JavaScript 对象传入 Vue 实例作为 data 选项，Vue 将遍历此对象所有的属性，并使用 Object.defineProperty</p>
            <el-link href="#">阅读更多</el-link>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card shadow="always">
            <h3>如何追踪变化</h3>
            <p>当你把一个普通的 JavaScript 对象传入 Vue 实例作为 data 选项，Vue 将遍历此对象所有的属性，并使用 Object.defineProperty</p>
            <el-link href="#">阅读更多</el-link>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card shadow="always">
            <h3>如何追踪变化</h3>
            <p>当你把一个普通的 JavaScript 对象传入 Vue 实例作为 data 选项，Vue 将遍历此对象所有的属性，并使用 Object.defineProperty</p>
            <el-link href="#">阅读更多</el-link>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card shadow="always">
            <h3>如何追踪变化</h3>
            <p>当你把一个普通的 JavaScript 对象传入 Vue 实例作为 data 选项，Vue 将遍历此对象所有的属性，并使用 Object.defineProperty</p>
            <el-link href="#">阅读更多</el-link>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card shadow="always">
            <h3>如何追踪变化</h3>
            <p>当你把一个普通的 JavaScript 对象传入 Vue 实例作为 data 选项，Vue 将遍历此对象所有的属性，并使用 Object.defineProperty</p>
            <el-link href="#">阅读更多</el-link>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card shadow="always">
            <h3>如何追踪变化</h3>
            <p>当你把一个普通的 JavaScript 对象传入 Vue 实例作为 data 选项，Vue 将遍历此对象所有的属性，并使用 Object.defineProperty</p>
            <el-link href="#">阅读更多</el-link>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card shadow="always">
            <h3>如何追踪变化</h3>
            <p>当你把一个普通的 JavaScript 对象传入 Vue 实例作为 data 选项，Vue 将遍历此对象所有的属性，并使用 Object.defineProperty</p>
            <el-link href="#">阅读更多</el-link>
          </el-card>
        </el-col>
      </el-row>
    </el-container>
    <!-- footer -->
    <el-footer>
      <div class="login-footer">版权所有 2006 - 2019 苏ICP备16007882号-4</div>
    </el-footer>
  </div>
</template>
<script>
export default {
  name: 'index',
  data () {
    return {
      tag_items: [
        { label: 'HTML' },
        { label: 'JavaScript' },
        { label: 'MySQL' },
        { label: 'Java' },
        { label: '算法' },
        { label: '前端面试题' },
        { label: 'Vue' },
        { label: 'react' }
      ]
    }
  }
}
</script>
<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.el-tag--medium {
  height: 2rem;
  line-height: 2rem;
  margin-right: 0.5rem;
  font-size: 1rem;
}
.tag-group {
  width: 60%;
  margin-top: 1rem;
  margin: 1rem auto;
}
.el-container {
  padding: 2rem;
}
.exam-img {
  height: 12rem;
  width: 12rem;
}
.el-footer {
  position: static;
  line-height: 60px;
  margin-bottom: 0;
  width: 100%;
  background-color: lightgrey;
}
</style>
