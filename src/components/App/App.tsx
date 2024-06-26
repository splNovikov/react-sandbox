import React, { FC } from "react";

// import RerenderCounter from "../RerenderCounter/RerenderCounter";
// import Box from '../Box/Box';
// import StarWarsList from "../StarWarsList/StarWarsList";
// import PureComponent from '../PureComponent/PureComponent';
// import Timer from '../Timer/Timer';
// import TimerUseTimeout from '../TimerUseTimeout/TimerUseTimeout';
// import Space from "../Rockets/Space/Space";
// import { WindowListener } from "../WindowListener/WindowListener";
// import ProgressBarDemo from "../ProgressBar/ProgressBarDemo";
// import TodoApp from "../TodoApp/TodoApp";
// import TypeaheadDemo from "../Typeahead/TypeaheadDemo";
import Index from "../Js";
import StarWarsV2 from "../StarWarsV2/StarWarsV2";

import "./App.scss";

const App: FC = () => {
  return (
    <div className="App">
      <StarWarsV2 />
    </div>
  );
};

export default App;
