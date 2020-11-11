import React from 'react'

import "./PokeCard.css"

export default class PokeCard extends React.Component {
    render() {
        return (
            <div className="col-6 my-3"><div id="poke-card" className="card">Poke Card</div></div>
        )
    }
}