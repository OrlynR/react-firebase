import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class index extends Component {
    render() {
        return (
            <div>
                <form action="">
                    <h1>Iniciar Sesion</h1>
                    <input type="email" placeholder="Email "/>
                    <input type="password" placeholder="Contraseña"/>
                    <button>Entrar</button>
                    <Link to='/pw-forget'> Olvidaste la contraseña?</Link>
                </form>

                <label htmlFor="">Tienes una cuenta?<Link to='/signup'>Restrarse</Link></label>
            </div>
        )
    }
}
