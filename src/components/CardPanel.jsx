import React from 'react'

import PokeCard from './PokeCard'

export default class CardPanel extends React.Component {
    render() {
        return (
            <div className="card-panel container col-12">
                <div className="row">
                    <PokeCard />
                    <PokeCard />
                </div>
                <div className="row">
                    <PokeCard />
                    <PokeCard />
                </div>
                <div className="row">
                    <PokeCard />
                    <PokeCard />
                </div>
            </div>
        )
    }
}