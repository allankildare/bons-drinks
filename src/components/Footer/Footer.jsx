import React from 'react'
import styled from 'styled-components'

function Footer() {
    const Footer = styled.footer`
        position: relative;
        width: 100%;
        bottom: 0;
        left: 0;

        background-color: var(--gray);
        color: #fafafa;
        height: 7vh;
        padding: 10px 0 5px 0;
        text-align: center;
        
        display: flex;
        flex-direction: column;
        justify-content: center;

        box-shadow: 5px 5px 10px rgb(0 0 0 / 42%);
        grid-area: footer;
    `
    return (
        <Footer className="Footer" style={{fontSize: '16px', fontWeight: '600'}}>Resilia 2020 - Alguns direitos reservados</Footer>
    )
}

export default Footer