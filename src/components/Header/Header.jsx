import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header className="Menu">
            <nav className="navMenu">
                <h1 className="HeaderLogo">
                    <Link to="/">Bons Drinks</Link>
                </h1>
                <ul>
                    <li>
                        <Link to="/drinks">Drinks</Link>
                    </li>
                    <li>Sobre nós</li>
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