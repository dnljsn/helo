import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login/Login';
import Private from './components/Private/Private';
import './App.css';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path= '/' component={Login} exact />
          <Route path= '/private' component={Private} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
