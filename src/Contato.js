import React, { Component } from 'react'
import Header from './components/Header'
import FormContato from './components/FormContato'
import Input from './components/Input/Input'
import Footer from './components/Footer'
import './main.css'

function Contato() {
    return (
        <div>
            <Header />
            <FormContato />
            <Footer />
        </div>
    )
}

export default Contato
