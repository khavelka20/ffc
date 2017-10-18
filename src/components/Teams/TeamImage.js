import React, { Component } from 'react';

export default class TeamImage extends Component{
    render(){
        return(
            <img src={"https://static.nfl.com/static/site/img/logos/svg/teams/" + (this.props.teamName + ".svg")} alt={this.props.teamName} style={{"width": this.props.width + "px"}}/>
        );
    }
}