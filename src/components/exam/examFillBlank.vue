<template>
  <div>
    <div class="replyDiv" v-for="(item, i) in replyValues" :key="i">
      <el-input placeholder="请输入内容"  v-model="replyValues[i]" @change="doChange">
        <template slot="prepend">第{{i+1}}空</template>
      </el-input>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'examFillBlank',
    props: {
      reply: Function,
      answer: String,
      optionalAnswer: String
    },
    data() {
      return {
        replyValues: this.answer? JSON.parse(this.answer): new Array(this.optionalAnswer*1),
      }
    },
    methods: {
      doChange() {
        this.reply(this.replyValues)
      }
    },
    watch: {
      answer(newVal, oldVal){
        if (newVal){
          this.replyValues = JSON.parse(this.answer)
        }
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

  .replyDiv{
    width: 500px;
    padding-left: 2rem;
    padding-bottom: 1rem;
  }

</style>
