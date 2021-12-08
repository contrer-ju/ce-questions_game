export default function ButtonBox({
  gameStarted,
  setTrueGameStarted,
  setFalseGameStarted,
}) {
  return (
    <div>
      {!gameStarted && (
        <span class="btn" onClick={() => setTrueGameStarted()}>
          Start Game
        </span>
      )}
      {gameStarted && (
        <span class="btn" onClick={() => setFalseGameStarted()}>
          Finish Game
        </span>
      )}
    </div>
  );
}
