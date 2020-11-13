import React from 'react'
import axios from 'axios'

import "./PokeCard.css"

const getRandomArray = require('../functions/functions')

const initialState = {
    status: false,
    pokemon: {},
    attacksArr: []
}

export default class PokeCard extends React.Component {

    state = {...initialState}

    async componentDidMount() {
        await axios.get(`https://pokeapi.co/api/v2/pokemon/${this.props.id}`)
             .then(resp => {
                    this.setState({pokemon: resp.data})
                    this.setAtackArray()
                    this.setState({status: true})
                })
             .catch(err => console.log(err))
    }

    async setAtackArray() {
        const lastAttackIndex = this.state.pokemon.moves.length - 1
        this.setState({attacksArr: getRandomArray(4, 100, lastAttackIndex)})
        console.log(this.state.pokemon.moves[this.state.attacksArr[0]].move.name)
    }

    render() {
        if (this.state.status) {
            return (
                <div className="pokeCard">
    
                    <div className="nameAndImg">
                        <div className="pokeImg">
                            <a href={`https://www.pokemon.com/br/pokedex/${this.props.id}`} target="_blank"><img src={this.state.pokemon.sprites.front_default} alt="imagem" rel="noreferrer"/></a>
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
                            <div className="pokeAtack">{
                                this.state.pokemon.moves[this.state.attacksArr[0]].move.name.charAt(0).toUpperCase()
                                + this.state.pokemon.moves[this.state.attacksArr[0]].move.name.slice(1) 
                            }</div>
                            <div className="pokeAtack">{
                                this.state.pokemon.moves[this.state.attacksArr[1]].move.name.charAt(0).toUpperCase()
                                + this.state.pokemon.moves[this.state.attacksArr[1]].move.name.slice(1)
                            }</div>
                        </div>
                        <div className="atackRow">
                            <div className="pokeAtack">{
                                this.state.pokemon.moves[this.state.attacksArr[2]].move.name.charAt(0).toUpperCase()
                                + this.state.pokemon.moves[this.state.attacksArr[2]].move.name.slice(1)
                            }</div>
                            <div className="pokeAtack">{
                                this.state.pokemon.moves[this.state.attacksArr[3]].move.name.charAt(0).toUpperCase()
                                + this.state.pokemon.moves[this.state.attacksArr[3]].move.name.slice(1)
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