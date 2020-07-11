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
  width: 315px;
  max-width: 315px;
  height: 600px;
  max-height: 600px;

  border: 5px solid black;
  box-shadow: 0 0 0 6px #353535;
}
</style>
