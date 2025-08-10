import React, { useState, useEffect } from "react";
import "./Aboutme.css";
import profile from "./assets/Profile.svg";
import "bootstrap/dist/css/bootstrap.min.css";

const AboutMe = () => {
  const [activeTab, setActiveTab] = useState("personal");
  const [activeButton, setActiveButton] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveButton((prev) => (prev === 4 ? 1 : prev + 1));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const getButtonClass = (buttonNumber) => {
    return activeButton === buttonNumber
      ? "bg-white text-dark"
      : "bg-dark text-white";
  };

  const personalInfo = {
    name: "Aris Riswanto",
    title: "Creative Developer & Designer",
    location: "Jawa Barat, Tasikmalaya, IND",
    email: "voidaris450@gmail.com",
    bio: "I blend technology and design to create meaningful digital experiences that tell stories and solve problems.",
    skills: [
      "UI/UX Design",
      "React Development",
      "Motion Graphics",
      "Product Strategy",
      "Brand Identity",
      "Frontend Architecture",
    ],
  };

  const experience = [
    {
      year: "2021 - Present",
      role: "Senior Product Designer",
      company: "Digital Innovations Inc.",
      description: "Lead designer for enterprise SaaS products",
    },
    {
      year: "2018 - 2021",
      role: "UX Developer",
      company: "Creative Solutions LLC",
      description: "Built interactive prototypes and design systems",
    },
    {
      year: "2016 - 2018",
      role: "Frontend Developer",
      company: "WebTech Solutions",
      description: "Developed responsive web applications",
    },
  ];

  const education = [
    {
      year: "2016",
      degree: "MSc in Human-Computer Interaction",
      university: "Stanford University",
    },
    {
      year: "2014",
      degree: "BSc in Computer Science",
      university: "University of California",
    },
  ];

  const interests = [
    {
      title: "Photography",
      icon: "📷",
      description: "Capturing moments and landscapes",
    },
    {
      title: "Rock Climbing",
      icon: "🧗",
      description: "Push physical limits, solve problems",
    },
    {
      title: "Cooking",
      icon: "👨‍🍳",
      description: "Experimental gastronomy enthusiast",
    },
    {
      title: "Music Production",
      icon: "🎹",
      description: "Electronic beats and ambient sounds",
    },
  ];

  const projects = [
    {
      name: "Design System Framework",
      year: "2022",
      description: "Open-source design system for React applications",
      tags: ["React", "Figma", "Storybook"],
    },
    {
      name: "AI Photo Editor",
      year: "2021",
      description: "Machine learning powered image enhancement tool",
      tags: ["Python", "TensorFlow", "React"],
    },
    {
      name: "Interactive Data Viz",
      year: "2020",
      description: "Real-time visualization of financial markets",
      tags: ["D3.js", "WebGL", "Node.js"],
    },
  ];

  return (
    <div id="about" className="about-me-container">
      {/* Hero Section */}
      <div className="hero-section position-relative">
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex flex-column justify-content-center">
              <h1 className="display-3 fw-bold mb+3 text-white">
                Hello, I'm {personalInfo.name}
              </h1>
              <p className="lead text-white">{personalInfo.title}</p>
              <button className="btn btn-primary btn-lg align-self-start mt-3">
                Get in Touch
              </button>
            </div>
            <div className="col-md-6">
              <div className="profile-image-container">
                <div className="profile-image-wrapper">
                  <img
                    src={profile}
                    alt="Portrait of Alex Johnson wearing glasses in creative workspace"
                    className="img-fluid rounded-circle shadow-lg"
                  />
                  <div className="circle-decoration"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div id="Content" className="container main-content py-5">
        <div className="row">
          {/* Sidebar */}
          <div className="col-md-3 sidebar pe-4">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title border-bottom pb-2">Contact Info</h5>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <i className="bi bi-geo-alt-fill me-2"></i>{" "}
                    {personalInfo.location}
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-envelope-fill me-2"></i>{" "}
                    {personalInfo.email}
                  </li>
                  <li>
                    <i className="bi bi-linkedin me-2"></i> @voidaris450
                  </li>
                </ul>
              </div>
            </div>

            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title border-bottom pb-2">Skills</h5>
                <div className="skills-container">
                  {personalInfo.skills.map((skill, index) => (
                    <span key={index} className="badge bg-primary me-1 mb-1">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title border-bottom pb-2">Interests</h5>
                <div className="interests-container">
                  {interests.map((item, index) => (
                    <div
                      key={index}
                      className="interest-item mb-2 d-flex align-items-center"
                    >
                      <span className="interest-icon me-2">{item.icon}</span>
                      <div>
                        <div className="fw-bold">{item.title}</div>
                        <div className="small text-muted">
                          {item.description}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Panel */}
          <div className="col-md-9">
            <div className="card mb-4">
              <div className="card-body">
                <h4 className="card-title mb-4">Biography</h4>
                <p className="lead">{personalInfo.bio}</p>
                <p>
                  With over 8 years of experience in the digital space, I've
                  worked with startups, agencies, and enterprises to craft
                  experiences that resonate with users. My approach combines
                  technical knowledge with aesthetic sensibility to create
                  solutions that are both functional and beautiful.
                </p>
                <p>
                  When I'm not coding or designing, you can find me exploring
                  photography spots around the city or experimenting with new
                  recipes in my kitchen.
                </p>
              </div>
            </div>

            {/* Tab Navigation */}
            <ul className="nav nav-tabs mb-4">
              <li className="nav-item">
                <button
                  className={`nav-link ${
                    activeTab === "experience" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("experience")}
                >
                  Experience
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link ${
                    activeTab === "education" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("education")}
                >
                  Education
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link ${
                    activeTab === "projects" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("projects")}
                >
                  Projects
                </button>
              </li>
            </ul>

            {/* Tab Content */}
            <div className="tab-content">
              {activeTab === "experience" && (
                <div className="experience-content">
                  {experience.map((item, index) => (
                    <div key={index} className="timeline-item mb-4">
                      <div className="d-flex">
                        <div
                          className="timeline-year pe-3 text-end"
                          style={{ width: "100px" }}
                        >
                          <span className="badge bg-primary">{item.year}</span>
                        </div>
                        <div className="timeline-content">
                          <h5>{item.role}</h5>
                          <p className="text-muted">{item.company}</p>
                          <p>{item.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "education" && (
                <div className="education-content">
                  {education.map((item, index) => (
                    <div key={index} className="timeline-item mb-4">
                      <div className="d-flex">
                        <div
                          className="timeline-year pe-3 text-end"
                          style={{ width: "100px" }}
                        >
                          <span className="badge bg-primary">{item.year}</span>
                        </div>
                        <div className="timeline-content">
                          <h5>{item.degree}</h5>
                          <p className="text-muted">{item.university}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "projects" && (
                <div className="projects-content">
                  <div className="row">
                    {projects.map((project, index) => (
                      <div key={index} className="col-md-6 mb-4">
                        <div className="card h-100">
                          <img
                            src="https://placehold.co/600x400"
                            alt={`Screenshot of ${project.name} project showing application interface`}
                            className="card-img-top"
                          />
                          <div className="card-body">
                            <h5 className="card-title">{project.name}</h5>
                            <span className="badge bg-secondary mb-2">
                              {project.year}
                            </span>
                            <p className="card-text">{project.description}</p>
                            <div>
                              {project.tags.map((tag, tagIndex) => (
                                <span
                                  key={tagIndex}
                                  className="badge bg-light text-dark me-1"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h5>Let's Connect</h5>
              <p>
                Interested in working together or just want to chat? Feel free
                to reach out!
              </p>
            </div>
            <div className="col-md-6 text-end">
              <a
                href="#"
                className={`btn btn-outline-light me-2 ${getButtonClass(1)}`}
              >
                <i className="bi bi-linkedin"></i>
              </a>
              <a
                href="#"
                className={`btn btn-outline-light me-2 ${getButtonClass(2)}`}
              >
                <i className="bi bi-github"></i>
              </a>
              <a
                href="#"
                className={`btn btn-outline-light me-2 ${getButtonClass(3)}`}
              >
                <i className="bi bi-instagram"></i>
              </a>
              <a
                href="#"
                className={`btn btn-outline-light me-2 ${getButtonClass(4)}`}
              >
                <i className="bi bi-envelope-fill"></i>
              </a>
            </div>
          </div>
          <div className="text-center mt-4">
            <p className="small">
              &copy; {new Date().getFullYear()} Alex Johnson. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutMe;
