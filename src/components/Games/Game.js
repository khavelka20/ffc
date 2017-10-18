import React, { Component } from 'react';
import PlayerStatSummary from './PlayerStatSummary.js'
import moment from 'moment';
export default class Game extends Component{
    render(){
        return(
            <div className="col-md-6 col-lg-4">
                <div className="card game">
                    <div className="card-header">
                        <div className="card-title">
                            {this.props.leagueName}
                            <span className={"badge " + (this.props.winning ? 'badge-success' : 'badge-danger') + ' pull-right'}>
                                {this.props.winning ? 'Winning' : 'Losing'}
                            </span>
                            
                            <div className="row">
                                <div className="col-7">
                                    <span className="team-names">{this.props.userTeamName} Vs {this.props.opponentTeamName}</span>
                                </div>
                                <div className="col-5"style={{textAlign: "right"}}>
                                    <span className="text-muted small-text">
                                        <i className="fa fa-check-square-o" aria-hidden="true"></i> {this.props.playersStarted} of {this.props.playersLeftToPlay} players played
                                    </span>
                                </div>
                            </div>
                            <div>
                                <span className="text-muted small-text">
                                    <i className="fa fa-clock-o" aria-hidden="true"></i> Updated {this.props.updatedAt !== null ? moment(this.props.updatedAt).fromNow() : "N/A"}
                                </span>
                            </div>
                        </div>
                            <div className="row">
                                <div className="col-2 team-name">
                                    Your Team
                                </div>
                                <div className="col-4 score">
                                    {Math.round(this.props.userTeamCurrentPoints * 10  ) / 10}
                                </div>
                                <div className="col-2 team-name">
                                    Their Team
                                </div>
                                <div className="col-4 score">
                                {Math.round(this.props.opponentTeamCurrentPoints * 10)  / 10}
                                </div>
                            </div>
                            <div className="show-detail" onClick={this.props.onShowDetailsClick}>
                                <span className="text-primary">
                                    <i className={"fa fa-chevron-" + (this.props.showDetails ? "up" : "down")}></i> Details
                                </span>
                            </div>
                        </div>
                    <div className="card-body" hidden={(this.props.showDetails ? ""  : "hidden")}>
                        <div className="game-stats-container">
                            <table className="table">
                                <thead className="thead-default">
                                    <tr>
                                        <th colSpan={3}>
                                            <i className="fa fa-user" aria-hidden="true"></i> {this.props.userTeamName} 
                                        </th>
                                    </tr>
                                </thead>
                                <thead>
                                    <tr>
                                        <th>Player</th>
                                        <th>Position</th>
                                        <th>Points</th>
                                    </tr>
                                </thead>
                                {this.props.userTeamPlayers.map(function(player, index){
                                    return(
                                        <PlayerStatSummary
                                            key={player.Id}
                                            playerId={player.Id}
                                            teamName={player.TeamName}
                                            gameId={this.props.gameId}
                                            name={player.Name}
                                            position={player.Position}
                                            currentWeekPoints={player.CurrentWeekPoints}
                                            currentWeekStats={player.CurrentWeekStats}
                                            showStats={player.showStats}
                                            onShowStatsClick={this.props.onShowStatsClick}
                                            isUserTeam={true}
                                        />
                                    )
                                }, this)}
                            </table>
                        </div>
                        <div className="game-stats-container">
                            <table className="table">
                                <thead className="thead-default">
                                    <tr>
                                        <th colSpan={3}>
                                            <i className="fa fa-user" aria-hidden="true"></i> {this.props.opponentTeamName}
                                        </th>
                                    </tr>
                                </thead>
                                <thead>
                                    <tr>
                                        <th>Player</th>
                                        <th>Position</th>
                                        <th>Points</th>
                                    </tr>
                                </thead>
                                {this.props.opponentTeamPlayers.map(function(player, index){
                                    return(
                                        <PlayerStatSummary
                                            key={player.Id}
                                            playerId={player.Id}
                                            teamName={player.TeamName}
                                            gameId={this.props.gameId}
                                            name={player.Name}
                                            position={player.Position}
                                            currentWeekPoints={player.CurrentWeekPoints}
                                            currentWeekStats={player.CurrentWeekStats}
                                            showStats={player.showStats}
                                            isEven={index % 2 === 0}
                                            onShowStatsClick={this.props.onShowStatsClick}
                                            isUserTeam={false}
                                        />
                                    )
                                }, this)}
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}