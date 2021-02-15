import React, { Component } from "react";
import './FormContato.css'
import telephone from '../../assets/img/telephone_contact.jpg'

class FormContato extends Component {
  render() {
    return (
      <div className="Form">
        <div>
          <h1>Contato</h1>
        </div>
        <div className="MainForm">
          <img src={telephone} />
          <form className="Inputs">
            <label htmlFor="name">Nome:</label>
            <input name="name" type="text" />

            <label htmlFor="email">E-mail:</label>
            <input name="email" type="text" />

            <label htmlFor="message">Mensagem:</label>
            <textarea name="message" rows="15" cols="30" />

            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
    )
  }
}

export default FormContato;
