// formController.js

import { getFormData, updateFormData } from '../models/formModel';
import { submitFormData } from '../services/apiService';

export const handleInputChange = (event, fieldName) => {
  const { value } = event.target;
  updateFormData(fieldName, value); // Update model state
};

export const handleSubmit = async (event) => {
  event.preventDefault();
  
  // Get the current form data from the model
  const currentData = getFormData();
  
  // Log the form data
  console.log('Form Data:', currentData);

  try {
    // Call the service to submit the form data
    const response = await submitFormData(currentData);
    console.log('Submission successful:', response);
  } catch (error) {
    console.error('Error during form submission:', error);
  }
};
