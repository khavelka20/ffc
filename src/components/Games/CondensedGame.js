import React, { Component } from 'react';

class CondensedGame extends Component {
    render() {
        return (
            <React.Fragment>
                <td><i className="fa fa-bars clickable" onMouseDown={this.props.onDragComponent}></i></td>
                <td>{this.props.leagueName}</td>
                <td>{this.props.userTeamCurrentPoints}</td>
                <td>{this.props.opponentTeamCurrentPoints}</td>
                <td>
                    <span className={"badge " + (this.props.winning ? 'badge-success' : 'badge-danger')}>
                        {this.props.winning ? 'Winning' : 'Losing'}
                    </span>
                </td>
                <td>{this.props.sortOrder}</td>
            </React.Fragment>
        )
    }
}

export default CondensedGame;