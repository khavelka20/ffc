import React, { Component } from 'react';
import Header from './Header.js';

export default class Layout extends Component{
    render(){
        return(
            <div>
                <Header />
                <div className="container-fluid" id="main-container">
                    {this.props.children}
                </div>
            </div>
        );
    }
}