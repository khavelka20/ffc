import React, { Component } from 'react';
import Game from './Game.js';
import CondensedGame from './CondensedGame.js';

export default class GameContainer extends Component{
    render(){
        return(
          <div>
                <label>
                    <input 
                        name="top-player-filter" 
                        value="DT" 
                        className="form-radio-input" 
                        type="checkbox" 
                        checked={this.props.compactMode}
                        onChange={this.props.onChangeCompactModeClick}/> Compact Mode
                </label>
              <div className="row" hidden={this.props.compactMode}>
                  {
                      this.props.games.map(function(game, index){
                          return (
                                  <Game
                                      key={game.Id}
                                      updatedAt={game.LastUpdate}
                                      gameId = {game.Id}
                                      userTeamName={game.UserTeam.Name}
                                      opponentTeamName= {game.OpponentTeam.Name}
                                      leagueName={game.League.Name}
                                      winning={game.UserIsWinning}
                                      userTeamCurrentPoints={game.UserTeam.CurrentPoints}
                                      opponentTeamCurrentPoints={game.OpponentTeam.CurrentPoints}
                                      showDetails={game.showDetails}
                                      onShowDetailsClick={() => this.props.onShowDetailsClick(index)}
                                      userTeamPlayers={game.UserTeam.Players}
                                      opponentTeamPlayers={game.OpponentTeam.Players}
                                      onShowStatsClick={this.props.onShowStatsClick}
                                      userTeamPlayersStarted={game.UserTeam.PlayersStarted}
                                      userTeamPlayersLeftToPlay={game.UserTeam.PlayersLeftToPlay}
                                      opponentTeamPlayersLeftToPlay={game.OpponentTeam.PlayersLeftToPlay}
                                      userTeamPlayersCurrentlyPlaying={game.UserTeam.PlayersStarted}
                                      opponentTeamPlayersCurrentlyPlaying={game.OpponentTeam.PlayersStarted}
                                  />
                              );
                      }, this)
                  }
              </div>
              <div className="row" style={{"marginBottom": "10px"}} hidden={!this.props.compactMode}>
                  <div className="col-12">
                    <div className="card">
                        <div className="card-body">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th>League</th>
                                        <th>You</th>
                                        <th>Them</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.props.games.map(function(game, index){
                                        return(
                                            <CondensedGame
                                                key={game.Id}
                                                leagueName={game.League.Name}
                                                winning={game.UserIsWinning}
                                                userTeamCurrentPoints={game.UserTeam.CurrentPoints}
                                                opponentTeamCurrentPoints={game.OpponentTeam.CurrentPoints}
                                                gameId = {game.Id}
                                            />
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                  </div>
              </div>
            </div>
        );
    }
}