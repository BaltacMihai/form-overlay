<template>
  <header class="logo">
    <img src="./../../assets/logo.svg" alt="logo_image" class="logo_image" />
    <h1 class="logo_title">Form Overlay</h1>
  </header>
</template>

<script>
export default {}
</script>

<style lang="scss">
.logo {
  display: flex;
  align-items: center;
  gap: 1rem;
  box-shadow: $cl-shadow;

  &_image {
    width: 40px;
  }

  &_title {
    color: $cl-title;
    letter-spacing: 1px;
  }
}
</style>
