import React, { Component } from 'react';
import TopPlayers from './TopPlayers.js'
import LatestScoringPlays from './LatestScoringPlays.js'
import WatchedPlayers from './WatchedPlayers.js'

export default class SidePanel extends Component{
    render(){
        return(
            <div id="around-the-league">
                <label><strong>Around The League</strong></label>
                <WatchedPlayers 
                    players={this.props.watchedPlayers}
                    show={this.props.showWatchedPlayers}
                    onShowWatchedPlayersClick={this.props.onShowWatchedPlayersClick}
                    onShowWatchedPlayerStatsClick={this.props.onShowWatchedPlayerStatsClick}
                />
                <TopPlayers
                    players={this.props.topPlayers}
                    show={this.props.showTopPlayers}
                    onShowTopPlayersClick={this.props.onShowTopPlayersClick}
                    filter={this.props.topPlayersFilter}
                    onTopPlayersFilterChange={this.props.onTopPlayersFilterChange}
                />
                
                <LatestScoringPlays
                    plays={this.props.latestScoringPlays}
                    show={this.props.showLatestScoringPlays}
                    onshowLatestScoringPlaysClick={this.props.onshowLatestScoringPlaysClick}
                />
            </div>
        );
    }
}