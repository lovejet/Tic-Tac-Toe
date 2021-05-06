import { useRef, useState } from "react";
import "./App.css";
import Board from "./Board";
import { stateToChar } from "./helper";

interface BoardRefInterface {
  reset: Function;
}

function App() {
  const ref = useRef(null);
  const [currentPlayer, setCurrentPlayer] = useState(-1);
  const [winner, setWinner] = useState(0);

  const handleReset = () => {
    setCurrentPlayer(-1);
    setWinner(0);
    ref.current && ((ref.current as unknown) as BoardRefInterface).reset();
  };

  return (
    <div className="App">
      <div style={{ fontSize: "36px" }}>
        Next Player: {stateToChar(currentPlayer)}
      </div>
      <div style={{ fontSize: "36px" }}>Winner: {stateToChar(winner)}</div>
      <Board
        ref={ref}
        currentPlayer={currentPlayer}
        setCurrentPlayer={setCurrentPlayer}
        winner={winner}
        setWinner={setWinner}
      />
      <div>
        <button style={{ fontSize: "36px" }} onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
