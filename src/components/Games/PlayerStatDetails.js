import React, { Component } from 'react';

export default class PlayerScoringDetails extends Component{
    render(){
        return(
            <tr hidden={(this.props.showStats ? ""  : "hidden")}>
                <td colSpan={2}>{this.props.description}</td>
                <td>{this.props.score}</td>
            </tr>
        );
    }
}