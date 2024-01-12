import { FC, useRef, useState } from 'react';

import './RerenderCounter.scss';
import InnerRerenderCounter from './InnerRerenderCounter/InnerRerenderCounter';

const RerenderCounter: FC = () => {
  const [count, setCount] = useState(0);
  const renderCounter = useRef(0);

  renderCounter.current += 1;

  const updateState = (): void => setCount(count + 1);

  return (
    <div className="RerenderCounter">
      Render Count: <span>{renderCounter.current}</span>
      <br />
      <button type="button" onClick={updateState}>
        State Update
      </button>
      <InnerRerenderCounter />
    </div>
  );
};

export default RerenderCounter;
