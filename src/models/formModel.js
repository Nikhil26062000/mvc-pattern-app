let formData = {
    name: '',
    email: '',
    // Other form fields
  };
  
  export const getFormData = () => formData;
  
  export const updateFormData = (field, value) => {
    formData = { ...formData, [field]: value };
  };
  