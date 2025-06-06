const Button = ({ type = "button", onClick, text, disabled }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        btn-gradient
        disabled:opacity-60 disabled:cursor-not-allowed
      `}
    >
      {text}
    </button>
  );
};

export default Button;