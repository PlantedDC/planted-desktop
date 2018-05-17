import React from 'react';
import logo from './images/logo_planted.png';
import {Link} from 'react-router-dom';

let LandingPage = (props) =>
    <div className="landing-page">
        <img src={logo} className="logo-img" alt=""/>

        <div className="landing-page-buttons">
        <Link to="/login" >Login</Link>

        <Link to="/register">Register</Link>
        </div>
    </div>


export default LandingPage;
