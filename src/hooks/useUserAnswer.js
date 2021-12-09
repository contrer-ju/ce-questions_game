import { useState } from "react";
import triviaData from "../constants/trivia.json";

const useUserAnswer = () => {
  const [answerArray, setAnswerArray] = useState(
    Array.from({ length: triviaData["questions"].length }, () => undefined)
  );
  const [checkedRadioButtom, setCheckedRadioButtom] = useState([
    false,
    false,
    false,
  ]);

  const setUserAnswer = (i, value) => {
    let userAnswerArray = answerArray;
    for (let j = 0; j < triviaData["questions"].length; j++) {
      if (i === j) userAnswerArray[j] = value;
    }
    setAnswerArray(userAnswerArray);
  };

  const setUserAnswerInitialValues = () => {
    setAnswerArray(
      Array.from({ length: triviaData["questions"].length }, () => undefined)
    );
  };

  const setTrueSingleRadioButtom = (i) => {
    let arrayRadioButtom = [false, false, false];
    for (let j = 0; j < 3; j++) {
      if (i === j) arrayRadioButtom[j] = true;
    }
    setCheckedRadioButtom(arrayRadioButtom);
  };

  const setFalseRadioButtoms = () => {
    setCheckedRadioButtom([false, false, false]);
  };

  return {
    answerArray,
    setUserAnswer,
    checkedRadioButtom,
    setUserAnswerInitialValues,
    setTrueSingleRadioButtom,
    setFalseRadioButtoms,
  };
};

export default useUserAnswer;
