import React, { Component } from 'react';

export default class LoadingOverlay extends Component{
    render(){
        return(
            <div className={"loading-overlay" + (this.props.show ? "" : " hidden")}>
                <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i> <span className="sr-only">Loading...</span>
            </div>
        );
    }
}