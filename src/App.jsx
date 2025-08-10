import { useState } from "react";
import reactLogo from "./assets/converted-image.svg";
import "./App.css";
import AboutMe from "./Aboutme";
function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-custom fixed-top">
        <div className="container">
          <a className="navbar-brand text-white text-bold" href="#">
            <img
              src={reactLogo}
              alt="Logo"
              width="30"
              height="24"
              className="d-inline-block align-text-top"
            />
            VOIDARIS
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <a
                className="nav-link active text-white text-bold"
                aria-current="page"
                href="#"
              >
                Home
              </a>
              <a className="nav-link text-white text-bold" href="#about">
                AboutMe
              </a>
              <a className="nav-link text-white text-bold" href="#Content">
                Content
              </a>
              <a
                className="nav-link disabled text-white text-bold"
                aria-disabled="true"
              >
                Disabled
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* jumbotron */}
      <div className="jumbotron-custom">
        <div className="bg-circle bg-circle-1"></div>
        <div className="bg-circle bg-circle-2"></div>

        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <h1 className="display-4 fw-bold mb-4">
                Code. Create. Claw Your Way Up!
              </h1>
              <p className="lead mb-4">
                We are curious cats who love coding, tinkering with games, and
                experimenting with web technologies. Often error-prone, but
                still enthusiastic!
              </p>
              <div className="d-flex flex-wrap gap-3">
                <button className="btn btn-custom btn-lg px-4 py-2">
                  Get Started
                </button>
                <button className="btn btn-outline-light btn-lg px-4 py-2">
                  Learn More
                </button>
              </div>
            </div>
            <div className="col-lg-5 mt-5 mt-lg-0">
              <div className="text-center">
                <img
                  src={reactLogo}
                  alt="Modern digital dashboard"
                  className="img-fluid rounded-4 shadow-lg img-3d"
                />
              </div>
            </div>
          </div>

          <div className="row mt-5 pt-4">
            <div className="col-md-4 mb-4 mb-md-0">
              <div className="text-center">
                <div className="feature-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    fill="currentColor"
                    className="bi bi-lightning-charge"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09zM4.157 8.5H7a.5.5 0 0 1 .478.647L6.11 13.59l5.732-6.09H9a.5.5 0 0 1-.478-.647L9.89 8.41 4.157 8.5z" />
                  </svg>
                </div>
                <h4>Fast Performance</h4>
                <p>
                  Optimized for speed to give your users the best experience.
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-4 mb-md-0">
              <div className="text-center">
                <div className="feature-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    fill="currentColor"
                    className="bi bi-shield-check"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.574 2.238c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.574-2.238c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z" />
                    <path d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                  </svg>
                </div>
                <h4>Secure & Reliable</h4>
                <p>Enterprise-grade security to protect your valuable data.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="text-center">
                <div className="feature-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    fill="currentColor"
                    className="bi bi-sliders"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3h9.05zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8h2.05zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1h9.05z"
                    />
                  </svg>
                </div>
                <h4>Easy Customization</h4>
                <p>Flexible configuration options to fit your unique needs.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AboutMe />
    </>
  );
}

export default App;
