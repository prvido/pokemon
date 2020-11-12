import React from 'react'
import axios from 'axios'

import "./PokeCard.css"

const initialState = {
    status: false,
    pokemon: {}
}

export default class PokeCard extends React.Component {

    state = {...initialState}

    async componentDidMount() {
        await axios.get(`https://pokeapi.co/api/v2/pokemon/${this.props.id}`)
             .then(resp => {
                    this.setState({pokemon: resp.data})
                    this.setState({status: true})
                })
             .catch(err => console.log(err))
    }

    render() {
        if (this.state.status) {
            return (
                <div className="pokeCard">
    
                    <div className="nameAndImg">
                        <div className="pokeImg">
                            <a href={`https://www.pokemon.com/br/pokedex/${this.props.id}`} target="_blank"><img src={this.state.pokemon.sprites.front_default} alt="imagem"/></a>
                        </div>
                        <div className="pokeName">
                            <h4> {
                                this.state.pokemon.name.charAt(0).toUpperCase() 
                                + this.state.pokemon.name.slice(1)
                            } </h4>
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
        } else {
            return (
                <div>Carregando</div>
            )
        }
    }
}