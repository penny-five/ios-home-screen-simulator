<template>
  <div
    class="flex flex-col bg-white bg-cover w-full h-full"
    :style="{ backgroundImage: `url(${wallpaper})` }"
  >
    <ios-status-bar />
    <ios-carousel class="flex-grow">
      <ios-app-grid>
        <ios-app-icon
          icon="phone"
          title="Phone"
          color="white"
          :background-color="[
            theme.colors.green['400'],
            theme.colors.green['500']
          ]"
          :notification-count="80"
        />
        <ios-app-icon
          icon="user"
          title="Contacts"
          color="white"
          :background-color="[
            theme.colors.green['400'],
            theme.colors.green['500']
          ]"
        />
        <ios-app-icon
          icon="phone"
          title="Phone"
          :color="theme.colors.red['500']"
          background-color="white"
          :notification-count="80"
        />
        <ios-app-icon
          icon="user"
          title="Contacts"
          :color="theme.colors.green['500']"
          background-color="white"
        />
        <ios-app-icon
          icon="phone"
          title="Phone"
          :color="theme.colors.red['500']"
          background-color="white"
          :notification-count="80"
        />
        <ios-app-icon
          icon="user"
          title="Contacts"
          :color="theme.colors.green['500']"
          background-color="white"
        />
        <ios-app-icon
          icon="user"
          title="Contacts"
          :color="theme.colors.green['500']"
          background-color="white"
        />
      </ios-app-grid>
      <ios-app-grid>
        <ios-app-icon
          icon="phone"
          title="Phone"
          :color="theme.colors.red['500']"
          background-color="white"
        />
        <ios-app-icon
          icon="user"
          title="Contacts"
          :color="theme.colors.white"
          background-color="green"
        />
      </ios-app-grid>
    </ios-carousel>
    <ios-dock>
      <ios-app-icon
        icon="phone"
        :color="theme.colors.red['500']"
        background-color="white"
      />
      <ios-app-icon
        icon="user"
        :color="theme.colors.green['500']"
        background-color="white"
        :notification-count="30"
      />
    </ios-dock>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import IosAppGrid from './app-grid/ios-app-grid.vue';
import IosAppIcon from './app-icon/ios-app-icon.vue';
import IosCarousel from './carousel/ios-carousel.vue';
import IosDock from './dock/ios-dock.vue';
import IosStatusBar from './status-bar/ios-status-bar.vue';
import * as theme from '../theme';
import wallpaper from '@assets/wallpaper.jpg';

export default defineComponent({
  components: {
    IosAppGrid,
    IosAppIcon,
    IosCarousel,
    IosDock,
    IosStatusBar
  },
  setup() {
    return { theme, wallpaper };
  }
});
</script>
