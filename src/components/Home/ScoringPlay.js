import React, { Component } from 'react';
import moment from 'moment';

export default class ScoringPlay extends Component{
    render(){
        return(
            <tr>
               <td>
                    <strong>{moment(this.props.createdAt).fromNow()}</strong>: 
                    <br/>
                    {this.props.description}
                </td>
            </tr>
        );
    }
}