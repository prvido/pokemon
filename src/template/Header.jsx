import React from 'react'

import './Header.css'

import Logo from '../assets/logo.png'

const Header = props => {
    return(
        <header className="header">
            <img src={Logo} alt=""/>
            <h1>Random Pokémon Team Generator</h1>
        </header>
    )
}

export default Header