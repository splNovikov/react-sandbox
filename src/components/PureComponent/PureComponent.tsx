import React, { FC, useEffect, useState } from "react";

const PureComponent: FC = () => {
  const [count, setCount] = useState(0);

  // '' - каждое изменение состояние
  // [] - один раз, как didMount
  // [param] - watch params
  useEffect(() => console.log("hi"), [count]);

  const handleClick = (): void => {
    setCount((prevState) => prevState + 1);
    console.log(count);
  };

  console.log(count);

  return (
    <div className="PureComponent">
      <div>PureComponent</div>
      <div>Count: {count}</div>
      <div>
        <button type="button" onClick={handleClick}>
          Increase
        </button>
      </div>
    </div>
  );
};

export default PureComponent;
