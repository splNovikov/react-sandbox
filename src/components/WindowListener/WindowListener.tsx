import { useEffect, useLayoutEffect, useRef } from 'react';

export const WindowListener = ({
  event,
  handler,
  options,
}: {
  event: string;
  handler: EventListener;
  options?: EventListenerOptions;
}): null => {
  const ref = useRef(handler);

  useLayoutEffect(() => {
    ref.current = handler;
  }, [handler]);

  useEffect(() => {
    const fn = (arg: Event): void => ref.current(arg);

    window.addEventListener(event, fn, options);

    return () => {
      window.removeEventListener(event, fn, options);
    };
  }, [event, options]);

  return null;
};
