import React, { Component } from 'react';
import Home from './Home/Home.js';
import AddGame from './Games/Add/AddGame.js';

import { BrowserRouter , Route , Switch} from 'react-router-dom'
import '../App.css';

export default class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path='/games/add' component={AddGame} />
        </Switch>
      </BrowserRouter>
    );
  }
}