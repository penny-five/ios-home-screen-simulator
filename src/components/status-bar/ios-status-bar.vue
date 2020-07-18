<template>
  <div class="flex px-4 w-full">
    <div class="flex justify-center items-center flex-basis-25">
      <ios-status-bar-clock />
    </div>
    <ios-status-bar-notch />
    <div
      class="flex flex-row justify-center items-center text-center flex-basis-25 space-x-2"
    >
      <ios-status-bar-cell-signal-strength-indicator
        :value="cellSignalStrength"
      />
      <ios-status-bar-wifi-signal-strength-indicator
        :value="wifiSignalStrength"
      />
      <ios-status-bar-battery-level-indicator :level="batteryLevel" />
    </div>
  </div>
</template>

<script lang="ts">
import random from 'lodash.random';
import { defineComponent, ref } from 'vue';

import { useInterval } from '../../composables/interval';
import IosStatusBarBatteryLevelIndicator from './ios-status-bar-battery-level-indicator.vue';
import IosStatusBarClock from './ios-status-bar-clock.vue';
import IosStatusBarCellSignalStrengthIndicator from './ios-status-bar-cell-signal-strength-indicator.vue';
import IosStatusBarNotch from './ios-status-bar-notch.vue';
import IosStatusBarWifiSignalStrengthIndicator from './ios-status-bar-wifi-signal-strength-indicator.vue';

export default defineComponent({
  components: {
    IosStatusBarBatteryLevelIndicator,
    IosStatusBarClock,
    IosStatusBarCellSignalStrengthIndicator,
    IosStatusBarNotch,
    IosStatusBarWifiSignalStrengthIndicator
  },
  setup() {
    const batteryLevel = ref(random(60, 100));
    const cellSignalStrength = ref(1);
    const wifiSignalStrength = ref(1);

    const decreaseBatteryLevel = () => {
      batteryLevel.value = Math.max(1, batteryLevel.value - 1);
    };

    const randomizeCellSignalStrength = () => {
      cellSignalStrength.value = random(1, 4);
    };

    const randomizeWifiSignalStrength = () => {
      wifiSignalStrength.value = random(1, 3);
    };

    useInterval(decreaseBatteryLevel, 60 * 1000);
    useInterval(randomizeCellSignalStrength, 30 * 1000, true);
    useInterval(randomizeWifiSignalStrength, 30 * 1000, true);

    return { batteryLevel, cellSignalStrength, wifiSignalStrength };
  }
});
</script>
