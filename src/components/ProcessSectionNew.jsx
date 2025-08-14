import React from 'react';
import { FiSearch, FiLayers, FiCode, FiCheckCircle } from 'react-icons/fi';
import '../Css/ProcessSectionNew.css';

const ProcessSectionNew = () => {
  const steps = [
    {
      icon: <FiSearch size={24} />,
      title: "Research",
      description: "We start by understanding your business, goals, and target users. This helps us define a strategy that ensures your project solves the right problems."
    },
    {
      icon: <FiLayers size={24} />,
      title: "Design",
      description: "Next, we create clean, user-focused designs that blend usability with modern aesthetics—ensuring a smooth and engaging user experience."
    },
    {
      icon: <FiCode size={24} />,
      title: "Developer",
      description: "Our development team brings the designs to life with efficient coding and rigorous testing to ensure your product works flawlessly across all devices."
    },
    {
      icon: <FiCheckCircle size={24} />,
      title: "Test",
      description: "We conduct extensive testing for performance, bug resolution, and user experience to guarantee a flawless product."
    }
  ];

  return (
    <section className="planning-process">
      <div className="container">
        <h2 className="section-title">Planning</h2>
        <h1 className="section-subtitle">OUR PROCESS</h1>
        
        <div className="process-steps">
          {steps.map((step, index) => (
            <div key={index} className="process-step">
              <div className="step-icon">{step.icon}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSectionNew;