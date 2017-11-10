import React, { Component } from 'react';
import TeamImage from '../Teams/TeamImage.js';
import PlayerStatDetails from '../Games/PlayerStatDetails.js'
export default class TopPlayer extends Component{
    render(){
        return(
            <tbody>
                <tr onClick={() => this.props.onShowTopPlayerStatsClick(this.props.playerId)} className={(this.props.show ? "" : "hidden") + " clickable"}>
                    <td>
                        <TeamImage
                            teamName={this.props.teamName}
                            width={25}
                        />
                    </td>
                    <td>{this.props.name}</td>
                    <td>{this.props.position}</td>
                    <td>{this.props.currentWeekPoints}</td>
                    <td>
                        <i className={"fa fa-chevron-" + (this.props.showStats ? "up" : "down") + " show-more"}></i>
                    </td>
                </tr>
                {this.props.currentWeekStats.map(function(stat, index){
                    return(
                        <PlayerStatDetails 
                            key={stat.Id}
                            description={stat.Description}
                            showStats={this.props.showStats}
                            colSpan={5}
                        />
                    )
                },this)}
            </tbody>
        )
    }
}