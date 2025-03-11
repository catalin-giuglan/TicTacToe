"use client"

import { useState } from "react"
import logo from "./tictactoe (1).png"
import "./App.css"
import Board from "./Board"
import Info from "./Info"

function App() {
  const [activeSection, setActiveSection] = useState("home")
  const [reset, setReset] = useState(false)
  const [winner, setWinner] = useState("")
  const [player1Name, setPlayer1Name] = useState("")
  const [player2Name, setPlayer2Name] = useState("")
  const [player1Score, setPlayer1Score] = useState(0)
  const [player2Score, setPlayer2Score] = useState(0)

  const handleClick = () => {
    console.log("The game has started!")
    // Set default names if fields are empty
    if (!player1Name.trim()) setPlayer1Name("Player 1")
    if (!player2Name.trim()) setPlayer2Name("Player 2")
    setActiveSection("gameStarted")
  }

  const resetBoard = () => {
    setReset(true)
  }

  const handleNameChange = (player, name) => {
    if (player === 1) {
      setPlayer1Name(name)
    } else {
      setPlayer2Name(name)
    }
  }

  const updateScore = (winner) => {
    if (winner === (player1Name || "Player 1")) {
      setPlayer1Score((prevScore) => prevScore + 1)
    } else if (winner === (player2Name || "Player 2")) {
      setPlayer2Score((prevScore) => prevScore + 1)
    }
  }

  const resetScores = () => {
    setPlayer1Score(0)
    setPlayer2Score(0)
  }

  return (
    <div className="App">
      {activeSection === "home" && (
        <header className="App-header">
          <img
            src={logo || "/placeholder.svg"}
            className="App-logo"
            alt="logo"
            style={{
              filter: "invert(100%) sepia(100%) saturate(1000%) hue-rotate(100deg)",
            }}
          />
          <div className="player-names-container">
            <div className="player-name-input">
              <label htmlFor="player1">Player 1 (X): </label>
              <input
                type="text"
                id="player1"
                value={player1Name}
                onChange={(e) => handleNameChange(1, e.target.value)}
                placeholder="Player 1"
                className="name-input"
              />
            </div>
            <div className="player-name-input">
              <label htmlFor="player2">Player 2 (O): </label>
              <input
                type="text"
                id="player2"
                value={player2Name}
                onChange={(e) => handleNameChange(2, e.target.value)}
                placeholder="Player 2"
                className="name-input"
              />
            </div>
          </div>
          <p className="App-intro">
            Press{" "}
            <button className="play-button" onClick={handleClick}>
              Play
            </button>{" "}
            to start the game!
          </p>
        </header>
      )}

      {activeSection === "gameStarted" && (
        <div className="game">
          <div className={`winner ${winner !== "" ? "" : "shrink"}`}></div>
          <div className="winner-text">{winner}</div>
          <div className="game-controls">
            <button onClick={() => setActiveSection("home")} className="play-button">
              Go Back
            </button>
            <button onClick={() => resetBoard()} className="play-button">
              Reset Board
            </button>
            <button onClick={() => resetScores()} className="play-button reset-scores">
              Reset Scores
            </button>
          </div>
          <Board
            reset={reset}
            setReset={setReset}
            winner={winner}
            setWinner={setWinner}
            player1Name={player1Name || "Player 1"}
            player2Name={player2Name || "Player 2"}
            updateScore={updateScore}
          />
          <Info
            player1Name={player1Name || "Player 1"}
            player2Name={player2Name || "Player 2"}
            player1Score={player1Score}
            player2Score={player2Score}
          />
        </div>
      )}
    </div>
  )
}

export default App

