import React from "react";
import Header from "../../component/Header";

const Jinni = () => {
  return (
    <div>
      <Header />
      <section id="home" className="intro-section">
        <div className="container">
          <h1 className="heading">Our Portfolio</h1>
          <p className="subheading">
            We offer a wide range of professional services tailored to your
            needs. Explore what we can do for you!
          </p>
        </div>
      </section>
      <div className="container mt-5">
        <div className="row">
        <div className="col-md-6 border8">
  <div className="card shadow-sm hover-shadow-lg border-0 rounded-lg overflow-hidden">
    <img
      alt="A placeholder image with dimensions 500x500 pixels"
      className="card-img-top img-fluid"
      src="./assets/img/abvv1.png"
    />
  </div>
</div>

          <div className="col-md-6">
            <h2>Website Description</h2>
            <p>
              The Atal Bihari Vajpayee Vishwavidyalaya, Bilaspur (C.G.) website
              is a dynamic and interactive platform, showcasing the university's
              details and services. Developed using the MERN stack, this website
              ensures seamless navigation and responsiveness across devices.
            </p>

            <p>
              This website provides an all-in-one platform for students, staff,
              and visitors, simplifying information access and enhancing the
              user experience.
            </p>
          </div>
        </div>
        <div className="row mt-5 ">
          <div className="col-md-6">
            <h3>Key Features:</h3>
            <ul>
              <li>
                <strong>Modern UI/UX Design:</strong>
                <ul>
                  <li>
                    A clean and structured layout with quick access to essential
                    sections like NEP, Admission, Exam Forms, Time Tables,
                    Research, and Notifications.
                  </li>
                  <li>
                    Visually appealing banner showcasing university events.
                  </li>
                </ul>
              </li>

              <li>
                <strong>Dynamic Components:</strong>
                <ul>
                  <li>
                    Built with React.js for a smooth, single-page application
                    experience.
                  </li>
                  <li>
                    Navigation menus with dropdowns for easy access to
                    comprehensive university-related information.
                  </li>
                </ul>
              </li>

              <li>
                <strong>Backend Integration:</strong>
                <ul>
                  <li>
                    Node.js and Express.js power the backend for managing server
                    requests efficiently.
                  </li>
                  <li>
                    MongoDB is likely utilized for storing user data,
                    notifications, and other dynamic content.
                  </li>
                </ul>
              </li>

              <li>
                <strong>Accessibility:</strong>
                <ul>
                  <li>
                    Multiple font size options and support for accessibility
                    tools.
                  </li>
                  <li>
                    Multi-language support to cater to a diverse user base.
                  </li>
                </ul>
              </li>

              <li>
                <strong>Integration Features:</strong>
                <ul>
                  <li>
                    Links to critical platforms like ABC ID/Digilocker, College
                    Notifications, UTD Notifications, and Academic Calendar.
                  </li>
                  <li>Includes real-time weather and system status updates.</li>
                </ul>
              </li>

              <li>
                <strong>Responsiveness:</strong>
                <ul>
                  <li>
                    Mobile-friendly design with Bootstrap or custom CSS for
                    flexibility on smaller screens.
                  </li>
                </ul>
              </li>

              <li>
                <strong>Interactive Media:</strong>
                <ul>
                  <li>Carousel or slider for showcasing events and updates.</li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="col-md-6 border8">
  <div className="card shadow-sm hover-shadow-lg border-0 rounded-lg overflow-hidden">
    <img
      alt="A placeholder image with dimensions 500x500 pixels"
      className="card-img-top img-fluid"
      src="./assets/img/abvv3.jpeg"
    />
  </div>
  <div className="card shadow-sm hover-shadow-lg border-0 rounded-lg overflow-hidden mt-5">
    <img
      alt="A placeholder image with dimensions 500x500 pixels"
      className="card-img-top img-fluid"
      src="./assets/img/abvv4.png"
    />
  </div>
</div>
        </div>
        <div className="row mt-5 mb-5 border8">
          <div className="col-12">
            <div
              id="imageCarousel"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    alt="A placeholder image with dimensions 800x400 pixels"
                    className="d-block w-100"
                    height="250"
                    src="./assets/img/abvv5.jpeg"
                    width="800"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    alt="A placeholder image with dimensions 800x400 pixels"
                    className="d-block w-100"
                    height="250"
                    src="./assets/img/abvv6.jpeg"
                    width="800"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    alt="A placeholder image with dimensions 800x400 pixels"
                    className="d-block w-100"
                    height="250"
                    src="./assets/img/abvv5.jpeg"
                    width="800"
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#imageCarousel"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#imageCarousel"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jinni;
