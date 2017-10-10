import React, { Component } from 'react';
import moment from 'moment';

export default class ScoringPlay extends Component{
    render(){
        return(
            <tr>
               <td>
                    <strong>
                        <i className="fa fa-clock-o" aria-hidden="true"></i> {moment(this.props.createdAt).fromNow()} : 
                    </strong>
                    {this.props.description}
                </td>
            </tr>
        );
    }
}