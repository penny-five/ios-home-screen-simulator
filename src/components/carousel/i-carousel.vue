<script lang="tsx">
import BezierEasing from 'bezier-easing';
import clamp from 'lodash.clamp';
import { defineComponent, ref, computed, onMounted, h } from 'vue';

import ICarouselPagination from './i-carousel-pagination.vue';

export default defineComponent({
  setup(props, { slots }) {
    const defaultSlot = slots.default;

    const carouselRef = ref<Element>();
    const carouselWidth = ref(0);
    const pageCount = computed(() => defaultSlot?.().length ?? 0);
    const currentPage = ref(0);

    const swipeOffset = ref(0);
    let swipeStartPosition = 0;
    let swipeIsInProgress = false;
    let swipeIsSettling = false;

    onMounted(() => {
      carouselWidth.value =
        carouselRef?.value?.getBoundingClientRect().width ?? 0;
    });

    const getScreenXPosition = (payload: TouchEvent | PointerEvent) => {
      if (payload instanceof TouchEvent) {
        return payload.touches[0].screenX;
      }
      return payload.screenX;
    };

    const onSwipeStart = (payload: TouchEvent | PointerEvent) => {
      if (swipeIsSettling || swipeIsInProgress) return;

      swipeStartPosition = getScreenXPosition(payload);
      swipeIsInProgress = true;
    };

    const onSwipeMove = (payload: TouchEvent | PointerEvent) => {
      if (swipeIsSettling || !swipeIsInProgress) return;

      swipeOffset.value = getScreenXPosition(payload) - swipeStartPosition;
    };

    const onSwipeEnd = () => {
      if (swipeIsSettling || !swipeIsInProgress) return;

      const animationDuration =
        Math.abs(swipeOffset.value / carouselWidth.value) * 500;
      const animationStartTime = new Date().getTime();
      const animationEndTime = animationStartTime + animationDuration;
      const animationStartPosition = swipeOffset.value;

      let targetPage = currentPage.value;

      const shouldChangePage =
        Math.abs(swipeOffset.value) > 0.5 * carouselWidth.value;

      if (shouldChangePage) {
        targetPage += swipeOffset.value < 0 ? 1 : -1;
        targetPage = clamp(targetPage, 0, pageCount.value - 1);
      }

      let animationEndPosition: number;

      if (targetPage > currentPage.value) {
        animationEndPosition = -carouselWidth.value;
      } else if (targetPage < currentPage.value) {
        animationEndPosition = carouselWidth.value;
      } else {
        animationEndPosition = 0;
      }

      const easingFn = BezierEasing(0, 0, 0.5, 0.8);

      const updateSwipeSettling = () => {
        requestAnimationFrame(() => {
          const currentTime = new Date().getTime();

          const progress =
            (currentTime - animationStartTime) /
            (animationEndTime - animationStartTime);

          if (progress >= 1.0) {
            currentPage.value = targetPage;
            swipeOffset.value = 0;
            swipeIsSettling = false;
            return;
          }

          swipeOffset.value =
            animationStartPosition +
            easingFn(progress) *
              (animationEndPosition - animationStartPosition);

          updateSwipeSettling();
        });
      };

      swipeIsInProgress = false;
      swipeIsSettling = true;

      updateSwipeSettling();
    };

    const calculatePageOffset = (index: number) =>
      carouselWidth.value * (index - currentPage.value) + swipeOffset.value;

    if (defaultSlot) {
      return () => (
        <div
          ref={carouselRef}
          class="flex flex-col relative w-full overflow-x-hidden"
          onTouchstart={onSwipeStart}
          onTouchmove={onSwipeMove}
          onTouchend={onSwipeEnd}
          onPointerdown={onSwipeStart}
          onPointermove={onSwipeMove}
          onPointerup={onSwipeEnd}
          onPointerleave={onSwipeEnd}
          onPointerout={onSwipeEnd}
          onPointercancel={onSwipeEnd}
        >
          <div class="relative flex-grow">
            {defaultSlot().map((el, index) => (
              <div
                class="absolute top-0 bottom-0 left-0 w-full"
                style={{
                  left: `${calculatePageOffset(index)}px`
                }}
              >
                {el}
              </div>
            ))}
          </div>
          <ICarouselPagination
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
