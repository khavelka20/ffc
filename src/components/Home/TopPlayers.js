import React, { Component } from 'react';
import TopPlayer from './TopPlayer.js';

export default class TopPlayers extends Component{
    render(){
        return(
            <div className="card">
                <div className="card-header clickable" onClick={this.props.onShowTopPlayersClick}>
                    <i className={"fa fa-chevron-" + (this.props.show ? "up" : "down")}></i> Top Players <span className="badge badge-dark">20</span>
                </div>    
                <div className={"card-body" + (!this.props.show ? " hidden" : "")}>
                        <div>
                            <strong>Limit Players To: </strong>
                        </div>
                    <div id="top-players-filter">
                        <label>
                            <input className="form-check-input" type="checkbox" /> QB
                        </label>
                        <label>
                            <input className="form-check-input" type="checkbox" /> WR
                        </label>
                        <label>
                            <input className="form-check-input" type="checkbox" /> RB
                        </label>
                        <label>
                            <input className="form-check-input" type="checkbox" /> TE
                        </label>
                        <label>
                            <input className="form-check-input" type="checkbox" /> PK
                        </label>
                        <label>
                            <input className="form-check-input" type="checkbox" /> DT
                        </label>
                    </div>
                    
                    <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>Team</th>
                        <th>Player</th>
                        <th>Position</th>
                        <th>Points</th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.props.players.slice(0, 20).map((player) =>{
                            return(
                                <TopPlayer
                                    key={player.Id}
                                    name={player.Name}
                                    teamName={player.TeamName}
                                    position={player.Position}
                                    currentWeekPoints={player.CurrentWeekPoints}
                                />
                            )
                        })}
                    </tbody>
                    </table>
                </div>
            </div>
        );
    }
}