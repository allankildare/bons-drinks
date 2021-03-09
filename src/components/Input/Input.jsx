import React, { Component } from 'react'

class Input extends Component {
    constructor(props) {
        super(props)
        console.log('Fui instanciado')
        this.eventChange = this.eventChange.bind(this)
        this.request = this.request.bind(this)
        this.state = {
            fetchData: []
        }
    }

    eventChange(event) {
        console.log(event.target.value)
    }
    
    render() {
        console.log('Fui renderizado')
        
        const container = document.querySelector('.App')
        for(const drink of this.state.fetchData) {
            container.innerHTML += `<p>${drink.strDrink}</p>`
            // console.log(drink)
        }

        return (
            <>
            {/* // label: htmlFor, conteudo */}
                <label htmlFor={this.props.para}>{this.props.children}</label> 
            {/* input: name, id, type */}
                <input type={this.props.tipo} id={this.props.id} name={this.props.nome} onChange={this.eventChange}/>
            </>
        )
    }

    async request(url) {
        const response = await fetch(url)
        const json = await response.json()
        this.setState({ fetchData: json.drinks })
    }
    
    componentDidMount() {
        console.log('Fui montado')
        this.request('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail')
    }
}

export default Input