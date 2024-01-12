import { FC, useRef, useState, memo } from 'react';

import InputWrapper from '../InputWrapper/InputWrapper';

import './InnerRerenderCounter.scss';

const InnerRerenderCounter: FC = memo(() => {
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
      <br />
      <InputWrapper />
    </div>
  );
});

export default InnerRerenderCounter;
