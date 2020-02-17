import React, { Component } from 'react'

export default class index extends Component {
    render() {
        return (
            <div>
            <form action="">
                <h1>Cambiar Contraseña</h1>
                <input type="password" placeholder="Nueva Contraseña "/>
                <input type="password" placeholder="Confirmar nueva Contraseña"/>
                <button>Entrar</button>
            </form>
            <form action="">
                <h1>Reestablecer Contraseña</h1>
                <input type="email" placeholder="Email"/>
                <button>Restablecer mi correo electrónico</button>
            </form>
        </div>
        )
    }
}
