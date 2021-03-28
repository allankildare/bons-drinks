import React from 'react'
import styled from 'styled-components'

const StyledModal = styled.div`
    background-color: white;
    display: none;
    position: fixed;
    width: 200px;
    height: 200px;
    left: 200px;
    top: 40px;
    color: black;
`
function Modal({ className, modalRef }) {

    return (
        <StyledModal ref={modalRef} className={`${className} modal`}>
            <p>Meu Modal</p>
        </StyledModal>
    )
}

export default Modal