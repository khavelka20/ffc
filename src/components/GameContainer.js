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
                        "score": 10
                      },
                      "opponentTeam": {
                        "name": "The Bad Guys",
                        "score": 15
                      },
                      "showDetails": false,
                      "winning": false,
                      "players": [
                          {
                              "id": 1,
                              "position": "QB",
                              "name": "DeShone Kizer",
                              "score": 26,
                              "showPlays": false,
                              "plays":[
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
                            "plays":[
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
                    {
                        "id":2,
                      "league": "Yahoo Sports",
                      "userTeam": {
                        "name": "The Ringleaders",
                        "score": 40
                      },
                      "opponentTeam": {
                        "name": "The Antagonists",
                        "score": 9
                      },
                      "showDetails": false,
                      "winning": true,
                      "players": [
                        {
                            "id": 1,
                            "position": "QB",
                            "name": "DeShone Kizer",
                            "score": 26,
                            "showPlays": false,
                            "plays":[
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
                            "showPlays": true,
                            "plays":[
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
                    }
                ]
        }
    }
    onShowDetailsClick(i){
        var games = this.state.games.slice();
        var game = games[i];
        game.showDetails = !game.showDetails;
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
                                    league={game.league} 
                                    userTeamName={game.userTeam.name}
                                    opponentTeamName= {game.opponentTeam.name}
                                    leagueName={game.league}
                                    winning={game.winning}
                                    userTeamScore={game.userTeam.score}
                                    opponentTeamScore={game.opponentTeam.score}
                                    showDetails={game.showDetails}
                                    onShowDetailsClick={() => this.onShowDetailsClick(index)}
                                    players={game.players}
                                />
                            );
                    }, this)
                }
            </div>
        );
    }
}