export default function OptionsBox({
  seconds,
  questionsList,
  questionCounter,
  setUserAnswer,
  checkedRadioButtom,
  setTrueSingleRadioButtom,
}) {
  let questionArrayPosition = 0;
  questionCounter > questionsList.length
    ? (questionArrayPosition = questionCounter - 2)
    : (questionArrayPosition = questionCounter - 1);

  return (
    <div className="questionGrid">
      <div className="questionOptionAling">
        {[0, 1, 2].map((i) => (
          <div className="form-check" key={i}>
            <input
              className="form-check-input"
              type="radio"
              name="option"
              value={questionsList[questionArrayPosition]["options"][i]["text"]}
              onChange={() => {
                setUserAnswer(
                  questionCounter - 1,
                  questionsList[questionArrayPosition]["options"][i]["correct"]
                );
                setTrueSingleRadioButtom(i);
              }}
              checked={checkedRadioButtom[i]}
            />
            <label
              className={
                seconds === 0 &&
                questionsList[questionArrayPosition]["options"][i]["correct"]
                  ? "form-check-label optionsText"
                  : "form-check-label"
              }
            >
              {questionsList[questionArrayPosition]["options"][i]["text"]}
            </label>
          </div>
        ))}
      </div>
      <div className="questionImageAling">
        <img
          src={questionsList[questionArrayPosition]["image"]}
          alt="Question"
          className="questionImage"
        />
      </div>
    </div>
  );
}
