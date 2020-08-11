import React from "react";
import "./App.css";

import Particles from "react-particles-js";
import background from "./utils/particles.utils";

import Header from "./components/header/header.components";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      background: background,
    };
  }

  render() {
    return (
      <div>
        <Particles className="particles" params={this.state.background} />
        <div className='container'>
          <Header />
        </div>
      </div>
    );
  }
}

export default App;
