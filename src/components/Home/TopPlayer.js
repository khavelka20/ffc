import React, { Component } from 'react';
import TeamImage from '../Teams/TeamImage.js';

export default class TopPlayer extends Component{
    render(){
        return(
           <tr>
                <td>
                    <TeamImage
                        teamName={this.props.teamName}
                        width={25}
                    />
                </td>
                <td>{this.props.name}</td>
                <td>{this.props.position}</td>
                <td>{this.props.currentWeekPoints}</td>
            </tr>
        )
    }
}