import React from 'react'
import axios from 'axios'

import Main from '../template/Main'
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

    componentDidMount() {
        axios.get('https://pokeapi.co/api/v2/pokemon/1')
            .then(response => {
                console.log(response.data)
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div id = "app">
                <Footer/>
                <Header/>
                <Main/>
            </div>)
    }
}