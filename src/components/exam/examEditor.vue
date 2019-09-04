<template>
  <div class="codeEditor">
    <p>
    <div id="container" ref="container"></div>
  </div>
</template>
<script>
  import * as monaco from 'monaco-editor';

  export default {
    props: {
      codes: {
        type: String,
      },
      language: {
        type: String,
        default: function () {
          return 'java'
        }
      },
      readOnly: Boolean
    },
    data() {
      return {
        themeOption: [
          {
            value: 'vs',
            label: '默认'
          },
          {
            value: 'hc-black',
            label: '高亮'
          },
          {
            value: 'vs-dark',
            label: '深色'
          },
        ],
        theme: 'vs',
        codesCopy: this.codes,//内容备份
        monacoEditor: null
      }
    },
    mounted() {
      this.initEditor()
    },
    methods: {
      initEditor() {
        let self = this;
        self.$refs.container.innerHTML = '';
        self.monacoEditor = monaco.editor.create(self.$refs.container, {
          value: self.codesCopy,
          language: self.language,
          theme: self.theme,//vs, hc-black, or vs-dark
          readOnly: self.readOnly
        });
        self.monacoEditor.onDidChangeModelContent(function (event) {//编辑器内容changge事件
          self.codesCopy = self.monacoEditor.getValue();
          self.$emit('on-change', self.monacoEditor.getValue(), event);
        });
      },
    },
    watch: {
      codes(newVal){
        if (newVal){
          this.codesCopy = newVal
        }
      }
    }
  }
</script>
<style scoped>
  #container {
    text-align: left;
    border: 1px solid #eee;
    height: 280px;
  }
</style>
