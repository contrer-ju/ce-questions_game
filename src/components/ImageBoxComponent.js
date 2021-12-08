export default function ImageBox({ image }) {
  return (
    <div className="alingCenter">
      <img src={image} alt="Welcome" className="welcomeImage" />
    </div>
  );
}
