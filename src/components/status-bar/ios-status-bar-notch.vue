<template>
  <div class="notch" />
</template>

<script lang="tsx">
import { defineComponent } from 'vue';

export default defineComponent({});
</script>

<style lang="postcss" scoped>
.notch {
  @apply relative ml-2 mr-2 flex-grow rounded-b-md bg-black;

  flex-basis: 50%;
  min-height: 25px;

  &::after {
    @apply absolute bg-gray-900;

    content: '';
    top: 50%;
    left: 50%;
    width: 36px;
    height: 6px;
    border-radius: 3px;
    transform: translateY(-3px) translateX(-18px);
  }

  &::before {
    @apply absolute bg-gray-900 rounded-full opacity-75;

    content: '';
    top: 50%;
    right: 15%;
    width: 10px;
    height: 10px;
    transform: translateY(-5px) translateX(-5px);
  }
}
</style>
