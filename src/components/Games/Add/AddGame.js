import React, { Component } from 'react';

export default class AddGame extends Component{
    render(){
        return(
            <div className="container">
                <div className="card">
                    <div className="card-header">
                        <strong>Add Game</strong>
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="input-group">
                                <select className="form-control">
                                    <option>League 1</option>
                                    <option>League 2</option>
                                </select>
                                <span className="input-group-btn">
                                    <button className="btn btn-secondary" type="button">Add A League</button>
                                </span>
                            </div>

                            <div className="clearfix"></div>
                            <div className="spacer"></div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="card">
                                        <div className="card-header">
                                            Your Team
                                        </div>
                                        <div className="card-body">
                                            <table className="table add-game">
                                                <thead>
                                                    <tr>
                                                        <th>Position</th>
                                                        <th>Player</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>WR</td>
                                                        <td>
                                                            <input type="text" className="form-control form-control-sm" placeholder="Start Typing" />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>QB</td>
                                                        <td>
                                                            <input type="text" className="form-control form-control-sm" placeholder="Start Typing" />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>RB</td>
                                                        <td>
                                                            <input type="text" className="form-control form-control-sm" placeholder="Start Typing" />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>TE</td>
                                                        <td>
                                                            <input type="text" className="form-control form-control-sm" placeholder="Start Typing" />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>PK</td>
                                                        <td>
                                                            <input type="text" className="form-control form-control-sm" placeholder="Start Typing" />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>DT</td>
                                                        <td>
                                                            <input type="text" className="form-control form-control-sm" placeholder="Start Typing" />
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card">
                                        <div className="card-header">
                                            Their Team
                                        </div>
                                        <div className="card-body">
                                            <table className="table add-game">
                                                <thead>
                                                    <tr>
                                                        <th>Position</th>
                                                        <th>Player</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>WR</td>
                                                        <td>
                                                            <input type="text" className="form-control form-control-sm" placeholder="Start Typing" />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>QB</td>
                                                        <td>
                                                            <input type="text" className="form-control form-control-sm" placeholder="Start Typing" />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>RB</td>
                                                        <td>
                                                            <input type="text" className="form-control form-control-sm" placeholder="Start Typing" />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>TE</td>
                                                        <td>
                                                            <input type="text" className="form-control form-control-sm" placeholder="Start Typing" />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>PK</td>
                                                        <td>
                                                            <input type="text" className="form-control form-control-sm" placeholder="Start Typing" />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>DT</td>
                                                        <td>
                                                            <input type="text" className="form-control form-control-sm" placeholder="Start Typing" />
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="spacer"></div>
                            <button className="btn btn-primary btn-block">Save Game</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}