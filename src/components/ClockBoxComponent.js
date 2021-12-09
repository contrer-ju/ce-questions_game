export default function ClockBox({ seconds }) {
  let time = "";
  seconds > 9 ? (time = ": " + seconds) : (time = ": 0" + seconds);
  return (
    <div className="alingRight bold">
      <span>{time}</span>
    </div>
  );
}
