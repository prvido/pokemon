import React from 'react'

import PokeCard from './PokeCard'

import './CardPanel.css'

const getRandomArray = require('../functions/functions')

const lastPokemonIndex = 807 

const initialState = {
    idArray: [],
    status: false
}

export default class CardPanel extends React.Component {

    state = {...initialState}

    async componentDidMount() {
        this.setState({idArray: getRandomArray(6, 1000, lastPokemonIndex)})
        this.setState({status: true})
        console.log(this.state.idArray[0])
    }

    render() {
        if (this.state.status) {
            return (
                <div className="card-panel">
                    <div className="panelTitle">
                        <h2>Pokémon Team</h2>
                    </div>
                    <div className="panelCards">
                        <div className="cardRow">
                            <PokeCard id={this.state.idArray[0]} moves={[0, 1, 2, 3]}/>
                            <PokeCard id={this.state.idArray[1]} moves={[0, 1, 2, 3]}/>
                        </div>
                        <div className="cardRow">
                            <PokeCard id={this.state.idArray[2]} moves={[0, 1, 2, 3]}/>
                            <PokeCard id={this.state.idArray[3]} moves={[0, 1, 2, 3]}/>
                        </div>
                        <div className="cardRow">
                            <PokeCard id={this.state.idArray[4]} moves={[0, 1, 2, 3]}/>
                            <PokeCard id={this.state.idArray[5]} moves={[0, 1, 2, 3]}/>
                        </div>
                        </div>
                </div>
            )
        } else {
            return (
                <div className="card-panel">Carregando</div>
            )
        }
    }
}