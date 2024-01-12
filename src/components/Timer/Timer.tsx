import { ReactElement, useEffect, useState } from 'react';

function Timer(): ReactElement {
  const [val, setVal] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVal((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <div>{val}</div>;
}

export default Timer;
