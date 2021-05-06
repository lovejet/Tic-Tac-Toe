import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import { stateToChar, winningStates } from "./helper";

type Props = {
  currentPlayer: number;
  winner: number;
  setCurrentPlayer: Function;
  setWinner: Function;
};

const Board = forwardRef(
  ({ currentPlayer, setCurrentPlayer, winner, setWinner }: Props, ref) => {
    const [boardState, setBoardState] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);

    useImperativeHandle(ref, () => ({
      reset() {
        setBoardState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
      },
    }));

    const clickBoard = (index: number) => {
      if (!boardState[index] && !winner) {
        const newBoardState = [...boardState];
        newBoardState[index] = currentPlayer;
        winningStates.findIndex(
          (winningState) =>
            winningState.findIndex(
              (v) => newBoardState[v] !== currentPlayer
            ) === -1
        ) !== -1 && setWinner(currentPlayer);
        setBoardState(newBoardState);
        setCurrentPlayer(-currentPlayer);
      }
    };

    useEffect(() => {}, [currentPlayer, setWinner, boardState]);

    return (
      <div className="grid-container">
        {boardState.map((item, index) => (
          <div
            className="grid-item"
            key={index}
            onClick={() => clickBoard(index)}
          >
            {stateToChar(item)}
          </div>
        ))}
      </div>
    );
  }
);

export default Board;
