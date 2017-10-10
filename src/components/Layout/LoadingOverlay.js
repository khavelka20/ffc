import React, { Component } from 'react';

export default class ScoringPlay extends Component{
    render(){
        return(
            <div className={"loading-overlay" + this.props.show ? " hidden" : ""}></div>
        );
    }
}