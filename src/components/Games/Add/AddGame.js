import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class AddGame extends Component{
    render(){
        return(
            <div className="container">
                <div className="card">
                    <div className="card-header">
                        <strong>Add A Game</strong>
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="input-group">
                                <select className="form-control">
                                    <option>League 1</option>
                                    <option>League 2</option>
                                </select>
                                <span className="input-group-btn">
                                <Link to='/leagues/add' className="btn btn-secondary">Add League</Link>
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
                                                        <td>
                                                            <select className="form-control form-control-sm">
                                                                <option>QB</option>
                                                                <option>WR</option>
                                                                <option>RB</option>
                                                                <option>TE</option>
                                                                <option>PK</option>
                                                                <option>DT</option>
                                                            </select>
                                                        </td>
                                                        <td>
                                                            <input type="text" className="form-control form-control-sm" placeholder="Start Typing" />
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <button type="button" className="btn btn-success btn-sm"><i className="fa fa-plus"></i> Add Player</button>
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
                                                        <td>
                                                            <select className="form-control form-control-sm">
                                                                <option>QB</option>
                                                                <option>WR</option>
                                                                <option>RB</option>
                                                                <option>TE</option>
                                                                <option>PK</option>
                                                                <option>DT</option>
                                                            </select>
                                                        </td>
                                                        <td>
                                                            <input type="text" className="form-control form-control-sm" placeholder="Start Typing" />
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <button type="button" className="btn btn-success btn-sm"><i className="fa fa-plus"></i> Add Player</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="spacer"></div>
                            <button className="btn btn-primary pull-right">Save Game</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}