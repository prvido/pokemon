import React from 'react'
import axios from 'axios'

import PokeCard from './PokeCard'

import './CardPanel.css'

const initialState = {
    pokemon: {
        name: '',
        sprites: {
            front_default: ''
        }
    }
}

export default class CardPanel extends React.Component {

    state = {...initialState}

    async componentDidMount() {
        axios.get('https://pokeapi.co/api/v2/pokemon/charizard')
             .then(resp => {
                    this.setState({pokemon: resp.data})
                    console.log(this.state.pokemon)
                })
             .catch(err => console.log(err))
    }

    render() {
        return (
            <div id="card-panel">
                <div className="panelTitle">
                    <h2>Pokémon Team</h2>
                </div>
                <div className="panelCards">
                    <div className="cardRow">
                        <PokeCard name={this.state.pokemon.name} img={this.state.pokemon.sprites.front_default}/>
                        <PokeCard name={this.state.pokemon.name} img={this.state.pokemon.sprites.front_default}/>
                    </div>
                    <div className="cardRow">
                        <PokeCard name={this.state.pokemon.name} img={this.state.pokemon.sprites.front_default}/>
                        <PokeCard name={this.state.pokemon.name} img={this.state.pokemon.sprites.front_default}/>
                    </div>
                    <div className="cardRow">
                        <PokeCard name={this.state.pokemon.name} img={this.state.pokemon.sprites.front_default}/>
                        <PokeCard name={this.state.pokemon.name} img={this.state.pokemon.sprites.front_default}/>
                    </div>
                    </div>
            </div>
        )
    }
}