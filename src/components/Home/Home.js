import React, { Component } from 'react';
import FilterBar from  './FilterBar.js';
import GameContainer from '../Games/GameContainer.js';
import SidePanel from './SidePanel.js';
import Layout from "../Layout/Layout.js";
import LoadingOverlay from "../Layout/LoadingOverlay.js";
import { Link } from 'react-router-dom'
import HomeApi from '../../DataAccess/HomeApi.js';
import _ from 'underscore';

export default class Home extends Component{

    constructor(){
        super();

        this.state = {
            games: [],
            intervalId: null,
            scoringPlays: [],
            leagues: [],
            topPlayersViewModel:{
                Players: [],
                Filtered: false,
                FilteredTo: "All",
                ScoringSystem:""
            },
            watchedPlayersViewModel:{
                Players:[]
            },
            showWatchedPlayers:false,
            showTopPlayers: false,
            showLatestScoringPlays: false,
            leagueFilter: "",
            initialLoad: true
        }

        this.onShowStatsClick = this.onShowStatsClick.bind(this);
        this.onShowDetailsClick = this.onShowDetailsClick.bind(this);
        this.loadData = this.loadData.bind(this);
        this.onLeagueChange = this.onLeagueChange.bind(this);
        this.onShowTopPlayersClick = this.onShowTopPlayersClick.bind(this);
        this.onshowLatestScoringPlaysClick = this.onshowLatestScoringPlaysClick.bind(this);
        this.onShowWatchedPlayersClick = this.onShowWatchedPlayersClick.bind(this);
        this.onTopPlayersFilterChange = this.onTopPlayersFilterChange.bind(this);
        this.onShowWatchedPlayerStatsClick = this.onShowWatchedPlayerStatsClick.bind(this);
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
          playerGettingState.showStats = playerSettingState.showStats;
        }
      })
    }

    loadData(){
        var self = this;
        HomeApi.requestViewModel().then(data => {
            var updatedGames = self.transferStateToUpdatedGames(data.Games);
            var updatedTopPlayersViewModel = self.transferStateToUpdateTopPlayersViewModel(data.TopPlayersViewModel);
            this.setState({games: updatedGames});
            this.setState({scoringPlays: data.ScoringPlays});
            this.setState({leagues: data.Leagues});
            this.setState({topPlayersViewModel: updatedTopPlayersViewModel});
            this.setState({watchedPlayersViewModel: data.WatchedPlayersVM});
            this.setState({initialLoad: false});
        });
    }

    transferStateToUpdateTopPlayersViewModel(updatedTopPlayersViewModel){
        updatedTopPlayersViewModel.FilteredTo = this.state.topPlayersViewModel.FilteredTo;
        updatedTopPlayersViewModel.Filtered = this.state.topPlayersViewModel.Filtered;
        return updatedTopPlayersViewModel;
    }

    componentDidMount(){
        var intervalId = setInterval(() => { this.loadData(); }, 30000);
        this.setState({intervalId : intervalId});
        this.loadData()
    }
    
    componentWillUnmount() {
        clearInterval(this.state.intervalId);
    }

    onLeagueChange(event){
        console.log(event.target.value);
    }

    onShowTopPlayersClick(){
        this.setState({showTopPlayers : !this.state.showTopPlayers});
    }

    onshowLatestScoringPlaysClick(){
        this.setState({showLatestScoringPlays : !this.state.showLatestScoringPlays});
    }

    onShowWatchedPlayersClick(){
        this.setState({showWatchedPlayers : !this.state.showWatchedPlayers});
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

    onShowWatchedPlayerStatsClick(playerId){
        let updatedWatchedPlayersViewModel = this.state.watchedPlayersViewModel;

        var watchedPlayerToShowStats = updatedWatchedPlayersViewModel.Players.filter(function (player, index){
            return player.Id === playerId;
        }, playerId);

        watchedPlayerToShowStats[0].showStats = !watchedPlayerToShowStats[0].showStats;

        this.setState({watchedPlayersViewModel: updatedWatchedPlayersViewModel})
    }

    onTopPlayersFilterChange(event){
        var selectedValue = event.target.value;
        let updatedTopPlayerViewModel = this.state.topPlayersViewModel;
        updatedTopPlayerViewModel.Filtered = selectedValue !== "All";
        updatedTopPlayerViewModel.FilteredTo = selectedValue;
        updatedTopPlayerViewModel.Players = this.filterTopPlayers(updatedTopPlayerViewModel.FilteredTo, updatedTopPlayerViewModel.Players);
        this.setState({topPlayersViewModel: updatedTopPlayerViewModel});
    }

    filterTopPlayers(filter, players){
        _.each(players, (player) =>{
            if(filter !== "All"){
                player.Show = player.Position === filter;   
            }
            else{
                player.Show = true;
            }
        });

        return players;
    }

    render(){
        return(
            <Layout>
                <LoadingOverlay 
                    show={this.state.initialLoad}
                />
                <div className="row">
                    <div className="col-xl-9">
                        <FilterBar 
                            leagues={this.state.leagues}
                            onLeagueChange={this.onLeagueChange}
                        />
                        <div id="add-game-bar">
                            <Link to='/games/add' className="btn btn-primary btn-sm">Add Game</Link>
                        </div>
                        <div className="alert alert-primary" role="alert">
                            The stats provided by this application are not official.
                        </div>
                        <GameContainer 
                            games={this.state.games}
                            onShowStatsClick={this.onShowStatsClick}
                            onShowDetailsClick={this.onShowDetailsClick}
                        />
                    </div>
                    <div className="col-xl-3">
                        <SidePanel 
                            latestScoringPlays={this.state.scoringPlays}
                            topPlayers={this.state.topPlayersViewModel.Players}
                            topPlayersFilter={this.state.topPlayersViewModel.FilteredTo}
                            onTopPlayersFilterChange={this.onTopPlayersFilterChange}
                            showTopPlayers={this.state.showTopPlayers}
                            showLatestScoringPlays={this.state.showLatestScoringPlays}
                            showWatchedPlayers={this.state.showWatchedPlayers}
                            onShowTopPlayersClick={this.onShowTopPlayersClick}
                            onshowLatestScoringPlaysClick={this.onshowLatestScoringPlaysClick}
                            onShowWatchedPlayersClick={this.onShowWatchedPlayersClick}
                            watchedPlayers={this.state.watchedPlayersViewModel.Players}
                            onShowWatchedPlayerStatsClick={this.onShowWatchedPlayerStatsClick}
                        />
                    </div>
                </div>
            </Layout>
        );
    }
}