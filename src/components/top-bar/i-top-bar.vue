<template>
  <div class="flex pb-1 px-4 w-full">
    <div class="left">
      <span class="text-xs truncate">10:00 AM</span>
    </div>
    <div class="notch" />
    <div class="right">
      <span class="text-xs truncate">100 %</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});
</script>

<style lang="postcss" scoped>
.left {
  @apply text-center;
  flex-basis: 25%;
}

.notch {
  @apply ml-2 mr-2 flex-grow rounded-b-md;
  flex-basis: 50%;
  background-color: black;
}

.right {
  @apply text-center;
  flex-basis: 25%;
}
</style>
