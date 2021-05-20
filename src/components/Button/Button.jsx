import React from 'react'
import { StyledButton } from './Button.styles'

function Button({type, content}) {
    return(
        <StyledButton type={type}>{content}</StyledButton>
    )
}

export default Button