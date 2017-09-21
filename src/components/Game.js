import React, { Component } from 'react';

export default class Game extends Component{
    render(){
        return(
            <div className="col-md-4">
                <div className={"card game " + (this.props.winning ? 'border-success' : 'border-danger')}>
                    <div className="card-header">
                        <div className="card-title">
                            League 1
                            <span className={"badge " + (this.props.winning ? 'badge-success' : 'badge-danger')}>
                                Status
                            </span>
                        </div>
                        <hr />
                            <div className="row">
                                <div className="col-4 team-name">
                                    <strong>Your Team</strong>
                                </div>
                                <div className="col-2 score">
                                    15
                                </div>
                                <div className="col-4 team-name">
                                    <strong>Their Team</strong>
                                </div>
                                <div className="col-2 score">
                                    14
                                </div>
                            </div>
                        </div>
                    <div className="card-body" hidden>
                        
                    </div>
                </div>
            </div>
        );
    }
}