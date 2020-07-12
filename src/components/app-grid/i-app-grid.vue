<script lang="tsx">
import { h, defineComponent } from 'vue';

const GRID_MAX_ITEM_COUNT = 4 * 5;

export default defineComponent({
  setup(props, { slots }) {
    const defaultSlot = slots.default;

    if (defaultSlot) {
      if (defaultSlot().length > GRID_MAX_ITEM_COUNT) {
        throw new Error(
          `Too many items added to App Grid: ${defaultSlot().length}`
        );
      }

      return () => (
        <div class="app-grid">
          {defaultSlot().map(el => (
            <div class="app-grid-item">{el}</div>
          ))}
        </div>
      );
    }

    return () => <div />;
  }
});
</script>

<style lang="postcss">
.app-grid {
  @apply flex flex-row flex-wrap overflow-y-hidden pt-6 pb-2 px-1;

  & > .app-grid-item {
    @apply min-w-0 flex items-center justify-center mb-3 px-1;
    flex-basis: 25%;
  }
}
</style>
