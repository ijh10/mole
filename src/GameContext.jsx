import { createContext, useContext, useState } from "react";

const GameContext = createContext();

export function GameProvider({ children }) {
  const [field, setField] = useState(makeField());
  const [score, setScore] = useState(0);
  console.log(score);
  const whack = () => {
    setField(makeField());
    setScore(score + 1);
  };
  function endGame() {
    setScore(0);
    setField(makeField());
  }

  const value = { field, whack, score, endGame };
  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}

export function useGame() {
  const context = useContext(GameContext);
  if (!context) throw Error("useGame must be used in GameProvider");
  return context;
}

function makeField() {
  const field = Array(9).fill(false);
  const randomIndex = Math.floor(Math.random() * 9);
  field[randomIndex] = true;
  return field;
}
