<template>
  <div class="icon" :style="{ color, background }">
    <i class="fa" :class="`fa-${icon}`" />
    <span v-if="notificationCount > 0" class="notification-count">{{
      notificationCount
    }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue';

export default defineComponent({
  props: {
    icon: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: '#000000'
    },
    backgroundColor: {
      type: null as PropType<string | string[]>,
      default: '#FFFFFF'
    },
    notificationCount: {
      type: Number,
      default: 0
    }
  },
  setup({ backgroundColor }) {
    const background = computed(() => {
      if (backgroundColor instanceof Array) {
        return `linear-gradient(30deg, ${backgroundColor.join(',')}`;
      }
      return backgroundColor;
    });

    return {
      background
    };
  }
});
</script>

<style lang="postcss" scoped>
.icon {
  @apply relative inline-flex items-center justify-center rounded-md;
  width: 52px;
  height: 52px;

  &:hover {
    &::after {
      @apply rounded-md absolute top-0 right-0 bottom-0 left-0 z-10;
      content: '';
      background-color: #3535351f;
    }
  }

  & > .fa {
    font-size: 30px;
  }

  & > .notification-count {
    @apply absolute flex items-center justify-center rounded-full text-white select-none z-20;
    top: -8px;
    right: -8px;
    min-width: 21px;
    padding: 1px 4px;
    background-color: red;
    font-size: 0.8rem;
  }
}
</style>
