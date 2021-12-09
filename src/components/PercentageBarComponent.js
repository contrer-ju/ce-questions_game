export default function PercentageBar({ questionCounter, questionsList }) {
  let progressValue = (100 * questionCounter) / questionsList.length;

  return (
    <>
      <span>
        Pregunta {questionCounter} de {questionsList.length}.
      </span>
      <div className="progress widthPercentageBar" style={{ height: "25px" }}>
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: progressValue + "%" }}
          aria-valuenow={progressValue}
          aria-valuemin="0"
          aria-valuemax="100"
        >
          {progressValue}%
        </div>
      </div>
    </>
  );
}
