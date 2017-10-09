import React, { Component } from 'react';
import ScoringPlay from './ScoringPlay.js';

export default class LatestScoringPlays extends Component{
    render(){
        return(
            <div className="card">
                <div className="card-header">
                    <i className="fa fa-clock-o" aria-hidden="true"></i> Latest Scoring Plays <span className="badge badge-dark">25</span>
                </div>    
                <div className="card-body">
                    <table className="table table-striped latest-scoring-plays">
                        <tbody>
                            {this.props.plays.map((play) =>{
                                return(
                                    <ScoringPlay
                                        key={play.Id}
                                        createdAt={play.CreatedAt}
                                        description={play.Description}
                                    />
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}