import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';

import {FirebaseContext} from '../Firebase'
import * as ROUTES from '../../constants/routes'

const SignUpPage = () => (
    <div>
        <h1>SignUp</h1>
        <FirebaseContext.Consumer>
            {firebase => <SignUpForm firebase={ firebase} />}
        </FirebaseContext.Consumer>
    </div>
  );

const INITIAL_STATE = {
    username:'',
    email:'',
    passwordOne:'',
    passwordTwo:'',
    error:'',
};

class SignUpForm extends Component {
    constructor(props){
        super(props);
        this.state={...INITIAL_STATE};
    }

    onSubmit= event =>{
        const { username, email, passwordOne}=this.state;
        this.props.firebase
        .doCreateUserWithEmailANdPassword(email,passwordOne)
        .then(authUser => {
            this.state ({...INITIAL_STATE});
            this.props.history.push(ROUTES.HOME);
        })
        .catch(error =>{
            this.state({ error });
        });
        /* evita la recarga del navegador*/
        event.preventDefault();
  
    };

    /* The input fields need to update the local state of the component by using a onChange handler*/
    onChange= event =>{
        this.setState({[event.target.name]: event.target.value});
    };

    render() {
        const{
            username,
            email,
            passwordOne,
            passwordTwo,
            error,
        }= this.state;
        const isInvalid =
        passwordOne !== passwordTwo ||
        passwordOne === '' ||
        email === '' ||
        username === '';
        return (
          <form onSubmit={this.onSubmit}>
            <input type="text"
            name="username"
            value={username}
            onChange={this.onChange}
            placeholder="FullName"
            />
            <input type="email"
              value={email}
              name="email"
              onChange={this.onChange}
              placeholder="FullName"/>

            <input type="passwordOne"
              value={passwordOne}
              name="passwordOne"
              onChange={this.onChange}
              placeholder="Password"/>

            <input type="passwordTwo"
              value={passwordTwo}
              name="passwordTwo"
              onChange={this.onChange}
              placeholder="Confirm Password"/>

            <button disable={isInvalid} type="submit">Sign Up</button>

            {error && <p>{error.message}</p>}  
          </form>
        )
    }
}

const SignUpLink = () =>(
    <p>
        Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
    </p>
);

export default SignUpPage;
export { SignUpForm,SignUpLink };
