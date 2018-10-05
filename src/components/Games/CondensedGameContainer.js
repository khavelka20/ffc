import React, { Component } from 'react';
import CondensedGame from './CondensedGame';

class CondensedGameContainer extends Component {
    
    constructor(){
        super();

        this.state = {
            isDraggable: false
        }
    }
    
    dragComponent(){
        this.setState({isDraggable: true});
    }

    render() {
        return (
            <tr draggable={this.state.isDraggable}>
                <CondensedGame
                    leagueName={this.props.leagueName}
                    userTeamCurrentPoints={this.props.userTeamCurrentPoints}
                    opponentTeamCurrentPoints={this.props.opponentTeamCurrentPoints}
                    winning={this.props.winning}/>
            </tr>
        )
    }
}

export default CondensedGameContainer;