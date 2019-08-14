<template>
  <div id="app">
    <MonacoEditor
      width="100%"
      height="500"
      theme="vs-light"
      language="java"
      :options="options"
      @change="onChange"
    ></MonacoEditor>
  </div>
</template>

<script>
import MonacoEditor from 'monaco-editor-vue';
export default {
  name: "App",
  components: {
    MonacoEditor
  },
  data () {
    return {
      options: {
        //Monaco Editor Options
      }
    }
  },
  methods: {
    onChange (value) {
      console.log(value);
    }
  }
};
</script>

<style scoped>
#app{
  text-align: left;
}
</style>