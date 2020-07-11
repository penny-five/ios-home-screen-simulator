<script lang="tsx">
import times from 'lodash.times';
import { defineComponent, h } from 'vue';

const DOCK_MAX_ICON_COUNT = 4;

export default defineComponent({
  setup(props, { slots }) {
    const defaultSlot = slots.default;

    if (defaultSlot) {
      if (defaultSlot().length > DOCK_MAX_ICON_COUNT) {
        throw new Error(
          `Too many items added to Dock: ${defaultSlot().length}`
        );
      }

      return () => (
        <div class="flex flex-row relative bg-gray-400 bg-opacity-75 rounded-lg m-2 p-4">
          {defaultSlot().map(el => (
            <div class="flex-1">{el}</div>
          ))}
          {times(DOCK_MAX_ICON_COUNT - defaultSlot().length, () => (
            <div class="flex-1" />
          ))}
        </div>
      );
    }

    return () => <div />;
  }
});
</script>
