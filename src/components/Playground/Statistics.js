function Statistics({ player1, player2, score }) {
  
  return (
    <div className="statistics">
      <div className="statistics__block">
        <p>X ({player1})</p>
        <p>{player1 === "P1" ? score.player1Wins : player1 === "P2" ? score.player2Wins : score.cpuWins}</p>
      </div>
      <div className="statistics__block">
        <p>Ties</p>
        <p>{score.ties}</p>
      </div>
      <div className="statistics__block">
        <p>O ({player2})</p>
        <p>{player2 === "P1" ? score.player1Wins : player2 === "P2" ? score.player2Wins : score.cpuWins}</p>
      </div>
    </div>
  );
}

export default Statistics;
