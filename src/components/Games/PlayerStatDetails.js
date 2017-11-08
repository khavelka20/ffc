import React, { Component } from 'react';

export default class PlayerScoringDetails extends Component{
    render(){
        return(
            <tr hidden={(this.props.showStats ? ""  : "hidden")}>
                <td colSpan={this.props.colSpan}>{this.props.description}</td>
            </tr>
        );
    }
}