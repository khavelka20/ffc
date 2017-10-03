import React, { Component } from 'react';
import FilterBar from  './FilterBar.js';
import GameContainer from '../Games/GameContainer.js';
import SidePanel from './SidePanel.js';
import Layout from "../Layout/Layout.js";
import { Link } from 'react-router-dom'
import GameApi from '../../DataAccess/GameApi.js';
import _ from 'underscore';

export default class Home extends Component{

    constructor(){
        super();
        this.state = {
            games: [],
            intervalId: null
        }
        this.onShowPlaysClick = this.onShowPlaysClick.bind(this);
        this.onShowDetailsClick = this.onShowDetailsClick.bind(this);
        this.loadData = this.loadData.bind(this);
    }

    getGamesShowingDetails(){
        var gamesToShowDetails = _.filter(this.state.games.slice(), (game) =>{
          return game.showDetails;
        });

        return gamesToShowDetails;
    }

    transferStateToUpdatedGames(updatedGames){
        var gamesShowingDetails = this.getGamesShowingDetails();

        _.each(gamesShowingDetails, (gameShowingDetails) => {
            var gameToGetState = _.findWhere(updatedGames, {id: gameShowingDetails.id});
            if(gameToGetState){
              gameToGetState.showDetails = true;
              this.transerStateToPlayers(gameShowingDetails.userTeam.players, gameToGetState.userTeam.players);
              this.transerStateToPlayers(gameShowingDetails.opponentTeam.players, gameToGetState.opponentTeam.players);
            }
        }, this);

        return updatedGames;
    }

    transerStateToPlayers(playersSettingState, playersGettingState){
      _.each(playersSettingState, (playerSettingState) => {
        var playerGettingState = _.findWhere(playersGettingState, {id: playerSettingState.id})
        if(playerGettingState){
          playerGettingState.showPlays = playerSettingState.showPlays;
        }
      })
    }

    loadData(){
      GameApi.requestGames().then(data => {
        var updatedGames = this.transferStateToUpdatedGames(data);
        this.setState({games: updatedGames});
      });
    }

    componentDidMount(){
        var intervalId = setInterval(() => { this.loadData(); },7500);
        this.setState({intervalId : intervalId});
        this.loadData()
    }
    
    componentWillUnmount() {
        clearInterval(this.state.intervalId);
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
            <Layout>
                <div className="row">
                <div className="col-lg-9">
                    <FilterBar />
                    <div id="add-game-bar">
                        <Link to='/games/add' className="btn btn-primary btn-sm">Add Game</Link>
                    </div>
                    <GameContainer 
                        games={this.state.games}
                        onShowPlaysClick={this.onShowPlaysClick}
                        onShowDetailsClick={this.onShowDetailsClick}
                    />
                </div>
                <div className="col-lg-3">
                    <SidePanel />
                </div>
                </div>
            </Layout>
        );
    }
}