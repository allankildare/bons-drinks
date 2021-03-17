import React, { useState, useEffect } from 'react'
import DrinksBuscar from '../DrinksBuscar/DrinksBuscar'
import DrinksPopulares from '../DrinksPopulares/DrinksPopulares'
import { NavLink, Switch, Route } from 'react-router-dom'

function Drinks() {
    const [req, setReq] = useState({})
    
    async function pegaDrinks() {
        console.log('useEffect rodou')

        const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
        const resJSON = await response.json()

        return setReq(resJSON.drinks[0])
    }

    useEffect(() => pegaDrinks(), [])

    return (
        <div style={{textAlign:'center'}}>
            <h1>Drinks</h1>
            <p>O nome do drink gostoso é {req.strDrink ? req.strDrink : 'carregando...'}</p>

            <NavLink to="popular">
                Drinks Populares
            </NavLink>

            <NavLink to="buscar">
                Buscar Drinks
            </NavLink>

            <Switch>
                <Route path="/drinks/buscar">
                    <DrinksBuscar />
                </Route>

                <Route path="/drinks/popular">
                    <DrinksPopulares />
                </Route>
            </Switch>
        </div>
    )
}
export default Drinks