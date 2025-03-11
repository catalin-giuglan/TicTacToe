import "./info.css"

const Info = ({ player1Name, player2Name, player1Score, player2Score }) => {
  return (
    <div className="info">
      <div className="player">
        <div className="player-name">{player1Name}: X</div>
        <div className="player-score">{player1Score}</div>
      </div>
      <div className="player">
        <div className="player-name">{player2Name}: O</div>
        <div className="player-score">{player2Score}</div>
      </div>
    </div>
  )
}

export default Info

