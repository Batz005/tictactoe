import { useState } from "react"

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

export default function GameBoard ({ onSelectSquare, activePlayerSymbol }) {
    const [gameBoardState, setGameBoardState ] = useState(initialGameBoard)

    const handleTilePressed = (row, col) => {
        if(gameBoardState[row][col] === null){
            setGameBoardState((prevGameBoard)=>{
                const currentGameBoard = [...prevGameBoard.map(innerArray => [...innerArray])]
               
                    currentGameBoard[row][col] = activePlayerSymbol
                return currentGameBoard;
            })
            
           onSelectSquare(); 
        }
        
    }

    return (
        <ol id="game-board">
            {
                gameBoardState.map((row, i)=>
                    (
                        <li key={i}>
                            <ol>
                            {
                                row.map((column, j)=>(
                                    <li key = {j}>
                                        <button onClick={()=>handleTilePressed(i, j)}>{column}</button>
                                    </li>
                                )
                                    
                                    
                                )
                            }
                            </ol>
                        </li>
                    )
          
                    
                )
            }
        </ol>
    )
}