import React, { Component } from 'react';
import PlayerStatSummary from './PlayerStatSummary.js'
import moment from 'moment';
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
                            <table className="table table-condensed">
                                <thead className="thead-default">
                                    <tr>
                                        <th colSpan={2}>
                                            {this.props.leagueName} League
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            {this.props.userTeamName}
                                        </td>
                                        <td>
                                            {this.props.userTeamCurrentPoints}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            {this.props.opponentTeamName}
                                        </td>
                                        <td>
                                            {this.props.opponentTeamCurrentPoints}
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
                                    <table className="table">
                                        <thead className="thead-default">
                                            <tr>
                                                <th colSpan={2} className="team-name">
                                                    <span>
                                                        <i className="fa fa-user" aria-hidden="true"></i> {this.props.userTeamName}
                                                    </span>
                                                </th>
                                                <th colSpan={1}>
                                                    <span className="pull-right team-score">
                                                        {this.props.userTeamCurrentPoints}
                                                    </span>
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
                                        {this.props.userTeamPlayers
                                        .sort((a, b) => a.PositionNumber > b.PositionNumber)
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
                                                />
                                            )
                                        }, this)}
                                        <tfoot>
                                            <tr>
                                                
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className="game-stats-container">
                                    <table className="table">
                                        <thead className="thead-default">
                                            <tr>
                                                <th colSpan={2} className="team-name">
                                                    <span>
                                                        {this.props.opponentTeamName}
                                                    </span>
                                                </th>
                                                <th colSpan={1}>
                                                    <span className="pull-right team-score">
                                                        {this.props.opponentTeamCurrentPoints}
                                                    </span>
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
                                        {this.props.opponentTeamPlayers
                                            .sort((a, b) => a.PositionNumber > b.PositionNumber)
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
                                                />
                                            )
                                        }, this)}
                                        <tfoot>
                                            <tr>

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