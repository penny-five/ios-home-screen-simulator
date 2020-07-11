<template>
  <div class="flex flex-col h-screen">
    <div class="h-10 w-full" />
    <carousel class="flex-grow">
      <div class="bg-red-300 w-full h-full" />
      <div class="bg-green-300 w-full h-full" />
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
