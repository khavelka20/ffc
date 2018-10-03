import React, { Component } from 'react';
import WatchedPlayer from './WatchedPlayer.js';
export default class WatchedPlayers extends Component{
    render(){
        return(
            <div className="card">
                <div className="card-header clickable" onClick={this.props.onShowWatchedPlayersClick}>
                    <i className={"fa fa-chevron-" + (this.props.show ? "up" : "down")}></i> WatchedPlayers <span className="badge badge-dark">{this.props.players.length}</span>
                </div>    
                <div className={"card-body" + (!this.props.show ? " hidden" : "")}>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Team</th>
                                <th>Player</th>
                                <th>Position</th>
                                <th>Points</th>
                                <th></th>
                            </tr>
                        </thead>
                            {this.props.players
                            .map((player) =>{
                                return(
                                    <WatchedPlayer
                                        key={player.Id}
                                        playerId={player.Id}
                                        name={player.Name}
                                        currentWeekPoints={player.CurrentWeekPoints}
                                        position={player.Position}
                                        gameEnded={player.GameEnded}
                                        gameStarted={player.GameStarted}
                                        teamName={player.TeamName}
                                        currentWeekStats={player.CurrentWeekStats}
                                        onShowWatchedPlayerStatsClick={this.props.onShowWatchedPlayerStatsClick}
                                        showStats={player.showStats}
                                    />
                                )
                            })}
                    </table>
                </div>
            </div>
        );
    }
}