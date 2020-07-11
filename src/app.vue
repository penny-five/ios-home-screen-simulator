<template>
  <home-screen />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import HomeScreen from './components/home-screen.vue';

export default defineComponent({
  components: {
    HomeScreen
  }
});
</script>

<style lang="postcss">
@tailwind base;
@tailwind components;
@tailwind utilities;
@import '~@fortawesome/fontawesome-free/css/all.css';
</style>
