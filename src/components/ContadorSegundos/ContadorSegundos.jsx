import React, { Component } from 'react'

export default class ContadorSegundos extends Component {
    constructor(props) {
        super(props)
        this.contador = this.contador.bind(this)
        this.state = {
            contador: 0,
            valorCorrente: 0
        }
    }

    contador() {
        this.setState({ valorCorrente: 
            this.state.contador++
        })
    }

    componentDidMount() {
        console.log('Fui montado')
        // comeca o setInterval
        let interval = setInterval(this.contador, 1000)
        this.setState({ interval: interval })
    }

    componentWillUnmount() {
        console.log('Fui desmontado')
        // para o setInterval
        clearInterval(this.state.contador)
    }

    render() {
        console.log("renderizei")
        return (
            <div>
                <h1>{this.state.contador} segundos</h1>
            </div>
        )        
    }
}
