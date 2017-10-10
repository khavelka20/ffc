import React, { Component } from 'react';

export default class LeagueOption extends Component{
    render(){
        return(
            <option value={this.props.id}>{this.props.name}</option>
        );
    }
}