import React from "react"
import Title from "./components/Title"
import Scoreboard from "./components/Scoreboard"
import "./style/App.scss"


function App() {
  return (
    <div className="App">
      <Title />
      <main>
        <Scoreboard />
      </main>
    </div>
  )
}

export default App
