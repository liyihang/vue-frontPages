<template>
  <div>
    <exam-header></exam-header>
    <!-- 标题和选项 -->
    <div class="exam-item">
      <div class="exam-header">
        <el-divider content-position="left">
          <h3>
            <i class="el-icon-edit"></i>选择题
          </h3>
        </el-divider>
      </div>
      <div class="exam-title">
        <el-row :gutter="24">
          <el-col :span="24">
            <p>
              <i class="el-icon-medal-1">{{questionNumber+1}}</i>{{question.title}}
            </p>
          </el-col>
        </el-row>
      </div>
      <exam-single v-if="question.qtype === 1" :answer="answer.answer" :reply="reply" :optionalAnswer="optionalAnswer"></exam-single>
      <exam-multiple v-if="question.qtype === 2" :answer="answer.answer" :reply="reply" :optional-answer="optionalAnswer"></exam-multiple>
      <!-- 收藏转发  反馈 -->
      <div class="exam-collection">
        <el-row>
          <el-badge class="item">
            <el-button size="small">收藏</el-button>
          </el-badge>
          <el-badge class="item">
            <el-button size="small" type="primary">关注</el-button>
          </el-badge>
          <el-badge class="item">
            <el-button size="small" type="info">反馈</el-button>
          </el-badge>
          <el-badge class="item">
            <el-button size="small">屏蔽本题</el-button>
          </el-badge>
          <!-- 上下题按钮 -->
          <span class="exam-submit">
            <el-button type="warning">结束考试</el-button>
            <el-button type="primary" @click="preQuestion()">上一题</el-button>
            <el-button type="primary" @click="nextQuestion()">下一题</el-button>
          </span>
        </el-row>
      </div>
      <!-- 分页 -->
      <el-pagination background layout="prev, pager, next" :total="100"></el-pagination>
    </div>
    <!-- footer -->
    <el-footer>
      <div class="login-footer">版权所有 2006 - 2019 苏ICP备16007882号-4</div>
    </el-footer>
  </div>
</template>
<script>
  import examSingle from './exam/examSingle'
  import examMultiple from './exam/examMultiple'

  export default {
    name: 'exam',
    components: {examSingle, examMultiple},
    data() {
      return {
        radio1: 1,
        question: {},
        optionalAnswer: [],
        questionList: [],
        answer: {},
        answerVal: '',
        answerMap: [],
        passId: this.$route.query.passId
      }
    },
    methods: {
      findQuestionById() {
        const vm = this
        this.questionList.forEach((q, index) => {
          if (q.id === (vm.$route.params.id*1)){
            vm.question = q
            return
          }
        })
      },
      // 第一题
      firstQuestion(){
        this.question = this.questionList[0]
      },
      findQuestionList(){
        this.$http.get('/api/question/byPassId?passId=' + this.$route.query.passId)
          .then(res => {
            this.questionList = res.data
            this.firstQuestion()
          })
      },
      // 作答
      reply(val) {
        this.answerVal = val
      },
      // 开始闯关
      startPass(){
        this.$http.get('/api/pass/startPass/' + this.$route.query.passId)
          .then(res => {})
      },
      // 下一题,isCb:是否是调用的回调函数
      nextQuestion(isCb){
        // 直接进入下一题
        if (isCb){
          this.question = this.questionList[this.questionNumber+1]
          return
        }
        // 提交答案
        this.submitAnswer(this.nextQuestion)
      },
      //上一题
      preQuestion(isCb){
        if (isCb){
          this.question = this.questionList[this.questionNumber-1]
          return
        }
        this.submitAnswer(this.preQuestion)
      },
      // 提交答案
      submitAnswer(callback){
        // 答案未重新赋值，无需提交
        if (!this.answerVal){
          callback(true)
          return
        }
        // 判断答案是否发生了改变
        if (typeof this.answerVal === 'string'){
          if (this.answerVal === this.answer.answer){
            callback(true)
            return
          }
        } else {
          if (JSON.stringify(this.answerVal) === this.answer.answer){
            callback(true)
            return
          }
        }

        this.answer = {
          id: this.answer.id,
          questionId: this.question.id,
          passId: this.passId,
          answer: (typeof this.answerVal == 'string') ? this.answerVal: JSON.stringify(this.answerVal)
        }
        // 提交本题的答案
        this.$http.post('/api/answer', this.answer)
          .then(res => {
            this.answer.id = res.data.id
            this.answerMap[this.answer.questionId] = this.answer

            // 重置答案
            this.answer = {}
            this.answerVal = ''
            // 执行回调函数
            callback(true)
          })
      },
      // 获取已提交的所有答案
      loadSubmitedAnswerList(){
        this.$http.get('/api/answer/loadAnswer?passId=' + this.passId)
          .then(res => {
            this.answerMap = res.data
          })
      }
    },
    created() {
      this.startPass()
      this.findQuestionList()
      this.loadSubmitedAnswerList()
    },
    watch: {
      question(){
        this.optionalAnswer = JSON.parse(this.question.optionalAnswer)
        if (this.answerMap){
          this.answer = this.answerMap[this.question.id] ? this.answerMap[this.question.id]: {}
        }
      }
    },
    computed: {
      // 是否是第一题
      isFirstQuestion(){
        const firstQuestion = this.questionList[0]
        return this.question.id === firstQuestion.id
      },
      // 是否是最后一题
      isLastQuestion(){
        const lastQuestion = this.questionList[this.questionList.length -1]
        return this.question.id === lastQuestion.id
      },
      questionNumber(){ //题号
        return this.questionList.indexOf(this.question)
      }
    }
  }
</script>
<style scoped>

  .exam-title p {
    float: left;
    padding: 2rem;
  }

  .exam-item {
    margin: 2rem auto;
    height: 35rem;
    width: 80%;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }

  .el-divider {
    top: 2rem;
  }

  .el-icon-medal-1 {
    padding: 5px;
    color: red;
  }

  /* 收藏  点赞  反馈  ……*/
  .el-badge {
    padding: 2rem 0rem 1rem 2rem;
  }

  .exam-collection {
    float: left;
  }

  .exam-submit {
    margin-left: 25rem;
  }

  .el-footer {
    position: static;
    line-height: 60px;
    margin-bottom: 0;
    width: 100%;
    background-color: lightgrey;
  }

  .el-pagination {
    clear: both;
    margin: 6rem;
  }
</style>
