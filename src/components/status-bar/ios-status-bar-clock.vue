<template>
  <span class="text-xs text-white font-bold truncate">{{ formattedTime }}</span>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';

import { useInterval } from '../../composables/interval';

export default defineComponent({
  setup() {
    const time = ref(new Date());

    const formattedTime = computed(() => {
      const hours = time.value.getHours();
      const minutes = time.value.getMinutes();
      return `${hours}.${minutes < 10 ? '0' + minutes : minutes}`;
    });

    useInterval(() => {
      time.value = new Date();
    }, 1000);

    return { formattedTime };
  }
});
</script>
