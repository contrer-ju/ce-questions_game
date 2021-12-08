export default function ButtonBox({
  gameStarted,
  setTrueGameStarted,
  setFalseGameStarted,
}) {
  return (
    <div>
      {!gameStarted && (
        <span className="btn" onClick={() => setTrueGameStarted()}>
          Iniciar Juego
        </span>
      )}
      {gameStarted && (
        <span className="btn" onClick={() => setFalseGameStarted()}>
          Finalizar Juego
        </span>
      )}
    </div>
  );
}
