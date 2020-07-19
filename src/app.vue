<template>
  <ios-phone-frame>
    <ios-home-screen />
  </ios-phone-frame>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import IosHomeScreen from './components/ios-home-screen.vue';
import IosPhoneFrame from './components/ios-phone-frame.vue';

export default defineComponent({
  components: {
    IosHomeScreen,
    IosPhoneFrame
  }
});
</script>

<style lang="postcss">
@tailwind base;
@tailwind components;
@tailwind utilities;

@import '~@fortawesome/fontawesome-free/css/all.css';
@import '../assets/css/fonts.css';
@import '../assets/css/utilities.css';

#app {
  @apply flex justify-center items-center flex-grow min-h-screen bg-gray-100 select-none;
}
</style>
