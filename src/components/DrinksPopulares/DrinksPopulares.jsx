import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import Loading from '../Loading/Loading'

const PopularDrinkStyled = styled.div`
    text-align: left;
    width: 60vw;
    height: 260px;
    display: flex;
    align-items: center;

    img {
        margin-right: 16px;
    }

    p {
        font-weight: 500;
        line-height: 1.4;
    }

    a, a:visited {
        color: #1b1b1b;
        font-weight: 500;
    }
    a:hover {
        color: #313131;
    }
    .fa-language {
        color: #2077E9;
        font-size: 26px;
    }
    
`

function DrinksPopulares() {
    async function reqDrink(drink) {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
        const resJSON = await response.json()

        return resJSON.drinks[0]
    }
    
    const [mojito, setMojito] = useState({})
    const [caipirinha, setCaipirinha] = useState({})
    const [sexOnTheBeach, setSexOnTheBeach] = useState({})
    const [martini, setMartini] = useState({})
    const [blueLagoon, setBlueLagoon] = useState({})
    const [cubaLibre, setCubaLibre] = useState({})
    const [ginAndTonic, setGinAndTonic] = useState({})
    const [margarita, setMargarita] = useState({})
    const [longIslandTea, setLongIslandTea] = useState({})
    
    useEffect(
        () => {
        reqDrink('mojito')
            .then(drink => {
                setMojito(drink)
            })

        reqDrink('caipirinha')
        .then(drink => {
            setCaipirinha(drink)
        })

        reqDrink('sex on the beach')
        .then(drink => {
            setSexOnTheBeach(drink)
        })

        reqDrink('martini')
        .then(drink => {
            setMartini(drink)
        })

        reqDrink('blue lagoon')
        .then(drink => {
            setBlueLagoon(drink)
        })
        reqDrink('cuba libre')
        .then(drink => {
            setCubaLibre(drink)
        })
        reqDrink('gin and tonic')
        .then(drink => {
            setGinAndTonic(drink)
        })
        reqDrink('margarita')
        .then(drink => {
            setMargarita(drink)
        })
        reqDrink('Long Island Tea')
        .then(drink => {
            setLongIslandTea(drink)
        })
    }, [])

    const drinks = [mojito, caipirinha, sexOnTheBeach, martini, blueLagoon, cubaLibre, ginAndTonic, margarita, longIslandTea]

    console.log(drinks[5])
    return (
        <div style={{display: 'grid', placeItems: 'center'}}>
            {drinks[0] && drinks[1] && drinks[2] && drinks[3] && drinks[4] && drinks[5] && drinks[6] && drinks[7] && drinks[8] ? 
            (drinks.map(item => {
                return (
                    <PopularDrinkStyled>
                        <img src={item.strDrinkThumb} width="230px"
                            alt={`Imagem da bebida ${item.strDrink}`} />
                        <div>
                            <h3>{item.strDrink}</h3>
                            <p><strong>Categoria:</strong> {item.strCategory}</p>
                            <p><strong>Copo:</strong> {item.strGlass}</p>
                            <p>
                               <strong>IBA</strong> <i title="IBA é a Associação Internacional de Bartenders, que seleciona alguns drinks para uso na competição mundial World Cocktail Competition (WCC)" class="fas fa-info-circle"></i> <b>:</b> {item.strIBA ? `${item.strIngredient1}` : 'Não selecionado pela Associação Internacional de Bartenders'}</p>
                            <p><strong>Ingredientes:</strong> {item.strIngredient1 ? `${item.strIngredient1}` : null }
                                {item.strIngredient2 && `, ${item.strIngredient2}`}
                                {item.strIngredient3 && `, ${item.strIngredient3}`}
                                {item.strIngredient4 && `, ${item.strIngredient4}`}
                                {item.strIngredient5 && `, ${item.strIngredient5}`}
                                {item.strIngredient6 && `, ${item.strIngredient6}`}
                                {item.strIngredient7 && `, ${item.strIngredient7}`}
                                {item.strIngredient8 && `, ${item.strIngredient8}`}
                                {item.strIngredient9 && `, ${item.strIngredient9}`}
                                {item.strIngredient10 && `, ${item.strIngredient10}`}
                                {item.strIngredient11 && `, ${item.strIngredient11}`}
                                {item.strIngredient12 && `, ${item.strIngredient12}`}
                                {item.strIngredient13 && `, ${item.strIngredient13}`}
                                {item.strIngredient14 && `, ${item.strIngredient14}`}
                                {item.strIngredient15 && `, ${item.strIngredient15}`}.
                            </p>
                        <p><strong>Instruções:</strong> {item.strInstructions}</p>
                        <a href={`https://translate.google.com.br/?hl=pt-BR&tab=rT&sl=en&tl=pt&text=${item.strInstructions}&op=translate`}
                            target="_blank" rel="noopener" title="Traduzir instruções">
                            <i class="fas fa-language"></i>
                        </a>
                    </div>
                </PopularDrinkStyled>)
            })) : <Loading />
            }
        </div>
    )
}

export default DrinksPopulares