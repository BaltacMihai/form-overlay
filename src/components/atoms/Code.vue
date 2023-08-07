<template>
  <div>
    <textarea class="language-js" v-model="code" @input="updateCode"></textarea>
    <pre>
      <code class="language-html language-css " >{{ code }}</code>
    </pre>
  </div>
</template>

<script>
import Prism from 'prismjs'
import 'prismjs/themes/prism-okaidia.css'

export default {
  data() {
    return {
      code: `console.log('Hello, world!')`
    }
  },
  mounted() {
    Prism.highlightAll() // highlight your code on mount
  },
  methods: {
    updateCode() {
      Prism.highlightAll()
    }
  },
  watch: {
    code(newCode) {
      this.updateCode()
    }
  }
}
</script>

<style lang="scss">
.language-js {
  margin-top: 5rem;
  height: 75vh;
  background: $cl-primary !important;
  border-radius: 20px;
  padding: 0.5rem 1rem;
  width: 30%;
  font-size: 1rem;
  color: $cl-accents;
}
</style>
