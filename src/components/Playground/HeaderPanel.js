import MarkX from "../Marks/MarkX"
import MarkO from "../Marks/MarkO"
import gameLogo from "../../assets/logo.svg";
import restartImg from "../../assets/icon-restart.svg";

function HeaderPanel({turnStatus, onRestart}) {
  return (
    <div className="header__panel">
      <img src={gameLogo} alt="Game Logo"></img>
      <div className="player__turn">
        {turnStatus === "X" && <MarkX />}
        {turnStatus === "O" && <MarkO />}
        TURN
      </div>
      <button className="restart__game" onClick={onRestart}>
        <img src={restartImg} alt="Restart game button"></img>
      </button>
    </div>
  );
}

export default HeaderPanel;
