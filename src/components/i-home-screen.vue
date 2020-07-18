<template>
  <div
    class="flex flex-col bg-white bg-cover w-full h-full"
    :style="{ backgroundImage: 'url(assets/wallpaper.jpg)' }"
  >
    <i-status-bar />
    <i-carousel class="flex-grow">
      <i-app-grid>
        <i-app-icon
          icon="phone"
          title="Phone"
          color="white"
          :background-color="[
            theme.colors.green['400'],
            theme.colors.green['500']
          ]"
          :notification-count="80"
        />
        <i-app-icon
          icon="user"
          title="Contacts"
          color="white"
          :background-color="[
            theme.colors.green['400'],
            theme.colors.green['500']
          ]"
        />
        <i-app-icon
          icon="phone"
          title="Phone"
          :color="theme.colors.red['500']"
          background-color="white"
          :notification-count="80"
        />
        <i-app-icon
          icon="user"
          title="Contacts"
          :color="theme.colors.green['500']"
          background-color="white"
        />
        <i-app-icon
          icon="phone"
          title="Phone"
          :color="theme.colors.red['500']"
          background-color="white"
          :notification-count="80"
        />
        <i-app-icon
          icon="user"
          title="Contacts"
          :color="theme.colors.green['500']"
          background-color="white"
        />
        <i-app-icon
          icon="user"
          title="Contacts"
          :color="theme.colors.green['500']"
          background-color="white"
        />
      </i-app-grid>
      <i-app-grid>
        <i-app-icon
          icon="phone"
          title="Phone"
          :color="theme.colors.red['500']"
          background-color="white"
        />
        <i-app-icon
          icon="user"
          title="Contacts"
          :color="theme.colors.white"
          background-color="green"
        />
      </i-app-grid>
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

import IAppGrid from './app-grid/i-app-grid.vue';
import IAppIcon from './app-icon/i-app-icon.vue';
import ICarousel from './carousel/i-carousel.vue';
import IDock from './dock/i-dock.vue';
import IStatusBar from './status-bar/i-status-bar.vue';
import * as theme from '../theme';

export default defineComponent({
  components: {
    IAppGrid,
    IAppIcon,
    ICarousel,
    IDock,
    IStatusBar
  },
  setup() {
    return { theme };
  }
});
</script>
