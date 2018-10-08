import React, { Component } from 'react';
import CondensedGame from './CondensedGame';

class CondensedGameContainer extends Component {

    constructor() {
        super();

        this.state = {
            isDraggable: false,
            isDragging: false
        }

        this.onDragComponent = this.onDragComponent.bind(this);
        this.onDragStart = this.onDragStart.bind(this);
        this.onDragEnd = this.onDragEnd.bind(this);
        this.onDragOver = this.onDragOver.bind(this);
    }

    onDragComponent() {
        this.setState({ isDraggable: true });
    }

    onDragStart(ev) {
        console.log(ev);
        this.setState({ isDragging: true });
    }

    onDragEnd() {
        this.setState({ isDragging: false });
    }

    onDragOver(ev){
        ev.preventDefault();
        let 
    }
    render() {
        return (
            <tr
                draggable={this.state.isDraggable}
                className={this.state.isDragging ? 'bg-warning' : ''}
                onDragStart={this.onDragStart}
                onDragEnd={this.onDragEnd}
                onDragOver={this.onDragOver}
                >
                <CondensedGame
                    onDragComponent={this.onDragComponent}
                    leagueName={this.props.leagueName}
                    userTeamCurrentPoints={this.props.userTeamCurrentPoints}
                    opponentTeamCurrentPoints={this.props.opponentTeamCurrentPoints}
                    winning={this.props.winning} />
            </tr>
        )
    }
}

export default CondensedGameContainer;