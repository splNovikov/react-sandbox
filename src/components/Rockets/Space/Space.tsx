import { ReactElement, RefObject, useEffect, useRef, useState } from 'react';

import './Space.scss';

// import Rocket from '../Rocket/Rocket';

type Rocket = { id: number };
const rockets: Rocket[] = [];
for (let i = 0; i < 150; i += 1) {
  rockets.push({ id: i });
}

// type StartPoint = { id: number };

const Space = (): ReactElement => {
  const rocketRef: RefObject<HTMLDivElement> = useRef(null);
  const [rocketY, setRocketY] = useState(window.innerHeight);

  const start = (): void => {
    const interval = setInterval(() => {
      setRocketY((v) => {
        if (v < 0) {
          clearInterval(interval);
        }

        return v - 5;
      });
    }, 10);
  };

  const onResize = (): void => {
    console.log(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <div className="space">
      <button type="button" onClick={start}>
        Start
      </button>
      {rockets.map((rocket) => (
        <div ref={rocketRef} className="rocket" style={{ top: rocketY, left: rocket.id * 10 }} key={rocket.id} />
      ))}
    </div>
  );
};

export default Space;
