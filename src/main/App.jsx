import React from 'react'
import axios from 'axios'

import CardPanel from '../components/CardPanel'
import Header from '../template/Header'
import Footer from '../template/Footer'

import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css'

const initialState = {
    data: {},
    status: 0
}

export default class App extends React.Component {
    state = {...initialState}

    render() {
        return (
            <div id = "app">
                <Footer/>
                <Header/>
                <CardPanel/>
            </div>)
    }
}