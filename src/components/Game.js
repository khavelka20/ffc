import React, { Component } from 'react';
import PlayerScoringSummary from './PlayerScoringSummary.js'
export default class Game extends Component{
    render(){
        return(
            <div className="col-md-6 col-lg-4">
                <div className={"card game " + (this.props.winning ? 'border-success' : 'border-danger')}>
                    <div className="card-header bg-light">
                        <div className="card-title">
                            {this.props.leagueName}
                            <span className={"badge " + (this.props.winning ? 'badge-success' : 'badge-danger') + ' pull-right'}>
                                {this.props.winning ? 'Winning' : 'Losing'} <i className={"fa fa-thumbs-" + (this.props.winning ? 'up': 'down')}></i>
                            </span>
                            <div>
                                <span className="team-names text-muted">{this.props.userTeamName} Vs {this.props.opponentTeamName}</span>
                            </div>
                        </div>
                            <div className="row">
                                <div className="col-4 team-name">
                                    Your Team
                                </div>
                                <div className="col-2 score">
                                    {this.props.userTeamScore}
                                </div>
                                <div className="col-4 team-name">
                                    Their Team
                                </div>
                                <div className="col-2 score">
                                    {this.props.opponentTeamScore}
                                </div>
                            </div>
                            <div className="show-detail">
                                <span className="text-primary" onClick={this.props.onShowDetailsClick}>
                                    <i className={"fa fa-chevron-" + (this.props.showDetails ? "up" : "down")}></i> Details
                                </span>
                            </div>
                        </div>
                    <div className="card-body" hidden={(this.props.showDetails ? ""  : "hidden")}>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Player</th>
                                    <th>Position</th>
                                    <th>Score</th>
                                </tr>
                            </thead>
                            {this.props.players.map(function(player, index){
                                return(
                                    <PlayerScoringSummary
                                        key={player.id}
                                        name={player.name}
                                        position={player.position}
                                        score={player.score}
                                        plays={player.plays}
                                        showPlays={player.showPlays}
                                    />
                                )
                            })}
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}