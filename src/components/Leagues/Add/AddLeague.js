import React, { Component } from 'react';

export default class AddGame extends Component{
    render(){
        return(
            <div className="card add-league" hidden={(this.props.show ? ""  : "hidden")}>
                <div className="card-header text-white bg-success">
                    <strong><i className="fa fa-plus"></i> Add A League</strong>
                </div>
                <div className="card-body">
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
                    <div className="btn-toolbar">
                        <button type="button" className="btn btn-primary">Save League</button>
                        <button type="button" className="btn btn-danger" onClick={this.props.toggle}>Cancel</button>
                    </div>
                </div>
            </div>
        )
    }
}