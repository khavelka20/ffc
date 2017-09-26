import React, { Component } from 'react';

export default class DataManagementControl extends Component{
    render(){
        return(
            <div id="data-management-control">
                <button className="btn btn-primary btn-sm"><i className="fa fa-plus" aria-hidden="true"></i> Add Game</button>
            </div>
        )
    }
}