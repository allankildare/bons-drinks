import styled from 'styled-components'

export const Main = styled.main`
    text-align: center;
    padding: 0 200px;
    margin-top: 100px;
    h1 {
        font-size: 26px;
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