<template>
  <div
    class="inline-flex items-center justify-center w-16 h-16 bg-white rounded-lg"
    :style="{ color, background }"
  >
    <i class="fa text-4xl" :class="`fa-${icon}`" />
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
