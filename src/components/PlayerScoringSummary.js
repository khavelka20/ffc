import React, { Component } from 'react';
import PlayerScoringDetails from './PlayerScoringDetails'
export default class PlayerScoringSummary extends Component{
    render(){
        return(
            <tbody>
            <tr>
                <td className="pointer">
                    <i className="fa fa-chevron-down show-more"></i> {this.props.name}
                </td> 
                <td>
                    {this.props.position}
                </td>
                <td>
                    {this.props.score}
                </td>
            </tr>
            <tr>
                <th colSpan={2}>Play</th>
                <th>Score</th>
            </tr>
                {this.props.plays.map(function(play, index){
                    return(
                        <PlayerScoringDetails 
                            key={play.id}
                            description={play.description}
                            score={play.score}
                            showPlays={this.props.showPlays}
                        />
                    )
                },this)}
            </tbody>
            
        );
    }
}