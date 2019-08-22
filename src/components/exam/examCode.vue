<template>
  <div id="examCode">
    <MonacoEditor
      width="100%"
      height="350"
      theme="vs"
      :value="code"
      language="javascript"
      :options="options"
      @change="onChange"
    ></MonacoEditor>
  </div>
</template>

<script>
  import MonacoEditor from 'monaco-editor-vue';
  export default {
    name: "examCode",
    components: {
      MonacoEditor
    },
    props: {
      reply: Function,
      answer: String,
      optionalAnswer: String,
    },
    data () {
      return {
        code: '',
        options: {
          //Monaco Editor Options
        },
        optional: JSON.parse(this.optionalAnswer),
        codeTemplate: '',
      }
    },
    methods: {
      onChange (value) {
        this.code = value
        this.reply(value)
      }
    },
    watch: {
      optionalAnswer:{
        handler: (newVal, oldVal)=>{
          this.optional = JSON.parse(newVal)
          this.codeTemplate = this.optional.codeTemplate
        }
      }
    },
    created(){
      this.codeTemplate = this.optional.codeTemplate
      this.code = (this.answer ? this.answer: this.codeTemplate)
    }
  };
</script>

<style scoped>
  #examCode{
    text-align: left;
    border: 1px solid #eee;
  }
</style>
