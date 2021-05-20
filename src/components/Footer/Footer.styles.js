import styled from 'styled-components'

export const Footer = styled.footer`
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