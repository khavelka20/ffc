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
                            <strong>Limit Players To: {this.props.filter}</strong>
                        </div>
                    <div id="top-players-filter">
                        <label>
                            <input 
                                name="top-player-filter" 
                                value="All" 
                                className="form-radio-input" 
                                type="radio" 
                                checked={this.props.filter === "All"}
                                onChange={this.props.onTopPlayersFilterChange} /> All
                        </label>
                        <label>
                            <input 
                                    name="top-player-filter" 
                                    value="QB" 
                                    className="form-radio-input" 
                                    type="radio" 
                                    checked={this.props.filter === "QB"}
                                    onChange={this.props.onTopPlayersFilterChange} /> QB
                        </label>
                        <label>
                            <input 
                                    name="top-player-filter" 
                                    value="WR" 
                                    className="form-radio-input" 
                                    type="radio" 
                                    checked={this.props.filter === "WR"}
                                    onChange={this.props.onTopPlayersFilterChange} /> WR
                        </label>
                        <label>
                            <input 
                                    name="top-player-filter" 
                                    value="RB" 
                                    className="form-radio-input" 
                                    type="radio" 
                                    checked={this.props.filter === "RB"}
                                    onChange={this.props.onTopPlayersFilterChange} /> RB
                        </label>
                        <label>
                            <input 
                                    name="top-player-filter" 
                                    value="TE" 
                                    className="form-radio-input" 
                                    type="radio" 
                                    checked={this.props.filter === "TE"}
                                    onChange={this.props.onTopPlayersFilterChange} /> TE
                        </label>
                        <label>
                            <input 
                                    name="top-player-filter" 
                                    value="PK" 
                                    className="form-radio-input" 
                                    type="radio" 
                                    checked={this.props.filter === "PK"}
                                    onChange={this.props.onTopPlayersFilterChange} /> PK
                        </label>
                        <label>
                            <input 
                                    name="top-player-filter" 
                                    value="DT" 
                                    className="form-radio-input" 
                                    type="radio" 
                                    checked={this.props.filter === "DT"}
                                    onChange={this.props.onTopPlayersFilterChange} /> DT
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
                                    show={player.Show}
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