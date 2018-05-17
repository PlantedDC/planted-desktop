import React, {Component} from 'react';
import logo from './images/logo_planted.png';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import {submitUserLoginInformation} from './helperFunctions/Login';
import {updateToken, updateIsUserLoggedIn} from '../actions';

class LoginScreenDumb extends Component {
    constructor(props) {
        super(props);
        this.state = { email: '', password: '' };
      }

    loginUser (event) {
        event.preventDefault();
        let {dispatch} = this.props;
        let {email, password} = this.state;
        let userEmail = (email.trim()).toLowerCase();
        let userPassword = password.trim();
        submitUserLoginInformation(userEmail, userPassword)
        .then((res) => {
            if (res) {
                dispatch(updateToken(res));
                dispatch(updateIsUserLoggedIn());
                this.setState({email: '', password: ''});
                this.props.history.push('/home');
            } else {
                this.setState({email: '', password: ''});
            }
        })
    }

    render() {

        return <div className="login-screen">
        <img 
        src={logo}
        className="logo-img" alt=""
        />
        <form onSubmit={(event) => {
            this.loginUser(event)
        }}
        className="login-form"
        >
        <p >Email:</p>
        <input 
            placeholder='email@planted.com'
            onChange={(event) => this.setState({email: event.target.value})}
            value={this.state.email}/>
        <p>Password:</p>
        <input
            type="password"
            placeholder='Password'
            onChange={(event) => this.setState({password: event.target.value})}
            value={this.state.password}
        />
            <button type="submit">Submit</button>
        </form>
        <div className="register">
            <p >Not Registered?</p>
            <Link to="/register" > Create an account </Link>
        </div>
        </div>
}
}


let mapDispatchToProps = (dispatch) => {
    return { dispatch: dispatch };
}

let LoginScreen = connect(
    null,
    mapDispatchToProps
)(LoginScreenDumb);

export default LoginScreen;
