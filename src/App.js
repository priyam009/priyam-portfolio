import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import Particles from "react-particles-js";
import background from "./utils/particles.utils";

import Header from "./components/header/header.components";
import Portfolio from "./pages/portfolio/portfolio.components";
import About from "./pages/about/about.components";
import Journey from "./pages/journey/journey.components";
import Contact from "./pages/contact/contact.components";

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
        <div className="container">
          <Header />
          <Switch>
            <Route exact path="/" Component={Portfolio} />
            <Route path="/about" Component={About} />
            <Route path="/journey" Component={Journey} />
            <Route path="/contact" Component={Contact} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
