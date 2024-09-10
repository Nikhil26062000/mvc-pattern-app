import React, { useState } from 'react';
import InputField from '../components/InputField';
import Button from '../components/Button';
import { handleInputChange, handleSubmit } from '../controllers/formController';

const FormPage = () => {
  const [formState, setFormState] = useState({ name: '', email: '' });
  const [errors, setErrors] = useState({}); // State to manage errors

  const onInputChange = (event, field) => {
    handleInputChange(event, field);
    setFormState({ ...formState, [field]: event.target.value });
  };

  const onSubmit = (event) => {
    handleSubmit(event, setErrors); // Pass setErrors to the controller
  };

  return (
    <div className="form-page">
      <h1>Form Page</h1>
      <form onSubmit={onSubmit}>
        <InputField 
          label="Name" 
          value={formState.name} 
          onChange={(e) => onInputChange(e, 'name')} 
        />
        {errors.name && <p className="error">{errors.name}</p>} {/* Display Name Error */}
        
        <InputField 
          label="Email" 
          value={formState.email} 
          onChange={(e) => onInputChange(e, 'email')} 
        />
        {errors.email && <p className="error">{errors.email}</p>} {/* Display Email Error */}
        
        <Button label="Submit" onClick={onSubmit} />
      </form>
    </div>
  );
};

export default FormPage;
