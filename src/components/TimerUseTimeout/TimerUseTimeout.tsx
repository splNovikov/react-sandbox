import { ReactElement, useCallback, useEffect, useRef, useState } from 'react';

function TimerUseTimeout(): ReactElement {
  const [val, setVal] = useState(0);
  const timerId = useRef(0 as unknown as ReturnType<typeof setTimeout>);

  const doStuff = useCallback(
    () =>
      setTimeout(() => {
        setVal((prev) => prev + 1);
        timerId.current = doStuff();
      }, 1000),
    [],
  );

  useEffect(() => {
    timerId.current = doStuff();

    return () => clearTimeout(timerId.current);
  }, [doStuff]);

  return <div>{val}</div>;
}

export default TimerUseTimeout;
