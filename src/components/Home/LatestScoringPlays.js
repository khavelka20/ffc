import React, { Component } from 'react';
import ScoringPlay from './ScoringPlay.js';

export default class LatestScoringPlays extends Component{
    render(){
        return(
            <div className="card">
                <div className="card-header clickable" onClick={this.props.onshowLatestScoringPlaysClick}>
                    <i className={"fa fa-chevron-" + (this.props.show ? "up" : "down")}></i> Latest Scoring Plays <span className="badge badge-dark">{this.props.plays.length}</span>
                </div>    
                <div className={"card-body" + (!this.props.show ? " hidden" : "")}>
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