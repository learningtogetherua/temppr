// import { React, useState, useEffect, useReducer } from "react";
// import Square from "./Square";
// import HeaderPanel from "./HeaderPanel";
// import Statistics from "./Statistics";
// import "./Playground.css";
// import Result from "./Result";
// import RestartGame from "./RestartGame";

// const initialState = {
//     player1Wins: 0,
//     player2Wins: 0,
//     ties: 0,
//     cpuWins: 0,
// };

// function reducer(state, action) {
//   switch (action.type) {
//     case "player1Win":
//       return { ...state, player1Wins: state.player1Wins + 1 };
//     case "player2Win":
//       return { ...state, player2Wins: state.player2Wins + 1 };
//     case "cpuWin":
//       return { ...state, cpuWins: state.cpuWins + 1 };
//     case "tie":
//       return { ...state, ties: state.ties + 1 };
//     default:
//       throw new Error("Err");
//   }
// }

// function Playground() {
//   const queryParams = new URLSearchParams(window.location.search);
//   let player1Mark = queryParams.get("player1") || "X";
//   let player2Mark = queryParams.get("player2") || queryParams.get("CPU") || "O";
//   const isCpuGame = queryParams.has("CPU");

//   const [state, dispatch] = useReducer(reducer, initialState);

//   const [xIsNext, setXIsNext] = useState(player1Mark === "X"); // true
//   const [squares, setSquares] = useState(Array(9).fill(null));
//   const [isCpuTurn, setIsCpuTurn] = useState(false);
//   const [modalRestartState, setModalRestartState] = useState(false);

//   let currentMark;
//   // console.log("Current mark top level code",currentMark)
//   function handleClick(i) {
//     if (squares[i] || calculateWinner(squares)) {
//       return;
//     }
//     // console.log("Current mark before changing",currentMark)
//     const nextSquares = squares.slice();
//     // console.log("Arr squares", nextSquares)
//     currentMark = xIsNext ? player1Mark : player2Mark;
//     // console.log("Current mark after changing",currentMark)
//     nextSquares[i] = currentMark;
//     // console.log("Mark push in arr", nextSquares[i])
//     setSquares(nextSquares);
//     setXIsNext(!xIsNext);
//   }

//   useEffect(() => {
//     const winner = calculateWinner(squares);
//     if (winner || squares.every((square) => square !== null)) {
//       setIsCpuTurn(false);
//       return;
//     }

//     if (isCpuGame && !xIsNext) {
//       setIsCpuTurn(true);
//       const nextSquares = squares.slice();
//       const computerMove = getComputerMove(nextSquares);
//       if (computerMove !== undefined) {
//         setTimeout(() => {
//           nextSquares[computerMove] = player2Mark;
//           setSquares(nextSquares);
//           setXIsNext(true);
//           setIsCpuTurn(false);
//         }, 1000);
//       } else {
//         setIsCpuTurn(false);
//       }
//     }
//   }, [xIsNext, squares, isCpuGame, player2Mark]);

//   function handleRestart() {
//     setModalRestartState(true);
//   }
//   function cancelRestart() {
//     setModalRestartState(false);
//   }
//   function restartGame() {
//     setModalRestartState(false);
//     setSquares(Array(9).fill(null));
//     setXIsNext(player1Mark === "X");
//   }

//   const resultGame = calculateWinner(squares);
//   let status;
//   let whoTakesRound;
//   let winner;
//   let modalResultState = false;

//   if (resultGame) {
//     modalResultState = true;
//     winner = resultGame.winner;
//     // console.log(resultGame);
//     whoTakesRound = `TAKES THE ROUND`;
//     if (isCpuGame && !xIsNext) {
//       status = `YOU WON!`;
//       // stats.player1Wins++;
//       dispatch({ type: "player1Win" })
//     } else if (isCpuGame && xIsNext) {
//       status = `OH NO, YOU LOST…`;
//       // stats.cpuWins++;
//       dispatch({ type: "cpuWin" })
//     } else {
//       status = `${winner === player1Mark ? "Player 1" : "Player 2"} wins!`;
//       // status === "Player 1 wins!" ? (stats.player1Wins++) : (stats.player2Wins++);
//       // winner === player1Mark ? (stats.player1Wins++) : (stats.player2Wins++);
//       winner === player1Mark ? dispatch({ type: "player1Win" }) : dispatch({ type: "player2Win" });
//     }
//   } else if (squares.every((square) => square)) {
//     modalResultState = true;
//     whoTakesRound = `ROUND TIED`;
//     // stats.ties++;
//     dispatch({ type: "tie" })
//   } else {
//     status = `${xIsNext ? player1Mark : player2Mark}`;
//   }
//   // console.log(stats)
//   return (
//     <section className="board">
//       <HeaderPanel turnStatus={status} onRestart={handleRestart} />

