import styled from 'styled-components'

export const StyledButton = styled.button`
    background-color: #5c0511;
    color: #fffdf8;
    font-weight: 700;
    padding: 8px 10px;
    margin-top: 10px;
    font-size: 18px;
    border-radius: 5px;
    width: 400px;
    border: none;
    display: block;
    margin-left: auto; 
    cursor: pointer;
    transition: .5s ease background-color;

    :hover {
        background-color: var(--hover-button);
    }
`