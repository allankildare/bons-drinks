import React from 'react'
import { NavLink, Switch, Route } from 'react-router-dom'
import style from './Drinks.module.css'
import DrinksPopulares from '../DrinksPopulares/DrinksPopulares'
import DrinksBuscar from '../DrinksBuscar/DrinksBuscar'
import DrinksAleatorios from '../DrinksAleatorios/DrinksAleatorios'

function Drinks() {
    return (
        <div style={{textAlign:'center'}}>
            <h1 style={{ margin: '20px 0 30px'}}>Drinks</h1>

        <NavLink to="popular"  style={{ marginRight: '15px'}}>
            <button className={style.linkDrink}>Drinks Populares</button>
        </NavLink>

        <NavLink to="buscar"  style={{ marginRight: '15px'}}>
            <button className={style.linkDrink}>Buscar Drinks</button>
        </NavLink>

        <NavLink to="aleatorios" >
            <button className={style.linkDrink}>Aleatórios</button>
        </NavLink>

        <Switch>
            <Route path="/drinks/buscar">
                <DrinksBuscar />
            </Route>

            <Route path="/drinks/popular">
                <DrinksPopulares />
            </Route>

            <Route path="/drinks/aleatorios">
                <DrinksAleatorios />
            </Route>
        </Switch> 


        {/*reqDrinks && 
            reqDrinks.map((key, id) => {
                return (<div><Link key={id} to={`/drinks/${key.idDrink}`}>{key.strDrink}</Link><br /></div>)
            })
        */}
    </div>
    )
}
export default Drinks