import React, { Component } from 'react';
import PlayerStatSummary from './PlayerStatSummary.js'
import moment from 'moment';
import Format from './../../Helpers/Formatters.js';
export default class Game extends Component{
    render(){
        return(
            <div className="col-xl-6">
                <div className="card game">
                    <div className="card-header">
                        <div className="card-title"> 
                            <span className="text-muted small-text">
                                <i className="fa fa-clock-o" aria-hidden="true"></i> Updated {this.props.updatedAt !== null ? moment(this.props.updatedAt).fromNow() : "N/A"}
                            </span>
                            <span className={"badge " + (this.props.winning ? 'badge-success' : 'badge-danger') + ' pull-right'}>
                                {this.props.winning ? 'Winning' : 'Losing'}
                            </span>
                            <div className="clear-fix"></div>
                            <table className="table game-stats-table">
                                <thead className="thead-default">
                                    <tr>
                                        <th colSpan={3}>
                                            {this.props.leagueName} League
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            {this.props.userTeamName}
                                        </td>
                                        <td style={{"textAlign": "center"}}>
                                            <strong>{Format.defaultScore(this.props.userTeamCurrentPoints)}</strong>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            {this.props.opponentTeamName}
                                        </td>
                                        <td style={{"textAlign": "center"}}>
                                            <strong>{Format.defaultScore(this.props.opponentTeamCurrentPoints)}</strong>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="show-detail" onClick={this.props.onShowDetailsClick}>
                                <span className="text-primary">
                                    <i className={"fa fa-chevron-" + (this.props.showDetails ? "up" : "down")}></i> Details
                                </span>
                            </div>
                        </div>                            
                    </div>
                    <div className="card-body" hidden={(this.props.showDetails ? ""  : "hidden")}>
                        <div className="row">
                            <div className="col-xl-6">
                                <div className="game-stats-container">
                                    <table className="table table-sm game-player-stats-table">
                                        <thead className="thead-default">
                                            <tr>
                                                <th colSpan={4} className="team-name">
                                                    <span>
                                                        <i className="fa fa-user" aria-hidden="true"></i> {this.props.userTeamName}
                                                    </span>
                                                </th>
                                            </tr>
                                        </thead>
                                        <thead>
                                            <tr>
                                                <th>Player</th>
                                                <th>Position</th>
                                                <th>Points</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        {this.props.userTeamPlayers
                                        .map(function(player, index){
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
                                                    gameStarted={player.GameStarted}
                                                    gameEnded={player.GameEnded}
                                                />
                                            )
                                        }, this)}
                                        <tfoot>
                                            <tr className="table-active">
                                                <td colSpan={2}>Total Points</td>
                                                <td colSpan={2}>
                                                    <strong>{this.props.userTeamCurrentPoints}</strong>
                                                </td>
                                            </tr>
                                            <tr className="table-active">
                                                <td colSpan={2}>Players Yet To Play</td>
                                                <td colSpan={2}>
                                                    <strong>{this.props.userTeamPlayersLeftToPlay}</strong>
                                                </td>
                                            </tr>
                                            <tr className="table-active">
                                                <td colSpan={2}>Players Currently Playing</td>
                                                <td colSpan={2}>
                                                    <strong>{this.props.userTeamPlayersCurrentlyPlaying}</strong>
                                                </td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className="game-stats-container">
                                    <table className="table table-sm game-player-stats-table">
                                        <thead className="thead-default">
                                            <tr>
                                                <th colSpan={4} className="team-name">
                                                    <span>
                                                        {this.props.opponentTeamName}
                                                    </span>
                                                </th>
                                            </tr>
                                        </thead>
                                        <thead>
                                            <tr>
                                                <th>Player</th>
                                                <th>Position</th>
                                                <th>Points</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        {this.props.opponentTeamPlayers
                                            .map(function(player, index){
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
                                                    gameStarted={player.GameStarted}
                                                    gameEnded={player.GameEnded}
                                                />
                                            )
                                        }, this)}
                                        <tfoot>
                                            <tr className="table-active">
                                                <td colSpan={2}>Total Points</td>
                                                <td colSpan={2}>
                                                    <strong>{this.props.opponentTeamCurrentPoints}</strong>
                                                </td>
                                            </tr>
                                            <tr className="table-active">
                                                <td colSpan={2}>Players Yet To Play</td>
                                                <td colSpan={2}>
                                                    <strong>{this.props.opponentTeamPlayersLeftToPlay}</strong>
                                                </td>
                                            </tr>
                                            <tr className="table-active">
                                                <td colSpan={2}>Players Currently Playing</td>
                                                <td colSpan={2}>
                                                    <strong>{this.props.opponentTeamPlayersCurrentlyPlaying}</strong>
                                                </td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}