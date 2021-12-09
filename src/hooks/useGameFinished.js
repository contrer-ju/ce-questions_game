import { useState } from "react";

const useGameFinished = () => {
  const [gameFinished, setGameFinished] = useState(false);
  
  const setTrueGameFinished = () =>{
    setGameFinished(true);
  }

  const setFalseGameFinished = () =>{
    setGameFinished(false);
  }

  return {
    gameFinished,
    setTrueGameFinished,
    setFalseGameFinished    
  };
};

export default useGameFinished;