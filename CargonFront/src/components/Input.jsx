const Input = ({ handleChange, value, title, name, color, currentValue }) => {
  console.log("value", value);
  console.log("curr", currentValue);

  return (
    <label className="sidebar-label-container">
      <input
        checked={value == currentValue}
        onChange={handleChange}
        type="radio"
        value={value}
        name={name}
      />
      <span className="checkmark" style={{ backgroundColor: color }}></span>
      {title}
    </label>
  );
};

export default Input;
