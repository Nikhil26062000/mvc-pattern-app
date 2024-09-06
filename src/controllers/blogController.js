import { getBlogs, addBlog } from '../models/blogModel';
import { fetchBlogData, submitBlogData } from '../services/apiService';

export const fetchBlogs = async () => {
  try {
    const blogs = await fetchBlogData();
    return blogs;
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return [];
  }
};

export const handleBlogSubmit = async (blogData) => {
  try {
    const response = await submitBlogData(blogData);
    console.log('Blog submission successful:', response);
    addBlog(blogData); // Add to the local model
  } catch (error) {
    console.error('Error during blog submission:', error);
  }
};
