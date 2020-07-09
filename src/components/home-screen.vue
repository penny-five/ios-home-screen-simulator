<template>
  <div class="flex flex-col h-screen">
    <div class="h-10 w-full" />
    <carousel class="flex-grow">
      <div class="bg-red-300 w-10 h-10" />
      <div class="bg-green-300 w-10 h-10" />
    </carousel>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import Carousel from './carousel/carousel.vue';

export default defineComponent({
  components: {
    Carousel
  }
});
</script>

<style lang="postcss"></style>
