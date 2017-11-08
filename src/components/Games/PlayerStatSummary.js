import React, { Component } from 'react';
import PlayerStatDetails from './PlayerStatDetails.js'
import PlayerGameStatus from './PlayerGameStatus.js';

export default class PlayerScoringSummary extends Component{
    render(){
        return(
            <tbody>
            <tr className="clickable" onClick={() => this.props.onShowStatsClick(this.props.gameId, this.props.playerId, this.props.isUserTeam)}>
                <td>
                    <PlayerGameStatus
                        gameStarted={this.props.gameStarted}
                        gameEnded={this.props.gameEnded}
                    />
                    <span>{this.props.name}</span>
                </td> 
                <td>
                    {this.props.position}
                </td>
                <td>
                    {Math.round(this.props.currentWeekPoints)}
                </td>
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
                            colSpan={4}
                        />
                    )
                },this)}
            </tbody>
            
        );
    }
}