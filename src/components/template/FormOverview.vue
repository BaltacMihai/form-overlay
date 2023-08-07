<template>
  <Card title="Overview" class="overview__form__card">
    <template v-slot:actions v-if="action && inputs">
      <Btn text="Submit" icon="send" outline @click="submitForm" />
    </template>

    <template v-slot:content>
      <form :action="action" target="output_frame" @submit="submitedForm">
        <button id="submitBTN" style="display: none">Send</button>

        <template v-for="(inputElement, index) in inputs">
          <div class="form-group">
            <label :for="inputElement">Label {{ index + 1 }}</label>

            <input
              type="text"
              :name="inputElement"
              :id="inputElement"
              :value="'Label ' + (index + 1)"
            />
          </div>
        </template>
      </form>
      <iframe
        name="output_frame"
        src=""
        id="output_frame"
        width="XX"
        height="YY"
        style="display: none"
      >
      </iframe>
      <Snackbar
        text="The form is submitted, now you can check the google form to verify"
        v-if="isSubmited"
      />
    </template>
  </Card>
</template>

<script lang="ts">
// @ts-ignore
import Card from '@/components/molecules/Card.vue'
// @ts-ignore
import Btn from '@/components/atoms/Btn.vue'
import Snackbar from '../atoms/Snackbar.vue'

export default {
  components: {
    Card,
    Btn,
    Snackbar
  },
  props: {
    action: String,
    inputs: Array<string>
  },
  data() {
    return {
      isSubmited: false
    }
  },
  methods: {
    submitForm() {
      const btnId = document.getElementById('submitBTN')

      btnId?.click()
    },
    submitedForm() {
      this.isSubmited = true
    }
  }
}
</script>
<style lang="scss">
form {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: start;
  gap: 1rem;

  padding: $global-paddingY-size $global-paddingX-size;

  .form-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    flex: 1 1 20%;

    label {
      font-size: $fs-text;
      color: $cl-accents;
    }

    input {
      padding: 0.5rem 1rem;
      border-radius: 5px;
      outline: none;
      border: none;
      color: $cl-accents;
      background: $cl-background;
      font-size: $fs-sub-text;
    }
  }
}
</style>
