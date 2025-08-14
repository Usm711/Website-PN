import React from "react";
import PageHeader from "../components/PageHeader";
import ServiceCoursesPlanning from "../components/ServiceCoursesPlanning";
import CourseSection from "../components/CourseSection";
import DiscoverSection from "../components/DiscoverSection";

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
    title: "CRM Solutions",
    iconClass: "fas fa-users",
    description:
      "Developing and customizing Customer Relationship Management systems to enhance customer engagement and streamline sales processes.",
  },
  {
    number: "07",
    title: "Hospital Management System (HMS)",
    iconClass: "fas fa-hospital",
    description:
      "Building secure and efficient hospital systems for patient records, billing, inventory, and appointment management.",
  },
  {
    number: "08",
    title: "School Management System",
    iconClass: "fas fa-school",
    description:
      "Creating digital platforms for attendance, grades, schedules, and communication between teachers, students, and parents.",
  },
  {
    number: "09",
    title: "Point of Sale (POS)",
    iconClass: "fas fa-cash-register",
    description:
      "Designing POS systems for fast, accurate transactions, real-time sales tracking, and inventory control.",
  },
  {
    number: "10",
    title: "Restaurant Management System",
    iconClass: "fas fa-utensils",
    description:
      "Offering systems to manage menus, table reservations, orders, billing, and kitchen coordination efficiently.",
  },
  {
    number: "11",
    title: "Pharmacy Management System",
    iconClass: "fas fa-prescription-bottle-alt",
    description:
      "Creating platforms for inventory control, prescription management, sales tracking, and compliance in pharmacies.",
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
        </>
    );
    }
export default ServicesPage;