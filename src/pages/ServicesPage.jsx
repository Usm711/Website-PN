import React from "react";
import PageHeader from "../components/PageHeader";
import ServiceCoursesPlanning from "../components/ServiceCoursesPlanning";
import CourseSection from "../components/CourseSection";
import DiscoverSection from "../components/DiscoverSection";
import History from "../components/History";

function ServicesPage() {
    const headerProps = {
        title: "Services",
        src: "/images/6fecb51da0f4ec53ab18597e7ccc0253e34d5b4a.jpg", // Replace with actual image URL
        alt: "Services Header Image"
    };
    const processSteps = [
  {
    number: "01",
    title: "IT Network Solutions",
    iconClass: "fas fa-network-wired",
    description:
      "Designing and managing reliable network infrastructures, from small offices to enterprise-level systems, ensuring secure and fast connectivity.",
  },
  {
    number: "02",
    title: "Cybersecurity",
    iconClass: "fas fa-shield-alt",
    description:
      "Implementing multi-layered security strategies, threat detection, and compliance solutions to protect your business data from cyber threats.",
  },
  {
    number: "03",
    title: "Cloud Services",
    iconClass: "fas fa-cloud",
    description:
      "Offering cloud migration, storage, and computing solutions that provide scalability, flexibility, and cost efficiency for your business.",
  },
  {
    number: "04",
    title: "DevOps & Automation",
    iconClass: "fas fa-cogs",
    description:
      "Streamlining development and operations through CI/CD pipelines, containerization, and automated workflows for faster product delivery.",
  },
  {
    number: "05",
    title: "Global Remote Services",
    iconClass: "fas fa-globe",
    description:
      "Providing IT support, monitoring, and project management services worldwide, ensuring your systems run smoothly 24/7.",
  },
  {
    number: "06",
    title: "App Development",
    iconClass: "fas fa-users",
    description:
      "Designing and developing customized mobile applications to improve user experience, boost business efficiency, and provide innovative digital solutions for clients.",
  },
  {
    number: "07",
    title: "Web Development",
    iconClass: "fas fa-hospital",
    description:
      "Building secure and efficient hospital systems for patient records, billing, inventory, and appointment management.",
  },
  {
    number: "08",
    title: "Digital Marketing",
    iconClass: "fas fa-school",
    description:
      "Providing digital marketing solutions for brand growth, engagement, visibility, and communication through SEO, social media, and targeted campaigns.",
  },
  {
    number: "09",
    title: "Graphic Designing",
    iconClass: "fas fa-cash-register",
    description:
      "Designing graphics for creative branding, visual appeal, engaging content, and effective communication.",
  },
  {
    number: "10",
    title: "Game Development",
    iconClass: "fas fa-utensils",
    description:
      "Offering games with creative design, smooth gameplay, engaging stories, graphics, and multiplayer features efficiently.",
  },
  {
    number: "11",
    title: "Our Solutions",
    iconClass: "fas fa-prescription-bottle-alt",
    description:
      "We offer CRM Solutions for better customer engagement, Hospital and School Management Systems for records and communication, POS Systems for sales and inventory, and Restaurant Management Systems to handle menus, orders, and reservations efficiently.",
  },
  {
    number: "12",
    title: "Ongoing Support & Optimization",
    iconClass: "fas fa-sync-alt",
    description:
      "Providing continuous monitoring, updates, and optimizations to keep systems secure, efficient, and up-to-date.",
  }
];

    return (
        <>
          <PageHeader headerProps={headerProps}/>
          <DiscoverSection />
          <ServiceCoursesPlanning processSteps={processSteps}/>
          <CourseSection />
          <History />
        </>
    );
    }
export default ServicesPage;