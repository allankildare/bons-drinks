import React from 'react'
import { Main } from './Erro404.styles'

function Erro404() {
    return (
        <Main>
            <h1>Infelizmente a página que você estava buscando não está disponível</h1>
            <p>Mas você sabia que essa página foi desenvolvida pelo Allan Kildare?
                <br/>
            Esse foi o projeto do último módulo da <b>Resilia Educação</b>, curso intensivo que fez entre setembro de 2020 e março de 2021.
            <br />
            Ele é <em style={{fontWeight: 'bold'}}>desenvolvedor front-end</em> e você pode conferir seu trabalho visitando seu site ou GitHub, os links estão logo abaixo.
            </p>
            <a href="https://github.com/allankildare/" target="_blank" rel="noopener" title="Visite meu GitHub"><i class="fab fa-github"></i></a>
            <a href="https://allankildare.github.io/" target="_blank" rel="noopener" title="Visite meu website"><i class="fas fa-link"></i></a>
        </Main>
    )
}

export default Erro404