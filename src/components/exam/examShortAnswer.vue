<template>
  <div>
    <div ref="editor" class="wang-editor"></div>
  </div>
</template>

<script>
  import E from 'wangeditor'
  export default {
    name: 'examShortAnswer',
    props: {
      reply: Function,
      answer: String
    },
    data () {
      return {
        editorContent: this.answer
      }
    },
    methods: {
      getContent: function () {
        alert(this.editorContent)
      }
    },
    mounted() {
      var editor = new E(this.$refs.editor)
      editor.customConfig.onchange = (html) => {
        this.editorContent = html
        this.reply(this.editorContent)
      }
      editor.create()
      editor.txt.html(this.editorContent)
    }
  }
</script>

<style scoped>
  .wang-editor {
    text-align:left;
    height: 315px;
  }
</style>
