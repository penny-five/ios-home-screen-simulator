<script lang="tsx">
import { defineComponent, h } from 'vue';

export default defineComponent({
  setup(props, { slots }) {
    const defaultSlot = slots.default;

    const onClick = () => {
      console.log('click');
    };

    if (defaultSlot) {
      return () => (
        <div class="carousel" onClick={() => onClick()}>
          {defaultSlot().map((el, index) => (
            <div
              class="carousel-page"
              style={{ transform: `translateX(${index * 50}px)` }}
            >
              {el}
            </div>
          ))}
        </div>
      );
    }
  }
});
</script>

<style lang="postcss">
.carousel {
  position: relative;
  width: 100%;
  overflow-x: hidden;
}

.carousel .carousel-page {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