//       <div className="board-row">
//         <Square
//           value={squares[0]}
//           onSquareClick={() => {
//             handleClick(0);
//           }}
//           disabledTurn={isCpuTurn}
//         />
//         <Square
//           value={squares[1]}
//           onSquareClick={() => {
//             handleClick(1);
//           }}
//           disabledTurn={isCpuTurn}
//         />
//         <Square
//           value={squares[2]}
//           onSquareClick={() => {
//             handleClick(2);
//           }}
//           disabledTurn={isCpuTurn}
//         />
//       </div>
//       <div className="board-row">
//         <Square
//           value={squares[3]}
//           onSquareClick={() => {
//             handleClick(3);
//           }}
//           disabledTurn={isCpuTurn}
//         />
//         <Square
//           value={squares[4]}
//           onSquareClick={() => {
//             handleClick(4);
//           }}
//           disabledTurn={isCpuTurn}
//         />
//         <Square
//           value={squares[5]}
//           onSquareClick={() => {
//             handleClick(5);
//           }}
//           disabledTurn={isCpuTurn}
//         />
//       </div>
//       <div className="board-row">
//         <Square
//           value={squares[6]}
//           onSquareClick={() => {
//             handleClick(6);
//           }}
//           disabledTurn={isCpuTurn}
//         />
//         <Square
//           value={squares[7]}
//           onSquareClick={() => {
//             handleClick(7);
//           }}
//           disabledTurn={isCpuTurn}
//         />
//         <Square
//           value={squares[8]}
//           onSquareClick={() => {
//             handleClick(8);
//           }}
//           disabledTurn={isCpuTurn}
//         />
//       </div>
//       <Statistics
//         player1={isCpuGame ? player1Mark === "X" ? "P1" : "CPU" : player1Mark === "X" ? "P1" : "P2"}
//         player2={isCpuGame ? player2Mark === "X" ? "P1" : "CPU" : player2Mark === "X" ? "P1" : "P2"}
//         score={state}
//       />
//       <Result
//         isOpen={modalResultState}
//         winner={winner}
//         status={status}
//         markWinStr={whoTakesRound}
//         player1Mark={player1Mark}
//         player2Mark={player2Mark}
//         isCpuGame={isCpuGame}
//         restartGame={restartGame}
//       />
//       <RestartGame
//         isOpen={modalRestartState}
//         onClose={cancelRestart}
//         restartGame={restartGame}
//         player1Mark={player1Mark}
//         player2Mark={player2Mark}
//         isCpuGame={isCpuGame}
//       />
//     </section>
//   );
// }

// function calculateWinner(squares) {
//   const lines = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
//   ];
//   for (let i = 0; i < lines.length; i++) {
//     const [a, b, c] = lines[i];
//     if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//       return {
//         winner: squares[a],
//         lineWinner: [a, b, c],
//       };
//       // return squares[a];
//     }
//   }
//   return null;
// }

// function getComputerMove(squares) {
//   const availableMoves = squares
//     .map((square, index) => (square === null ? index : null))
//     .filter((index) => index !== null);
//   const randomMove =
//     availableMoves[Math.floor(Math.random() * availableMoves.length)];
//   return randomMove;
// }

// export default Playground;

import { React, useState, useEffect, useReducer, useCallback } from "react";
import Square from "./Square";
import HeaderPanel from "./HeaderPanel";
import Statistics from "./Statistics";
import "./Playground.css";
import Result from "./Result";
import RestartGame from "./RestartGame";

