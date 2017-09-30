import React, { Component } from 'react';

export default class AddGame extends Component{
    render(){
        return(
            <div className="container">
                <div className="card">
                    <div className="card-header">
                        <strong><i className="fa fa-plus"></i> Add A League</strong>
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label>League Name</label>
                                <input type="text" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label>Select Scoring System</label>
                                <select className="form-control">
                                <option>PPR</option>
                                <option>NON-PPR</option>
                                </select>
                            </div>
                            <button type="button" className="btn btn-primary pull-right">Save League</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}