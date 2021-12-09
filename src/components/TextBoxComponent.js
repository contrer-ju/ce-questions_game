export default function TextBox({
  gameStarted,
  textTitle,
  questionsList,
  questionCounter,
}) {
  let questionArrayPosition = 0;
  questionCounter > questionsList.length
    ? (questionArrayPosition = questionCounter - 2)
    : (questionArrayPosition = questionCounter - 1);

  return (
    <>
      {!gameStarted && <div className="welcomeText">{textTitle}</div>}
      {gameStarted && (
        <div className="questionText">
          {questionsList[questionArrayPosition]["text"]}
        </div>
      )}
    </>
  );
}
