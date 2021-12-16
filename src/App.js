import "./App.css";
import { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Nav from "./Components/Nav"
import Home from "./Components/Home"
import Movies from "./Components/Movies";
import People from "./Components/People";
import Locations from "./Components/Locations";

class App extends Component {

  render() {
    return (
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/movies" component={Movies} />
          <Route path="/people" component={People} />
          <Route path='/locations' component={Locations} />
        </Switch>
      </div>
    )
  }
}

export default App;