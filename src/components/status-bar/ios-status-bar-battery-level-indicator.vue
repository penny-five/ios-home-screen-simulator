<template>
  <div class="battery">
    <div
      class="level"
      :class="{ 'level--alarming': level <= 20 }"
      :style="{ transform: `scaleX(${level / 100})` }"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    level: {
      type: Number,
      default: 100,
      validator: (level: number) => level >= 0 && level <= 100
    }
  }
});
</script>

<style lang="postcss" scoped>
.battery {
  @apply relative border-gray-600;

  width: 20px;
  height: 12px;
  border-width: 1px;
  border-radius: 4px;

  &::after {
    @apply absolute bg-gray-600;

    content: '';
    right: -4px;
    top: 3px;
    height: 4px;
    width: 2px;
    border-radius: 3px;
  }

  & > .level {
    @apply absolute bg-white origin-left;

    top: 2px;
    right: 2px;
    bottom: 2px;
    left: 2px;
    border-radius: 1px;

    &.level--alarming {
      @apply bg-red-700;
    }
  }
}
</style>
