import React from "react"
import Player from './Player'
import AddPlayerForm from './AddPlayerForm'

export default function Scoreboard() {
  return (
    <div className="Scoreboard">
      <p>Player's scores:</p>
      <ul>
        <Player name="Imre" />
        <Player name="David" />
        <Player name="Jeroen" />
        <Player name="Karla" />
        <AddPlayerForm />
      </ul>
    </div>
  )
}
