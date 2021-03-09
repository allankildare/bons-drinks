import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header className="Menu" style={{fontSize: '24px', fontWeight: 'bold'}}>
            <nav className="NavMenu">
                <ul>
                    <li>Drinks</li>
                    <li>Sobre nós</li>
                    <li>
                        <h1 className="HeaderLogo">
                            <Link to="/">Bons Drinks</Link>
                        </h1>
                    </li>
                    <li>Nosso time</li>
                    <li>
                        <Link to="/contato">Contato</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header