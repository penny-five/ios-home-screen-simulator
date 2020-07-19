import { onBeforeUnmount } from 'vue';

/**
 * Provides utility around `#setInterval`.
 *
 * Automatically cancels the timer upon component unmount.
 *
 * @param cb Callback function
 * @param intervalMs Interval in milliseconds
 * @param invokeImmediately Should the callback function be invoked immediately
 */
export const useInterval = (
  cb: () => void,
  intervalMs: number,
  invokeImmediately = false
) => {
  const intervalId = setInterval(cb, intervalMs);

  onBeforeUnmount(() => {
    clearInterval(intervalId);
  });

  if (invokeImmediately) {
    cb();
  }
};
