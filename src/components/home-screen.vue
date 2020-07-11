<template>
  <div class="flex flex-col h-screen">
    <div class="h-10 w-full" />
    <i-carousel class="flex-grow">
      <div class="bg-red-300 w-full h-full" />
      <div class="bg-green-300 w-full h-full" />
    </i-carousel>
    <i-dock>
      <i-icon icon="phone" color="red" background-color="white" />
      <i-icon icon="user" color="green" background-color="white" />
    </i-dock>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import ICarousel from './carousel/i-carousel.vue';
import IDock from './dock/i-dock.vue';
import IIcon from './icon/i-icon.vue';

export default defineComponent({
  components: {
    ICarousel,
    IDock,
    IIcon
  }
});
</script>
