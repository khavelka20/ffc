import React, { Component } from 'react';
import TopPlayers from './TopPlayers.js'
import LatestScoringPlays from './LatestScoringPlays.js'

export default class SidePanel extends Component{
    render(){
        return(
            <div>
                <label><strong>Around The League</strong></label>
                <TopPlayers
                    players={this.props.topPlayers}
                    show={this.props.showTopPlayers}
                    onShowTopPlayersClick={this.props.onShowTopPlayersClick}
                />
                <br/>
                <LatestScoringPlays
                    plays={this.props.latestScoringPlays}
                    show={this.props.showLatestScoringPlays}
                    onshowLatestScoringPlaysClick={this.props.onshowLatestScoringPlaysClick}
                />
            </div>
        );
    }
}