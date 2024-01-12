import React, { FC } from "react";

// import RerenderCounter from '../RerenderCounter/RerenderCounter';
// import Box from '../Box/Box';
// import StarWarsList from '../StarWarsList/StarWarsList';
// import PureComponent from '../PureComponent/PureComponent';
// import Timer from '../Timer/Timer';
// import TimerUseTimeout from '../TimerUseTimeout/TimerUseTimeout';
// import Space from '../Rockets/Space/Space';

import "./App.scss";
import { WindowListener } from "../WindowListener/WindowListener";
import LibTechDemo from "../LibTech/LibTechDemo";

const App: FC = () => {
  return (
    <div className="App">
      <LibTechDemo />
      <WindowListener event="click" handler={() => console.log("click")} />
    </div>
  );
};

export default App;
