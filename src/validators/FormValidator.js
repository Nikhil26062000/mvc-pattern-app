// formValidator.js

export const validateFormData = (data) => {
    const errors = {};
  
    // Name validation
    if (!data.name) {
      errors.name = 'Name is required';
    } else if (data.name.length < 3) {
      errors.name = 'Name must be at least 3 characters long';
    }
  
    // Email validation
    if (!data.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = 'Email is invalid';
    }
  
    return errors;
  };
  