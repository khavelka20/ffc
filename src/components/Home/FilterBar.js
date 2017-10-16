import React, { Component } from 'react';
import LeagueOption from './LeagueOption.js';

export default class FilterBar extends Component{
    render(){
        return(
            <div>
                <div className="row">
                    <div className="col">
                        <div className="form-group">
                            <label><strong>Leauge</strong></label>
                            <select className="form-control form-control-sm" onChange={this.props.onLeagueChange}>
                                <option>All</option>
                                {this.props.leagues.map((league, index) => {
                                    return(
                                        <LeagueOption 
                                            key={league.Id}
                                            name={league.Name}
                                            id={league.Id}
                                        />
                                    )
                                })}
                            </select>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-group">
                        <label><strong>Sort</strong></label>
                        <select className="form-control form-control-sm">
                            <option>Default</option>
                            <option>League 1</option>
                            <option>League 2</option>
                            <option>League 3</option>
                            <option>League 4</option>
                        </select>
                    </div>
                    </div>
                    <div className="col">
                        <div className="form-group">
                            <label><strong>Filter</strong></label>
                            <select className="form-control form-control-sm">
                                <option>None</option>
                                <option>Games I am Winning</option>
                                <option>Games I am Losing</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}