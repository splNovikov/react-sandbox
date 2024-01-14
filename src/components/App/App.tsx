import React, { FC } from "react";

// import RerenderCounter from '../RerenderCounter/RerenderCounter';
// import Box from '../Box/Box';
// import StarWarsList from '../StarWarsList/StarWarsList';
// import PureComponent from '../PureComponent/PureComponent';
// import Timer from '../Timer/Timer';
// import TimerUseTimeout from '../TimerUseTimeout/TimerUseTimeout';
// import Space from '../Rockets/Space/Space';
// import LibTechDemo from "../LibTech/LibTechDemo";
// import { WindowListener } from "../WindowListener/WindowListener";
import TodoApp from "../TodoList/TodoApp";

import "./App.scss";

const App: FC = () => {
  return (
    <div className="App">
      <TodoApp />
    </div>
  );
};

export default App;
