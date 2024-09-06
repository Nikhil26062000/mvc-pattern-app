import React from 'react';

const Button = ({ label, onClick }) => (
  <button className="btn" onClick={onClick}>
    {label}
  </button>
);

export default Button;
