<template>
  <div class="frame border-4 border-black rounded-lg shadow-lg">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});
</script>

<style lang="postcss" scoped>
.frame {
  @apply flex justify-center items-center;
  width: 315px;
  max-width: 315px;
  height: 600px;
  max-height: 600px;
}
</style>
