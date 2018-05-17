import React, {Component} from 'react';
import logo from './images/logo_planted.png';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import {submitNewUserInformation} from './helperFunctions/Login';
import {updateUserObject, updateIsUserLoggedIn} from '../actions';

class RegisterScreenDumb extends Component {
    constructor(props) {
        super(props);
        this.state = { email: '', password: '', username: '', avatar: '' };
      }

    registerUser() {
        let {navigation, dispatch} = this.props;
        let {email, password, username, avatar} = this.state;
        submitNewUserInformation(email, password, username, avatar)
        .then(res => dispatch(updateUserObject(res)))
        .then(dispatch(updateIsUserLoggedIn()))
        .then(this.setState({email: '', password: '', username: ''}))
        .then(this.props.history.push('/home'))
    }

    render() {

        return <div className="login-screen">
        <img src={logo}
        className="logo-img"/>
        <form onSubmit={(event) => {
            this.registerUser(event)
        }}
        className="login-form">
        <p>Create a username:</p>
        <input 
            placeholder='username'
            onChange={(event) => this.setState({username: event.target.value})}
            value={this.state.username}/>
        <p>Enter your email:</p>
        <input 
            placeholder='email@planted.com'
            onChange={(event) => this.setState({email: event.target.value})}
            value={this.state.email}/>
        <p>Create a password:</p>
        <input
            type="password"
            placeholder='Password123'
            onChange={(event) => this.setState({password: event.target.value})}
            value={this.state.password}
        />
        <p>Link to Avatar:</p>
        <input
            placeholder='Image URL'
            onChange={(event) => this.setState({avatar: event.target.value})}
            value={this.state.avatar}
        />
            <button type="submit">Submit</button>
        </form>
        <div className="register">
            <p>Already Registered?</p>
            <Link to='/login'> Log In Here </Link>
        </div>
        </div>
}
}


let mapDispatchToProps = (dispatch) => {
    return { dispatch: dispatch };
}

let RegisterScreen = connect(
    null,
    mapDispatchToProps
)(RegisterScreenDumb);

export default RegisterScreen;