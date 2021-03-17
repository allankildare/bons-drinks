import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

function Header() {
    // style
    const StyledHeader = styled.header`
        background-color: var(--gray);
        color: #fafafa;
        font-size: 22px;
        box-shadow: 5px 5px 10px rgba(0, 0, 0, .42);
        padding: 10px 0 10px 0;
        z-index: 50;
        grid-area: header;
    `
    const NavMenu = styled.nav`
        max-width: 1440px;
        padding: 0 50px;
        display: flex;
        justify-content: space-between;
        
        .headerLogo {
        font-family: 'Bilbo Swash Caps', cursive;
        font-size: 36px;
        width: 20%;
        }

        .headerLogo a {
        color: #ececec;
        transition: .3s ease color;
        }

        .headerLogo a:hover {
            color: var(--light-purple)
        }

        ul {
            list-style: none;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            width: 80%;
        }

        li {
            margin-left: 100px;
            text-transform: uppercase;
            font-weight: 300;
        }

        li:last-child {
            background-color: var(--purple);
            font-size: 21px;
            padding: 7px 10px;
            border-radius: 25px;
            font-weight: 500;
            transition: .6s ease transform;
        }

        li:last-child:hover {
            transform: scale(.95);
        }

        li:last-child a:hover {
            color: #ececec;
        }

        li a, li a:visited {
            color: #ececec;
            text-decoration: none;
            transition: .4s ease color;
        }

        li a:hover {
            color: var(--light-purple);
        }
    `
    // render()
    return (
        <StyledHeader>
            <NavMenu>
                <h1 className="headerLogo">
                    <Link to="/">Bons Drinks</Link>
                </h1>
                <ul>
                    <li>
                        <Link to="/drinks/">Drinks</Link>
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