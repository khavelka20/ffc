import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class Header extends Component{
    render(){
        return(
            <div>
                <nav className="navbar navbar-dark bg-dark" id="main-header">
                    <Link to="/" className="navbar-brand" id="main-logo-link">
                        <img src="/img/ffc-logo.png" id="main-logo" alt="Fantasy Football Collective Logo"/>
                    </Link>
                </nav>
                <div id="red-stripe"></div>
            </div>
        );
    }
}