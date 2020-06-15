import React, { Component } from "react";
import SassComponent from "./SassComponent";
import CSSModule from "./CSSModule";
import CSSModuleClassNames from "./CSSModuleClassNames";
import StyledComponent from "./StyledComponent";

class App extends Component {
  render() {
    return (
      <div>
        <StyledComponent />
      </div>
    );
  }
}

// const App = () => {
//   return (
//     <div>
//       <StyledComponent />
//     </div>
//   );
// };

export default App;
