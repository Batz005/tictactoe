import { act, useState } from "react"
import GameBoard from "./components/GameBoard"
import Player from "./components/Player"

function App() {
  const [activePlayer, setActivePlayer] = useState('X')

  const handleSquareSelected = () => {
    setActivePlayer((currActivePlayer) => currActivePlayer === 'X' ? 'O' : 'X')
  }

  return (
    <main>
      <div id = "game-container">
        <ol id = "players" className="highlight-player">
          <Player name = "Player 1" symbol = "X" isActive={activePlayer==='X'}/>
          <Player name = "Player 2" symbol = "O" isActive={activePlayer==='O'}/>
        </ol>
        <h4>Current Turn: <span className="player-symbol">{activePlayer}</span></h4>
        <GameBoard onSelectSquare={handleSquareSelected} activePlayerSymbol={activePlayer}/>
      </div>
    </main>
  )
}

export default App
