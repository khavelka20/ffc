import React, { Component } from 'react';
import FilterBar from  './FilterBar.js';
import GameContainer from '../Games/GameContainer.js';
import SidePanel from './SidePanel.js';
import { Link } from 'react-router-dom'

export default class Home extends Component{
    render(){
        return(
            <div>
                <div className="row">
                <div className="col-lg-9">
                    <FilterBar />
                    
                    <div id="add-game-bar">
                        <Link to='/games/add' className="btn btn-primary btn-sm">Add Game</Link>
                    </div>
                    
                    <GameContainer />
                </div>
                <div className="col-lg-3">
                    <SidePanel />
                </div>
                </div>
            </div>
        );
    }
}