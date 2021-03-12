import Header from './components/Header'
import HomeCover from './components/HomeCover'
import Footer from './components/Footer'
import FormContato from './components/FormContato'
import './App.css'
import Input from './components/Input/Input'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ButtonClick from './components/ButtonClick/ButtonClick'
import Drinks from './components/Drinks/Drinks'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Switch>
          <Route exact path="/">
            <HomeCover />
            <Input />
          </Route>

          <Route path="/contato">
            <FormContato />
            <ButtonClick />
          </Route>

          <Route path="/drinks">
            <Drinks />
          </Route>

          <Route path="*">
            <h1>Erro 404</h1>
          </Route>
        </Switch>
        
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
