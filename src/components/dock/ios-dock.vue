<script lang="tsx">
import { defineComponent, h } from 'vue';

const DOCK_MAX_ITEM_COUNT = 4;

export default defineComponent({
  setup(props, { slots }) {
    const defaultSlot = slots.default;

    if (defaultSlot) {
      if (defaultSlot().length > DOCK_MAX_ITEM_COUNT) {
        throw new Error(
          `Too many items added to Dock: ${defaultSlot().length}`
        );
      }

      return () => (
        <div class="flex flex-row relative bg-gray-400 bg-opacity-50 rounded-lg mt-0 m-1 p-3">
          {defaultSlot().map(el => (
            <div class="min-w-0 flex-basis-25">{el}</div>
          ))}
        </div>
      );
    }

    return () => <div />;
  }
});
</script>
