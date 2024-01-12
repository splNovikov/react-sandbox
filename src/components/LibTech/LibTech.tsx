import { ReactElement } from "react";

import "./LibTech.scss";

type LibTechProps = {
  color?: string;
  value: number;
};

const LibTech = ({ color, value }: LibTechProps): ReactElement => {
  const innerStyle = {
    backgroundColor: color,
    width: value < 0 ? 0 : `${value}%`,
  };

  return (
    <div className="libtech">
      <div className="wrapper">
        <div className="inner" style={innerStyle}></div>
      </div>
      <div className="label">{value}%</div>
    </div>
  );
};

export default LibTech;
