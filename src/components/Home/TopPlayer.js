import React, { Component } from 'react';

export default class TopPlayer extends Component{
    render(){
        return(
           <tr>
                <td><img src={"https://static.nfl.com/static/site/img/logos/svg/teams/" + (this.props.teamName + ".svg")} alt={this.props.teamName} style={{"width": "25px"}}/></td>
                <td>{this.props.name}</td>
                <td>{this.props.position}</td>
                <td>{this.props.currentWeekPoints}</td>
            </tr>
        )
    }
}