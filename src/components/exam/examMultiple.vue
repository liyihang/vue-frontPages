<template>
  <div class="exam-content">
    <el-card>
      <ul>
        <li v-for="(option, index) in options" :key="index">
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
      optionalAnswer: String,
      reply: Function,
      answer: String
    },
    data() {
      return {
        select: this.answer? JSON.parse(this.answer): [],
        options: JSON.parse(this.optionalAnswer)
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
      },
      optionalAnswer(newVal, oldVal){
        this.options = JSON.parse(newVal)
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
