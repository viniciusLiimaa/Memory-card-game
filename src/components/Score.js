import '../styles/score.css';

const Score = () => {

  return (
    <div id="score-container">
      <div id="current-score" className="score-item">
        <h2>Current score</h2>
      </div>
      <hr></hr>
      <div id="best-score" className="score-item">
        <h2>Best score</h2>
      </div>

    </div>
  )

}

export default Score;