// Generic function to reset any form data
export const resetForm = (formData, setFormState) => {
    const resetData = Object.keys(formData).reduce((acc, key) => {
      acc[key] = ''; // Set each field to an empty string
      return acc;
    }, {});
    console.log(resetData);
    setFormState(resetData); // Update the state with the reset data
  };