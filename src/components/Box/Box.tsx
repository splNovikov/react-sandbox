import { FC, useRef, useState } from 'react';

import colors from './colors';
import { getRandomColor } from './helpers';

import './Box.scss';

const Box: FC = () => {
  const interval = useRef();
  const [color, setColor] = useState(getRandomColor(colors));

  const handleBoxClick = (): void => {
    if (interval.current) {
      clearInterval(interval.current);
      return;
    }

    // @ts-ignore
    interval.current = setInterval(() => {
      setColor(getRandomColor(colors));
    }, 500);
  };

  return (
    <div className="Box" onClick={handleBoxClick} style={{ backgroundColor: color }}>
      Box
    </div>
  );
};

export default Box;
