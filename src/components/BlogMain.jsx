import React from 'react';
import '../Css/BlogMain.css';
import History from './History';

const BlogMain = () => {
  const blogPosts = [
    {
      date: "01 March",
      author: "By John",
      category: "Technology",
      publishDate: "Apr 17th, 2020",
      title: "Explore insights, Trends & innovations from the World of IT",
      readTime: "3 Min Read",
      image: "/images/blog1.jpg"
    },
    {
      date: "01 March",
      author: "By Sarah",
      category: "Web Development",
      publishDate: "Apr 15th, 2025",
      title: "Stay Ahead with the Latest Tech News and Expert Tips",
      readTime: "5 Min Read",
      image: "/images/blog2.jpg"
    },
    {
      date: "01 March",
      author: "By Mike",
      category: "UI/UX Design",
      publishDate: "July 7th, 2023",
      title: "Why UI/UX Design Can Make or Break Your Product",
      readTime: "4 Min Read",
      image: "/images/blog3.jpg"
    },
    {
      date: "01 March",
      author: "By Emma",
      category: "Business",
      publishDate: "June 20th, 2023",
      title: "Seeing Your Business with Custom Web Solutions",
      readTime: "6 Min Read",
      image: "/images/blog4.jpg"
    },
    {
      date: "01 March",
      author: "By Alex",
      category: "Innovation",
      publishDate: "May 12th, 2023",
      title: "Top 5 Tech Trends Shaping the Future of Business",
      readTime: "7 Min Read",
      image: "/images/blog5.jpg"
    },
  ];

  return (
    <div className="blog-container">
      <div className="blog-header">
        <p className="blog-subtitle">Our Blog</p>
        <h2 className="blog-title">LATEST POSTS</h2>
        <p className="blog-description">Discover the latest insights and trends in technology</p>
      </div>

      <div className="blog-posts">
        {blogPosts.map((post, index) => (
          <div className="blog-card" key={index}>
            <div className="blog-image-container">
              <img 
                src={post.image || "https://via.placeholder.com/300x200/076E74/ffffff?text=Blog+Image"} 
                alt={post.title}
                className="blog-image"
              />
              <div className="category-badge">{post.category}</div>
            </div>
            
            <div className="post-content">
              <div className="post-meta">
                <span className="post-date">{post.date}</span>
                <span className="post-author">{post.author}</span>
                <span className="publish-date">{post.publishDate}</span>
              </div>
              
              <h3 className="post-title">{post.title}</h3>
              
              <div className="post-footer">
                <span className="read-time">{post.readTime}</span>
                <button className="read-more-btn">Read More</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="blog-cta">
        <p>Want to read more interesting articles?</p>
        <button className="cta-button">View All Posts</button>
      </div>
      
      <History />
    </div>
  );
};

export default BlogMain;