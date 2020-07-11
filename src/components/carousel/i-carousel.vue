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
    const pageCount = computed(() => defaultSlot().length);
    const currentPage = ref(0);

    const swipeOffset = ref(0);
    const swipeStartPosition = ref<number>(null);
    const swipeIsSettling = ref(false);

    onMounted(() => {
      carouselWidth.value = carouselRef.value.getBoundingClientRect().width;
    });

    const onTouchStart = (payload: TouchEvent) => {
      if (swipeIsSettling.value) return;

      swipeStartPosition.value = payload.touches[0].screenX;
    };

    const onTouchMove = (payload: TouchEvent) => {
      if (swipeIsSettling.value) return;

      swipeOffset.value = payload.touches[0].screenX - swipeStartPosition.value;
    };

    const onTouchEnd = () => {
      if (swipeIsSettling.value) return;

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
            swipeIsSettling.value = false;
            return;
          }

          swipeOffset.value =
            animationStartPosition +
            easingFn(progress) *
              (animationEndPosition - animationStartPosition);

          updateSwipeSettling();
        });
      };

      swipeIsSettling.value = true;

      updateSwipeSettling();
    };

    const calculatePageOffset = (index: number) =>
      carouselWidth.value * (index - currentPage.value) + swipeOffset.value;

    if (defaultSlot) {
      return () => (
        <div
          ref={carouselRef}
          class="flex flex-col relative w-full overflow-x-hidden"
          onTouchstart={onTouchStart}
          onTouchmove={onTouchMove}
          onTouchend={onTouchEnd}
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
