import React from 'react'

import PokeCard from './PokeCard'

import './CardPanel.css'

const initialState = {}

export default class CardPanel extends React.Component {

    state = {...initialState}

    render() {
        return (
            <div id="card-panel">
                <div className="panelTitle">
                    <h2>Pokémon Team</h2>
                </div>
                <div className="panelCards">
                    <div className="cardRow">
                        <PokeCard id={3} moves={[0, 1, 2, 3]}/>
                        <PokeCard id={6} moves={[0, 1, 2, 3]}/>
                    </div>
                    <div className="cardRow">
                        <PokeCard id={9} moves={[0, 1, 2, 3]}/>
                        <PokeCard id={12} moves={[0, 1, 2, 3]}/>
                    </div>
                    <div className="cardRow">
                        <PokeCard id={15} moves={[0, 1, 2, 3]}/>
                        <PokeCard id={18} moves={[0, 1, 2, 3]}/>
                    </div>
                    </div>
            </div>
        )
    }
}