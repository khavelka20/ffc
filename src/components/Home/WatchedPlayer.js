import React, { Component } from 'react';
import TeamImage from '../Teams/TeamImage.js';
import PlayerGameStatus from '../Games/PlayerGameStatus.js';
import PlayerStatDetails from '../Games/PlayerStatDetails.js';

export default class WatchedPlayer extends Component{
    render(){
        return(
            <tbody>
                <tr className="clickable" onClick={() => this.props.onShowWatchedPlayerStatsClick(this.props.playerId)}>
                    <td>
                        <TeamImage 
                            teamName={this.props.teamName}
                            width={25}
                        />
                    </td>
                    <td>
                        <PlayerGameStatus
                            gameStarted={this.props.gameStarted}
                            gameEnded={this.props.gameEnded}
                        />
                        {this.props.name}
                    </td>
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