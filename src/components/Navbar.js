import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import logo from '../images/logo.png';
import {FaAlignRight} from 'react-icons/fa';
import styled from 'styled-components';

export default class Navbar extends Component {
    //set the state of navbar open
    state = {
        isNavOpen: false
    }

    //set function 
    handleNavbar =() => {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }
    render() {
        return (
            <nav className="navbar-fluid">
                <div className="nav-center">
                    <div className="nav-header">
                        <Link>
                            <Link to="/">
                                <img to="/" src={logo} alt="navbar-image" style={{width:220, height:60}}/>
                            </Link>
                            <button type="button" className="nav-btn" onClick={this.handleNavbar}>
                                <FaAlignRight className="nav-icon" />
                            </button>
                        </Link>
                    </div>
                    
                    <div className={this.state.isNavOpen? "nav-links show-nav" : "nav-links"}>
                        <li>
                            <Link to="/" onClick={this.handleNavbar}>Home</Link>
                            <Link to="/projects" onClick={this.handleNavbar}>Projects</Link>
                        </li>
                    </div>
                </div>
            </nav>
        )
    }
}