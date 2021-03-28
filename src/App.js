import Header from './components/Header/Header'
import HomeCover from './components/HomeCover/HomeCover'
import Footer from './components/Footer/Footer'
import FormContato from './components/FormContato/FormContato'
import './App.css'
import Drinks from './components/Drinks/Drinks'
import Erro404 from './components/Erro404/Erro404'
import { BrowserRouter, Switch, Route, useParams } from 'react-router-dom'
import Context from './components/Contexto/Contexto'
import Modal from './components/Modal/'


function App() {
  const { IDDrinks } = useParams
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Switch>
          <Route exact path="/">
            <HomeCover />
          </Route>

          {/* rota de drinks */}
          <Route path="/drinks">
            <Drinks />
          </Route>

          <Route path="/drinks/:IDDrinks">
            <h1>OI {IDDrinks}</h1>
          </Route>
          
          <Route path="/sobre-nos">
            <h1 style={{textAlign: 'center'}}>Rota Sobre Nós</h1>
          </Route>

          <Route path="/nosso-time">
            <h1 style={{textAlign: 'center'}}>Rota Nosso Time</h1>
          </Route>

          <Route path="/contato">
            <FormContato />
          </Route>

          <Route path="*">
            <Erro404 />
          </Route>

        </Switch>
        
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
