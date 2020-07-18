<template>
  <div class="app-icon">
    <i class="icon fa" :class="`fa-${icon}`" :style="{ color, background }" />
    <span v-if="notificationCount > 0" class="notification-count">{{
      notificationCount
    }}</span>
    <div v-if="title" class="title">
      <span class="truncate">{{ title }}</span>
    </div>
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
    title: {
      type: String,
      required: false,
      default: null
    },
    color: {
      type: String,
      default: '#000000'
    },
    backgroundColor: {
      type: (null as unknown) as PropType<string | string[]>,
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
.app-icon {
  @apply relative inline-flex flex-col items-center justify-center max-w-full;

  & > .icon {
    @apply relative inline-flex flex-col items-center justify-center rounded-md;
    font-size: 30px;
    width: 48px;
    height: 48px;

    &:hover {
      &::after {
        @apply rounded-md absolute top-0 right-0 bottom-0 left-0 z-10;
        content: '';
        background-color: #3535351f;
      }
    }
  }

  & > .title {
    @apply inline-flex text-white text-sm truncate max-w-full select-none font-bold;
    text-shadow: 0 0 4px rgba(0, 0, 0, 0.4);
  }

  & > .notification-count {
    @apply absolute flex items-center justify-center rounded-full text-white select-none bg-red-600 z-20;
    top: -8px;
    right: -8px;
    min-width: 21px;
    padding: 1px 4px;
    font-size: 0.8rem;
  }
}
</style>
