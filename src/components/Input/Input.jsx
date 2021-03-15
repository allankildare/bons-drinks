import React, { useState } from 'react'

function Input({htmlFor, type, name, content}) {
    //estado
    const [char, setChar] = useState("")
    
    const mudancaCaractere = (event) => {
        setChar(event.target.value)
        console.log(char)
    }

    // id htmlFor name type
    return (
        <>
            <label htmlFor={htmlFor}>{typeof content === 'string' ? content : 'Não válido'}</label>
            <input type={type} id={htmlFor} name={name} value={char} onChange={mudancaCaractere}/>
        </>
    )
}

export default Input