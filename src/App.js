import "./App.css";

import ImageBox from "./components/ImageBoxComponent";
import ClockBox from "./components/ClockBoxComponent"
import TextBox from "./components/TextBoxComponent";
import OptionsBox from "./components/OptionsBoxComponent";
import MessagesBox from "./components/MessagesBoxComponent";
import PercentageBar from "./components/PercentageBarComponent";
import ButtonBox from "./components/ButtonBoxComponent";

import useGameStarted from "./hooks/useGameStarted";

function App() {
  const { gameStarted, setTrueGameStarted, setFalseGameStarted } =
    useGameStarted();

  return (
    <div className="Page">
      <div className="App">
        {!gameStarted && <ImageBox />}
        {gameStarted && <ClockBox />}
        <TextBox />
        {gameStarted && <OptionsBox />}
        {gameStarted && <MessagesBox />}
        {gameStarted && <PercentageBar />}
        <ButtonBox {...{ gameStarted, setTrueGameStarted, setFalseGameStarted }} />
      </div>
    </div>
  );
}

export default App;
