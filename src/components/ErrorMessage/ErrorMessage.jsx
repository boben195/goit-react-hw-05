const ErrorMessage = ({ message }) => {
  return (
    <p>
      {message.length > 0
        ? message
        : "Ohooopsi Dooooopsi, we have bullshit server. Boo"}
    </p>
  );
};

export default ErrorMessage;
