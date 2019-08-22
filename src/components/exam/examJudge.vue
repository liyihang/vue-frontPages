<template>
  <div class="exam-content">
    <el-card>
      <ul>
        <li>
          <el-radio @change="doSelect" v-model="select" label="1">正确</el-radio>
        </li>
        <li>
          <el-radio @change="doSelect" v-model="select" label="0">错误</el-radio>
        </li>
      </ul>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: 'examJudge',
    props: {
      reply: Function,
      answer: String
    },
    data() {
      return {
        select: this.answer
      }
    },
    methods: {
      doSelect() {
        this.reply(this.select)
      }
    },
    watch: {
      answer(newVal, oldVal){
        this.select = newVal
      }
    }
  }
</script>

<style scoped>
  li {
    list-style-type: none !important;
  }

  .el-card__header {
    float: left;
  }

  /* 题目 */
  .exam-content li {
    padding: 1rem;
    list-style-type: decimal;
    float: left;
    clear: both;
  }

</style>
