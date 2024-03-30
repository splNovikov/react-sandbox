import { useCallback, useRef } from "react";
export const useDebounce = (cb: any, ms = 1000) => {
  const timer = useRef();

  return useCallback(
    function (...args: any[]) {
      if (timer.current) {
        // @ts-ignore
        clearTimeout(timer.current);
      }

      // @ts-ignore
      timer.current = setTimeout(() => cb(...args), ms);
    },
    [cb, ms]
  );
};
