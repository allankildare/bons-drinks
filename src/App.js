import logo from './logo.svg'
import Tarefa from './Tarefa'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import HomeCover from './components/HomeCover/HomeCover'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <HomeCover />
      {/* <div>
        <h1>Contato</h1>
      </div>
      <div className="MainForm">
        <img src={logo} />
        <form className="Inputs">
          <label htmlFor="name">Nome:</label>
          <input name="name" type="text" />

          <label htmlFor="email">E-mail:</label>
          <input name="email" type="text" />

          <label htmlFor="message">Mensagem:</label>
          <textarea name="message" rows="15" cols="30" />

          <button type="submit">Enviar</button>
        </form>
      </div> */}
      <Footer />
    </div>
  )
}

export default App
