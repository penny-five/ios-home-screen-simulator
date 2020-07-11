<template>
  <phone-frame>
    <home-screen />
  </phone-frame>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import HomeScreen from './components/home-screen.vue';
import PhoneFrame from './components/phone-frame.vue';

export default defineComponent({
  components: {
    HomeScreen,
    PhoneFrame
  }
});
</script>

<style lang="postcss">
@tailwind base;
@tailwind components;
@tailwind utilities;
@import '~@fortawesome/fontawesome-free/css/all.css';

#app {
  @apply flex justify-center items-center flex-grow min-h-screen bg-gray-300;
}
</style>
