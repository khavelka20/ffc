import React, { Component } from 'react';
import PlayerStatDetails from './PlayerStatDetails.js'

export default class PlayerScoringSummary extends Component{
    render(){
        return(
            <tbody>
            <tr>
                <td className="pointer" onClick={() => this.props.onShowStatsClick(this.props.gameId, this.props.playerId, this.props.isUserTeam)}>
                    <i className={"fa fa-chevron-" + (this.props.showStats ? "up" : "down") + " show-more"}></i> {this.props.name}
                </td> 
                <td>
                    {this.props.position}
                </td>
                <td>
                    {this.props.currentWeekPoints}
                </td>
            </tr>
                {this.props.currentWeekStats.map(function(stat, index){
                    return(
                        <PlayerStatDetails 
                            key={stat.Id}
                            description={stat.Description}
                            showStats={this.props.showStats}
                        />
                    )
                },this)}
            </tbody>
            
        );
    }
}