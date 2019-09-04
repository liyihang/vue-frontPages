<template>
  <div>
    <code-editor @on-change="onChange" :read-only="disabled" :codes="code"></code-editor>
  </div>
</template>

<script>
  import codeEditor from './examEditor'
  export default {
    name: "examCode",
    components: {
      codeEditor
    },
    props: {
      reply: Function,
      answer: String,
      optionalAnswer: String,
      disabled: Boolean
    },
    data () {
      return {
        code: '',
        optional: JSON.parse(this.optionalAnswer),
        codeTemplate: '',
      }
    },
    methods: {
      onChange (value) {
        console.log(value)
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
</style>
