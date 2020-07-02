import React from "react"

export default function player(props) {
  const onClickIncrement = () => {
    props.incrementScore(props.id)
  }

  return (
    <ul>
      <li className="Player">
        {props.name} (score:{props.score})
        <button onClick={onClickIncrement}>increment</button>
      </li>
    </ul>
  )
}
