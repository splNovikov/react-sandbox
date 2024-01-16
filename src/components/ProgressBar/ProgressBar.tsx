import { ReactElement } from "react";

import "./ProgressBar.scss";

type ProgressBarProps = {
  color?: string;
  value: number;
};

const ProgressBar = ({ color, value }: ProgressBarProps): ReactElement => {
  const innerStyle = {
    backgroundColor: color,
    width: value < 0 ? 0 : `${value}%`,
  };

  return (
    <div className="progress-bar">
      <div className="wrapper">
        <div className="inner" style={innerStyle}></div>
      </div>
      <div className="label">{value}%</div>
    </div>
  );
};

export default ProgressBar;
