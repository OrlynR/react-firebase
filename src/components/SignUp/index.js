import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FirebaseContext } from "../Firebase";
import * as ROUTES from "../../constants/routes";
import SignUpForm from "../SignUpForm";

export default class SignUpPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      passwordOne: "",
      passwordTwo: "",
      error: null
    };
  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

 
  onSubmit = event => {
    const { username, email, passwordOne } = this.state;
    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        this.setState({
          username: '',
          email: '',
          passwordOne:''
        });
        this.props.history.push('/cuenta');
      })
      .catch(error => {
        this.setState({ error });
      });
    event.preventDefault();
  };

  render() {
 
    return (
      <div>
        <h1>SignUp</h1>
        <FirebaseContext.Consumer>
        {firebase =><form onSubmit={this.onSubmit} firebase={firebase} >
            <input
              name="username"
              value={this.state.username}
              onChange={this.onChange}
              type="text"
              placeholder="Full Name"
            />
            <input
              name="email"
              value={this.state.email}
              onChange={this.onChange}
              type="text"
              placeholder="Email Address"
            />
            <input
              name="passwordOne"
              value={this.state.passwordOne}
              onChange={this.onChange}
              type="password"
              placeholder="Password"
            />
            <input
              name="passwordTwo"
              value={this.state.passwordTwo}
              onChange={this.onChange}
              type="password"
              placeholder="Confirm Password"
            />
            <button type="submit">
              Sign Up
            </button>
            
          </form>}
        </FirebaseContext.Consumer>

        <label htmlFor="">
          Tienes una cuenta?<Link to="/signup">Restrarse</Link>
        </label>
      </div>
    );
  }
}

//Para poder exportar internamente
