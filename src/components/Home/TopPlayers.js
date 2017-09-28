import React, { Component } from 'react';

export default class TopPlayers extends Component{
    render(){
        return(
            <div className="card">
                <div className="card-header">
                <i className="fa fa-line-chart" aria-hidden="true"></i> Top Players <span className="badge badge-dark">20</span>
                </div>    
                <div className="card-body">
                        <div>
                            <strong>Limit Players To: </strong>
                        </div>
                    <div id="top-players-filter">
                        <label>
                            <input className="form-check-input" type="checkbox" /> QB
                        </label>
                        <label>
                            <input className="form-check-input" type="checkbox" /> WR
                        </label>
                        <label>
                            <input className="form-check-input" type="checkbox" /> RB
                        </label>
                        <label>
                            <input className="form-check-input" type="checkbox" /> TE
                        </label>
                        <label>
                            <input className="form-check-input" type="checkbox" /> PK
                        </label>
                        <label>
                            <input className="form-check-input" type="checkbox" /> DT
                        </label>
                    </div>
                    
                    <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>Player</th>
                        <th>Position</th>
                        <th>Points</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><i className="fa fa-chevron-down show-more"></i> DeShone Kizer </td>
                            <td>QB</td>
                            <td>26</td>
                        </tr>
                        <tr>
                            <td>Jabrill Peppers</td>
                            <td>WR</td>
                            <td>20</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
            </div>
        );
    }
}