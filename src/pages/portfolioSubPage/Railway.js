import React from "react";
import Header from "../../component/Header";

const Railway = () => {
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
            <div className="card shadow-sm hover-shadow-lg border-0 rounded-lg overflow-hidden w-50">
              <img
                alt="A placeholder image with dimensions 500x500 pixels"
                className="card-img-top img-fluid"
                src="./assets/img/image.png"
              />
            </div>
          </div>

          <div className="col-md-6">
            <h2>Website Description</h2>
            <p>
              The railway project by Firstminer Tech, built using the MERN stack (MongoDB, Express.js, React, Node.js), is designed to provide a robust, scalable, and user-friendly platform for managing various railway services. This application offers a seamless experience for users and administrators alike, enabling easy interaction with the railway system for booking, ticket management, and real-time data access. The system ensures efficient data handling and smooth communication between the frontend and backend, making it a comprehensive solution for modern railway management.
            </p>
          </div>
        </div>
        <div className="row mt-5 ">
          <div className="col-md-6">
            <h2>Key Features</h2>
            <ul>
      <li>
        <strong>User Authentication and Authorization</strong>
        <ul>
          <li>Secure login and registration for both users and administrators using JWT (JSON Web Tokens).</li>
          <li>Role-based access control to distinguish between normal users and admin users.</li>
        </ul>
      </li>
      <li>
        <strong>Train Schedule Management</strong>
        <ul>
          <li>Real-time viewing of train schedules, including departure and arrival times, platform numbers, and statuses (delays, cancellations, etc.).</li>
        </ul>
      </li>
      <li>
        <strong>Ticket Booking and Management</strong>
        <ul>
          <li>Easy-to-use interface for booking tickets, including seat selection, payment integration, and booking history management.</li>
          <li>Real-time availability checks to avoid overbooking.</li>
        </ul>
      </li>
      <li>
        <strong>Payment Gateway Integration</strong>
        <ul>
          <li>Integration with payment systems like Razorpay, PayPal, or Stripe for seamless online payments.</li>
        </ul>
      </li>
      <li>
        <strong>Admin Dashboard</strong>
        <ul>
          <li>Admin users have access to a comprehensive dashboard for managing trains, stations, ticket availability, and viewing detailed reports.</li>
        </ul>
      </li>
      <li>
        <strong>Real-Time Notifications</strong>
        <ul>
          <li>Users receive notifications for important updates, such as booking confirmations, train delays, or cancellations.</li>
        </ul>
      </li>
      <li>
        <strong>Train Search and Filtering</strong>
        <ul>
          <li>Users can search for available trains based on departure and destination stations, date, and time, with options to filter by seat availability, price, etc.</li>
        </ul>
      </li>
      <li>
        <strong>Booking History and Ticket Cancellation</strong>
        <ul>
          <li>Users can view and cancel their previous bookings easily, along with viewing booking details.</li>
        </ul>
      </li>
      
      
      
      
    </ul>
          </div>
          <div className="col-md-6 border8">
            <div className="card shadow-sm hover-shadow-lg border-0 rounded-lg overflow-hidden">
              <img
                alt="A placeholder image with dimensions 500x500 pixels"
                className="card-img-top img-fluid"
                src="./assets/img/railway12.png"
              />
            </div>
            <div className="card shadow-sm hover-shadow-lg border-0 rounded-lg overflow-hidden mt-5">
              <img
                alt="A placeholder image with dimensions 500x500 pixels"
                className="card-img-top img-fluid"
               src="./assets/img/railway12.png"
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
                    src="./assets/img/railway12.png"
                    width="800"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    alt="A placeholder image with dimensions 800x400 pixels"
                    className="d-block w-100"
                    height="250"
                    src="./assets/img/railway12.png"
                    width="800"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    alt="A placeholder image with dimensions 800x400 pixels"
                    className="d-block w-100"
                    height="250"
                    src="./assets/img/railway12.png"
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

export default Railway;
