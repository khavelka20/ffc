import React, { Component } from 'react';
import Layout from '../../Layout/Layout.js';
import AddLeague from '../../Leagues/Add/AddLeague.js';

export default class AddGame extends Component{
    constructor(){
        super();
        this.state = {
            showAddLeague: false
        }
        this.toggleOnShowAddLeague = this.toggleOnShowAddLeague.bind(this);
    }

    toggleOnShowAddLeague(){
        this.setState({showAddLeague: !this.state.showAddLeague});
    }

    render(){
        return(
            <Layout>
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
                                <button type="button" className="btn btn-secondary" onClick={this.toggleOnShowAddLeague}>Add League</button>
                                </span>
                            </div>
                            <AddLeague 
                                show={this.state.showAddLeague}
                                toggle={this.toggleOnShowAddLeague}
                            />
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
                            <div className="btn-toolbar">
                                <button type="button" className="btn btn-primary">Save Game</button>
                                <button type="button" className="btn btn-danger">Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            </Layout>
        );
    }
}