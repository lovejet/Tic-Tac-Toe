export const stateToChar = (state: number) => {
  if (state === -1) return "O";
  else if (state === 1) return "X";
  return null;
};

export const winningStates = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
