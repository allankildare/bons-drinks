import React, { Component, Fragment } from 'react'

class Form extends Component {
    render() {
        return (
            <div>
                <form>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" name="name"/>
                    <label htmlFor="email">E-mail</label>
                    <input type="text" name="email"/>
                    <label htmlFor="message">Mensagem</label>
                    <textarea name="message" cols="30" rows="10"></textarea>
                    <button>Enviar</button>
                </form>
            </div>
        )
    }
}

export default Form