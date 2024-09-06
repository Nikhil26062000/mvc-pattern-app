import React, { useState } from 'react';
import InputField from '../components/InputField';
import Button from '../components/Button';
import { handleInputChange, handleSubmit } from '../controllers/formController';

const FormPage = () => {
  const [formState, setFormState] = useState({ name: '', email: '' });

  const onInputChange = (event, field) => {
    handleInputChange(event, field);
    setFormState({ ...formState, [field]: event.target.value });
  };

  return (
    <div className="form-page">
      <h1>Form Page</h1>
      <form onSubmit={handleSubmit}>
        <InputField label="Name" value={formState.name} onChange={(e) => onInputChange(e, 'name')} />
        <InputField label="Email" value={formState.email} onChange={(e) => onInputChange(e, 'email')} />
        <Button label="Submit" onClick={handleSubmit} />
      </form>
    </div>
  );
};

export default FormPage;
