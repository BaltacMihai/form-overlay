<template>
  <Card title="Google Form Body" class="input__form__card">
    <template v-slot:actions>
      <Btn text="Paste" icon="paste" @click="pasteElement" />
    </template>

    <template v-slot:content>
      <textarea v-model="googleData"> </textarea>

      <template v-if="googleData.length == 0">
        <div class="empty-state">
          <img :src="emptyIcon" />
          <p>Upload Form’s Html Body</p>
        </div>
      </template>
    </template>
  </Card>
</template>

<script>
import Card from '@/components/molecules/Card.vue'
import Btn from '@/components/atoms/Btn.vue'

import emptyStateIcon from '@/assets/icons/document-copy.svg'

export default {
  props: {
    update: Function
  },
  components: {
    Card,
    Btn
  },
  data() {
    return {
      googleData: '',
      emptyIcon: emptyStateIcon
    }
  },
  methods: {
    pasteElement() {
      navigator.clipboard.readText().then((clipText) => (this.googleData = clipText))
    }
  },
  watch: {
    googleData(newValue) {
      this.update(newValue)
    }
  }
}
</script>

<style lang="scss">
.input__form__card {
  width: 25vw;
}
textarea {
  height: 75vh;
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
