import { useState } from "react";

const useGameStarted = () => {
  const [gameStarted, setGameStarted] = useState(false);
  
  const setTrueGameStarted = () =>{
    setGameStarted(true);
  }

  const setFalseGameStarted = () =>{
    setGameStarted(false);
  }

  return {
    gameStarted,
    setTrueGameStarted,
    setFalseGameStarted    
  };
};

export default useGameStarted;