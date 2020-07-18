<template>
  <div class="flex px-4 w-full">
    <div class="flex justify-center items-center flex-basis-25">
      <i-status-bar-clock />
    </div>
    <div class="notch" />
    <div
      class="flex flex-row justify-center items-center text-center flex-basis-25 space-x-2"
    >
      <i-status-bar-cell-signal-strength-indicator
        :value="cellSignalStrength"
      />
      <i-status-bar-wifi-signal-strength-indicator
        :value="wifiSignalStrength"
      />
      <i-status-bar-battery-level-indicator :level="batteryLevel" />
    </div>
  </div>
</template>

<script lang="ts">
import random from 'lodash.random';
import { defineComponent, ref, onBeforeUnmount } from 'vue';

import IStatusBarBatteryLevelIndicator from './i-status-bar-battery-level-indicator.vue';
import IStatusBarClock from './i-status-bar-clock.vue';
import IStatusBarCellSignalStrengthIndicator from './i-status-bar-cell-signal-strength-indicator.vue';
import IStatusBarWifiSignalStrengthIndicator from './i-status-bar-wifi-signal-strength-indicator.vue';

export default defineComponent({
  components: {
    IStatusBarBatteryLevelIndicator,
    IStatusBarClock,
    IStatusBarCellSignalStrengthIndicator,
    IStatusBarWifiSignalStrengthIndicator
  },
  setup() {
    const batteryLevel = ref(random(60, 100));
    const cellSignalStrength = ref(1);
    const wifiSignalStrength = ref(1);

    const reduceBatteryLevel = () => {
      batteryLevel.value = Math.max(1, batteryLevel.value - 1);
    };

    const randomizeCellSignalStrength = () => {
      cellSignalStrength.value = random(1, 4);
    };

    const randomizeWifiSignalStrength = () => {
      wifiSignalStrength.value = random(1, 3);
    };

    const intervalId = setInterval(() => {
      reduceBatteryLevel();
      randomizeCellSignalStrength();
      randomizeWifiSignalStrength();
    }, 60 * 1000);

    onBeforeUnmount(() => {
      clearInterval(intervalId);
    });

    randomizeCellSignalStrength();
    randomizeWifiSignalStrength();

    return { batteryLevel, cellSignalStrength, wifiSignalStrength };
  }
});
</script>

<style lang="postcss" scoped>
.notch {
  @apply relative ml-2 mr-2 flex-grow rounded-b-md bg-black;
  flex-basis: 50%;
  min-height: 25px;

  &::after {
    @apply bg-gray-900;
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 36px;
    height: 6px;
    transform: translateY(-3px) translateX(-18px);
    border-radius: 3px;
  }

  &::before {
    @apply bg-gray-900 rounded-full opacity-75;
    content: '';
    position: absolute;
    top: 50%;
    right: 15%;
    width: 10px;
    height: 10px;
    transform: translateY(-5px) translateX(-5px);
  }
}
</style>
