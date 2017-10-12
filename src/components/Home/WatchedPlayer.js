import React, { Component } from 'react';

export default class WatchedPlayer extends Component{
    render(){
        return(
           <tr>
               <td>{this.props.name}</td>
               <td>{this.props.position}</td>
               <td>{this.props.currentWeekPoints}</td>
           </tr>
        )
    }
}