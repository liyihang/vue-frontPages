<template>
  <div class="exam-content">
    <div id="container" style="height:500px;border:1px solid grey"></div>
  </div>
</template>

<script>
  import * as monaco from 'monaco-editor'

  export default {
    name: 'examCode',
    props: {},
    data() {
      return {
        code: '// Type away! \n',
        options: {
          selectOnLineNumbers: false
        }
      }
    },
    methods: {
      onMounted(editor) {
        this.editor = editor;
      },
      onCodeChange(editor) {
        console.log(this.editor.getValue());
      }
    },
    watch: {
      answer(newVal, oldVal) {
        this.select = newVal
      }
    },
    mounted(){
      monaco.editor.create(document.getElementById('container'), {
        value: [
          'function x() {',
          '\tconsole.log("Hello world!");',
          '}'
        ].join('\n'),
        language: 'javascript'
      });
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
