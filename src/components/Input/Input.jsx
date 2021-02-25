
import React, { Component } from 'react'

class Input extends Component {
    constructor(props) {
        super(props)
        this.eventChange = this.eventChange.bind(this)
    }

    eventChange(event) {
        console.log(event.target.value)
    }
    
    render() {
        return (
            <>
            {/* // label: htmlFor, conteudo */}
                <label htmlFor={this.props.para}>{this.props.children}</label> 
            {/* input: name, id, type */}
                <input type={this.props.tipo} id={this.props.id} name={this.props.nome} onChange={this.eventChange}/>
            </>
        )
    }
}

export default Input