<template>
  <div class="card">
    <div class="card__header">
      <p class="card__header__title">{{ title }}</p>
      <div class="card__header__actions">
        <slot name="actions"></slot>
      </div>
    </div>
    <div class="card__body">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String
  }
}
</script>
<style lang="scss">
.card {
  display: flex;
  flex-direction: column;
  background-color: $cl-primary;
  border-radius: 20px;

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;

    box-shadow: $cl-shadow;

    z-index: 1;

    &__title {
      font-size: $fs-text;
      color: $cl-accents;
    }
  }

  &__body {
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;

    padding-right: 10px;
    padding-left: 10px;

    position: relative;
    overflow: auto;

    &::-webkit-scrollbar,
    ::-webkit-scrollbar {
      $_size: 7.5px;
      width: $_size;
      height: $_size;

      &-track {
        background: lighten($color: $cl-background, $amount: 15);
      }
      &-thumb {
        background: lighten($color: $cl-primary, $amount: 15);
        &:hover {
          background: lighten($color: $cl-primary, $amount: 20);
        }
      }

      &-corner {
        background-color: transparent;
      }
    }
  }
}
</style>
