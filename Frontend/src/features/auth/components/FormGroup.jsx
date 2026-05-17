import React from "react";

const FormGroup = ({label,placeholder,type,required}) => {
  return (
    <div className="form-group">
      <label htmlFor={label}>{label}</label>
      <input type={type} name={label} id={label} placeholder={placeholder} required={required} />
    </div>
  );
};

export default FormGroup;
