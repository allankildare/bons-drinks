import React from 'react'
import styled from 'styled-components'

function Erro404() {
    const Main = styled.main`
        text-align: center;
        padding: 0 200px;
        margin-top: 100px;
        h1 {
            font-size: 24px;
            margin-bottom: 7px;
        }
        p {
            font-size: 20px;
        }
        a .fa-github {
            margin-right: 15px;
        }
        a i, a i:visited {
            font-size: 32px;
            color: var(--black);
            transition: .3s ease transform;
            margin-top: 5px;
        }
        a i:hover {
            transform: scale(1.1);
            color: #202020;
        }

        a i:active {
            color: var(--purple);
        }
        
    `
    return (
        <Main>
            <h1>Infelizmente a página que você estava buscando não está disponível</h1>
            <p>Mas você sabia que essa página foi desenvolvida pelo Allan Kildare? <br/>Esse foi o projeto do último módulo da <b>Resilia Educação</b>, curso intensivo que fez entre 2020 e 2021.
            <br />
            Ele é <em style={{fontWeight: 'bold'}}>desenvolvedor front-end</em> e você pode conferir seu trabalho visitando seu site ou GitHub, os links estão logo abaixo.
            </p>
            <a href="https://github.com/allankildare/" target="_blank" rel="noopener" title="Visite meu GitHub"><i class="fab fa-github"></i></a>
            <a href="https://allankildare.github.io/" target="_blank" rel="noopener" title="Visite meu website"><i class="fas fa-link"></i></a>
        </Main>
    )
}

export default Erro404