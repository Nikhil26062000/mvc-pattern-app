import axios from 'axios';

export const submitFormData = async (data) => {
  try {
    const response = await axios.post('https://example.com/api/submit', data);
    console.log('Form Data Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error submitting form data:', error);
    throw error;
  }
};

export const fetchBlogData = async () => {
  try {
    const response = await axios.get('https://example.com/api/blogs');
    console.log('Fetched Blogs:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return [];
  }
};

export const submitBlogData = async (data) => {
  try {
    const response = await axios.post('https://example.com/api/blogs', data);
    console.log('Blog Data Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error submitting blog data:', error);
    throw error;
  }
};
