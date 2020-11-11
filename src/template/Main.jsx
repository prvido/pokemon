import React from 'react'

import CardPanel from '../components/CardPanel'

import "./Main.css"

export default class Main extends React.Component {
    render() {
        return (
            <main className="main container bg-light p-2 my-4">
                <h2 className="ml-3">Random Pokemon Team</h2>
                <CardPanel />
            </main>
        )
    }
}