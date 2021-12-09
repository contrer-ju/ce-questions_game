import { useEffect } from "react";

import "./App.css";
import triviaData from "./constants/trivia.json";

import ImageBox from "./components/ImageBoxComponent";
import ClockBox from "./components/ClockBoxComponent";
import TextBox from "./components/TextBoxComponent";
import OptionsBox from "./components/OptionsBoxComponent";
import MessagesBox from "./components/MessagesBoxComponent";
import PercentageBar from "./components/PercentageBarComponent";
import ButtonBox from "./components/ButtonBoxComponent";
import ResultBox from "./components/ResultBoxComponent";

import useGameStarted from "./hooks/useGameStarted";
import useCountDownSeconds from "./hooks/useCountDownSeconds";
import useUserAnswer from "./hooks/useUserAnswer";
import useGameFinished from "./hooks/useGameFinished";

function App() {
  const { gameStarted, setTrueGameStarted, setFalseGameStarted } =
    useGameStarted();
  const {
    seconds,
    questionCounter,
    setCountDownStart,
    setCountDownReset,
    setCountDownInitialValues,
  } = useCountDownSeconds();
  const {
    answerArray,
    setUserAnswer,
    checkedRadioButtom,
    setUserAnswerInitialValues,
    setTrueSingleRadioButtom,
    setFalseRadioButtoms,
  } = useUserAnswer();
  const { gameFinished, setTrueGameFinished, setFalseGameFinished } =
    useGameFinished();

  const textTitle = triviaData["title"];
  const urlImage = triviaData["image"];
  const questionsList = triviaData["questions"];

  useEffect(() => {
    if (gameStarted && !gameFinished) {
      const interval = setInterval(() => {
        setCountDownStart();
        if (seconds === 0) {
          setCountDownReset();
          setFalseRadioButtoms();
        }
        if (questionCounter === questionsList.length && seconds === 0) {
          //setFalseGameStarted();
          setTrueGameFinished();
          setCountDownInitialValues();
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [
    gameFinished,
    gameStarted,
    questionCounter,
    questionsList.length,
    seconds,
    setCountDownInitialValues,
    setCountDownReset,
    setCountDownStart,
    setFalseGameStarted,
    setFalseRadioButtoms,
    setTrueGameFinished,
  ]);

  return (
    <div className="Page">
      <div className="App">
        {!gameStarted && <ImageBox image={urlImage} />}
        {gameStarted && <ClockBox seconds={seconds} />}
        <TextBox
          {...{ gameStarted, textTitle, questionsList, questionCounter }}
        />
        {gameStarted && (
          <OptionsBox
            {...{
              seconds,
              questionsList,
              questionCounter,
              setUserAnswer,
              checkedRadioButtom,
              setTrueSingleRadioButtom,
            }}
          />
        )}
        {gameStarted && <MessagesBox {...{ seconds }} />}
        {gameStarted && (
          <PercentageBar {...{ questionCounter, questionsList }} />
        )}
        <ButtonBox
          {...{
            gameStarted,
            setTrueGameStarted,
            setFalseGameStarted,
            setCountDownInitialValues,
            setUserAnswerInitialValues,
            setFalseGameFinished,
          }}
        />
        {gameFinished && (
          <ResultBox
            {...{
              answerArray,
              setFalseGameStarted,
              setFalseGameFinished,
              setUserAnswerInitialValues,
            }}
          />
        )}
      </div>
    </div>
  );
}

export default App;
