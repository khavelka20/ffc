import React, { Component } from 'react';
import Game from './Game.js'
import GameApi from '../../DataAccess/GameApi.js';
import _ from 'underscore';

export default class GameContainer extends Component{
    constructor(){
        super();
        this.state = {
            games: [],
            loading: false
        }
        this.onShowPlaysClick = this.onShowPlaysClick.bind(this);
        this.loadGameData = this.loadGameData.bind(this);
    }

    getGamesShowingDetails(){
        var gamesToShowDetails = _.filter(this.state.games.slice(), (game) =>{
          return game.showDetails;
        });

        return gamesToShowDetails;
    }

    transferStateToUpdatedGames(updatedGames){
        var gamesToShowDetails = this.getGamesShowingDetails();

        _.each(updatedGames, (updatedGame) => {

          var gameToShowDetail = _.findWhere(gamesToShowDetails, {id: updatedGame.id});
          if(gameToShowDetail){
            updatedGame.showDetails = true;

            var playersToPlays = _.filter(gamesToShowDetails.userTeam.players, (player) => {
              return player.playersToPlays;
            }, this);
          }
        }, this);

        return updatedGames;
    }

    loadGameData(){
      GameApi.requestGames().then(data => {
        var updatedGames = this.transferStateToUpdatedGames(data);
        this.setState({games: updatedGames});
      });
    }

    componentDidMount(){
      this.loadGameData();
    }

    onShowDetailsClick(i){
        var games = this.state.games.slice();
        var game = games[i];
        game.showDetails = !game.showDetails;
        this.setState({games: games});
    }

    onShowPlaysClick(_gameId, _playerId, _isUserTeam){
        var games = this.state.games.slice();
        
        var game = games.filter(function(game, index){
            return game.id === _gameId
        }, _gameId)

        var players = _isUserTeam ? game[0].userTeam.players : game[0].opponentTeam.players;

        var player = players.filter(function(player, index){
            return player.id === _playerId;
        }, _playerId)

        player[0].showPlays = !player[0].showPlays;

        this.setState({games: games});
    }

    render(){
        return(
          <div>
              <button className="btn btn-secondary btn-sm" onClick={this.loadGameData}>Refresh</button>
              <div className="row">
                  {
                      this.state.games.map(function(game, index){
                          return (
                                  <Game
                                      key={game.id}
                                      gameId = {game.id}
                                      league={game.league} 
                                      userTeamName={game.userTeam.name}
                                      opponentTeamName= {game.opponentTeam.name}
                                      leagueName={game.league}
                                      winning={game.winning}
                                      userTeamScore={game.userTeam.score}
                                      opponentTeamScore={game.opponentTeam.score}
                                      showDetails={game.showDetails}
                                      onShowDetailsClick={() => this.onShowDetailsClick(index)}
                                      userTeamPlayers={game.userTeam.players}
                                      opponentTeamPlayers={game.opponentTeam.players}
                                      onShowPlaysClick={this.onShowPlaysClick}
                                  />
                              );
                      }, this)
                  }
              </div>
            </div>
        );
    }
}