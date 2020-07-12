<template>
  <i-phone-frame>
    <i-home-screen />
  </i-phone-frame>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import IHomeScreen from './components/i-home-screen.vue';
import IPhoneFrame from './components/i-phone-frame.vue';

export default defineComponent({
  components: {
    IHomeScreen,
    IPhoneFrame
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
  @apply flex justify-center items-center flex-grow min-h-screen bg-gray-100;
}
</style>
