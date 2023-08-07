<template>
  <div class="navbar">
    <div class="navbar__left">
      <img src="./../../assets/logo.svg" alt="Logo" class="navbar__logo" />
      <div class="navbar__description">
        <h1 class="navbar__title">Form Overview</h1>
        <p class="navbar__version">v. 1.0.0</p>
      </div>
    </div>

    <Btn text="How to use" type="secondary" icon="info" accent />
  </div>
</template>

<script>
import Btn from '@/components/atoms/Btn.vue'
export default {
  components: {
    Btn
  }
}
</script>

<style lang="scss">
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  box-shadow: $cl-shadow;

  padding: $global-paddingY-size $global-paddingX-size;

  $nav-height: 90px;

  height: calc($nav-height - $global-paddingY-size * 2);

  &__left {
    display: flex;
    align-items: center;
    gap: 1rem;

    .navbar__logo {
      width: 40px;
    }

    .navbar__description {
      display: flex;
      flex-direction: column;
      .navbar__title {
        color: $cl-title;
        letter-spacing: 1px;
      }
      .navbar__version {
        color: $cl-accents;
        font-weight: 700;
      }
    }
  }
}
</style>
