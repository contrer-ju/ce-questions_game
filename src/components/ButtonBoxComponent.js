export default function ButtonBox({
  gameStarted,
  setTrueGameStarted,
  setFalseGameStarted,
  setCountDownInitialValues,
}) {
  return (
    <div>
      {!gameStarted && (
        <span className="btn" onClick={() => setTrueGameStarted()}>
          Iniciar Juego
        </span>
      )}
      {gameStarted && (
        <span
          className="btn"
          onClick={() => {
            setFalseGameStarted();
            setCountDownInitialValues();
          }}
        >
          Finalizar Juego
        </span>
      )}
    </div>
  );
}
