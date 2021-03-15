import Header from './components/Header'
import HomeCover from './components/HomeCover'
import Footer from './components/Footer'
import FormContato from './components/FormContato'
import './App.css'
import Input from './components/Input/Input'
import ButtonClick from './components/ButtonClick/ButtonClick'
import Drinks from './components/Drinks/Drinks'
import Erro404 from './components/Erro404/Erro404'
import { BrowserRouter, Switch, Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Switch>
          <Route exact path="/">
            <HomeCover />
          </Route>

          <Route path="/drinks">
            <Drinks />
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
