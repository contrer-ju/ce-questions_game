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

function App() {
  const { gameStarted, setTrueGameStarted, setFalseGameStarted } =
    useGameStarted();
  const textTitle = triviaData["title"];
  const urlImage = triviaData["image"];
  const questionsList = triviaData["questions"];

  return (
    <div className="Page">
      <div className="App">
        {!gameStarted && <ImageBox image={urlImage} />}
        {gameStarted && <ClockBox />}
        <TextBox {...{ gameStarted, textTitle }} />
        {gameStarted && <OptionsBox {...{}} />}
        {gameStarted && <MessagesBox />}
        {gameStarted && <PercentageBar />}
        <ButtonBox
          {...{ gameStarted, setTrueGameStarted, setFalseGameStarted }}
        />
        {/* To Do Finish & Result Game Component  */}
      </div>
    </div>
  );
}

export default App;
