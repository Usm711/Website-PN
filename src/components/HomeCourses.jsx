import React from "react";
import { FaStar, FaRegStar, FaArrowRight } from "react-icons/fa";
import "../Css/HomeCourses.css";

const coursesData = [
  {
    id: 1,
    title: "Professional IT Training In CCNA",
    description: "Networking Investments® and board your IT career with expert-led CCNA training.",
    duration: "4 weeks",
    originalPrice: "Rs: 40k",
    discountedPrice: "Rs: 45k",
    image: "images/ccna.jpg"
  },
  {
    id: 2,
    title: "MCSE",
    description: "Advance your system administrator skills with our comprehensive MCSE training.",
    duration: "6 weeks",
    originalPrice: "Rs: 30k",
    discountedPrice: "Rs: 35k",
    image: "images/mcse.jpeg"
  },
  {
    id: 3,
    title: "MikoTik",
    description: "Master network management can't routing with our hands-on MikoTik certification.",
    duration: "5 weeks",
    originalPrice: "$29.90",
    discountedPrice: "$24.92",
    image: "images/microtik.jpeg"
  },
  {
    id: 4,
    title: "Node.js Backend Development",
    description: "Choose blockchain costs+platform mobile applications with Future and Start.",
    duration: "8 weeks",
    originalPrice: "$29.90",
    discountedPrice: "$24.92",
    image: "images/personNodejs.jpg"
  }
];

const HomeCourses = () => {
  return (
    <main className="tech-training-container">
      {/* Header Section */}
      <div className="training-header">
        <h1>EMPOWERING FUTURE TECH TALENT</h1>
        <p>Expand your skills with our industry-focused training programs designed by experts in development, design, networking, and digital marketing.</p>
      </div>

      {/* Courses Grid */}
      <div className="courses-grid">
        {coursesData.map((course) => (
          <div key={course.id} className="course-card">
            <div className="course-image-container">
              <img 
                src={`/${course.image}`} 
                alt={course.title} 
                className="course-image"
              />
            </div>
            <div className="course-content">
              <h3>{course.title}</h3>
              <p className="course-description">{course.description}</p>
              
              <div className="rating">
                {[1, 2, 3, 4, 5].map((star) => (
                  star <= 4 ? <FaStar key={star} className="star-icon" /> : <FaRegStar key={star} className="star-icon" />
                ))}
              </div>
              
              <div className="duration-price">
                <p className="duration">Duration: {course.duration}</p>
                <p className="price">
                  <span className="discounted-price">{course.discountedPrice}</span>
                  <span className="original-price">{course.originalPrice}</span>
                </p>
              </div>
              
              <button className="start-course-btn">
                Start Course <FaArrowRight className="arrow-icon" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default HomeCourses;