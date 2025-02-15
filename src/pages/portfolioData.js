import React from "react";
import Testimonials from "../elements/Testimonials";
import Header from "../component/Header";
import ClientPage from "../elements/ClientPage";
import Footer from "../component/Footer";

const PortfolioData = () => {

  return (
    <div>
      {/* Header Section */}
      <Header />

      <div className="container mt-3 portfolio-anchor">
        {/* Web App Section */}
        <div className="card mb-4">
          <div className="row g-0 align-items-center ">
            <div className="col-md-6 p-3">
              <h1>Web App</h1>
              <p className="mt-3">
                A web app, or web application, is a software application that
                runs on a web server and is accessed through a web browser. It
                combines the functionality of a traditional desktop application
                with the flexibility and accessibility of a website. Here’s a
                detailed description of what a web app entails:
              </p>
              <a href="/portfolio?data=Web App">
                <button class="color-glass-button">
                  <i class="fas fa-glass-martini-alt"></i>
                  Our Portfolio
                  
                </button>
              </a>
            </div>
            <div className="col-md-4 w-50">
              <img
                src="./assets/img/wireframe1.jpg"
                alt="Wireframe illustration of a web application layout."
                className="img-fluid"
              />
            </div>
          </div>
        </div>

        {/* Mobile App Section */}
        <div className="card mb-4">
          <div className="row g-0 align-items-center">
            <div className="col-md-6 p-3">
              <h1>Mobile App</h1>
              <p className="mt-3">
                A mobile app, or mobile application, is a software application
                designed specifically for use on small, portable devices such as
                smartphones and tablets. Mobile apps provide users with a
                convenient and optimized experience tailored to their devices,
                often leveraging native features such as the camera, GPS, and
                sensors. Here's a detailed description:
              </p>
              <a href="/portfolio?data=Web App">
                <button class="color-glass-button">
                  <i class="fas fa-glass-martini-alt"></i>
                  Our Portfolio
                  
                </button>
              </a>
            </div>
            <div className="col-md-3 w-50">
              <img
                src="./assets/img/og.png"
                alt="Illustration representing the interface of a mobile app."
                className="img-fluid"
              />
            </div>
          </div>
        </div>

        {/* UI/UX Design Section */}
        <div className="card mb-4">
          <div className="row g-0 align-items-center">
            <div className="col-md-6 p-3">
              <h1>UI/UX Design</h1>
              <p className="mt-3">
                UI/UX Design refers to the process of creating user interfaces
                (UI) and experiences (UX) that are functional, aesthetically
                pleasing, and intuitive. The goal is to design digital products,
                such as websites, mobile apps, or software, that are easy to use
                and provide a seamless experience for users.
              </p>
              <a href="/portfolio?data=Web App">
                <button class="color-glass-button">
                  <i class="fas fa-glass-martini-alt"></i>
                  Our Portfolio
                  
                </button>
              </a>
            </div>
            <div className="col-md-4 w-50">
              <img
                src="./assets/img/bg-sub.jpg"
                alt="Illustration representing the interface of a mobile app."
                className="img-fluid"
              />
            </div>
          </div>
        </div>

        {/* Govt. Project Section */}
        <div className="card mb-4">
          <div className="row g-0 align-items-center">
            <div className="col-md-6 p-3">
              <h1>Govt. Project</h1>
              <p className="mt-3">
                A government project refers to an initiative undertaken by a
                government agency or entity to address public needs, improve
                infrastructure, provide services, or implement policies that
                benefit citizens. These projects are typically funded by
                taxpayer money, grants, or public-private partnerships and aim
                to enhance the social, economic, or technological development of
                a region or country.
              </p>
              <a href="/portfolio?data=Web App">
                <button class="color-glass-button">
                  <i class="fas fa-glass-martini-alt"></i>
                  Our Portfolio
                  
                </button>
              </a>
            </div>
            <div className="col-md-3 w-50 d-flex justify-content-center">
              <img
                src="./assets/img/image.png"
                alt="Illustration representing the interface of a mobile app."
                className="img-fluid"
              />
            </div>
          </div>
        </div>

        {/*video creation */}
        <div className="card mb-4">
          <div className="row g-0 align-items-center">
            <div className="col-md-6 p-3">
              <h1>Video Creation</h1>
              <p className="mt-3">
              Video creation is the process of producing content that visually communicates a message, story, or concept. It begins with conceptualizing the idea, followed by careful planning in the pre-production phase, which involves organizing elements like locations, scripts, and equipment. During the production stage, the actual footage is captured, typically with actors, presenters, and technical crews. 
              </p>
              <a href="/portfolio?data=Video Creation">
                <button class="color-glass-button">
                  <i class="fas fa-glass-martini-alt"></i>
                  Our Portfolio
                  
                </button>
              </a>
            </div>
            <div className="col-md-3 w-50 d-flex justify-content-center">
              <img
                src="./assets/img/video c.jpg"
                alt="Illustration representing the interface of a mobile app."
                className="img-fluid"
              />
            </div>
          </div>
        </div>
          {/*Graphic Design  */}
        <div className="card mb-4">
          <div className="row g-0 align-items-center">
            <div className="col-md-6 p-3">
              <h1>Graphic Design </h1>
              <p className="mt-3">
              Graphic design is the art of combining text, images, and colors to communicate a message visually. It involves creating designs for various mediums like print, digital, and social media to engage and inform audiences. By using creativity and design software, graphic designers craft logos, brochures, websites, and more, all with the goal of delivering clear, impactful communication.
              </p>
              <a href="/portfolio?data=Graphic Design">
                <button class="color-glass-button">
                  <i class="fas fa-glass-martini-alt"></i>
                  Our Portfolio
                  
                </button>
              </a>
            </div>
            <div className="col-md-4 w-50 d-flex justify-content-center">
              <img
                src="./assets/img/graphic10.jpg"
                alt="Illustration representing the interface of a mobile app."
                className="img-fluid"
              />
            </div>
          </div>
        </div>
        {/*digital marketing */}
        <div className="card mb-4">
          <div className="row g-0 align-items-center">
            <div className="col-md-6 p-3">
              <h1>Digital Marketing  </h1>
              <p className="mt-3">
              Digital marketing involves promoting products and services through online channels like social media, search engines, and email. It helps businesses reach a broader audience, track performance, and optimize campaigns for better engagement and sales. Through strategies like SEO, content marketing, and paid ads, digital marketing plays a vital role in modern business growth.
              </p>
              <a href="/portfolio?data=Digital Marketing">
                <button class="color-glass-button">
                  <i class="fas fa-glass-martini-alt"></i>
                  Our Portfolio
                  
                </button>
              </a>
            </div>
            <div className="col-md-4 w-50 d-flex justify-content-center">
              <img
                src="./assets/img/digital1.jpg"
                alt="Illustration representing the interface of a mobile app."
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioData;
