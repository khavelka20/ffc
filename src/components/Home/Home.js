import React, { Component } from 'react';
import GameContainer from '../Games/GameContainer.js';
import SidePanel from './SidePanel.js';
import Layout from "../Layout/Layout.js";
import LoadingOverlay from "../Layout/LoadingOverlay.js";
import { Link } from 'react-router-dom'
import HomeApi from '../../DataAccess/HomeApi.js';
import _ from 'underscore';

class Home extends Component {

    constructor() {
        super();

        this.state = {
            games: [],
            compactMode: true,
            intervalId: null,
            scoringPlays: [],
            leagues: [],
            topPlayersViewModel: {
                PlayersToDisplay: [],
                Filtered: false,
                FilteredTo: "All",
                ScoringSystem: ""
            },
            watchedPlayersViewModel: {
                Players: []
            },
            showWatchedPlayers: false,
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
        this.onShowTopPlayerStatsClick = this.onShowTopPlayerStatsClick.bind(this);
        this.onChangeCompactModeClick = this.onChangeCompactModeClick.bind(this);
    }

    getGamesShowingDetails() {
        var gamesToShowDetails = _.filter(this.state.games.slice(), (game) => {
            return game.showDetails;
        });

        return gamesToShowDetails;
    }

    transferStateToUpdatedGames(updatedGames) {
        var gamesShowingDetails = this.getGamesShowingDetails();

        _.each(gamesShowingDetails, (gameShowingDetails) => {
            var gameToGetState = _.findWhere(updatedGames, { Id: gameShowingDetails.Id });
            if (gameToGetState) {
                gameToGetState.showDetails = true;
                this.transerStateToPlayers(gameShowingDetails.UserTeam.Players, gameToGetState.UserTeam.Players);
                this.transerStateToPlayers(gameShowingDetails.OpponentTeam.Players, gameToGetState.OpponentTeam.Players);
            }
        }, this);

        return updatedGames;
    }

    transerStateToPlayers(playersSettingState, playersGettingState) {
        _.each(playersSettingState, (playerSettingState) => {
            var playerGettingState = _.findWhere(playersGettingState, { Id: playerSettingState.Id })
            if (playerGettingState) {
                playerGettingState.showStats = playerSettingState.showStats;
            }
        })
    }

    transferStateToWatchedPlayersViewModel(updatedWatchedPlayersViewModel) {
        this.transerStateToPlayers(this.state.watchedPlayersViewModel.Players, updatedWatchedPlayersViewModel.Players);
        return updatedWatchedPlayersViewModel;
    }

    sortGames(sortPlayers, games) {
        var updatedGames = this.transferStateToUpdatedGames(games);

        updatedGames.sort(function (a, b) {
            return a.League.SortOrder - b.League.SortOrder;
        });

        if (sortPlayers) {
            _.each(updatedGames, (game) => {
                game.UserTeam.Players.sort(function (a, b) {
                    return a.PositionNumber > b.PositionNumber;
                });
            });
        };

        this.setState({ games: updatedGames });
    }

    loadData() {
        var self = this;
        HomeApi.requestViewModel().then(data => {
            var updatedTopPlayersViewModel = self.transferStateToUpdatedTopPlayersViewModel(data.TopPlayersViewModel);
            var updatedWatchedPlayersViewModel = self.transferStateToWatchedPlayersViewModel(data.WatchedPlayersVM);

            this.sortGames(true, data.Games);

            updatedWatchedPlayersViewModel.Players.sort(function (a, b) {
                return a.PositionNumber > b.PositionNumber;
            });

            this.setState({ scoringPlays: data.ScoringPlays });
            this.setState({ leagues: data.Leagues });
            this.setState({ topPlayersViewModel: updatedTopPlayersViewModel });
            this.setState({ watchedPlayersViewModel: updatedWatchedPlayersViewModel });
            this.setState({ initialLoad: false });
        });
    }

    transferStateToUpdatedTopPlayersViewModel(updatedTopPlayersViewModel) {
        updatedTopPlayersViewModel.FilteredTo = this.state.topPlayersViewModel.FilteredTo;
        updatedTopPlayersViewModel.Filtered = this.state.topPlayersViewModel.Filtered;
        updatedTopPlayersViewModel.PlayersToDisplay = this.getTopPlayersList(updatedTopPlayersViewModel.FilteredTo, updatedTopPlayersViewModel);
        this.showPlayers(updatedTopPlayersViewModel.PlayersToDisplay);
        if (!this.state.topPlayersViewModel.Filtered)
            this.transerStateToPlayers(this.state.topPlayersViewModel.PlayersToDisplay, updatedTopPlayersViewModel.Players);
        else
            this.transerStateToPlayers(
                this.state.topPlayersViewModel.PlayersToDisplay, updatedTopPlayersViewModel["Players" + this.state.topPlayersViewModel.FilteredTo]
            );
        return updatedTopPlayersViewModel;
    }

    componentDidMount() {
        var intervalId = setInterval(() => { this.loadData(); }, 30000);
        this.setState({ intervalId: intervalId });
        this.loadData()
    }

    componentWillUnmount() {
        clearInterval(this.state.intervalId);
    }

    onLeagueChange(event) {
        console.log(event.target.value);
    }

    onShowTopPlayersClick() {
        this.setState({ showTopPlayers: !this.state.showTopPlayers });
    }

    onshowLatestScoringPlaysClick() {
        this.setState({ showLatestScoringPlays: !this.state.showLatestScoringPlays });
    }

    onShowWatchedPlayersClick() {
        this.setState({ showWatchedPlayers: !this.state.showWatchedPlayers });
    }

    onShowDetailsClick(i) {
        var games = this.state.games.slice();
        var game = games[i];
        game.showDetails = !game.showDetails;
        this.setState({ games: games });
    }

    onShowTopPlayerStatsClick(playerId) {
        let updatedTopPlayersViewModel = this.state.topPlayersViewModel;
        if (!this.state.topPlayersViewModel.Filtered)
            this.showPlayerStats(playerId, updatedTopPlayersViewModel.Players);
        else
            this.showPlayerStats(playerId, updatedTopPlayersViewModel["Players" + this.state.topPlayersViewModel.FilteredTo]);
        this.setState({ topPlayersViewModel: updatedTopPlayersViewModel })
    }

    onShowStatsClick(_gameId, _playerId, _isUserTeam) {
        var games = this.state.games.slice();

        var game = games.filter(function (game, index) {
            return game.Id === _gameId
        }, _gameId)

        var players = _isUserTeam ? game[0].UserTeam.Players : game[0].OpponentTeam.Players;

        this.showPlayerStats(_playerId, players);

        this.setState({ games: games });
    }

    onShowWatchedPlayerStatsClick(playerId) {
        let updatedWatchedPlayersViewModel = this.state.watchedPlayersViewModel;
        this.showPlayerStats(playerId, updatedWatchedPlayersViewModel.Players);
        this.setState({ watchedPlayersViewModel: updatedWatchedPlayersViewModel })
    }

    showPlayerStats(playerId, playerList) {
        var playerToShowStats = playerList.filter((player, index) => {
            return player.Id === playerId
        }, playerId)

        playerToShowStats[0].showStats = !playerToShowStats[0].showStats;
    }

    onTopPlayersFilterChange(event) {
        var selectedValue = event.target.value;
        let updatedTopPlayersViewModel = this.state.topPlayersViewModel;
        updatedTopPlayersViewModel.Filtered = selectedValue !== "All";
        updatedTopPlayersViewModel.FilteredTo = selectedValue;
        updatedTopPlayersViewModel.PlayersToDisplay = this.getTopPlayersList(updatedTopPlayersViewModel.FilteredTo, updatedTopPlayersViewModel);
        this.showPlayers(updatedTopPlayersViewModel.PlayersToDisplay);
        this.setState({ topPlayersViewModel: updatedTopPlayersViewModel });
    }

    onChangeCompactModeClick(event) {
        this.setState({ compactMode: !this.state.compactMode });
    }

    showPlayers(players) {
        players.map((player) => {
            player.Show = true;
        })
    }

    getTopPlayersList(filter, topPlayersViewModel) {
        var topPlayersList = [];

        if (filter === "All")
            topPlayersList = topPlayersViewModel.Players;
        else
            topPlayersList = topPlayersViewModel["Players" + filter];

        return topPlayersList;
    }

    onSortEnd() {
        this.sortGames(false, this);
    }

    render() {
        return (
            <Layout>
                <LoadingOverlay
                    show={this.state.initialLoad}
                />
                <div className="row">
                    <div className="col-xl-9">
                        <div id="add-game-bar">
                            <Link to='/games/add' className="btn btn-primary btn-sm">Add Game</Link>
                        </div>
                        <GameContainer
                            onSortEnd={this.onSortEnd}
                            compactMode={this.state.compactMode}
                            onChangeCompactModeClick={this.onChangeCompactModeClick}
                            games={this.state.games}
                            onShowStatsClick={this.onShowStatsClick}
                            onShowDetailsClick={this.onShowDetailsClick}
                        />
                    </div>
                    <div className="col-xl-3">
                        <SidePanel
                            latestScoringPlays={this.state.scoringPlays}
                            topPlayers={this.state.topPlayersViewModel.PlayersToDisplay}
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
                            onShowTopPlayerStatsClick={this.onShowTopPlayerStatsClick}
                        />
                    </div>
                </div>
            </Layout>
        );
    }
}

export default Home;