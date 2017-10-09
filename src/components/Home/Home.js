import React, { Component } from 'react';
import FilterBar from  './FilterBar.js';
import GameContainer from '../Games/GameContainer.js';
import SidePanel from './SidePanel.js';
import Layout from "../Layout/Layout.js";
import { Link } from 'react-router-dom'
import HomeApi from '../../DataAccess/HomeApi.js';
import _ from 'underscore';

export default class Home extends Component{

    constructor(){
        super();
        this.state = {
            games: [],
            intervalId: null,
            scoringPlays: []
        }

        this.onShowStatsClick = this.onShowStatsClick.bind(this);
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
            var gameToGetState = _.findWhere(updatedGames, {Id: gameShowingDetails.Id});
            if(gameToGetState){
              gameToGetState.showDetails = true;
              this.transerStateToPlayers(gameShowingDetails.UserTeam.Players, gameToGetState.UserTeam.Players);
              this.transerStateToPlayers(gameShowingDetails.OpponentTeam.Players, gameToGetState.OpponentTeam.Players);
            }
        }, this);

        return updatedGames;
    }

    transerStateToPlayers(playersSettingState, playersGettingState){
      _.each(playersSettingState, (playerSettingState) => {
        var playerGettingState = _.findWhere(playersGettingState, {Id: playerSettingState.Id})
        if(playerGettingState){
          playerGettingState.showPlays = playerSettingState.showPlays;
        }
      })
    }

    loadData(){
      HomeApi.requestViewModel().then(data => {
        var updatedGames = this.transferStateToUpdatedGames(data.Games);
        this.setState({games: updatedGames});
        this.setState({scoringPlays: data.ScoringPlays});
      });
    }

    componentDidMount(){
        var intervalId = setInterval(() => { this.loadData(); }, 30000);
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

    onShowStatsClick(_gameId, _playerId, _isUserTeam){
        var games = this.state.games.slice();
        
        var game = games.filter(function(game, index){
            return game.Id === _gameId
        }, _gameId)

        var players = _isUserTeam ? game[0].UserTeam.Players : game[0].OpponentTeam.Players;

        var player = players.filter(function(player, index){
            return player.Id === _playerId;
        }, _playerId)

        player[0].showStats = !player[0].showStats;

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
                        onShowStatsClick={this.onShowStatsClick}
                        onShowDetailsClick={this.onShowDetailsClick}
                    />
                </div>
                <div className="col-lg-3">
                    <SidePanel 
                        latestScoringPlays={this.state.scoringPlays}
                    />
                </div>
                </div>
            </Layout>
        );
    }
}