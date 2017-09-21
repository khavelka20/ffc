import React, { Component } from 'react';

export default class TopPlayers extends Component{
    render(){
        return(
            <div className="card">
                <div className="card-header bg-dark text-white">
                    Top Players (20)
                </div>    
                <div className="card-body">
                    <div className="card">
                        <div className="card-body">
                        <div className="card-title">
                            Limit Results To <span className="badge badge-primary">All</span>
                        </div>
                        <hr />
                            <div className="form-check form-check-inline">
                                <label className="form-check-label">
                                    <input className="form-check-input" type="checkbox" /> WR
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <label className="form-check-label">
                                    <input className="form-check-input" type="checkbox" /> RB
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <label className="form-check-label">
                                    <input className="form-check-input" type="checkbox" /> QB
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <label className="form-check-label">
                                    <input className="form-check-input" type="checkbox" /> DT
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <label className="form-check-label">
                                    <input className="form-check-input" type="checkbox" /> PK
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <label className="form-check-label">
                                    <input className="form-check-input" type="checkbox" /> TE
                                </label>
                            </div>
                        </div>
                    </div>
                    
                    <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>Player</th>
                        <th>Points</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><i className="fa fa-chevron-down show-more"></i> DeShone Kizer </td>
                            <td>26</td>
                        </tr>
                        <tr>
                            <td>Jabrill Pepper</td>
                            <td>20</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
            </div>
        );
    }
}