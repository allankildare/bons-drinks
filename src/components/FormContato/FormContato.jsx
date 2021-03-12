import React from "react"
import './FormContato.css'
import contactPhoto from '../../assets/img/contact-pic.jpg'
import Button from './../Button/Button'
import ContadorSegundos from "../ContadorSegundos/ContadorSegundos";
import PropsInput from "../propsInput/PropsInput";
import Input from "../Input/Input";

function FormContato() {
  return (
    <div className="formContainer">
      <h1>Contato</h1>
      <div className="mainForm">
        <img src={contactPhoto} />
        <form>
          <label htmlFor="name">Nome:</label>
          <input name="name" type="text" />

          <label htmlFor="email">E-mail:</label>
          <input name="email" type="text" />

          <label htmlFor="message">Mensagem:</label>
          <textarea name="message" rows="10" />

          <Button type="submit" content="Enviar"/>
        </form>
      </div>
      <PropsInput htmlFor="nome" type="text" name="campo_nome" content="Nome:" />

      {/* <ContadorSegundos /> */}
    </div>
  )
}

export default FormContato;
