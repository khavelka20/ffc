import React, { Component } from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

export default class CondensedGame extends Component{
    render(){
        return(
            <tr>
                <td>{this.props.leagueName}</td>
                <td>{this.props.userTeamCurrentPoints}</td>
                <td>{this.props.opponentTeamCurrentPoints}</td>
                <td>
                    <span className={"badge " + (this.props.winning ? 'badge-success' : 'badge-danger')}>
                        {this.props.winning ? 'Winning' : 'Losing'}
                    </span>
                </td>
                
            </tr>
        )
    }
}