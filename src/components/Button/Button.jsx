import React from 'react'
import './Button.css'

function Button(props) {
    return(
        <button type={props.type}>{props.content}</button>
    )
}

export default Button