import React, { useState } from 'react'

function PropsInput({htmlFor, type, name, content}) {
    //estado
    const [char, setChar] = useState("")
    
    const mudancaCaractere = (event) => {
        setChar(event.target.value)
        console.log(char)
    }

    // id htmlFor name type
    return (
        <>
            <label htmlFor={htmlFor} children={content} />
            <input type={type} id={htmlFor} name={name} value={char} onChange={mudancaCaractere}/>
            <p>Olá {char}</p>
        </>
    )
}

export default PropsInput