import { onBeforeUnmount } from 'vue';

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
