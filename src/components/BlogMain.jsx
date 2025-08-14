import React from 'react'
import '../Css/BlogMain.css'
const BlogMain = () => {
      const blogPosts = [
    {
      date: "01 March",
      author: "By John",
      category: "01 summer",
      publishDate: "Apr 17th, 2020",
      title: "Explore insights, Trends & innovations from the World of IT",
      readTime: "03-Min Road",
    },
    {
      date: "01 March",
      author: "By John",
      category: "01 summer",
      publishDate: "Apr 15th, 2025",
      title: "Stay Ahead with the Latest Tech News and Expert Tips",
      readTime: "03-Min Road",
    },
    {
      date: "01 March",
      author: "By John",
      category: "01 summer",
      publishDate: "07-July 2023",
      title: "Why UI/UX Design Can Make or Break Your Product",
      readTime: "03-Min Road",
    },
    {
      date: "01 March",
      author: "By John",
      category: "01 summer",
      publishDate: "07-July 2023",
      title: "Seeing Your Business with Custom Web Solutions",
      readTime: "03-Min Road",
    },
    {
      date: "01 March",
      author: "By John",
      category: "01 summer",
      publishDate: "07-July 2023",
      title: "Top 5 Tech Trends Shaping the Future of Business",
      readTime: "03-Min Road",
    },
  ];

  return (
   <div className="blog-container">
      <div className="blog-header">
        <p>Our Blog</p>
        <h2>LATEST POST</h2>
      </div>

      <div className="blog-posts">
        {blogPosts.map((post, index) => (
          <div className="blog-card" key={index}>
            <div className="post-meta">
              <span className="post-date">{post.date}</span>
              <div className="post-author-category">
                <span>{post.author}</span>
                <span>{post.category}</span>
              </div>
              <span className="publish-date">{post.publishDate}</span>
            </div>
            <h3 className="post-title">{post.title}</h3>
            <div className="read-more">
              <span>Read More</span>
              <span className="read-time">{post.readTime}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="blog-footer">
        <p className="quote">
          *Some of the History of Our Company is that we are Catching up through Video.*
        </p>
        <div className="contact-link">
          <span>Get in Touch</span>
        </div>
      </div>
    </div>
  );
};


export default BlogMain
