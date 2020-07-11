<template>
  <div
    class="flex flex-col bg-white bg-cover w-full h-full"
    :style="{ backgroundImage }"
  >
    <i-top-bar />
    <i-carousel class="flex-grow">
      <div class="bg-red-300 w-full h-full" />
      <div class="bg-green-300 w-full h-full" />
    </i-carousel>
    <i-dock>
      <i-app-icon
        icon="phone"
        :color="theme.colors.red['500']"
        background-color="white"
      />
      <i-app-icon
        icon="user"
        :color="theme.colors.green['500']"
        background-color="white"
        :notification-count="30"
      />
    </i-dock>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import IAppIcon from './app-icon/i-app-icon.vue';
import ICarousel from './carousel/i-carousel.vue';
import IDock from './dock/i-dock.vue';
import ITopBar from './top-bar/i-top-bar.vue';
import * as theme from '../theme';

import wallpaper from '../../assets/wallpaper.jpg';

export default defineComponent({
  components: {
    IAppIcon,
    ICarousel,
    IDock,
    ITopBar
  },
  setup() {
    const backgroundImage = `url(${wallpaper}`;
    return { theme, backgroundImage };
  }
});
</script>
