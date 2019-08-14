<template>
  <div class="exam-content">
    <el-card>
      <ul>
        <li v-for="(option, index) in optionalAnswer" :key="index">
          <el-checkbox v-model="select" @change="doCheck" :label="option.item">{{option.content}}</el-checkbox>
        </li>
      </ul>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: 'examMultiple',
    props: {
      optionalAnswer: Array,
      reply: Function,
      answer: String
    },
    data() {
      return {
        select: this.answer? JSON.parse(this.answer): []
      }
    },
    methods: {
      doCheck(val) {
        this.reply(this.select)
      }
    },
    watch: {
      answer(newVal, oldVal){
        if (typeof newVal === 'string') {
          this.select = JSON.parse(newVal)
        }else {
          this.select = newVal
        }
      }
    }
  }
</script>

<style scoped>
  li {
    list-style-type: upper-alpha !important;
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
