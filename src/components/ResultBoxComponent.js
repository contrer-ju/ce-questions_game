export default function ResultBox({
  answerArray,
  setFalseGameStarted,
  setFalseGameFinished,
  setUserAnswerInitialValues,
}) {
  let correctAnswers = answerArray.filter((x) => x === true).length;
  let wrongAnswers = answerArray.filter((x) => x === false).length;
  let unansweredAnswers = answerArray.filter((x) => x === undefined).length;
  let effectiveness = correctAnswers / answerArray.length;
 
  return (
    <>
      <div className="modalBackground">
        <div className="modalDialog">
          <div className="centerText">
            <p>Tus resultados fueron:</p>
            <p>Correctas: {correctAnswers}</p>
            <p>Incorrectas: {wrongAnswers}</p>
            <p>Sin contestar: {unansweredAnswers}</p>
            <div>
              {effectiveness === 0 &&
                [0, 1, 2, 3, 4].map((i) => (
                  <i className="fa fa-star" key={i}></i>
                ))}
              {effectiveness > 0 &&
                effectiveness <= 0.2 && (
                  <i className="fa fa-star coloredStar"></i>
                ) &&
                [0, 1, 2, 3].map((i) => <i className="fa fa-star" key={i}></i>)}

              {effectiveness > 0.2 &&
                effectiveness <= 0.4 &&
                [0, 1].map((i) => (
                  <i className="fa fa-star coloredStar" key={i}></i>
                ))}
              {effectiveness > 0.2 &&
                effectiveness <= 0.4 &&
                [0, 1, 2].map((i) => <i className="fa fa-star" key={i}></i>)}

              {effectiveness > 0.4 &&
                effectiveness <= 0.6 &&
                [0, 1, 2].map((i) => (
                  <i className="fa fa-star coloredStar" key={i}></i>
                ))}
              {effectiveness > 0.4 &&
                effectiveness <= 0.6 &&
                [0, 1].map((i) => <i className="fa fa-star" key={i}></i>)}

              {effectiveness > 0.6 &&
                effectiveness <= 0.8 &&
                [0, 1, 2, 3].map((i) => (
                  <i className="fa fa-star coloredStar" key={i}></i>
                ))}
              {effectiveness > 0.6 && effectiveness <= 0.8 && (
                <i className="fa fa-star"></i>
              )}

              {effectiveness > 0.8 &&
                [0, 1, 2, 3, 4].map((i) => (
                  <i className="fa fa-star coloredStar" key={i}></i>
                ))}
            </div>
          </div>
          <div
            className="btn btn-outline-light buttomText"
            onClick={() => {
              setFalseGameStarted();
              setFalseGameFinished();
              setUserAnswerInitialValues();
            }}
          >
            Volver al Inicio
          </div>
        </div>
      </div>
    </>
  );
}
