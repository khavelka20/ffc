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
                              "name": "DeShone Kizer",
                              "score": 26
                          },
                          {
                            "id": 2,
                            "name": "Jabrill Peppers",
                            "score": 20
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
                            "name": "DeShone Kizer",
                            "score": 26
                        },
                        {
                            "id": 2,
                          "name": "Jabrill Peppers",
                          "score": 20
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