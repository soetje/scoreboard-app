import React, { useState } from "react"
import Player from "./Player"

// import AddPlayerForm from "./AddPlayerForm"

function compare_score(player_a, player_b) {
  return player_b.score - player_a.score
}

function compare_name(player_a, player_b) {
  return player_a.name.localeCompare(player_b.name)
}

export default function Scoreboard() {
  const [players, set_players] = useState([
    { id: 1, name: "Imre", score: 11 },
    { id: 2, name: "David", score: 14 },
    { id: 3, name: "Karla", score: 4 },
    { id: 4, name: "Jeroen", score: 42 },
  ])

  const [sort_by, set_sort_by] = useState("score")

  const sortFunction = sort_by === "score" ? compare_score : compare_name

  const players_sorted = [...players].sort(sortFunction)

  const change_sorting = (event) => {
    console.log("new sort order:", event.target.value)
    set_sort_by(event.target.value)
  }

  const incrementScore = (id) => {
    const new_players_array = players.map((player) => {
      if (player.id === id) {
        return {
          ...player,
          score: player.score + 1,
        }
      } else {
        return player
      }
    })
    set_players(new_players_array)
    console.log("what is:", new_players_array)
  }

  const resetScore = () => {
    const players_reset = players.map((player) => {
      if (player) {
        return {
          ...player,
          score: player.score - player.score,
        }
      } else {
        return player
      }
    })
    set_players(players_reset)
  }

  return (
    <div className="Scoreboard">
      <h1>Player's scores:</h1>
      <button onClick={resetScore}>reset</button>
      <p>
        Sort order:{" "}
        <select onChange={change_sorting}>
          <option value="score">Sort by score</option>
          <option value="name">Sort by name</option>
        </select>
      </p>
      {players_sorted.map((player) => (
        <Player
          id={player.id}
          name={player.name}
          score={player.score}
          incrementScore={incrementScore}
        />
      ))}
    </div>
  )
}
