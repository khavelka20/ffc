import React, { Component } from 'react';
import Game from './Game.js'

export default class GameContainer extends Component{
    render(){
        return(
            <div className="row">
                <Game winning={true} />
                <Game winning={true} />
                <Game winning={false} />
                <Game winning={false} />
            </div>
        );
    }
}