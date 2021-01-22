import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from '../logo.PNG';

export default class Navbar extends Component {
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-sm  navbar-light px-sm-5 mt-1 mb-1">
                    <Link to="/">
                        <img src={logo} alt="logo" className="navLogo" />
                    </Link>
                    <ul className="navbar-nav align-items-center">
                        <li className="nav-item ml-5">
                            <Link to="/" className="nav-link">Products</Link>
                        </li>
                    </ul>
                    <span className="shopingCard ml-auto"><i className="fal fa-search"></i></span>
                    <span className="shopingCard"><i className="fad fa-user-alt"></i></span>
                    <Link to="/cart">
                        <span className="shopingCard">
                            <i className="fal fa-shopping-cart"></i>
                        </span>
                    </Link>
                </nav>
                <nav className="navbar navbar-expand-sm colourNav">
                    <h6>Invite Friends To Big Fashion Festival & Get Up To $150 For Every Person Who Visits</h6>
                </nav>
            </>
        )
    }
}
