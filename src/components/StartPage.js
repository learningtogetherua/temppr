import { React, useState } from "react";
import { Link } from "react-router-dom";
import MarkX from "./Marks/MarkX"
import MarkO from "./Marks/MarkO"
import "../App.css";
import "./StartPage.css";
import gameLogo from "../assets/logo.svg";

function StartPage() {
  const [player1Mark, setPlayer1Mark] = useState(null);
  const [player2Mark, setPlayer2Mark] = useState(null);

  const handlePlayerMark = (mark) => {
    // console.log(mark)
    setPlayer1Mark(mark);
    setPlayer2Mark(mark === "X" ? "O" : "X");
  };

  const selectedPlayer1Mark = player1Mark || "X";
  const selectedPlayer2Mark = player1Mark ? player2Mark : "O";

  return (
    <div className="start__page">
      <img src={gameLogo} alt="Game Logo"></img>
      <div className="start__page-choose-sect">
        <p>PICK PLAYER 1’S MARK</p>
        <div className="marks">
          <button onClick={() => handlePlayerMark("X")} className="marks__X">
          <MarkX />
          </button>
          <button onClick={() => handlePlayerMark("O")} className="marks__O">
          <MarkO />
          </button>
        </div>
        <p className="highlighted">REMEMBER : X GOES FIRST</p>
      </div>
      <div className="game__type">
        <Link
          to={`/playground?player1=${selectedPlayer1Mark}&CPU=${selectedPlayer2Mark}`}
          className="game__type-solo"
        >
          NEW GAME (VS CPU)
        </Link>
        <Link
          to={`/playground?player1=${selectedPlayer1Mark}&player2=${selectedPlayer2Mark}`}
          className="game__type-multiplayer"
        >
          NEW GAME (VS PLAYER)
        </Link>
      </div>
    </div>
  );
}

export default StartPage;
