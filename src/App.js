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

import useGameStarted from "./hooks/useGameStarted";
import useCountDownSeconds from "./hooks/useCountDownSeconds";

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

  const textTitle = triviaData["title"];
  const urlImage = triviaData["image"];
  const questionsList = triviaData["questions"];

  useEffect(() => {
    if (gameStarted) {
      const interval = setInterval(() => {
        setCountDownStart();
        if (seconds === 0) setCountDownReset();
        if (questionCounter === questionsList.length && seconds === 0) {
          setFalseGameStarted();
          setCountDownInitialValues();
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [
    gameStarted,
    questionCounter,
    questionsList.length,
    seconds,
    setCountDownInitialValues,
    setCountDownReset,
    setCountDownStart,
    setFalseGameStarted,
  ]);

  return (
    <div className="Page">
      <div className="App">
        {!gameStarted && <ImageBox image={urlImage} />}
        {gameStarted && <ClockBox seconds={seconds} />}
        <TextBox {...{ gameStarted, textTitle }} />
        {gameStarted && <OptionsBox {...{}} />}
        {gameStarted && <MessagesBox />}
        {gameStarted && <PercentageBar />}
        <ButtonBox
          {...{
            gameStarted,
            setTrueGameStarted,
            setFalseGameStarted,
            setCountDownInitialValues,
          }}
        />
        {/* To Do Finish & Result Game Component  */}
      </div>
    </div>
  );
}

export default App;
