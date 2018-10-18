import React, { Component } from 'react';
import CondensedGame from './CondensedGame';
import classNames from 'classnames';

class CondensedGameContainer extends Component {

    constructor() {
        super();

        this.state = {
            isDraggable: false,
            isDragging: false,
            isEntered: false
        }

        this.onDragComponent = this.onDragComponent.bind(this);
        this.onDragStart = this.onDragStart.bind(this);
        this.onDragEnd = this.onDragEnd.bind(this);
        this.onDragOver = this.onDragOver.bind(this);
        this.onDrop = this.onDrop.bind(this);
        this.onDragEnter = this.onDragEnter.bind(this);
        this.onDragExit = this.onDragExit.bind(this);
    }

    onDragComponent() {
        this.setState({ isDraggable: true });
    }

    onDragStart(ev, id) {
        this.setState({ isDragging: true });
        ev.dataTransfer.setData("id", id);
    }

    onDragEnd() {
        this.setState({ isDragging: false });
    }

    onDrop(ev){
        let sourceId = ev.dataTransfer.getData("id");
        this.props.afterGameDropped(this.props.gameId, sourceId);
        this.setState({isEntered : false});
        this.setState({isDraggable : false});
        this.setState({isDragging : false}, () =>{
            console.log('isEntered : ' + this.state.isEntered);
            console.log('isDraggable : ' + this.state.isDraggable);
            console.log('isDragging : ' + this.state.isDragging);
        });
    }

    onDragEnter(){
        this.setState({isEntered : true});
    }

    onDragExit(){
        this.setState({isEntered : false});
    }
    onDragOver(ev){
        ev.preventDefault();
    }

    render() {
        var trClass = classNames({
            'dragging': this.state.isDragging,
            'isEntered': this.state.isEntered,
            '': !this.state.isDragging && !this.state.isEntered
        });

        return (
            <tr
                draggable={this.state.isDraggable}
                className={trClass}
                onDragStart={(e) => this.onDragStart(e, this.props.gameId)}
                onDragEnd={this.onDragEnd}
                onDragOver={(e) => this.onDragOver(e)}
                onDrop={this.onDrop}
                onDragEnter={this.onDragEnter}
                onDragExit={this.onDragExit}>
                <CondensedGame
                    sortOrder={this.props.sortOrder}
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