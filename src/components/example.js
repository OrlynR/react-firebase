import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';
//Se instala para poder ordenar los componentes de orden superior
import {compose} from 'recompose';
import{ withFirebase}  from  '../Firebase'
import * as ROUTES from '../../constants/routes'

const SignUpPage = () => (
    <div>
        <h1>SignUp</h1>
        <SignUpForm/>
    </div>
);

const INITIAL_STATE = {
    username:'',
    email:'',
    passwordOne:'',
    passwordTwo:'',
    error:  null,
};

class SignUpFormBase extends Component {
    constructor(props){
        super(props);
        this.state={...INITIAL_STATE};
    }
    /* pasará todos los datos del formulario a la API de autenticación de Firebase a través de su interfaz de autenticación en la clase de Firebase*/
    
    onSubmit= event =>{
        // datos que van a la base de datos.
        const { email, passwordOne}=this.state;

        this.props.firebase
        .doCreateUserWithEmailANdPassword(email,passwordOne)
        .then(authUser => {
            this.state ({...INITIAL_STATE});
            //Luego de ser autenticado el cliente será redirigido al home
            this.props.history.push(ROUTES.HOME);
        })
        .catch(error =>{
            this.state({ error });
        });
        /* método en el evento evita la recarga del navegador*/
        event.preventDefault();
    };

    /*Actualiza el valor en el estado local*/
    onChange= event =>{
        this.setState({[event.target.name]: event.target.value});
    };

    render() {
        const{username,email,passwordOne,passwordTwo,error,} = this.state;

        /*un booleano para habilitar o deshabilitar el botón enviar en base a la condicional establecida.*/ 
        const isInvalid = passwordOne !== passwordTwo || passwordOne === '' || email === '' || username === '';
        return (
          <form onSubmit={this.onSubmit}>
            <input type="text"
            name="username"
            value={username}
            onChange={this.onChange}
            type="text"
            placeholder="Full Name"
            />
            <input type="email"
              value={email}
              name="email"
              onChange={this.onChange}
              type="email"
              placeholder="Email Address"/>

            <input type="passwordOne"
              value={passwordOne}
              name="passwordOne"
              onChange={this.onChange}
              type="password"
              placeholder="Password"/>

            <input type="passwordTwo"
              value={passwordTwo}
              name="passwordTwo"
              onChange={this.onChange}
              type="password"   
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

//const SignUpForm = withFirebase(SignUpFormBase);

const SignUpForm = compose(
    withRouter,
    withFirebase,
)(SignUpFormBase);


export default SignUpPage;

//Para poder exportar internamente
export { SignUpForm,SignUpLink };
