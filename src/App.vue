<script lang="ts">
// @ts-ignore
import Navbar from '@/components/organisms/Navbar.vue'
// @ts-ignore
import InputFormCard from '@/components/template/InputFormCard.vue'
// @ts-ignore
import GeneratedFormCard from '@/components/template/GeneratedFormCard.vue'
// @ts-ignore
import FormReader from '@/packages/compile-form/FormReader'
import FormOverview from './components/template/FormOverview.vue'

export default {
  components: {
    Navbar,
    InputFormCard,
    GeneratedFormCard,
    FormOverview
  },
  data() {
    return {
      code: '',
      formAction: '',
      inputs: [] as string[]
    }
  },
  methods: {
    compileCode(_html: string) {
      try {
        const htmlDocument = new FormReader(_html)

        this.code = htmlDocument.compileForm()
        this.formAction = htmlDocument.getAction() ?? ''
        this.inputs = htmlDocument.getInputsName()?.filter((input) => input !== null) as string[]
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<template>
  <Navbar />
  <main>
    <InputFormCard :update="compileCode" />
    <div class="output">
      <GeneratedFormCard :compiledCode="code" />
      <FormOverview :action="formAction" :inputs="inputs" />
    </div>
  </main>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

body {
  overflow: hidden;
  background-color: $cl-background;
}

main {
  padding: $global-paddingY-size $global-paddingX-size;
  width: calc(100vw - $global-paddingX-size * 2);
  height: calc(100vh - $global-paddingY-size * 2);
  display: flex;
  align-items: flex-start;
  gap: $global-paddingY-size;

  .output {
    display: flex;
    flex-direction: column;

    width: 70vw;

    $_gap: $global-paddingY-size;
    gap: $_gap;

    .generated__form__card {
      max-height: 45vh;

      pre {
        height: 30vh;
      }
    }

    .overview__form__card {
      height: calc(45vh - $_gap * 1.5);
    }
  }
}
</style>
