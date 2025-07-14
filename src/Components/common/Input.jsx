import React from "react";
import "./Input.css"; // import the CSS!

const Input = ({
  type = "text",
  name,
  placeholder,
  value,
  onChange,
  label,
  required = false,
}) => {
  return (
    <div className="input-group">
      {label && (
        <label htmlFor={name} className="input-label">
          {label}
        </label>
      )}
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="input"
      />
    </div>
  );
};

export default Input;
