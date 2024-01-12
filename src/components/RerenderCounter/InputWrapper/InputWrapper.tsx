import { FC, memo, useRef, useState } from 'react';

import './InputWrapper.scss';

const InputWrapper: FC = memo(() => {
  const renderCounter = useRef(0);
  const [val, setValue] = useState('');

  renderCounter.current += 1;

  const updateInputValue = (e: any): void => {
    setValue(e?.currentTarget?.value);
  };

  return (
    <div className="InputWrapper">
      Render Count: <span>{renderCounter.current}</span>
      <br />
      <input type="text" onChange={updateInputValue} value={val} />
    </div>
  );
});

export default InputWrapper;
