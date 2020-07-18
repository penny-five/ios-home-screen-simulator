<template>
  <div class="flex justify-center p-3 space-x-2">
    <div
      v-for="page in pageCount"
      :key="page"
      class="w-2 h-2 rounded-full bg-gray-300 shadow-xs"
      :class="{ active: page - 1 == currentPage }"
    ></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    pageCount: {
      required: true,
      type: Number
    },
    currentPage: {
      required: true,
      type: Number
    }
  }
});
</script>

<style lang="postcss" scoped>
.active {
  @apply bg-white;
}
</style>
