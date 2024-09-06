import React from 'react';

const InputField = ({ label, value, onChange }) => (
  <div className="input-field">
    <label>{label}</label>
    <input type="text" value={value} onChange={onChange} />
  </div>
);

export default InputField;
