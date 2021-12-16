import react from "react";
import "./App.css";
import { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Nav from "./Components/Nav"
import Home from "./Components/Home"


class App extends Component {

  render() {
    return (
      <div>
        {/* <Nav /> */}
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    )
  }
}

export default App;