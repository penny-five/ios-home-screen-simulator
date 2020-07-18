<script lang="tsx">
import BezierEasing from 'bezier-easing';
import clamp from 'lodash.clamp';
import { defineComponent, ref, computed, onMounted, h } from 'vue';

import IosCarouselPagination from './ios-carousel-pagination.vue';

export default defineComponent({
  setup(props, { slots }) {
    const defaultSlot = slots.default;

    const carouselRef = ref<Element>();
    const carouselWidth = ref(0);
    const pageCount = computed(() => defaultSlot?.().length ?? 0);
    const currentPage = ref(0);

    const swipeEasingFn = BezierEasing(0, 0, 0.5, 0.8);
    const swipeOffset = ref(0);
    let swipeStartPosition = 0;
    let swipeIsInProgress = false;
    let swipeIsSettling = false;

    onMounted(() => {
      carouselWidth.value =
        carouselRef?.value?.getBoundingClientRect().width ?? 0;
    });

    const onSwipeStart = (payload: PointerEvent) => {
      if (swipeIsSettling || swipeIsInProgress) return;

      swipeStartPosition = payload.screenX;
      swipeIsInProgress = true;
    };

    const onSwipeMove = (payload: PointerEvent) => {
      if (swipeIsSettling || !swipeIsInProgress) return;

      swipeOffset.value = payload.screenX - swipeStartPosition;
    };

    const onSwipeEnd = () => {
      if (swipeIsSettling || !swipeIsInProgress) return;

      const animationDuration =
        Math.abs(swipeOffset.value / carouselWidth.value) * 500;
      const animationStartTime = new Date().getTime();
      const animationEndTime = animationStartTime + animationDuration;
      const animationStartPosition = swipeOffset.value;

      let nextPage = currentPage.value;

      const shouldChangePage =
        Math.abs(swipeOffset.value) > 0.5 * carouselWidth.value;

      if (shouldChangePage) {
        nextPage += swipeOffset.value < 0 ? 1 : -1;
        nextPage = clamp(nextPage, 0, pageCount.value - 1);
      }

      let animationEndPosition: number;

      if (nextPage > currentPage.value) {
        animationEndPosition = -carouselWidth.value;
      } else if (nextPage < currentPage.value) {
        animationEndPosition = carouselWidth.value;
      } else {
        animationEndPosition = 0;
      }

      const updateSwipeSettling = () => {
        requestAnimationFrame(() => {
          const currentTime = new Date().getTime();

          const progress =
            (currentTime - animationStartTime) /
            (animationEndTime - animationStartTime);

          if (progress >= 1.0) {
            currentPage.value = nextPage;
            swipeOffset.value = 0;
            swipeIsSettling = false;
            return;
          }

          swipeOffset.value =
            animationStartPosition +
            swipeEasingFn(progress) *
              (animationEndPosition - animationStartPosition);

          updateSwipeSettling();
        });
      };

      swipeIsInProgress = false;
      swipeIsSettling = true;

      updateSwipeSettling();
    };

    const getPageOffset = (index: number) =>
      carouselWidth.value * (index - currentPage.value) + swipeOffset.value;

    if (defaultSlot) {
      return () => (
        <div
          ref={carouselRef}
          class="flex flex-col relative w-full overflow-x-hidden touch-action-none"
          onPointerdown={onSwipeStart}
          onPointermove={onSwipeMove}
          onPointerup={onSwipeEnd}
          onPointerleave={onSwipeEnd}
          onPointercancel={onSwipeEnd}
        >
          <div class="relative flex-grow">
            {defaultSlot().map((el, index) => (
              <div
                class="absolute top-0 bottom-0 left-0 w-full"
                style={{
                  left: `${getPageOffset(index)}px`
                }}
              >
                {el}
              </div>
            ))}
          </div>
          <IosCarouselPagination
            currentPage={currentPage.value}
            pageCount={pageCount.value}
          />
        </div>
      );
    }

    return () => <div />;
  }
});
</script>
