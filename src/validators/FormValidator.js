// // formValidator.js

// export const validateFormData = (data) => {
//     const errors = {};
  
//     // Name validation
//     if (!data.name) {
//       errors.name = 'Name is required';
//     } else if (data.name.length < 3) {
//       errors.name = 'Name must be at least 3 characters long';
//     }
  
//     // Email validation
//     if (!data.email) {
//       errors.email = 'Email is required';
//     } else if (!/\S+@\S+\.\S+/.test(data.email)) {
//       errors.email = 'Email is invalid';
//     }
  
//     return errors;
//   };


//! More Generic formValidator.js

export const validateFormData = (formData, validationRules) => {
  const errors = {};

  // Loop through each field and its rules
  for (const field in validationRules) {
    const rules = validationRules[field];

    if (rules.required && !formData[field]) {
      errors[field] = `${field} is required.`;
      return errors
    }

    if (rules.minLength && formData[field].length < rules.minLength) {
      errors[field] = `${field} must be at least ${rules.minLength} characters.`;
      return errors
    }

    if (rules.maxLength && formData[field].length > rules.maxLength) {
      errors[field] = `${field} must be no more than ${rules.maxLength} characters.`;
      return errors
    }

    if (rules.pattern && !rules.pattern.test(formData[field])) {
      errors[field] = `Invalid ${field} format.`;
      return errors
    }

    // Add more validation rules as needed
  }

  return errors;
};

  