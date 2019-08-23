<template>
  <div class="webDiv" align="left">
    <el-row :gutter="20">
      <el-col :span="3">
        <label>试题资料：</label>
      </el-col>
      <el-col :span="21">
        <a :href="dataUrl">点击下载试题资料</a>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="3">
        <label>上传作答结果：</label>
      </el-col>
      <el-col :span="12">
        <div>
          <el-upload
            ref="upload"
            class="upload-demo"
            action="http://localhost:9001/api/file/uploadKeepName?source=replyAnswer"
            :multiple="multiple"
            :limit="limit"
            :disabled="disabled"
            :on-success="fileUploadSuccess"
            :on-error="fileUploadError"
            :file-list="fileList">
            <el-button :disabled="disabled" size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">请上传作答结果(上传war包或者项目源码)</div>
          </el-upload>
        </div>
      </el-col>
        <el-col :span="6">
          <el-button type="primary" plain @click="execute" icon="el-icon-caret-right">在线测试</el-button>
        </el-col>
    </el-row>

    <!-- 校验结果 -->
    <el-dialog title="执行结果" :visible.sync="dialogTableVisible">
      <el-table :data="checkResultList">
        <el-table-column type="index" width="100"></el-table-column>
        <el-table-column property="funcName" label="功能名称" width="200"></el-table-column>
        <el-table-column property="score" label="得分" width="100"></el-table-column>
        <el-table-column label="结果">
          <template slot-scope="scope">
            <i class="el-icon-success" v-if="scope.row.statusCode==1"></i>
            <i class="el-icon-error" v-if="scope.row.statusCode==0"></i>
          </template>
        </el-table-column>
      </el-table>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: 'examWeb',
    props: {
      reply: Function,
      answer: String,
      optionalAnswer: String,
      question: Object,
      disabled: Boolean
    },
    data() {
      return {
        dialogTableVisible: false,
        fileList: [],
        filePath: '',
        checkResultList: [],
        timer: '',
        loading: '',
        multiple: false, //是否支持文件多选
        dataUrl: '',    //试题资料路径
        testCaseUrl: '',
        limit: 1
      }
    },
    methods: {
      execute(){
        const stuName = sessionStorage.getItem('loginName')
        var params = {
          questionId: this.question.id,
          filePath: this.filePath,
          stuName: stuName
        }
        this.$http.get(this.testCaseUrl, {params: params})
          .then(res => {
            this.openFullScreen()
            // 开启定时任务
            this.timer = setInterval(this.queryExecuteDatail, 5000);
          })
          .catch(res => {
            this.$message.error('请求发送失败')
          })
      },
      fileUploadSuccess(response, file, fileList){
        // 资料文件路径
        this.filePath = response
        this.reply(this.filePath)
        if (fileList.length > 1){
          this.fileList[0] = fileList[fileList.length-1]
        }
        this.$message({
          message: '文件上传成功',
          type: 'success'
        });
      },
      fileUploadError(err, file, fileList){
        this.$message.error('文件上传失败，请重新上传')
      },
      queryExecuteDatail(){
        const stuName = sessionStorage.getItem('loginName')
        var params = {
          questionId: this.question.id,
          stuName: stuName
        }
        this.$http.get('http://localhost:8088/autoTest/queryDetail', {params: params})
          .then(res => {
            const status = res.data.status
            if (status == 2 || status ==3){
              return
            }
            if (status == 0){
              this.loading.close()
              clearInterval(this.timer);
              this.$message.error(res.data.msg)
            }
            if (status == 1){
              this.checkResultList = res.data.data
              this.dialogTableVisible = true
              // 执行成功
              clearInterval(this.timer);
              this.loading.close()
            }


          })
          .catch(res => {
            alert(res)
            // 清除定时器
            clearInterval(this.timer);
            this.loading.close()
          })
      },
      openFullScreen() {
        this.loading = this.$loading({
          lock: true,
          text: '正在执行',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });
      },
      // 下载试题资料
      downloadData(){

      },
      initData(){
        const optionalAnswer = JSON.parse(this.optionalAnswer)
        const answer = this.answer
        if (answer){
          this.fileList[0] = {
            name: answer.substring(answer.lastIndexOf('/')+1),
            url: answer
          }
        }
        this.dataUrl = optionalAnswer.dataUrl
        this.testCaseUrl = optionalAnswer.testCaseUrl
      }
    },
    watch: {
      answer(newVal, oldVal){
        if (newVal){
          this.replyValues = JSON.parse(this.answer)
        }
      }
    },
    created(){
      this.initData()
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

  .webDiv{
    padding-left: 2rem;
  }

  div {
    padding-bottom: 1rem;

  }

</style>
