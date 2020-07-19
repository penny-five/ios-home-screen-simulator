<template>
  <div class="signal">
    <div
      v-for="i in 4"
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
      validator: (value: number) => value >= 0 && value <= 4
    }
  }
});
</script>

<style lang="postcss" scoped>
.signal {
  @apply flex flex-row items-end;

  & > .level {
    @apply bg-gray-600;

    width: 3px;
    height: 10px;
    border-radius: 4px;

    &.level--active {
      @apply bg-white;
    }

    & + .level {
      margin-left: 2px;
    }

    &:nth-of-type(1) {
      height: 4px;
    }

    &:nth-of-type(2) {
      height: 6px;
    }

    &:nth-of-type(3) {
      height: 8px;
    }
  }
}
</style>
