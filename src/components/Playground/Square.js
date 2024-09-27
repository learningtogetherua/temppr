import MarkX from "../Marks/MarkX"
import MarkO from "../Marks/MarkO"

function Square({ value, onSquareClick, disabledTurn }) {

  let squareClass;

  if(value === "X"){
    squareClass = "squareX"
  }else{
    squareClass = "squareO"
  }

  return (
    <button className={`square ${squareClass}`} onClick={onSquareClick} disabled={disabledTurn}>
      {value === "X" && <MarkX />}
      {value === "O" && <MarkO />}
    </button>
  );
}

export default Square;
