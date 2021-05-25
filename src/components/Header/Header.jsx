import React from 'react'
import { Link } from 'react-router-dom'
import { StyledHeader, NavMenu } from './Header.styles'

function Header() {
    return (
        <StyledHeader>
            <NavMenu>
                <h1 className="headerLogo">
                    <Link to="/">Bons Drinks</Link>
                </h1>
                <ul>
                    <li>
                        <Link to="/drinks">Drinks</Link>
                    </li>
                    <li>
                        <Link to="/sobre-nos">Sobre nós</Link>
                    </li>
                    <li>
                        <Link to="nosso-time">Nosso time</Link>
                    </li>
                    <li>
                        <Link to="/contato">Contato</Link>
                    </li>
                </ul>
            </NavMenu>
        </StyledHeader>
    )
}

export default Header
