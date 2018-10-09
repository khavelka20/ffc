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
        this.onDrop = this.onDrop.bind(this);
    }

    onDragComponent() {
        this.setState({ isDraggable: true });
    }

    onDragStart(ev, id) {
        this.setState({ isDragging: true });
        ev.dataTransfer.setData("text/plain", id);
    }

    onDragEnd() {
        this.setState({ isDragging: false });
    }

    onDrop(ev){

    }

    onDragOver(ev, id){
        ev.preventDefault();
        let sourceId = ev.dataTransfer.getData("id");
        console.log(`Id : ${sourceId}`);
    }
    render() {
        return (
            <tr
                draggable={this.state.isDraggable}
                className={this.state.isDragging ? 'bg-warning' : ''}
                onDragStart={(e) => this.onDragStart(e, this.props.gameId)}
                onDragEnd={this.onDragEnd}
                onDragOver={(e) => this.onDragOver(e, this.props.gameId)}
                onDrop={this.onDrop}
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