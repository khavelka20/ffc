import React, { Component } from 'react';
import Game from './Game.js'

export default class GameContainer extends Component{
    render(){
        return(
          <div>
              <div className="row">
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
                                      playersStarted={game.UserTeam.PlayersStarted}
                                      playersLeftToPlay={game.UserTeam.PlayersLeftToPlay}
                                  />
                              );
                      }, this)
                  }
              </div>
            </div>
        );
    }
}