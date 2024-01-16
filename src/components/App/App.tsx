import React, { FC } from "react";

// import RerenderCounter from '../RerenderCounter/RerenderCounter';
// import Box from '../Box/Box';
// import StarWarsList from '../StarWarsList/StarWarsList';
// import PureComponent from '../PureComponent/PureComponent';
// import Timer from '../Timer/Timer';
// import TimerUseTimeout from '../TimerUseTimeout/TimerUseTimeout';
import Space from "../Rockets/Space/Space";
// import LibTechDemo from "../LibTech/LibTechDemo";
// import { WindowListener } from "../WindowListener/WindowListener";

import "./App.scss";
import TypeaheadDemo from "../Typeahead/TypeaheadDemo";

const App: FC = () => {
  return (
    <div className="App">
      <TypeaheadDemo />
    </div>
  );
};

export default App;
