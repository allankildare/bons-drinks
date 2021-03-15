import React from "react"
import './FormContato.css'
import contactPhoto from './../../assets/img/contact-pic.jpg'
import Button from './../Button/Button'
import ContadorSegundos from "./../ContadorSegundos/ContadorSegundos";
import Input from "./../Input/Input";

function FormContato() {
  return (
    <div className="formContainer">
      <h1>Contato</h1>
      <div className="mainForm">
        <img src={contactPhoto} />
        <form>
          <Input htmlFor="name" type="text" name="nameField" content="Nome:"  />
          
          <Input htmlFor="email" type="text" name="emailField" content="E-mail:"  />

          <label htmlFor="message">Mensagem:</label>
          <textarea name="message" rows="10" />

          <Button type="submit" content="Enviar"/>
        </form>
      </div>

      {/* <ContadorSegundos /> */}
    </div>
  )
}

export default FormContato;
