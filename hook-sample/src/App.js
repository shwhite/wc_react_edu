import React from "react";
import Counter from "./Counter";
import Info from "./Info";
import { useState } from "react";
import CountReducer from "./CountReducer";
import InfoReducer from "./InfoReducer";
import Average from "./Average";
import AverageUseCallBack from "./AverageUseCallBack";
import AverageUseRef from "./AverageUseRef";
import InfoReducerCustom from "./InfoReducerCustom";

const App = () => {
  return <InfoReducerCustom />;
};

export default App;
