<template>
  <button class="btn" :class="{ 'btn--accent': accent, 'btn--outline': outline }">
    <img :src="iconGenerated" alt="icon" class="btn__icon" />
    {{ text }}
  </button>
</template>

<script>
import infoIcon from '@/assets/icons/info-circle.svg'
import pasteIcon from '@/assets/icons/clipboard-text.svg'
import sendIcon from '@/assets/icons/send.svg'

export default {
  props: {
    text: String,
    type: String,
    icon: String,
    accent: Boolean,
    outline: Boolean
  },
  computed: {
    iconGenerated() {
      switch (this.icon) {
        case 'info':
          return infoIcon
          break

        case 'paste':
          return pasteIcon

        case 'send':
          return sendIcon

        default:
          return infoIcon

          break
      }
    }
  }
}
</script>

<style lang="scss">
.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;

  border-radius: 10px;
  background-color: $cl-background;
  color: $cl-accents;

  font-size: $fs-sub-text;

  border: none;

  &__icon {
    width: 25px;
    height: 25px;
  }

  &--accent {
    border: 1px solid $cl-accents;
    animation: pulse-animation 2s infinite;
  }
  &--outline {
    border: 1px solid $cl-accents;
  }

  &:hover {
    cursor: pointer;
    opacity: 0.75;
  }
}

@keyframes pulse-animation {
  0% {
    box-shadow: 0 0 0 0 $cl-accents;
  }
  100% {
    box-shadow: 0 0 0 10px transparent;
  }
}
</style>
