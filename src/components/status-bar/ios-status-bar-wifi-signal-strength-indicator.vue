<template>
  <div class="wifi">
    <div
      v-for="i in 3"
      :key="i"
      class="level"
      :class="{ 'level--active': value >= i }"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    value: {
      type: Number,
      required: true,
      validator: (value: number) => value >= 0 && value <= 3
    }
  }
});
</script>

<style lang="postcss" scoped>
.wifi {
  @apply relative;

  width: 16px;
  height: 16px;

  & > .level {
    @apply absolute border-gray-600 rounded-full bottom-0 left-0;

    width: 10px;
    height: 10px;
    border-bottom-color: transparent;
    border-left-color: transparent;
    border-right-color: transparent;

    &.level--active {
      border-top-color: white;
    }

    & + .level {
      margin-left: 2px;
    }

    &:nth-of-type(1) {
      width: 6px;
      height: 6px;
      bottom: -1px;
      left: 5px;
      border-width: 2px;
    }

    &:nth-of-type(2) {
      width: 14px;
      height: 14px;
      bottom: -5px;
      left: -1px;
      border-width: 2px;
    }

    &:nth-of-type(3) {
      width: 22px;
      height: 22px;
      bottom: -8px;
      left: -5px;
      border-width: 3px;
    }
  }
}
</style>
