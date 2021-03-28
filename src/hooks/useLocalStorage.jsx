import React, { useState, useEffect } from 'react'

function useRequisicao(url) {
    const [req, setReq] = useState({})

    const pedido = async () => {
        const response = await fetch(url)
        const json = await response.json()
        return json
    }

    useEffect(() => {
        setReq(pedido())
    }, [])

    return [req, setReq]
}

export default useRequisicao