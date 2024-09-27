import { Link } from "react-router-dom";
import MarkX from "../Marks/MarkX"
import MarkO from "../Marks/MarkO"
import "./Result.css";

function Result({isOpen, winner, status, markWinStr, player1Mark, player2Mark, isCpuGame, restartGame}) {
  if (!isOpen) return null;

  let winnerClass;

  if (winner === "X") {
    winnerClass = "result__winner winnerX";
  } else if (winner === "O") {
    winnerClass = "result__winner winnerO";
  } else {
    winnerClass = "result__winner tie";
  } 

  // console.log("Modal open? ",isOpen)
  // console.log("Who winner?  ",winner)
  // console.log("Winner text ",status)
  // console.log("Text winner ",markWinStr)
  // console.log("Player 1 ",player1Mark)
  // console.log("Player 2 ",player2Mark)
  // console.log("Is CPU in game? ",isCpuGame)

  return (
   <div className="result__overlay">
     <div className="result__field">
          <p className="result__text">{status}</p>
          <div className={winnerClass}>
            {winner === "X" && <MarkX />}
            {winner === "O" && <MarkO />} 
            <p>{markWinStr}</p>
          </div>
          <div className="result__btns">
              <Link to="/" className="quit__btn">Quit</Link>
              <Link to={`/playground?player1=${player1Mark}&${isCpuGame ? 'CPU=': 'player2='}${player2Mark}`} className="next__btn" onClick={restartGame}>Next Round</Link>
          </div>
     </div>
   </div>
  );
}

export default Result;