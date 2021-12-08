export default function TextBox({ gameStarted, textTitle }) {
  return (
    <>
      {!gameStarted && <div className="welcomeText">{textTitle}</div>}
      {gameStarted && <div className="questionText">Question 1</div>}
    </>
  );
}
