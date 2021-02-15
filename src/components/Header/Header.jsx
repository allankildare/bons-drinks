import React, {Component} from 'react'
import './Header.css'
class Header extends Component {
    render(){
        return(
        <header className="Menu" style={{fontSize: '24px', fontWeight: 'bold'}}>
            <nav className="NavMenu">
                <ul>
                    <li>Drinks</li>
                    <li>Sobre nós</li>
                    <li><h1 className="HeaderLogo">Bons Drinks</h1></li>
                    <li>Nosso time</li>
                    <li>Contato</li>
                </ul>
            </nav>
        </header>)
    }
}

export default Header