import React, { Component } from 'react';
import './App.css';
import GameContainer from './components/GameContainer.js'
import FilterBar from './components/FilterBar.js'
import SidePanel from './components/SidePanel.js'

class App extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-lg-9">
          <FilterBar />
          <GameContainer />
        </div>
        <div className="col-lg-3">
          <SidePanel />
        </div>
      </div>
    );
  }
}

export default App;