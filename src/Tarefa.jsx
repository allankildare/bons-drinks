import React, {Component} from 'react'

class Tarefa extends Component {
    render() {
        // Dinâmica Aula 03 - Mergulhando no JSX
        // Escolha um cliente do objeto abaixo e retorne um componente com seu nome, sua idade e a soma total das compras
        const luana = {
            cliente: 'Luana',
            idade: 27,
            compras: [
              { nome: 'Notebook', preco: '2500' },
              { nome: 'Geladeira', preco: '3000' },
              { nome: 'Smartphone', preco: '1500' },
            ],
            ativa: true,
          }
          
        const mario = {
            cliente: 'Mario',
            idade: 31,
            compras: [
                { nome: 'Notebook', preco: '2500' },
                { nome: 'Geladeira', preco: '3000' },
                { nome: 'Smartphone', preco: '1500' },
                { nome: 'Guitarra', preco: '3500' },
            ],
            ativa: false,
        }

        const cliente = mario
        const arrayPrecos = cliente.compras.map((obj) => parseInt(obj.preco))
        const soma = arrayPrecos.reduce((acumulador, atual) => acumulador + atual)
        return(
            <div>
                <h1>Cliente: {cliente.cliente}</h1>
                <p>Idade: {cliente.idade}</p>
                <p style={{color: soma > 10000 ? "red" : "green"}}>
                    A soma dos produtos do(a) cliente {cliente.cliente} é igual a {soma}
                </p>
                {soma > 10000 && <p>Você estourou o limite do seu cartão</p>}
            </div>
        )
    }
}

export default Tarefa