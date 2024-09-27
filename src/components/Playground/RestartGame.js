import { Link } from "react-router-dom";
import "./RestartGame.css"

function RestartGame({isOpen, onClose, restartGame, player1Mark, player2Mark, isCpuGame}) {
  if (!isOpen) return null;

  return (
   <div className="restart__overlay">
     <div className="restart__field">
          <p className="restart__text">RESTART GAME?</p>
          <div className="restart__btns">
              <button className="cancel__btn" onClick={onClose}>NO, CANCEL</button>
              <Link to={`/playground?player1=${player1Mark}&${isCpuGame ? 'CPU=': 'player2='}${player2Mark}`} className="restart__btn" onClick={restartGame}>YES, RESTART</Link>
              {/* refresh="true" */}
          </div>
     </div>
   </div>
  );
}

export default RestartGame;