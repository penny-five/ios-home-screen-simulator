<template>
  <div class="flex pb-1 px-4 w-full">
    <div class="left">
      <span class="text-xs text-white font-bold truncate">10:00</span>
    </div>
    <div class="notch" />
    <div class="right">
      <span class="text-xs text-white font-bold truncate">100 %</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});
</script>

<style lang="postcss" scoped>
.left {
  @apply text-center;
  flex-basis: 25%;
}

.notch {
  @apply relative ml-2 mr-2 flex-grow rounded-b-md;
  flex-basis: 50%;
  background-color: black;

  &::after {
    @apply bg-gray-800;
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 36px;
    height: 6px;
    transform: translateY(-3px) translateX(-18px);
    border-radius: 3px;
  }
}

.right {
  @apply text-center;
  flex-basis: 25%;
}
</style>
