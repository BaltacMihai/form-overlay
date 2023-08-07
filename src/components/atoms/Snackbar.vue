<template>
  <div class="snackbar">
    {{ text }}
  </div>
</template>
<script lang="ts">
export default {
  props: {
    text: String
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss">
.snackbar {
  position: fixed;
  top: 20px;
  z-index: 1;
  left: 32.5%;
  background: $cl-title;
  padding: 1rem 2rem;
  border-radius: 10px;
  box-shadow: $cl-shadow;

  font-size: $fs-text;
  color: $cl-background;
}
</style>
