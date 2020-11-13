import React from 'react'
import CardPanel from '../components/CardPanel'
import Header from '../template/Header'
import Footer from '../template/Footer'

import './App.css'

const App = props => {
    return (
        <div id = "app">
            <Footer/>
            <Header/>
            <CardPanel/>
        </div>
    )
}

export default App