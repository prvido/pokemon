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
                            <img src={this.state.pokemon.sprites.front_default} alt="imagem"/>
                        </div>
                        <div className="pokeName">
                            <h6> {
                                this.state.pokemon.name.charAt(0).toUpperCase() 
                                + this.state.pokemon.name.slice(1)
                            } </h6>
                        </div>
                    </div>
    
                    <div className="atackPanel">
                        <div className="atackRow">
                            <div className="pokeAtack">{
                                this.state.pokemon.moves[this.props.moves[0]].move.name.charAt(0).toUpperCase()
                                + this.state.pokemon.moves[this.props.moves[0]].move.name.slice(1)
                            }</div>
                            <div className="pokeAtack">{
                                this.state.pokemon.moves[this.props.moves[1]].move.name.charAt(0).toUpperCase()
                                + this.state.pokemon.moves[this.props.moves[1]].move.name.slice(1)
                            }</div>
                        </div>
                        <div className="atackRow">
                            <div className="pokeAtack">{
                                this.state.pokemon.moves[this.props.moves[2]].move.name.charAt(0).toUpperCase()
                                + this.state.pokemon.moves[this.props.moves[2]].move.name.slice(1)
                            }</div>
                            <div className="pokeAtack">{
                                this.state.pokemon.moves[this.props.moves[3]].move.name.charAt(0).toUpperCase()
                                + this.state.pokemon.moves[this.props.moves[3]].move.name.slice(1)
                            }</div>
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