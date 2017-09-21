import React, { Component } from 'react';

export default class PlayerScoringSummary extends Component{
    render(){
        return(
            <span>{this.props.name}</span>
        );
    }
}