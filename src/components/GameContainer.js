import React, { Component } from 'react';
import Game from './Game.js'

export default class GameContainer extends Component{
    constructor(){
        super();
        this.state = {
            games: 
            [
                {
                  "id": 1,
                  "league": "ESPN League",
                  "userTeam": {
                    "name": "The Ballers",
                    "score": 10,
                    "players": [
                      {
                        "id": 1,
                        "position": "QB",
                        "name": "DeShone Kizer",
                        "score": 26,
                        "showPlays": false,
                        "plays": [
                          {
                            "id": 1,
                            "description": "36 yard touch down pass",
                            "score": 16
                          },
                          {
                            "id": 2,
                            "description": "5 yard rushing touch down.",
                            "score": 10
                          }
                        ]
                      },
                      {
                        "id": 2,
                        "position": "WR",
                        "name": "Jabrill Peppers",
                        "score": 20,
                        "showPlays": false,
                        "plays": [
                          {
                            "id": 1,
                            "description": "36 yard touch down reception.",
                            "score": 10
                          },
                          {
                            "id": 2,
                            "description": "5 yard touch down reception.",
                            "score": 10
                          }
                        ]
                      }
                    ]
                  },
                  "opponentTeam": {
                    "name": "The Bad Guys",
                    "score": 15,
                    "players": [
                      {
                        "id": 1,
                        "position": "QB",
                        "name": "DeShone Kizer",
                        "score": 26,
                        "showPlays": false,
                        "plays": [
                          {
                            "id": 1,
                            "description": "36 yard touch down pass",
                            "score": 16
                          },
                          {
                            "id": 2,
                            "description": "5 yard rushing touch down.",
                            "score": 10
                          }
                        ]
                      },
                      {
                        "id": 2,
                        "position": "WR",
                        "name": "Jabrill Peppers",
                        "score": 20,
                        "showPlays": false,
                        "plays": [
                          {
                            "id": 1,
                            "description": "36 yard touch down reception.",
                            "score": 10
                          },
                          {
                            "id": 2,
                            "description": "5 yard touch down reception.",
                            "score": 10
                          }
                        ]
                      }
                    ]
                  },
                  "showDetails": false,
                  "winning": false
                },
                {
                  "id": 2,
                  "league": "Yahoo Sports",
                  "userTeam": {
                    "name": "The Ringleaders",
                    "score": 40,
                    "players": [
                      {
                        "id": 1,
                        "position": "QB",
                        "name": "DeShone Kizer",
                        "score": 26,
                        "showPlays": false,
                        "plays": [
                          {
                            "id": 1,
                            "description": "36 yard touch down pass",
                            "score": 16
                          },
                          {
                            "id": 2,
                            "description": "5 yard rushing touch down.",
                            "score": 10
                          }
                        ]
                      },
                      {
                        "id": 2,
                        "position": "WR",
                        "name": "Jabrill Peppers",
                        "score": 20,
                        "showPlays": false,
                        "plays": [
                          {
                            "id": 1,
                            "description": "36 yard touch down reception.",
                            "score": 10
                          },
                          {
                            "id": 2,
                            "description": "5 yard touch down reception.",
                            "score": 10
                          }
                        ]
                      }
                    ]
                  },
                  "opponentTeam": {
                    "name": "The Antagonists",
                    "score": 9,
                    "players": [
                      {
                        "id": 1,
                        "position": "QB",
                        "name": "DeShone Kizer",
                        "score": 26,
                        "showPlays": false,
                        "plays": [
                          {
                            "id": 1,
                            "description": "36 yard touch down pass",
                            "score": 16
                          },
                          {
                            "id": 2,
                            "description": "5 yard rushing touch down.",
                            "score": 10
                          }
                        ]
                      },
                      {
                        "id": 2,
                        "position": "WR",
                        "name": "Jabrill Peppers",
                        "score": 20,
                        "showPlays": false,
                        "plays": [
                          {
                            "id": 1,
                            "description": "36 yard touch down reception.",
                            "score": 10
                          },
                          {
                            "id": 2,
                            "description": "5 yard touch down reception.",
                            "score": 10
                          }
                        ]
                      }
                    ]
                  },
                  "showDetails": false,
                  "winning": true
                }
              ]
        }
        this.onShowPlaysClick = this.onShowPlaysClick.bind(this);
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
        );
    }
}