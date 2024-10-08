// import { getFormData, updateFormData } from '../models/formModel';
// import { submitFormData } from '../services/apiService';
// import { validateFormData } from '../validators/FormValidator';



// export const handleInputChange = (event, fieldName) => {
//   const { value } = event.target;
//   updateFormData(fieldName, value); // Update model state
// };

// export const handleSubmit = async (event, setErrors) => {
//   event.preventDefault();

//   // Get the current form data from the model
//   const currentData = getFormData();

//   // Validate the form data
//   const validationErrors = validateFormData(currentData);

//   // If there are validation errors, set them and stop the form submission
//   if (Object.keys(validationErrors).length > 0) {
//     setErrors(validationErrors);
//     return;
//   }

//   try {
//     // Call the service to submit the form data
//     const response = await submitFormData(currentData);
//     console.log('Submission successful:', response);
//   } catch (error) {
//     console.error('Error during form submission:', error);
//   }
// };





import { getFormData, updateFormData } from '../models/formModel';
import { submitFormData } from '../services/apiService';
import { resetForm } from '../utils/ResetData';
import { validateFormData } from '../validators/FormValidator';

export const handleInputChange = (event, fieldName) => {
  const { value } = event.target;
  updateFormData(fieldName, value); // Update model state
};

export const handleSubmit = async (event, setErrors, validationRules,setFormState,formState) => {
  event.preventDefault();

  // Validate the form data using the provided rules
  const validationErrors = validateFormData(formState, validationRules);

  // If there are validation errors, set them and stop the form submission
  if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors);
    return;
  }

  try {
    // Call the service to submit the form data
    const response = await submitFormData(formState);
    console.log('Submission successful:', response);
  } catch (error) {
    resetForm(formState,setFormState)
    setErrors({})
    console.error('Error during form submission:', error);
  }
};

