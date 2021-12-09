import { useState } from "react";
import triviaData from "../constants/trivia.json";

const useCountDownSeconds = () => {
  let i = 0;
  const [questionCounter, setQuestionCounter] = useState(1);
  const [seconds, setSeconds] = useState(
    triviaData["questions"][0]["lifetimeSeconds"]
  );

  const setCountDownStart = () => {
    setSeconds(seconds - 1);
  };

  const setCountDownReset = () => {
    i++;
    setSeconds(triviaData["questions"][i]["lifetimeSeconds"]);
    setQuestionCounter(questionCounter + 1);
  };

  const setCountDownInitialValues = () => {
    i = 0;
    setQuestionCounter(1);
    setSeconds(triviaData["questions"][0]["lifetimeSeconds"]);
  };

  return {
    seconds,
    questionCounter,
    setCountDownStart,
    setCountDownReset,
    setCountDownInitialValues,
  };
};

export default useCountDownSeconds;
