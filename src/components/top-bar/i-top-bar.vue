<template>
  <div class="flex pb-1 px-4 w-full">
    <div class="text-center flex-basis-25">
      <span class="text-xs text-white font-bold truncate">10:00</span>
    </div>
    <div class="notch" />
    <div class="text-center flex-basis-25">
      <span class="text-xs text-white font-bold truncate">100 %</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});
</script>

<style lang="postcss" scoped>
.notch {
  @apply relative ml-2 mr-2 flex-grow rounded-b-md bg-black;
  flex-basis: 50%;

  &::after {
    @apply bg-gray-900;
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 36px;
    height: 6px;
    transform: translateY(-3px) translateX(-18px);
    border-radius: 3px;
  }

  &::before {
    @apply bg-gray-900 rounded-full opacity-75;
    content: '';
    position: absolute;
    top: 50%;
    right: 15%;
    width: 10px;
    height: 10px;
    transform: translateY(-5px) translateX(-5px);
  }
}
</style>