const initialState = {
    player1Wins: 0,
    player2Wins: 0,
    ties: 0,
    cpuWins: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "player1Win":
      return { ...state, player1Wins: state.player1Wins + 1 };
    case "player2Win":
      return { ...state, player2Wins: state.player2Wins + 1 };
    case "cpuWin":
      return { ...state, cpuWins: state.cpuWins + 1 };
    case "tie":
      return { ...state, ties: state.ties + 1 };
    default:
      throw new Error("Unhandled action type");
  }
}

function Playground() {
  const queryParams = new URLSearchParams(window.location.search);
  const player1Mark = queryParams.get("player1") || "X";
  const player2Mark = queryParams.get("player2") || queryParams.get("CPU") || "O";
  const isCpuGame = queryParams.has("CPU");

  const [state, dispatch] = useReducer(reducer, initialState);
  const [xIsNext, setXIsNext] = useState(player1Mark === "X");
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isCpuTurn, setIsCpuTurn] = useState(false);
  const [modalRestartState, setModalRestartState] = useState(false);

  const handleClick = useCallback((i) => {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? player1Mark : player2Mark;
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }, [squares, xIsNext, player1Mark, player2Mark]);

  useEffect(() => {
    const winner = calculateWinner(squares);
    if (winner || squares.every(square => square !== null)) {
      setIsCpuTurn(false);
      return;
    }

    if (isCpuGame && !xIsNext) {
      setIsCpuTurn(true);
      const nextSquares = squares.slice();
      const computerMove = getComputerMove(nextSquares);
      if (computerMove !== undefined) {
        setTimeout(() => {
          nextSquares[computerMove] = player2Mark;
          setSquares(nextSquares);
          setXIsNext(true);
          setIsCpuTurn(false);
        }, 1000);
      }
    }
  }, [xIsNext, squares, isCpuGame, player2Mark]);

  const handleRestart = useCallback(() => {
    setModalRestartState(true);
  }, []);

  const cancelRestart = useCallback(() => {
    setModalRestartState(false);
  }, []);

  const restartGame = useCallback(() => {
    setModalRestartState(false);
    setSquares(Array(9).fill(null));
    setXIsNext(player1Mark === "X");
  }, [player1Mark]);

  const resultGame = calculateWinner(squares);
  let status;
  let whoTakesRound;
  let winner;
  let modalResultState = false;

  if (resultGame) {
    modalResultState = true;
    winner = resultGame.winner;
    status = isCpuGame && !xIsNext ? `YOU WON!` : isCpuGame && xIsNext ? `OH NO, YOU LOST…` : `${winner === player1Mark ? "Player 1" : "Player 2"} wins!`;
    dispatch({ type: winner === player1Mark ? "player1Win" : winner === player2Mark ? "player2Win" : "cpuWin" });
  } else if (squares.every(square => square)) {
    modalResultState = true;
    whoTakesRound = `ROUND TIED`;
    dispatch({ type: "tie" });
  } else {
    status = `${xIsNext ? player1Mark : player2Mark} TURN`;
  }

  return (
    <section className="board">
      <HeaderPanel turnStatus={status} onRestart={handleRestart} />
      {squares.map((value, index) => (
        <Square key={index} value={value} onSquareClick={() => handleClick(index)} disabledTurn={isCpuTurn} />
      ))}
      <Statistics player1={player1Mark} player2={player2Mark} score={state} />
      <Result isOpen={modalResultState} winner={winner} status={status} markWinStr={whoTakesRound} player1Mark={player1Mark} player2Mark={player2Mark} isCpuGame={isCpuGame} restartGame={restartGame} />
      <RestartGame isOpen={modalRestartState} onClose={cancelRestart} restartGame={restartGame} player1Mark={player1Mark} player2Mark={player2Mark} isCpuGame={isCpuGame} />
    </section>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], lineWinner: [a, b, c] };
    }
  }
  return null;
}

function getComputerMove(squares) {
  const availableMoves = squares.filter(square => square === null);
  return availableMoves[Math.floor(Math.random() * availableMoves.length)];
}

export default Playground;

