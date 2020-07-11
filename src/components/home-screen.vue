<template>
  <div class="flex flex-col rounded-lg bg-white w-full h-full">
    <i-top-bar />
    <i-carousel class="flex-grow">
      <div class="bg-red-300 w-full h-full" />
      <div class="bg-green-300 w-full h-full" />
    </i-carousel>
    <i-dock>
      <i-icon
        icon="phone"
        :color="theme.colors.red['500']"
        background-color="white"
      />
      <i-icon
        icon="user"
        :color="theme.colors.green['500']"
        background-color="white"
      />
    </i-dock>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import ICarousel from './carousel/i-carousel.vue';
import IDock from './dock/i-dock.vue';
import IIcon from './icon/i-icon.vue';
import ITopBar from './top-bar/i-top-bar.vue';
import * as theme from '../theme';

export default defineComponent({
  components: {
    ICarousel,
    IDock,
    IIcon,
    ITopBar
  },
  setup() {
    return { theme };
  }
});
</script>
