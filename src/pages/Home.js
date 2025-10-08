import React, { useEffect, useState } from "react";
import { observer } from "mobx-react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Portfolio from "../elements/Portfolio";
import ClientPage from "../elements/ClientPage";
import websiteStore from "../store/WebsiteStore";
import Slider from "react-slick";
import Testimonials from "../elements/Testimonials";
import { useSpring, animated, useTransition } from "@react-spring/web";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { Form, Button, Alert, Row, Col, Modal } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";
import Loader from "../elements/loader";
import AOS from 'aos';
import 'aos/dist/aos.css';

const HomePage = observer(() => {
  useEffect(() => {
    websiteStore?.getTeams();
    AOS.init({ duration: 1000, once: true });
  }, []);
  const [isSuccess, setIsSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loader, setLoader] = useState(true);
  setTimeout(() => {
    setLoader(false);
  }, 900)
  // Function to handle form submission using mailto
  const handleSubmit = (values, { resetForm }) => {
    setLoading(true);
    setIsSuccess(false); // Reset success state before submitting

    // Construct the mailto link with form values
    const subject = encodeURIComponent(values.subject);
    const body = encodeURIComponent(`Name: ${values.name}\nEmail: ${values.email}\n\nMessage: ${values.message}`);
    const mailtoLink = `mailto:firstminertech@gmail.com?subject=${subject}&body=${body}`;

    // Open the default email client with the pre-filled email
    window.location.href = mailtoLink;

    // Reset the form and success state
    resetForm();
    setIsSuccess(true); // Indicate that the form was "successfully submitted" (even though it relies on the user's email client)
    setLoading(false);
  };
  const [show, setShow] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  useEffect(() => {
    setShow(true); // Trigger the animation when the component mounts
  }, []);
  useEffect(() => {
    websiteStore?.getTeams();
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Transition for the entire content
  const transitions = useTransition(show, {
    from: { opacity: 0, transform: "translateY(50px)" },
    enter: { opacity: 1, transform: "translateY(0)" },
    leave: { opacity: 0, transform: "translateY(50px)" },
    config: { tension: 180, friction: 12 },
  });

  // Transition for the image with slight delay
  const imageTransition = useTransition(show, {
    from: { opacity: 0, transform: "translateY(50px)" },
    enter: { opacity: 1, transform: "translateY(0)" },
    leave: { opacity: 0, transform: "translateY(50px)" },
    config: { tension: 180, friction: 12 },
    delay: 300, // Slight delay for image
  });

  // Animation for about section content
  const aboutContentSpring = useSpring({
    from: { opacity: 0, transform: 'translateY(40px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { tension: 180, friction: 16 },
    delay: 300,
  });

  return (
    <div>
      <style>
        {`
    .header-relative {
      position:absolute !important;
    }
    .header-relative .nav-menu a {
      color: white;
    }

    #header.fixed .nav-menu a {
      color: black !important;
    }

    /* blink animation */
    @keyframes blink {
      0%, 100% { opacity: 1; }
      50%      { opacity: 0; }
    }

    /* apply blink to your Firstminer title */
    .Firstminer-title {
      animation: blink 1.5s linear infinite;
    }
       .img-wrapper {
    display: inline-block;
    border: 2px solid #ddd;
    box-shadow: 0 8px 20px rgba(0,0,0,0.2);
    border-radius: 8px;
    overflow: hidden;
  }
  @keyframes float {
    0%   { transform: translateY(0); }
    50%  { transform: translateY(-15px); }
    100% { transform: translateY(0); }
  }
  .floating-img {
    display: block;
    animation: float 4s ease-in-out infinite;
  }
     @keyframes blink {
    0%, 100% { opacity: 1; }
    50%      { opacity: 0; }
  }

  /* blink the services heading */
  #services .section-header h2 {
    animation: blink 1.5s linear infinite;
  }

  /* --- Improved Technology Card Styles --- */
 .card-technology {
  width: 240px;
  height: 160px;
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 6px 24px rgba(0,0,0,0.10);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 24px 12px;
  transition: box-shadow 0.2s, transform 0.2s;
  border: none;
}

.card-technology:hover {
  box-shadow: 0 12px 32px rgba(0,0,0,0.16);
  transform: translateY(-6px) scale(1.04);
}

.card-image {
  max-width: 140px;
  max-height: 90px;
  object-fit: contain;
  display: block;
  margin: 0 auto;
}

.card-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0;
}

.container {
  max-width: 1400px;
}

.d-flex.justify-content-around.flex-wrap.mt-4 {
  justify-content: center !important;
  gap: 0 24px;
}

/* Add text-shadow to headings for a soft effect */
.client-title, .section-header h2 {
  text-shadow: 1px 1px 3px rgba(0,0,0,0.1);
}

/* --- Marquee Section Improvements --- */
.horizontal-marquee-container {
  width: 100%;
  overflow: hidden;
  background: #f8f9fa;
  border-radius: 18px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.07);
  padding: 18px 0;
  margin: 30px 0 40px 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.horizontal-marquee-track {
  display: flex;
  align-items: center;
  animation: marquee 30s linear infinite;
  gap: 32px;
}
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-33.333%); }
}
.client-box {
  width: 260px;
  min-width: 260px;
  height: 120px;
  background: #fff;
  border-radius: 14px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.06);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 18px 12px;
  margin: 0 8px;
  transition: box-shadow 0.2s, transform 0.2s, background 0.2s;
}
.client-box:hover {
  box-shadow: 0 8px 32px rgba(0,0,0,0.18);
  transform: translateY(-8px) scale(1.06);
  background:rgb(169, 231, 238);
}
.client-box img {
  max-height: 50px;
  margin-bottom: 10px;
  object-fit: contain;
}
.client-box div {
  text-align: center;
  font-size: 16px;
  color: #444;
  font-weight: 500;
}

/* Flip card styles for about section */
.flip-card {
  background-color: transparent;
  width: 100%;
  height: 350px;
  perspective: 1000px;
  border-radius: 8px;
}
.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.7s cubic-bezier(0.4,0.2,0.2,1);
  transform-style: preserve-3d;
  border-radius: 8px;
}
.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}
.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 8px;
  overflow: hidden;
}
.flip-card-front {
  z-index: 2;
}
.flip-card-back {
  transform: rotateY(180deg);
  z-index: 1;
}

.icon img, .service-icon, .benefit-icon {
  transition: transform 0.3s cubic-bezier(.25,1.5,.5,1.1), box-shadow 0.3s, filter 0.3s;
  will-change: transform, box-shadow, filter;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  opacity: 0;
  transform: translateY(30px) scale(0.95);
  animation: iconFadeInUp 0.8s cubic-bezier(.25,1.5,.5,1.1) forwards;
}
.icon img:hover, .service-icon:hover, .benefit-icon:hover {
  transform: scale(1.18) translateY(-6px) rotate(-6deg);
  box-shadow: 0 8px 24px rgba(25, 118, 210, 0.18);
  filter: brightness(1.08) saturate(1.12);
}
@keyframes iconFadeInUp {
  0% {
    opacity: 0;
    transform: translateY(30px) scale(0.95);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
.card-technology.shadow {
  box-shadow: 0 6px 24px rgba(128,0,255,0.18), 0 2px 8px rgba(0,0,0,0.10);
  border: 2px solid #a259ff;
}
.card-technology.shadow:hover {
  box-shadow: 0 12px 32px rgba(128,0,255,0.28), 0 8px 24px rgba(0,0,0,0.16);
  border: 2.5px solid #c084fc;
}

.horizontal-marquee-container {
  position: relative;
  overflow: hidden;
  width: 100%;
  white-space: nowrap;
}

.horizontal-marquee-track {
  display: flex;
  gap: 40px; /* space between boxes */
  animation: marquee 30s linear infinite;
  width: max-content;
}

.client-box {
  flex: 0 0 auto;
  min-width: 300px;
  text-align: center;
}

@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
  /* Seamless marquee */
.marquee {
  position: relative;
  overflow: hidden;
  width: 100%;
  background: #f8f9fa;
  border-radius: 18px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.07);
  padding: 18px 0;
}

.marquee-track {
  display: flex;
  width: max-content;
  will-change: transform;
  animation: marquee-scroll 28s linear infinite;
}

/* One complete set of cards */
.marquee-group {
  display: flex;
  gap: 28px;               /* spacing between cards */
  padding-inline: 14px;    /* half the gap to hide the join seam */
}

/* Cards */
.client-box {
  flex: 0 0 280px;         /* fixed card width */
  width: 280px;
  height: 120px;
  background: #fff;
  border-radius: 14px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.06);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 14px 12px;
  transition: box-shadow .2s, transform .2s, background .2s;
}

.client-box:hover {
  box-shadow: 0 8px 32px rgba(0,0,0,0.18);
  transform: translateY(-6px) scale(1.04);
  background: rgb(169, 231, 238);
}

.client-box img {
  height: 50px;            /* uniform logo height */
  object-fit: contain;
  display: block;
  margin-bottom: 8px;
}

/* Keep text inside the card; clamp to 2 lines */
.client-text {
  text-align: center;
  font-size: 16px;
  color: #444;
  font-weight: 500;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}

@keyframes marquee-scroll {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }  /* move by exactly one group */
}

/* Optional: pause on hover */
.marquee:hover .marquee-track { animation-play-state: paused; }

/* Optional: accessibility */
@media (prefers-reduced-motion: reduce) {
  .marquee-track { animation: none; }
}


        `}
      </style>
      {loader ? <Loader /> : <div><Header />

        <section id="intro" data-aos="fade-up">
          {/* Background Video */}
          <div className="container">
            <video autoPlay muted loop id="intro-video">
              <source src={
                window.matchMedia("(max-width: 560px)").matches
                  ? "assets/img/headervidmob.mp4"
                  : "assets/img/header-video.mp4"
              }
                type="video/mp4" />
            </video>
          </div>
        </section>

        {/* #intro */}

        <main id="main">
          <section id="about" className="wow fadeInUp" data-aos="fade-up">
            <div className="container">
              <div className="row">
                {/* Animated Image */}
                <div className="col-lg-6 about-img">
                  <img
                    src="assets/img/about-img.jpg"
                    alt="About Firstminer"
                    className="floating-img"
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>


                {/* Animated Content */}
                <div className="col-lg-6 content">
                  {/* Animated About Content */}
                  <animated.div style={aboutContentSpring}>
                    <h2 className="Firstminer-title">
                      Firstminer Technology Solutions Pvt. Ltd .
                    </h2>
                    <ul>
                      <li className="mt-5">
                        Our team of specialists consistently delivers
                        outstanding results combining creative ideas with our
                        vast experience. We can help you build a sustainable,
                        meaningful relationship with your clients by engaging
                        them with your brand using social media.
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <i className="ion-android-checkmark-circle" /> Our
                        team develops effective content strategies for forward
                        thinking companies. We have a proven track record in
                        increasing searnch engine rankings.
                      </li>
                      <li>
                        <i className="ion-android-checkmark-circle" />
                        Our digital marketing, Mobile Application Development,
                        Website Development work speaks for itself. We deliver
                        an outstanding service custom-tailored to each and
                        every one of our clients.
                      </li>
                    </ul>
                  </animated.div>
                </div>
              </div>
            </div>
          </section>
          {/* #about */}

         <section id="services" data-aos="fade-up">
  <div className="container">
    <div className="section-header" data-aos="fade-up">
      <h2 className="blink-heading">Services</h2>

                <p className="servies-para">
                  Firstminer Tech specializes in creating custom websites and
                  mobile apps, offering end-to-end development solutions. We focus
                  on delivering high-quality, user-friendly products tailored to
                  client needs. Our expertise spans across various industries to
                  enhance your digital presence.
                </p>
              </div>
              <div className="row">
                <div className="col-lg-6" data-aos="zoom-in">
                  <div className="box wow fadeInLeft">
                    <div className="icon">
                      {/* <i className="fa fa-bar-chart" /> */}
                      <img src="assets/img/dm.png" />
                    </div>
                    <h4 className="title">
                      <a>Content Marketing strategy</a>
                    </h4>
                    <p className="description">
                      Content Marketing is an effective way to encourage
                      conversions and its main objective is to build a content
                      strategy to meets the needs of your target audience.
                    </p>
                  </div>
                </div>

                <div className="col-lg-6" data-aos="zoom-in">
                  <div className="box wow fadeInLeft" data-wow-delay="0.2s">
                    <div className="icon">
                      <img src="assets/img/appdevelopment.webp"></img>
                    </div>
                    <h4 className="title">
                      <a>App Development</a>
                    </h4>
                    <p className="description">
                      your unique ideas transforming into incredible apps for your
                      business requirements. our app developers can build mobile
                      app your requirement, in your budget, and as per your
                      timeline.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6" data-aos="zoom-in">
                  <div className="box wow fadeInLeft" data-wow-delay="0.2s">
                    <div className="icon">
                      <img src="assets/img/web.jpg"></img>
                    </div>
                    <h4 className="title">
                      <a>Web Development</a>
                    </h4>

                    <p className="description">
                      A website should not just draw attention. The role of a
                      website is to attract and engage the user, as well as
                      communicate your brand and raise awareness about a product
                      or service.
                    </p>
                  </div>
                </div>

                <div className="col-lg-6" data-aos="zoom-in">
                  <div className="box wow fadeInLeft" data-wow-delay="0.2s">
                    <div className="icon">
                      <img src="assets/img/project.webp"></img>
                    </div>
                    <h4 className="title">
                      <a>Project Explaination & video Creation</a>
                    </h4>
                    <p className="description">
                      High-quality video ads can easily generate traffic of
                      customers. Do not stick with traditional marketing, use
                      digital tools to gather more and more customers at your
                      point.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6" data-aos="zoom-in">
                  <div className="box wow fadeInLeft" data-wow-delay="0.2s">
                    <div className="icon">
                      <img src="assets/img/govt.webp"></img>
                    </div>
                    <h4 className="title">
                      <a>Govt. Tender and (Supply)</a>
                    </h4>
                    <p className="description">
                      we supply the material for structured procedure and
                      different potential suppliers or contractors, business
                      activity in works, supply, or service contracts.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6" data-aos="zoom-in">
                  <div className="box wow fadeInLeft" data-wow-delay="0.2s">
                    <div className="icon">
                      <img src="assets/img/v.jpg"></img>
                    </div>
                    <h4 className="title">
                      <a>Commercial Video Creation</a>
                    </h4>
                    <p className="description">
                      Understand how your videos are performing, gain valuable insights into their reach, and analyze the kind of target audience viewing, engaging, and interacting with them.
                    </p>
                  </div>
                </div>

                <div className="col-lg-6" data-aos="zoom-in">
                  <div className="box wow fadeInLeft" data-wow-delay="0.2s">
                    <div className="icon">
                      <img src="assets/img/blockchain.webp"></img>
                    </div>
                    <h4 className="title">
                      <a>Blockchain Consultant</a>
                    </h4>
                    <p className="description">
                      Blockchain Lab we believe that Distributed Ledger
                      Technologies carry the potential to introduce a new level of
                      transparency, automation, and efficiency in businesses and
                      nonprofits.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6" data-aos="zoom-in">
                  <div className="box wow fadeInLeft" data-wow-delay="0.2s">
                    <div className="icon">
                      <img src="assets/img/social1.png" width={50} />
                    </div>
                    <h4 className="title">
                      <a>Digital Marketing</a>
                    </h4>
                    <p className="description">
                      Digital Marketing is an effective way to encourage conversions and its main objective is to build a strategy to meets the needs of your target audience.


                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* #services */}
         <h2 className="client-title"> Our Happy Clients</h2>
<p className="client-para">
  At FirstMiner, we are proud to collaborate with a diverse range of
  clients across industries like. Our tailored solutions help them achieve
  success and exceed their goals. We value long-lasting partnerships and
  work closely with each client to deliver impactful results.
</p>

{/* NEW: Seamless marquee (two identical groups) */}
<div className="marquee">
  <div className="marquee-track">
    <div className="marquee-group">
      {/* one full set */}
      <div className="client-box">
        <img src="/assets/img/out.jpg" alt="Outreach" />
        <p className="client-text">A leading platform in crypto trading offering advanced features.</p>
      </div>
      <div className="client-box">
        <img src="/assets/img/ABVV.png" alt="College" />
        <p className="client-text">Empowering the next generation of leaders.</p>
      </div>
      <div className="client-box">
        <img src="/assets/img/railway.png" alt="Indian Railways" />
        <p className="client-text">Connecting people, places, and progress.</p>
      </div>
      <div className="client-box">
        <img src="/assets/img/Realestatebaba-2.jpg" alt="Realestate Baba" />
        <p className="client-text">Realestate Baba is a platform for seamless property transactions.</p>
      </div>
      <div className="client-box">
        <img src="/assets/img/unnamed.webp" alt="Dabbavala App" />
        <p className="client-text">Dabbavala App: Authentic tiffin service delivered to your doorstep.</p>
      </div>
    </div>

    {/* duplicate once for seamless looping */}
    <div className="marquee-group" aria-hidden="true">
      <div className="client-box">
        <img src="/assets/img/out.jpg" alt="" />
        <p className="client-text">A leading platform in crypto trading offering advanced features.</p>
      </div>
      <div className="client-box">
        <img src="/assets/img/ABVV.png" alt="" />
        <p className="client-text">Empowering the next generation of leaders.</p>
      </div>
      <div className="client-box">
        <img src="/assets/img/railway.png" alt="" />
        <p className="client-text">Connecting people, places, and progress.</p>
      </div>
      <div className="client-box">
        <img src="/assets/img/Realestatebaba-2.jpg" alt="" />
        <p className="client-text">Realestate Baba is a platform for seamless property transactions.</p>
      </div>
      <div className="client-box">
        <img src="/assets/img/unnamed.webp" alt="" />
        <p className="client-text">Dabbavala App: Authentic tiffin service delivered to your doorstep.</p>
      </div>
    </div>
  </div>
</div>




          <div>
            <h2 className="client-title mt-4">Technologies</h2>
            <p className="client-para">
              At FirstMinerTech, we leverage cutting-edge technologies to deliver high-quality, scalable,
              and efficient solutions. Our technology stack is carefully chosen to meet the diverse needs of modern
              businesses and ensure robust performance. Here's what powers our innovation:
            </p>
          </div>
          <div className="container">
            <div className="d-flex justify-content-around flex-wrap mt-4">
              <div className="card-technology shadow" data-aos="zoom-in">
                <img src="assets/img/mern.jpg" alt="Card Image" className="card-image" />
              </div>
              <div className="card-technology shadow" data-aos="zoom-in">
                <img src="assets/img/django.png" alt="Card Image" className="card-image" />
              </div>
              <div className="card-technology shadow" data-aos="zoom-in">
                <img src="assets/img/react.jpg" alt="Card Image" className="card-image" />
              </div>
              <div className="card-technology shadow" data-aos="zoom-in">
                <img src="assets/img/Flutter.jpg" alt="Card Image" className="card-image" />
              </div>
            </div>
            <div className="d-flex justify-content-around flex-wrap mt-4">
              <div className="card-technology shadow" data-aos="zoom-in">
                <img src="assets/img/code.png" alt="Card Image" className="card-image" />
              </div>
              <div className="card-technology shadow" data-aos="zoom-in">
                <img src="assets/img/ios.png" alt="Card Image" className="card-image" />
              </div>
              <div className="card-technology shadow" data-aos="zoom-in">
                <img src="assets/img/Azure.png" alt="Card Image" className="card-image" />
              </div>
              <div className="card-technology shadow" data-aos="zoom-in">
                <img src="assets/img/net.png" alt="Card Image" className="card-image" />
              </div>
            </div>
            <div className="d-flex justify-content-around flex-wrap mt-4">
              <div className="card-technology shadow" data-aos="zoom-in">
                <img src="assets/img/android.png" alt="Card Image" className="card-image" />
              </div>
              <div className="card-technology shadow" data-aos="zoom-in">
                <img src="assets/img/java.png" alt="Card Image" className="card-image" />
              </div>
              <div className="card-technology shadow" data-aos="zoom-in">
                <img src="assets/img/next.png" alt="Card Image" className="card-image" />
              </div>
              <div className="card-technology shadow" data-aos="zoom-in">
                <img src="assets/img/Laravel.png" alt="Card Image" className="card-image" />
              </div>
            </div>
          </div>


          <div className="container py-5" data-aos="fade-up">
            <div className="row justify-content-center text-center">
              <div className="col-12">
                <h2 className="client-title mt-4">Why to Choose US</h2>
                <p className="text-muted">
                  As We are a technical solution partner, we bring unmatched expertise and tools to ensure your success.
                </p>
              </div>
            </div>

            <div className="row align-items-center mt-4">
              {/* Side Image */}
              <div className="col-12 col-md-5 text-center mb-4 mb-md-0" data-aos="zoom-in">
                <img
                  src="assets/img/chooseus1.jpg"
                  alt="Professional"
                  className="img-fluid  border-custom"
                />
              </div>

              {/* Features Section */}
              <div className="col-12 col-md-7">
                <div className="row">
                  <div className="col-12 col-md-6 mb-4" data-aos="zoom-in">
                    <div className="feature-card" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <img
                        src="assets/img/checkbox.png"
                        alt="Descriptive text for the image"
                        style={{ width: "50px", height: "auto" }} // Optional: Inline styling
                      />
                      <div>
                        <h5>Targeted Expertise</h5>
                        <p>Focused solutions tailored to your business goals.</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-md-6 mb-4" data-aos="zoom-in">
                    <div className="feature-card" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <img
                        src="assets/img/checkbox.png"
                        alt="Descriptive text for the image"
                        style={{ width: "50px", height: "auto" }} // Optional: Inline styling
                      />
                      <div>
                        <h5>Proven Success</h5>
                        <p>Years of experience delivering measurable results.</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-md-6 mb-4" data-aos="zoom-in">

                    <div className="feature-card" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <img
                        src="assets/img/checkbox.png"
                        alt="Descriptive text for the image"
                        style={{ width: "50px", height: "auto" }} // Optional: Inline styling
                      />
                      <div>
                        <h5>Cutting-Edge Tools</h5>
                        <p>Utilizing the latest technology to drive growth.</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-md-6 mb-4" data-aos="zoom-in">
                    <div className="feature-card" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <img
                        src="assets/img/checkbox.png"
                        alt="Descriptive text for the image"
                        style={{ width: "50px", height: "auto" }} // Optional: Inline styling
                      />
                      <div>
                        <h5>Dedicated Collaboration</h5>
                        <p>Working closely with you to achieve your vision.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}

          </div>
          <section id="call-to-action" className="call-to-action-section" data-aos="fade-up">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-9 text-center text-lg-left">
                  <h3 className="cta-title">Want to build your digital Product?</h3>
                  <p className="cta-text">
                    Ready to take your business to the next level? Collaborate with us to achieve your goals and drive success.
                    Our expert solutions are tailored to your needs, ensuring measurable growth and innovation. Let's build a brighter future together.
                  </p>
                </div>
                <div className="col-lg-3 cta-btn-container text-center">
                  <a href="#contact" className="cta-btn align-middle" onClick={handleShow}>
                    Reach Us
                  </a>
                </div>
              </div>
            </div>
          </section>
          <div>
            <h3 className="client-title mt-4">Testimonials</h3>
            <p className="client-para">
              At FirstMiner, we believe that our success is built on the trust and
              satisfaction of our clients.Here are just a few of the testimonials
              from our valued clients, who share their experiences with our
              services, expertise, and commitment to excellence. We are proud of the
              lasting relationships we have built and the impact we've made in
              helping our clients achieve their goals.
            </p>
            <div className="d-flex justify-content-center">
              <div className="col-10 p-4">
                <Testimonials />
              </div>
            </div>
          </div>
          {/* <section id="team" className="wow fadeInUp">
         <div className="container">
           <div className="section-header">
             <h2>Our Team</h2>
           </div>
           <div className="d-flex justify-content-between align-items-center gap-5">
             <div className="col-lg-6 team-home mb-5">
               <div className="title-z">
                 ALL
                 <br />
                 TEAMS
               </div>
               <div className="button-z">
                 <Link to={"/our-teams"}>Browse All</Link>
               </div>
               <div className="navigation">
                
                 <i id="swiper-prev" className="fas fa-arrow-left " ></i>
                 <i id="swiper-next" className="fas fa-arrow-right" ></i>
               </div>
             </div>

             <Swiper
               modules={[Pagination, Autoplay, Navigation]}
               spaceBetween={10}
               loop={true}
               autoplay={{
                 delay: 3000,
                 disableOnInteraction: false,
               }}
               pagination={{ clickable: true }}
               navigation={{
                 nextEl: "#swiper-next",
                 prevEl: "#swiper-prev",
               }}
               slidesPerView={1}
               speed={800}
               style={{ paddingBottom: "40px" }}
             >
               <SwiperSlide>
                 <div className="team-member">
                   <div className="member-image">
                     <img
                       src="assets/img/logo-final.png"
                       alt="Team Member"
                       style={{ width: "200px" }}
                     />
                   </div>
                   <div className="member-details">
                     <h4>Anik Ranjan</h4>
                     <span>Software Developer</span>
                     <p>
                       Anik is a skilled software developer with expertise in building
                       innovative and scalable web applications. With a passion for clean,
                       efficient code, he thrives in collaborative environments where
                       technology meets creativity. Always eager to learn and grow, Anik
                       contributes to developing cutting-edge solutions and improving user
                       experiences.
                     </p>
                     <div className="social-links">
                       <a href="" target="_blank" rel="noopener noreferrer">
                         <i className="fa-brands fa-instagram"></i>
                       </a>
                       <a href="" target="_blank" rel="noopener noreferrer">
                         <i className="fa-brands fa-facebook"></i>
                       </a>
                       <a href="" target="_blank" rel="noopener noreferrer">
                         <i className="fa-brands fa-whatsapp"></i>
                       </a>
                       <a href="" target="_blank" rel="noopener noreferrer">
                         <i className="fa-brands fa-linkedin"></i>
                       </a>
                     </div>
                   </div>
                 </div>
               </SwiperSlide>
               <SwiperSlide>
                 <div className="team-member">
                   <div className="member-image">
                     <img
                       src="assets/img/logo-final.png"
                       alt="Team Member"
                       style={{ width: "200px" }}
                     />
                   </div>
                   <div className="member-details">
                     <h4>Sudhanshu Kanwar</h4>
                     <span>Software Developer</span>
                     <p>
                       Sudhanshu is a dedicated software developer with a passion for
                       creating innovative software solutions. Focused on clean, maintainable
                       code, he has a keen interest in developing robust applications that
                       provide excellent user experiences. With a constant drive for learning
                       and improving, Sudhanshu is always exploring new technologies and
                       methodologies to solve complex problems.
                     </p>
                     <div className="social-links">
                       <a href="" target="_blank" rel="noopener noreferrer">
                         <i className="fa-brands fa-instagram"></i>
                       </a>
                       <a href="" target="_blank" rel="noopener noreferrer">
                         <i className="fa-brands fa-facebook"></i>
                       </a>
                       <a href="" target="_blank" rel="noopener noreferrer">
                         <i className="fa-brands fa-whatsapp"></i>
                       </a>
                       <a href="" target="_blank" rel="noopener noreferrer">
                         <i className="fa-brands fa-linkedin"></i>
                       </a>
                     </div>
                   </div>
                 </div>
               </SwiperSlide>
               <SwiperSlide>
                 <div className="team-member">
                   <div className="member-image">
                     <img
                       src="assets/img/logo-final.png"
                       alt="Team Member"
                       style={{ width: "200px" }}
                     />
                   </div>
                   <div className="member-details">
                     <h4>Dharmesh Darshan</h4>
                     <span>Software Developer</span>
                     <p>
                       Dharmesh is a passionate software developer who thrives
                       on building innovative and efficient digital solutions.
                       With a focus on continuous learning and improving his
                       technical skills, Dharmesh specializes in developing
                       user-friendly and high-performance applications. His
                       approach combines creativity with technical expertise to
                       solve complex problems and enhance user experiences.
                     </p>
                     <div className="social-links">
                       <a href="" target="_blank" rel="noopener noreferrer">
                         <i className="fa-brands fa-instagram"></i>
                       </a>
                       <a href="" target="_blank" rel="noopener noreferrer">
                         <i className="fa-brands fa-facebook"></i>
                       </a>
                       <a href="" target="_blank" rel="noopener noreferrer">
                         <i className="fa-brands fa-whatsapp"></i>
                       </a>{" "}
                       <a href="" target="_blank" rel="noopener noreferrer">
                         <i className="fa-brands fa-linkedin"></i>
                       </a>
                     </div>
                   </div>
                 </div>
               </SwiperSlide>
               <SwiperSlide>
                 <div className="team-member">
                   <div className="member-image">
                     <img
                       src="assets/img/logo-final.png"
                       alt="Team Member"
                       style={{ width: "200px" }}
                     />
                   </div>
                   <div className="member-details">
                     <h4>Shivam Gupta</h4>
                     <span>Software Developer</span>
                     <p>
                       Shivam is a dedicated software developer with a strong
                       foundation in building efficient and scalable
                       applications. With a passion for coding and
                       problem-solving, he is driven by the challenge of
                       developing innovative solutions that meet both user
                       needs and business objectives. Shivam consistently seeks
                       to expand his knowledge and refine his skills, embracing
                       new technologies to stay ahead in the fast-evolving tech
                       landscape.
                     </p>
                     <div className="social-links">
                       <a href="" target="_blank" rel="noopener noreferrer">
                         <i className="fa-brands fa-instagram"></i>
                       </a>
                       <a href="" target="_blank" rel="noopener noreferrer">
                         <i className="fa-brands fa-facebook"></i>
                       </a>
                       <a href="" target="_blank" rel="noopener noreferrer">
                         <i className="fa-brands fa-whatsapp"></i>
                       </a>{" "}
                       <a href="" target="_blank" rel="noopener noreferrer">
                         <i className="fa-brands fa-linkedin"></i>
                       </a>
                     </div>
                   </div>
                 </div>
               </SwiperSlide>
               <SwiperSlide>
                 <div className="team-member">
                   <div className="member-image">
                     <img
                       src="assets/img/logo-final.png"
                       alt="Team Member"
                       style={{ width: "200px" }}
                     />
                   </div>
                   <div className="member-details">
                     <h4>Sakshi Rathore</h4>
                     <span>App Developer</span>
                     <p>
                       Sakshi is an enthusiastic app developer who specializes
                       in creating mobile applications that deliver seamless
                       user experiences. With a passion for both Android and
                       iOS development, she focuses on crafting intuitive and
                       high-performing apps that cater to diverse user needs.
                       Sakshi's attention to detail and commitment to improving
                       app functionality make her a reliable contributor in the
                       tech world.
                     </p>
                     <div className="social-links">
                       <a href="" target="_blank" rel="noopener noreferrer">
                         <i className="fa-brands fa-instagram"></i>
                       </a>
                       <a href="" target="_blank" rel="noopener noreferrer">
                         <i className="fa-brands fa-facebook"></i>
                       </a>
                       <a href="" target="_blank" rel="noopener noreferrer">
                         <i className="fa-brands fa-whatsapp"></i>
                       </a>{" "}
                       <a href="" target="_blank" rel="noopener noreferrer">
                         <i className="fa-brands fa-linkedin"></i>
                       </a>
                     </div>
                   </div>
                 </div>
               </SwiperSlide>
               <SwiperSlide>
                 <div className="team-member">
                   <div className="member-image">
                     <img
                       src="assets/img/logo-final.png"
                       alt="Team Member"
                       style={{ width: "200px" }}
                     />
                   </div>
                   <div className="member-details">
                     <h4>Pallavi Rathore </h4>
                     <span>Tester & UI/UX Developer</span>
                     <p>
                       Pallavi is a skilled tester and UI/UX developer with a
                       passion for delivering intuitive and visually appealing
                       digital experiences. She excels in ensuring that
                       applications are not only functional but also
                       user-friendly, creating seamless interactions through
                       meticulous testing and thoughtful design. With a keen
                       eye for detail and user-centered design principles,
                       Pallavi works to improve both the usability and
                       aesthetics of every project she touches
                     </p>
                     <div className="social-links">
                       <a href="" target="_blank" rel="noopener noreferrer">
                         <i className="fa-brands fa-instagram"></i>
                       </a>
                       <a href="" target="_blank" rel="noopener noreferrer">
                         <i className="fa-brands fa-facebook"></i>
                       </a>
                       <a href="" target="_blank" rel="noopener noreferrer">
                         <i className="fa-brands fa-whatsapp"></i>
                       </a>{" "}
                       <a href="" target="_blank" rel="noopener noreferrer">
                         <i className="fa-brands fa-linkedin"></i>
                       </a>
                     </div>
                   </div>
                 </div>
               </SwiperSlide>
               <SwiperSlide>
                 <div className="team-member">
                   <div className="member-image">
                     <img
                       src="assets/img/logo-final.png"
                       alt="Team Member"
                       style={{ width: "200px" }}
                     />
                   </div>
                   <div className="member-details">
                     <h4>Sandeep bhatt</h4>
                     <span>Designer</span>
                     <p>
                       A Sandeep is a creative professional with a versatile
                       skill set that includes graphic design, video editing,
                       and multimedia content creation. With a deep
                       understanding of visual aesthetics and storytelling, he
                       brings concepts to life through his designs and videos.
                       Sandeep is passionate about creating compelling and
                       impactful visuals that engage and inspire audiences.
                       Whether it's crafting dynamic graphics or editing
                       seamless videos, he combines technical expertise with
                       artistic flair to deliver high-quality results.
                     </p>
                     <div className="social-links">
                       <a href="" target="_blank" rel="noopener noreferrer">
                         <i className="fa-brands fa-instagram"></i>
                       </a>
                       <a href="" target="_blank" rel="noopener noreferrer">
                         <i className="fa-brands fa-facebook"></i>
                       </a>
                       <a href="" target="_blank" rel="noopener noreferrer">
                         <i className="fa-brands fa-whatsapp"></i>
                       </a>{" "}
                       <a href="" target="_blank" rel="noopener noreferrer">
                         <i className="fa-brands fa-linkedin"></i>
                       </a>
                     </div>
                   </div>
                 </div>
               </SwiperSlide>
               <SwiperSlide>
                 <div className="team-member">
                   <div className="member-image">
                     <img
                       src="assets/img/logo-final.png"
                       alt="Team Member"
                       style={{ width: "200px" }}
                     />
                   </div>
                   <div className="member-details">
                     <h4>Hritwik Ujjaini</h4>
                     <span>Senior Designer</span>
                     <p>
                       Hritwik is a creative designer and skilled video editor,
                       with a passion for producing visually compelling
                       content. Whether it's crafting striking designs or
                       editing videos that tell a story, Hritwik focuses on
                       creating engaging and high-quality multimedia
                       experiences. His eye for detail and innovative approach
                       allows him to transform concepts into captivating
                       visuals, making him a valuable asset in any creative
                       project
                     </p>
                     <div className="social-links">
                       <a href="" target="_blank" rel="noopener noreferrer">
                         <i className="fa-brands fa-instagram"></i>
                       </a>
                       <a href="" target="_blank" rel="noopener noreferrer">
                         <i className="fa-brands fa-facebook"></i>
                       </a>
                       <a href="" target="_blank" rel="noopener noreferrer">
                         <i className="fa-brands fa-whatsapp"></i>
                       </a>{" "}
                       <a href="" target="_blank" rel="noopener noreferrer">
                         <i className="fa-brands fa-linkedin"></i>
                       </a>
                     </div>
                   </div>
                 </div>
               </SwiperSlide>
             </Swiper>
           </div>
         </div>
       </section> */}

          {/* #team */}
        </main></div>}


      {/* Modal */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          {/* <Modal.Title>Contact Details</Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
          <div className="form-container">
            <h2 className="form-title">For Inquery</h2>
            {isSuccess && (
              <Alert variant="success" className="success-alert">
                Your message has been sent. Thank you!
              </Alert>
            )}
            <Formik
              initialValues={{
                name: "",
                email: "",
                subject: "",
                message: "",
                phone: "", // Add phone field
                address: "", // Add address field
              }}

              validationSchema={Yup.object({
                name: Yup.string()
                  .min(4, "Name must be at least 4 characters")
                  .required("Name is required"),
                email: Yup.string()
                  .email("Invalid email address")
                  .required("Email is required"),
                subject: Yup.string()
                  .min(4, "Subject must be at least 4 characters")
                  .required("Subject is required"),
                message: Yup.string().required("Message is required"),
                phone: Yup.string()
                  .matches(/^\d{10}$/, "Phone number must be exactly 10 digits")
                  .required("Phone number is required"),
                address: Yup.string().required("Address is required"),
              })}

              onSubmit={handleSubmit} // Pass the handleSubmit function
            >
              {(formik) => (
                <Form onSubmit={formik.handleSubmit}>
                  <Row>
                    <Col md={6} className="mt-1">
                      <Form.Group controlId="name">
                        <Form.Control
                          type="text"
                          name="name"
                          value={formik.values.name}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          placeholder="Your Name"
                          className="form-input"
                          isInvalid={
                            formik.touched.name && formik.errors.name
                          }
                        />
                        <Form.Control.Feedback type="invalid">
                          {formik.errors.name}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col md={6} className="mt-1">
                      <Form.Group controlId="email">
                        <Form.Control
                          type="email"
                          name="email"
                          value={formik.values.email}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          placeholder="Your Email"
                          className="form-input"
                          isInvalid={
                            formik.touched.email && formik.errors.email
                          }
                        />
                        <Form.Control.Feedback type="invalid">
                          {formik.errors.email}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col md={6} className="mt-1">
                      <Form.Group controlId="phoneNumber">
                        <Form.Control
                          type="text"
                          name="phone"
                          value={formik.values.phone}
                          onChange={(e) => {
                            const value = e.target.value;
                            // Allow only numeric values and limit to 10 digits
                            if (/^\d{0,10}$/.test(value)) {
                              formik.setFieldValue("phone", value);
                            }
                          }}
                          onBlur={formik.handleBlur}
                          placeholder="Phone number"
                          className="form-input"
                          isInvalid={
                            formik.touched.phone && formik.errors.phone
                          }
                        />
                        <Form.Control.Feedback type="invalid">
                          {formik.errors.phone}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>

                    <Col md={6} className="mt-1">
                      <Form.Group controlId="address">
                        <Form.Control
                          type="text" // Address doesn't need to be of type email
                          name="address"
                          value={formik.values.address}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          placeholder="Address"
                          className="form-input"
                          isInvalid={formik.touched.address && formik.errors.address}
                        />
                        <Form.Control.Feedback type="invalid">
                          {formik.errors.address}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>

                  </Row>
                  <Form.Group controlId="subject" className="mt-1">
                    <Form.Control
                      type="text"
                      name="subject"
                      value={formik.values.subject}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      placeholder="Subject"
                      className="form-input"
                      isInvalid={
                        formik.touched.subject && formik.errors.subject
                      }
                    />
                    <Form.Control.Feedback type="invalid">
                      {formik.errors.subject}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group controlId="message" className="mt-1">
                    <Form.Control
                      as="textarea"
                      name="message"
                      rows={5}
                      value={formik.values.message}
                      onChange={(e) => {
                        const value = e.target.value;
                        // Allow up to 250 characters
                        if (value.length <= 250) {
                          formik.setFieldValue("message", value); // Update Formik value
                        }
                      }}
                      onBlur={formik.handleBlur}
                      placeholder="Message"
                      className="form-input"
                      isInvalid={formik.touched.message && formik.errors.message}
                    />
                    <Form.Control.Feedback type="invalid">
                      {formik.errors.message}
                    </Form.Control.Feedback>

                    {/* Display the character count */}
                    <div className="char-count">
                      Characters entered: {formik.values.message.length} / 250
                    </div>
                  </Form.Group>
                  <div className="text-center">
                    <button
                      type="submit"
                      variant="primary"
                      disabled={loading}
                      className="submit-button submit10"
                    >
                      {loading ? "Sending..." : "Send Message"}
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
});
export default HomePage;
