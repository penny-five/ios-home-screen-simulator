<template>
  <div class="frame">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});
</script>

<style lang="postcss" scoped>
.frame {
  @apply relative rounded-lg overflow-hidden;

  --width: 315px;
  --height: 600px;

  width: var(--width);
  max-width: var(--width);
  height: var(--height);
  max-height: var(--height);
  border: 5px solid black;
  box-shadow: 0 0 0 6px #353535;

  /*
  Screen glare effect.
  */
  &::after {
    @apply absolute top-0 right-0 bottom-0 left-0 pointer-events-none bg-cover;

    content: '';
    background: linear-gradient(
      214deg,
      rgba(255, 255, 255, 0.15) 0%,
      rgba(255, 255, 255, 0.13) 35%,
      rgba(255, 255, 255, 0) 100%
    );
  }
}
</style>
