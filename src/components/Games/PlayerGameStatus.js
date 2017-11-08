import React, { Component } from 'react';

export default class PlayerGameStatus extends Component{
    render(){
        return(
            <span className="player-game-status">
                {this.renderPlayerGameStatus()}
            </span>
        );
    }

    renderPlayerGameStatus(){

        if (this.props.gameStarted && !this.props.gameEnded){
            return(
                <i className="fa fa-play" aria-hidden="true"></i>
            )
        }

        if (this.props.gameStarted && this.props.gameEnded){
            return(
                <i className="fa fa-check" aria-hidden="true"></i>
            )
        }

        return(
            <i className="fa fa-clock-o" aria-hidden="true"></i>
        )
    }
}