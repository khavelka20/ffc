import React, { Component } from 'react';
import TopPlayers from './TopPlayers.js'
import LatestScoringPlays from './LatestScoringPlays.js'

export default class SidePanel extends Component{
    render(){
        return(
            <div>
                <label><strong>Information</strong></label>
                <TopPlayers />
                <br/>
                <LatestScoringPlays />
            </div>
        );
    }
}