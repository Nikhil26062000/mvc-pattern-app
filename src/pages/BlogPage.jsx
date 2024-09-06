import React, { useEffect, useState } from 'react';
import InputField from '../components/InputField';
import Button from '../components/Button';
import { fetchBlogs, handleBlogSubmit } from '../controllers/blogController';

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [newBlog, setNewBlog] = useState({ title: '', content: '' });

  useEffect(() => {
    // Fetch existing blogs on component mount
    fetchBlogs().then((data) => setBlogs(data));
  }, []);

  const onInputChange = (event, field) => {
    setNewBlog({ ...newBlog, [field]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    handleBlogSubmit(newBlog);
  };

  return (
    <div className="blog-page">
      <h1>Blog Page</h1>
      <form onSubmit={onSubmit}>
        <InputField
          label="Title"
          value={newBlog.title}
          onChange={(e) => onInputChange(e, 'title')}
        />
        <InputField
          label="Content"
          value={newBlog.content}
          onChange={(e) => onInputChange(e, 'content')}
        />
        <Button label="Post Blog" onClick={onSubmit} />
      </form>
      <div className="blog-list">
        {blogs.map((blog, index) => (
          <div key={index} className="blog-item">
            <h2>{blog.title}</h2>
            <p>{blog.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
