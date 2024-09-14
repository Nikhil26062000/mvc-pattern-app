
const patterns = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  number: /^[0-9]+$/,
};


// Define validation rules for this specific form
export const validationRules = {
  name: { required: true, minLength: 2 },
  email: { required: true, pattern: patterns.email }, // Basic email regex pattern
};

// Define validation rules for this specific form
const validationRules2 = {
  password: { required: true, minLength: 6 },
  age: { required: true, pattern: patterns.number}, // Number-only pattern
};

// Combined validation rules for the third form
const combinedValidationRules = {
  ...validationRules,
  ...validationRules2,
};

export const blogValidationRules = {
  title: {required: true,minLength: 5,maxLength: 100,},
  content: {required: true, minLength: 20,  maxLength: 5000, // Optional: Adjust if you want to limit content length
  },
};
