export default function ButtonBox({
  gameStarted,
  setTrueGameStarted,
  setFalseGameStarted,
  setCountDownInitialValues,
  setUserAnswerInitialValues,
  setFalseGameFinished,
}) {
  return (
    <div>
      {!gameStarted && (
        <span
          className="btn btn-outline-light buttomText"
          onClick={() => {
            setTrueGameStarted();
            setFalseGameFinished();
          }}
        >
          Iniciar Juego
        </span>
      )}
      {gameStarted && (
        <span
          className="btn btn-outline-light buttomText"
          onClick={() => {
            setFalseGameStarted();
            setCountDownInitialValues();
            setUserAnswerInitialValues();
          }}
        >
          Finalizar Juego
        </span>
      )}
    </div>
  );
}
