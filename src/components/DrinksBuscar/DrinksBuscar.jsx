import React, { useRef, useEffect, useState } from 'react'
import style from './DrinksBuscar.module.css'

function DrinksBuscar() {
    const [search, setSearch] = useState({})
    const inputBusca = useRef(null)

    const handleSearch = async () => {
        let drinkName = inputBusca.current.value
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkName}`)
        const json = await response.json()
        setSearch(json.drinks)
    }

    return (
        <section>
            <div className={style.searchDrink}>
                <input type="text" ref={inputBusca} placeholder="Busque pelo nome da bebida" />
                <button onClick={handleSearch}><i class="fas fa-search"></i></button>
            </div>
            <div className={style.drinksResults}>
            {search.length > 0 ? (
                search.map(item => {
                    return (
                    <div key={item.idDrink}>
                        <img src={item.strDrinkThumb} alt={`Imagem do drink ${item.strDrink}`} width="230px" />
                        <h2>{item.strDrink}</h2>
                    </div>)
                })
            ) : 'Aqui irá aparecer o resultado da sua busca'}
            </div>
        </section>
    )
}

export default DrinksBuscar