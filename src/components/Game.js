import React, { Component } from 'react';
import PlayerScoringSummary from './PlayerScoringSummary.js'
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
                            <div>
                                <span className="team-names text-muted">{this.props.userTeamName} Vs {this.props.opponentTeamName}</span>
                            </div>
                        </div>
                            <div className="row">
                                <div className="col-3 team-name">
                                    Your Team
                                </div>
                                <div className="col-3 score">
                                    {this.props.userTeamScore}
                                </div>
                                <div className="col-3 team-name">
                                    Their Team
                                </div>
                                <div className="col-3 score">
                                    {this.props.opponentTeamScore}
                                </div>
                            </div>
                            <div className="show-detail" onClick={this.props.onShowDetailsClick}>
                                <span className="text-primary">
                                    <i className={"fa fa-chevron-" + (this.props.showDetails ? "up" : "down")}></i> Details
                                </span>
                            </div>
                        </div>
                    <div className="card-body" hidden={(this.props.showDetails ? ""  : "hidden")}>
                        <table className="table table-condensed">
                            <thead>
                                <tr>
                                    <th colSpan={3}>{this.props.userTeamName}</th>
                                </tr>
                            </thead>
                            <thead>
                                <tr>
                                    <th>Player</th>
                                    <th>Position</th>
                                    <th>Score</th>
                                </tr>
                            </thead>
                            {this.props.userTeamPlayers.map(function(player, index){
                                return(
                                    <PlayerScoringSummary
                                        key={player.id}
                                        playerId={player.id}
                                        gameId={this.props.gameId}
                                        name={player.name}
                                        position={player.position}
                                        score={player.score}
                                        plays={player.plays}
                                        showPlays={player.showPlays}
                                        isEven={index % 2 === 0}
                                        onShowPlaysClick={this.props.onShowPlaysClick}
                                        isUserTeam={true}
                                    />
                                )
                            }, this)}
                        </table>
                        <table className="table table-condensed">
                            <thead>
                                <tr>
                                    <th colSpan={3}>{this.props.opponentTeamName}</th>
                                </tr>
                            </thead>
                            <thead>
                                <tr>
                                    <th>Player</th>
                                    <th>Position</th>
                                    <th>Score</th>
                                </tr>
                            </thead>
                            {this.props.opponentTeamPlayers.map(function(player, index){
                                return(
                                    <PlayerScoringSummary
                                        key={player.id}
                                        playerId={player.id}
                                        gameId={this.props.gameId}
                                        name={player.name}
                                        position={player.position}
                                        score={player.score}
                                        plays={player.plays}
                                        showPlays={player.showPlays}
                                        isEven={index % 2 === 0}
                                        onShowPlaysClick={this.props.onShowPlaysClick}
                                        isUserTeam={false}
                                    />
                                )
                            }, this)}
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}