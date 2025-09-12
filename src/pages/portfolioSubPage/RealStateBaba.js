import React from 'react';
import Header from '../../component/Header';

const RealStateBaba = () => {
  return (
    <div>
      <Header/>
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
        <div className="col-md-6">
          <img
            alt="A placeholder image with dimensions 500x500 pixels"
            className="img-fluid"
            height="300"
            src="./assets/img/testimonial-5.jpg"
            width="400"
          />
        </div>
        <div className="col-md-6">
          <h2>Image Description</h2>
          <p>
            This is a detailed description of the image shown on the left. The image is a placeholder with dimensions 500x500 pixels. It is used to demonstrate how an image and its description can be displayed side by side using Bootstrap.
          </p>
        </div>
      </div>
      <div className="row mt-5 mb-5">
        <div className="col-12">
          <div id="imageCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  alt="A placeholder image with dimensions 800x400 pixels"
                  className="d-block w-100"
                  height="250"
                  src="./assets/img/bg-sub.jpg"
                  width="800"
                />
              </div>
              <div className="carousel-item">
                <img
                  alt="A placeholder image with dimensions 800x400 pixels"
                  className="d-block w-100"
                  height="250"
                  src="./assets/img/bg-sub.jpg"
                  width="800"
                />
              </div>
              <div className="carousel-item">
                <img
                  alt="A placeholder image with dimensions 800x400 pixels"
                  className="d-block w-100"
                  height="250"
                  src="./assets/img/bg-sub.jpg"
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
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#imageCarousel"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  
    </div>

  );
};

export default RealStateBaba;
