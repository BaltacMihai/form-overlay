<template>
  <Card title="Generated Form" class="generated__form__card">
    <template v-slot:actions>
      <Btn text="Copy" icon="paste" @click="pasteElement" />
    </template>

    <template v-slot:content>
      <pre>
      <code class="language-html language-css " >{{ compiledCode }}</code>
    </pre>

      <template v-if="compiledCode.length == 0">
        <div class="empty-state">
          <p>Upload Form’s Html Body</p>
        </div>
      </template>
    </template>
  </Card>
</template>

<script>
import Card from '@/components/molecules/Card.vue'
import Btn from '@/components/atoms/Btn.vue'

import Prism from 'prismjs'
import 'prismjs/themes/prism-okaidia.css'

export default {
  components: {
    Card,
    Btn
  },
  props: {
    compiledCode: String
  },

  methods: {
    pasteElement() {
      navigator.clipboard.writeText(this.compiledCode)
    },
    updateCode() {
      Prism.highlightAll()
    }
  },
  updated() {
    Prism.highlightAll() // highlight your code on mount
  }
}
</script>

<style lang="scss">
pre[class*='language-'] {
  background-color: transparent;
}
textarea {
  background: $cl-primary;
  width: calc(100% - 1rem * 2);
  border: none;

  font-size: $fs-sub-text;
  color: $cl-accents;

  padding: 1rem;

  border-bottom-left-radius: 20px;

  border-bottom-right-radius: 20px;

  resize: none;

  &:focus-visible {
    border: 0;
    outline: none;
  }
}

.empty-state {
  position: absolute;
  top: 30%;
  left: 25%;

  color: $cl-accents;
  font-size: $fs-text;
  display: flex;
  flex-direction: column;
  align-items: center;

  font-weight: bold;
}
</style>
