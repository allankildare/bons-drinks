import { useState, useEffect} from 'react'
import { requisicaoDrinks } from '../Model/URL'
import Loading from '../Loading/Loading'
import { DrinksStyled } from './DrinksAleatorios.styles'

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