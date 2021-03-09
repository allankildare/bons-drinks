import Header from './components/Header'
import HomeCover from './components/HomeCover'
import Footer from './components/Footer'
import FormContato from './components/FormContato'
import './App.css'
import Input from './components/Input/Input'
import { BrowserRouter, Switch, Route } from 'react-router-dom'


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
          </Route>
        </Switch>
        
        <Footer />
      </BrowserRouter>

    </div>
  )
}

export default App
