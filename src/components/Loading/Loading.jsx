import React from 'react'
import styled from 'styled-components'

const LoadingStyled = styled.div`
    height: 50px;
    width: 50px;
    border: 8px solid #b4b4b4;
    border-radius: 50%;
    border-top: 8px solid var(--purple);
    margin: 0 auto;
    animation: loading .6s infinite linear;
`

function Loading() {
    return <LoadingStyled />
}

export default Loading