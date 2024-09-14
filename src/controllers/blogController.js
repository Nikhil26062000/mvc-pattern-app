import { getBlogs, addBlog } from '../models/blogModel';
import { fetchBlogData, submitBlogData } from '../services/apiService';
import { resetForm } from '../utils/ResetData';
import { validateFormData } from '../validators/FormValidator';
import { blogValidationRules } from '../validators/rules/Rules';

export const fetchBlogs = async () => {
  try {
    const blogs = await fetchBlogData();
    return blogs;
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return [];
  }
};

// export const handleBlogSubmit = async (blogData) => {
//   try {
//     const response = await submitBlogData(blogData);
//     console.log('Blog submission successful:', response);
//     addBlog(blogData); // Add to the local model
//   } catch (error) {
//     console.error('Error during blog submission:', error);
//   }
// };




export const handleBlogSubmit = async (blogData, setErrors, setNewBlog) => {
  // Validate the blog data first
 
  const errors = validateFormData(blogData, blogValidationRules);

  // If there are validation errors, handle them
  if (Object.keys(errors).length > 0) {
    console.error('Validation errors:', errors);
    setErrors(errors); // Update errors in the component state
    return; // Exit early if there are errors
  }

  try {
    // Call the API service to submit the blog data
    const response = await submitBlogData(blogData);
    console.log('Blog submission successful:', response);

    // After successful submission, update the local model or state
    addBlog(blogData); // Add to the local model

    // Clear errors and reset form in the component state
    setErrors({});
    resetForm(blogData,setNewBlog)
    
  } catch (error) {
    console.error('Error during blog submission:', error);
    resetForm(blogData,setNewBlog)
    setErrors({ submit: 'Failed to submit blog. Please try again.' });
  }
};
