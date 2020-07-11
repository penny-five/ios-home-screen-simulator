<template>
  <div class="icon" :style="{ color, background }">
    <i class="fa" :class="`fa-${icon}`" />
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

<style lang="postcss" scoped>
.icon {
  @apply inline-flex items-center justify-center rounded-md;
  width: 56px;
  height: 56px;
}

.icon .fa {
  font-size: 32px;
}
</style>
