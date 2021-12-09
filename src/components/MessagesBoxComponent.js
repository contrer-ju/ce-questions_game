export default function MessagesBox({ seconds }) {
  return (
    <>
      {seconds === 0 ? (
        <div className="form-check-label optionsText">Tiempo Agotado</div>
      ) : (
        <div className="form-check-label">Favor selecciona tu respuesta.</div>
      )}
    </>
  );
}
