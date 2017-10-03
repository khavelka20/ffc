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
                                      key={game.id}
                                      updatedAt={game.updatedAt}
                                      gameId = {game.id}
                                      league={game.league} 
                                      userTeamName={game.userTeam.name}
                                      opponentTeamName= {game.opponentTeam.name}
                                      leagueName={game.league}
                                      winning={game.winning}
                                      userTeamScore={game.userTeam.score}
                                      opponentTeamScore={game.opponentTeam.score}
                                      showDetails={game.showDetails}
                                      onShowDetailsClick={() => this.props.onShowDetailsClick(index)}
                                      userTeamPlayers={game.userTeam.players}
                                      opponentTeamPlayers={game.opponentTeam.players}
                                      onShowPlaysClick={this.props.onShowPlaysClick}
                                  />
                              );
                      }, this)
                  }
              </div>
            </div>
        );
    }
}