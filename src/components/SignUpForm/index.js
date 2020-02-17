import React, { Component } from 'react';

const INITIAL_STATE = {
    username:'',
    email:'',
    passwordOne:'',
    passwordTwo:'',
    error:  null,
};

class SignUpForm extends Component {
    constructor(props){
        super(props);
        this.state={...INITIAL_STATE};
    }
    /* pasará todos los datos del formulario a la API de autenticación de Firebase a través de su interfaz de autenticación en la clase de Firebase*/
    
    onSubmit= event =>{
    
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
          <form >
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

            <input 
            type="passwordOne"
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

//console.log('holis')
export default { SignUpForm};
