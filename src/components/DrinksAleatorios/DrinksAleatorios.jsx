import React, { useState, useEffect} from 'react'
import { requisicaoDrinks } from '../Model/URL'
import styled from 'styled-components'

const Loading = styled.div`
    height: 50px;
    width: 50px;
    border: 8px solid #b4b4b4;
    border-radius: 50%;
    border-top: 8px solid var(--purple);
    margin: 0 auto;
    animation: loading .6s infinite linear;
`

const DrinksStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 20px;

    .drink {
        width: 250px;
        padding: 5px 10px;
    }
    .drink img {
        width: 230px;
    }
    .drink h2 {
        font-size: 18px;
    }
`

function DrinksAleatorios() {
    const [reqDrinks, setReqDrinks] = useState([])
    useEffect(
        () => {
        requisicaoDrinks()
            .then(data => {
                setReqDrinks(data)
            })
        }, [])
        
    return (
        <DrinksStyled>
            { reqDrinks.length < 10 ?
                <Loading /> : 
                ( reqDrinks.map((item, index) => {
                    if (index < 10) {
                        return <div key={item.idDrink} className="drink">
                            <img src={item.strDrinkThumb} alt={`Imagem da bebida ${item.strDrink}`} />
                            <h2>{item.strDrink}</h2>
                        </div>
                    }
                }) )
            }
        </DrinksStyled>
    )
}

export default DrinksAleatorios