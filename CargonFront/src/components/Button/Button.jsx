const Button = ({ onClickHandler, value, title, className }) => {
  return (
    <button onClick={onClickHandler} value={value} className={className}>
      {title}
    </button>
  );
};

export default Button;
