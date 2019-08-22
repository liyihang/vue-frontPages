<template>
  <div>
    <exam-header></exam-header>
    <!-- 标题和选项 -->
    <div class="exam-item">
      <div class="exam-header">
        <el-divider content-position="left">
          <h3>
            <i class="el-icon-edit"></i>
            {{
              question.qtype === 1 ? '选择题': question.qtype === 2 ? '多选题' : question.qtype === 3 ? '编程题':
              question.qtype === 4 ? '简答题': question.qtype === 5 ? '判断题' : question.qtype === 6 ? '填空题': '实操题'
            }}
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
      <exam-single v-if="question.qtype === 1" :answer="answer.answer" :reply="reply"
                   :optionalAnswer="question.optionalAnswer"></exam-single>
      <exam-multiple v-if="question.qtype === 2" :answer="answer.answer" :reply="reply"
                     :optional-answer="question.optionalAnswer"></exam-multiple>
      <exam-code v-if="question.qtype === 3" :answer="answer.answer" :reply="reply"
                     :optional-answer="question.optionalAnswer"></exam-code>
      <exam-short-answer v-if="question.qtype === 4" :answer="answer.answer" :reply="reply"></exam-short-answer>
      <exam-judge v-if="question.qtype === 5" :answer="answer.answer" :reply="reply"></exam-judge>
      <exam-fill-blank v-if="question.qtype === 6" :answer="answer.answer" :reply="reply" :optional-answer="question.optionalAnswer"></exam-fill-blank>
      <exam-web v-if="question.qtype ===7" :answer="answer.answer" :reply="reply"
                    :optional-answer="question.optionalAnswer" :question="question"></exam-web>
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
            <el-button type="primary" plain
                       v-if="question.qtype === 3"
                       @click="executeCode" icon="el-icon-caret-right">在线运行</el-button>
            <el-button type="primary" v-if="notFirstQuestion" @click="preQuestion()">上一题</el-button>
            <el-button type="primary" v-if="notLastQuestion" @click="nextQuestion()">下一题</el-button>
            <el-button type="warning" @click="endPass">结束考试</el-button>
          </span>
        </el-row>
      </div>
      <!-- 分页 -->
      <el-pagination
        background
        layout="prev, pager, next"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :pageSize="1"
        :total="total">
      </el-pagination>

      <!-- 校验结果 -->
      <el-dialog title="执行结果" :visible.sync="dialogTableVisible">
        <el-table :data="checkResultList">
          <el-table-column type="index" width="100"></el-table-column>
          <el-table-column property="params" label="测试参数" width="100"></el-table-column>
          <el-table-column property="executeResult" label="运行结果" width="100"></el-table-column>
          <el-table-column property="expectResult" label="期望运行结果"></el-table-column>
          <el-table-column label="结果">
            <template slot-scope="scope">
              <i class="el-icon-success" v-if="scope.row.statusCode==1"></i>
              <i class="el-icon-error" v-if="scope.row.statusCode==0"></i>
            </template>
          </el-table-column>
        </el-table>
      </el-dialog>

      <!-- 错误信息 -->
      <el-dialog
        title="执行失败"
        :visible.sync="executeError"
        width="30%">
        <div class="errorMsg">{{errorMsg}}</div>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="executeError = false">确 定</el-button>
        </span>
      </el-dialog>
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
  import examCode from './exam/examCode'
  import ExamShortAnswer from "./exam/examShortAnswer";
  import ExamJudge from "./exam/examJudge";
  import ExamFillBlank from "./exam/examFillBlank";
  import ExamWeb from "./exam/examWeb";

  export default {
    name: 'exam',
    components: {ExamWeb, ExamFillBlank, ExamJudge, ExamShortAnswer, examSingle, examMultiple, examCode},
    data() {
      return {
        radio1: 1,
        question: {},
        questionList: [],
        answer: {},
        answerVal: '',
        answerMap: [],
        passId: this.$route.query.passId,
        currentPage: 1,
        total: 10,
        checkResultList: [],
        dialogTableVisible: false,
        checkResult: true,     //是否校验通过，默认true
        executeError: false,
        errorMsg: ''
      }
    },
    methods: {
      findQuestionById() {
        const vm = this
        this.questionList.forEach((q, index) => {
          if (q.id === (vm.$route.params.id * 1)) {
            vm.question = q
            return
          }
        })
      },
      // 第一题
      firstQuestion() {
        this.question = this.questionList[0]
      },
      findQuestionList() {
        this.$http.get('/api/question/byPassId?passId=' + this.$route.query.passId)
          .then(res => {
            this.questionList = res.data
            this.total = this.questionList.length
            this.firstQuestion()
          })
      },
      // 作答
      reply(val) {
        this.answerVal = val
      },
      // 开始闯关
      startPass(resolver) {
        this.$http.get('/api/pass/startPass/' + this.$route.query.passId)
          .then(res => {
            resolver()
          })
      },
      // 结束闯关
      endPass(){
        // 先提交答案，再结束考试
        new Promise(this.submitAnswer)
          .then(res => {
            this.$confirm('确认结束闯关?', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            })
            .then(() => {
            this.$http.put('/api/pass/endPass/' + this.$route.query.passId)
              .then(res => {
                // 提交成功，返回关卡列表
                this.$router.push('/coursedetail/' + this.$route.query.firstLevelPassId)
              })
            })
            .catch(res => {
            })
          })
          .catch(res => {

          })

      },
      // 下一题,isCb:是否是调用的回调函数
      nextQuestion() {
        new Promise(this.submitAnswer)
          .then(res => {
            // 下一题
            this.question = this.questionList[this.questionNumber + 1]
            this.currentPage++
          })
      },
      //上一题
      preQuestion() {
        new Promise(this.submitAnswer)
          .then(res => {
            // 上一题
            this.question = this.questionList[this.questionNumber - 1]
            this.currentPage--
          })
      },
      // 根据索引定位问题
      indexQuestion(index){
        new Promise(this.submitAnswer)
          .then(res => {
            // 获取索引对应的题目
            this.question = this.questionList[index]
          })
      },
      // 提交答案
      submitAnswer(resolve) {
        // 答案未重新赋值，无需提交
        if (!this.answerVal) {
          resolve()
          return
        }
        // 判断答案是否发生了改变
        if (typeof this.answerVal === 'string') {
          if (this.answerVal === this.answer.answer) {
            resolve()
            return
          }
        } else {
          if (JSON.stringify(this.answerVal) === this.answer.answer) {
            resolve()
            return
          }
        }

        this.answer = {
          id: this.answer.id,
          questionId: this.question.id,
          passId: this.passId,
          answer: (typeof this.answerVal == 'string') ? this.answerVal : JSON.stringify(this.answerVal)
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
            resolve()
          })
      },
      // 获取已提交的所有答案
      loadSubmittedAnswerList(resolve) {
        this.$http.get('/api/answer/loadAnswer?passId=' + this.passId)
          .then(res => {
            this.answerMap = res.data
            resolve()
          })
      },
      handleCurrentChange(val){
        this.currentPage = val
        this.indexQuestion(val -1)
      },
      // 在线运行
      executeCode(){
        var param = {
          questionId: this.question.id,
          code: this.answerVal
        }
        this.$http.post('/api/question/executeCode', param)
          .then(res => {
            this.checkResultList = res.data.data
            this.dialogTableVisible = true
            if (res.data.status == 200){
              this.checkResult = false
            }
          })
          .catch(res => {
            if (res.response){
              this.executeError = true
              this.errorMsg = res.response.data.msg
            } else {
              alert("执行失败")
            }
          })
      }
    },
    created() {
      new Promise(this.startPass)
        .then(res => {
          new Promise(this.loadSubmittedAnswerList)
            .then(res => {
              this.findQuestionList()
            })
        })

    },
    watch: {
      question() {
        if (this.answerMap) {
          this.answer = this.answerMap[this.question.id] ? this.answerMap[this.question.id] : {}
          this.answerVal = this.answer.answer
        }
      }
    },
    computed: {
      // 不是第一题
      notFirstQuestion() {
        if (!this.questionList || this.questionList.length ===0 || !this.question){
          return
        }
        const firstQuestion = this.questionList[0]
        return !(this.question.id === firstQuestion.id)
      },
      // 不是最后一题
      notLastQuestion() {
        if (!this.questionList || this.questionList.length ===0 || !this.question){
          return
        }
        const lastQuestion = this.questionList[this.questionList.length - 1]
        return !(this.question.id === lastQuestion.id)
      },
      questionNumber() { //题号
        return this.questionList.indexOf(this.question)
      }
    }
  }
</script>
<style scoped>

  .exam-title p {
    float: left;
    padding: 1rem;
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

  .errorMsg {
    white-space: pre-wrap
  }
</style>
