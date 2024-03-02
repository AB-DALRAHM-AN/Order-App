export const Error = ({ text, message }) => {
  return (
    <div className="error">
      <h2 className="error">{text}</h2>
      <p>{message}</p>
    </div>
  );
};
