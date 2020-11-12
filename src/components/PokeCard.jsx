import React from 'react'

import "./PokeCard.css"

export default class PokeCard extends React.Component {

    state = {
        name: this.props.name.charAt(0).toUpperCase() + this.props.name.slice(1)
    }

    render() {
        return (
            <div className="pokeCard">

                <div className="nameAndImg">
                    <div className="pokeImg">
                        <img src={this.props.img} alt="imagem"/>
                    </div>
                    <div className="pokeName">
                        <h6>{this.state.name}</h6>
                    </div>
                </div>

                <div className="atackPanel">
                    <div className="atackRow">
                        <div className="pokeAtack">Ataque 1</div>
                        <div className="pokeAtack">Ataque 2</div>
                    </div>
                    <div className="atackRow">
                        <div className="pokeAtack">Ataque 3</div>
                        <div className="pokeAtack">Ataque 4</div>
                    </div>
                </div>

            </div>
        )
    }
}