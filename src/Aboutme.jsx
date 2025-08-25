import React, { useState, useEffect } from "react";
import "./Aboutme.css";
import profileAris from "./assets/potoAris.jpeg";
import coverProjectOne from "./assets/projectOne.png";
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
    bio: "“We are a local group of cats, the VOIDARIS_GAME studio, born in 2025. We focus on creating games with a local feel and a modern touch, delivering a fun and meaningful gaming experience.”",
    skills: [
      "3D & 2D Games with Unity",
      "Immersive character & world design",
      "Interactive, story-driven experiences",
    ],
  };

  const experience = [
    {
      year: "2025 - Present",
      poto: "profileAris",
      role: "programmer & 3D Artisan",
      description:
        "“Currently, our team consists of one developer who handles coding, design, and assets, proving that creativity is not limited by team size.”",
    },
  ];

  const education = [
    {
      year: "2025",
      degree: "There has been no education from us",
      university: "wait for the next update",
    },
  ];

  const interests = [
    {
      title: "Photography",
      icon: "📷",
      description:
        "Our vision is to deliver games that not only entertain but also inspire. We believe every game has the power to tell a story and bring together players from diverse backgrounds.",
    },
  ];

  const projects = [
    {
      name: "Shadow of the Resistance",
      cover: "coverProjectOne",
      year: "Thn-2022",
      description:
        "A historically themed stealth-action game where players become stealthy warriors, infiltrating enemy bases and waging resistance from the shadows to seize independence.",
      tags: ["UNITY", "BLENDER", "TRIVO", "MIXAMO"],
    },
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  // Tentukan data berdasarkan tab
  const getData = () => {
    if (activeTab === "experience") return experience;
    if (activeTab === "education") return education;
    if (activeTab === "projects") return projects;
    return [];
  };

  const data = getData();
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = data.slice(startIndex, startIndex + itemsPerPage);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage((p) => p - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((p) => p + 1);
  };

  const gallery = [
    { src: "https://placehold.co/100x50?text=1", alt: "Image 1" },
    { src: "https://placehold.co/100x50?text=2", alt: "Image 2" },
    { src: "https://placehold.co/100x50?text=3", alt: "Image 3" },
    { src: "https://placehold.co/100x50?text=4", alt: "Image 4" },
    { src: "https://placehold.co/100x50?text=5", alt: "Image 5" },
    { src: "https://placehold.co/100x50?text=6", alt: "Image 6" },
    { src: "https://placehold.co/100x50?text=7", alt: "Image 7" },
    { src: "https://placehold.co/100x50?text=8", alt: "Image 8" },
    { src: "https://placehold.co/100x50?text=9", alt: "Image 9" },
    { src: "https://placehold.co/100x50?text=10", alt: "Image 10" },
    { src: "https://placehold.co/100x50?text=11", alt: "Image 11" },
    { src: "https://placehold.co/100x50?text=12", alt: "Image 12" },
    { src: "https://placehold.co/100x50?text=13", alt: "Image 13" },
    { src: "https://placehold.co/100x50?text=14", alt: "Image 14" },
    { src: "https://placehold.co/100x50?text=15", alt: "Image 15" },
  ];

  return (
    <div id="about" className="about-me-container">
      {/* Main Content */}
      <div id="Content" className="container main-content py-5">
        <div className="bg-circle bg-circle-1"></div>
        <div className="row">
          {/* Sidebar */}
          <div className="col-md-3 sidebar pe-4">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title border-bottom pb-2 text-white">
                  <i class="bi bi-person-rolodex pe-1"></i>
                  Contact Info
                </h5>
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
                <h5 className="card-title border-bottom pb-2 text-white">
                  <i class="bi bi-controller pe-1"></i>
                  Field / Specialization
                </h5>
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
                <h5 className="card-title border-bottom pb-2 text-white">
                  <i class="bi bi-incognito pe-1"></i>
                  Vision & Mission
                </h5>
                <div className="interests-container">
                  {interests.map((item, index) => (
                    <div
                      key={index}
                      className="interest-item mb-2 d-flex align-items-center"
                    >
                      <div>
                        <div className="small">{item.description}</div>
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
                <h4 className="card-title mb-4 text-white">
                  {" "}
                  <i class="bi bi-receipt pe-1"></i>Biography
                </h4>
                <p className="lead bio">{personalInfo.bio}</p>
              </div>
              <p className="position-absolute bottom-0 end-0 text-success fs-1 m-3">
                🍵
              </p>
            </div>

            {/* Tab Navigation */}
            <ul className="nav nav-tabs mb-4 card-body">
              <li className="nav-item">
                <button
                  className={`nav-link ${
                    activeTab === "experience" ? "active" : ""
                  }`}
                  onClick={() => {
                    setActiveTab("experience");
                    setCurrentPage(1); // reset page tiap ganti tab
                  }}
                >
                  <i class="bi bi-microsoft-teams pe-1"></i> Team
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link ${
                    activeTab === "education" ? "active" : ""
                  }`}
                  onClick={() => {
                    setActiveTab("education");
                    setCurrentPage(1);
                  }}
                >
                  <i class="bi bi-lightbulb-fill pe-1"></i> Education
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link ${
                    activeTab === "projects" ? "active" : ""
                  }`}
                  onClick={() => {
                    setActiveTab("projects");
                    setCurrentPage(1);
                  }}
                >
                  <i class="bi bi-projector-fill pe-1"></i> Projects
                </button>
              </li>
            </ul>

            {/* Tab Content */}
            <div className="tab-content ">
              {activeTab === "experience" && (
                <div className="experience-content">
                  {currentData.map((item, index) => (
                    <div key={index} className="timeline-item mb-4">
                      <div className="d-flex">
                        <img
                          src={profileAris}
                          className="img-thumbnail w-25 h-25"
                        />
                        <div
                          className="timeline-year d-flex align-items-center justify-content-center pe-3 text-end"
                          style={{ width: "100px" }}
                        >
                          <span className="badge bg-primary ms-2">
                            {item.year}
                          </span>
                        </div>
                        <div className="timeline-content">
                          <h5>{item.role}</h5>
                          <p>{item.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "education" && (
                <div className="education-content">
                  {currentData.map((item, index) => (
                    <div key={index} className="timeline-item mb-4">
                      <div className="d-flex">
                        <div
                          className="timeline-year d-flex align-items-center justify-content-center pe-3 text-end"
                          style={{ width: "100px" }}
                        >
                          <span className="badge bg-primary">{item.year}</span>
                        </div>
                        <div className="timeline-content">
                          <h5>{item.degree}</h5>
                          <p>{item.university}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "projects" && (
                <div className="projects-content">
                  <div className="row">
                    {currentData.map((project, index) => (
                      <div key={index} className="timeline-item mb-4">
                        <div className="d-flex">
                          <img
                            src={coverProjectOne}
                            className="img-thumbnail w-25 h-25"
                          />
                          <div
                            className="timeline-year d-flex align-items-center justify-content-center pe-3 text-end"
                            style={{ width: "100px" }}
                          >
                            <span className="badge bg-primary m-2">
                              {project.year}
                            </span>
                          </div>
                          <div className="timeline-content">
                            <h5>{project.name}</h5>
                            <p>{project.description}</p>
                            <div>
                              {project.tags.map((tag, index) => (
                                <button
                                  key={index}
                                  className="px-2 py-1 me-3 text-xs rounded-full bg-indigo-600 text-white btn btn-outline-primary transition"
                                >
                                  {tag}
                                </button>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Pagination Controls */}
              {totalPages > 1 && (
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <button
                    className="btn btn-secondary"
                    onClick={handlePrev}
                    disabled={currentPage === 1}
                  >
                    ← Prev
                  </button>
                  <span className="text-white">
                    Page {currentPage} of {totalPages}
                  </span>
                  <button
                    className="btn btn-secondary"
                    onClick={handleNext}
                    disabled={currentPage === totalPages}
                  >
                    Next →
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="image-slider">
        <div className="image-track">
          {gallery.map((img, index) => (
            <img
              key={index}
              src={img.src}
              alt={img.alt}
              className="mx-2"
              style={{ width: "100px", height: "50px" }}
            />
          ))}
          {/* clone biar looping mulus */}
          {gallery.map((img, index) => (
            <img
              key={`clone-${index}`}
              src={img.src}
              alt={img.alt}
              className="mx-2"
              style={{ width: "100px", height: "50px" }}
            />
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className=" text-white py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h5>SLOGAN</h5>
              <p>“Play Beyond Reality”, “From Local to Global”</p>
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
              &copy; {new Date().getFullYear()} ARIS
              🤖👾👻🎮🧩♟️🪩🎲🎰🕹️🔮🪄🎵⚒️🚀🚀.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutMe;
