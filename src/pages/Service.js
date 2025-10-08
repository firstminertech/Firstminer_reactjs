import React, { useEffect, useState } from "react";
import Footer from "../component/Footer";
import Header from "../component/Header";
import Loader from "../elements/loader";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaLaptopCode, FaMobileAlt, FaSearch, FaGavel, FaVideo, FaChartBar, FaCube, FaMousePointer, FaLightbulb, FaEnvelope, FaUserFriends, FaSync } from 'react-icons/fa';
import { AiOutlineProject } from 'react-icons/ai';

function Service() {
  const [loader, setLoader] = useState(true);
  setTimeout(() => {
    setLoader(false);
  }, 500);

  useEffect(() => {
    AOS.init({ duration: 900, once: true });

    // 3D tilt effect for cards
    setTimeout(() => {
      const handleMouseMove = (e) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * 10;
        const rotateY = ((x - centerX) / centerX) * 10;
        card.style.transform = `scale(1.08) rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
      };
      const handleMouseLeave = (e) => {
        e.currentTarget.style.transform = '';
      };
      const cards = document.querySelectorAll('.tilt-card');
      cards.forEach(card => {
        card.addEventListener('mousemove', handleMouseMove);
        card.addEventListener('mouseleave', handleMouseLeave);
      });
    }, 0);
  }, []);

  return (
    <div>
      {loader ? <Loader /> : <div>
        <Header />
        <style>{`
          .service-cards {
            display: flex;
            justify-content: center;
            gap: 32px;
            margin-bottom: 32px;
            flex-wrap: wrap;
          }
          .service-card {
            background: linear-gradient(135deg, rgba(255,255,255,0.7) 60%, rgba(173,216,230,0.25) 100%);
            border-radius: 22px;
            box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.10);
            border: 1.5px solid rgba(255,255,255,0.25);
            backdrop-filter: blur(8px);
            -webkit-backdrop-filter: blur(8px);
            padding: 32px 28px 28px 28px;
            min-width: 320px;
            max-width: 340px;
            min-height: 220px;
            color: #222;
            transition: box-shadow 0.25s, transform 0.25s, background 0.25s;
            position: relative;
            overflow: hidden;
          }
          .service-card:hover {
            box-shadow: 0 16px 48px 0 rgba(31, 38, 135, 0.18);
            transform: translateY(-8px) scale(1.04);
            background: linear-gradient(135deg, rgba(173,216,230,0.35) 0%, rgba(255,255,255,0.8) 100%);
          }
          .service-title {
            font-size: 1.3rem;
            font-weight: 700;
            margin-bottom: 16px;
            letter-spacing: 0.5px;
            color: #1a237e;
            text-shadow: 0 2px 8px rgba(173,216,230,0.12);
          }
          .service-description {
            font-size: 1.05rem;
            color: #333;
            line-height: 1.6;
          }
          .benefits-cards {
            display: flex;
            justify-content: center;
            gap: 32px;
            margin-bottom: 32px;
            flex-wrap: wrap;
          }
          .benefit-card {
            background: linear-gradient(120deg, rgba(255,255,255,0.7) 60%, rgba(173,216,230,0.18) 100%);
            border-radius: 22px;
            box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.10);
            border: 1.5px solid rgba(255,255,255,0.25);
            backdrop-filter: blur(8px);
            -webkit-backdrop-filter: blur(8px);
            padding: 32px 28px 28px 28px;
            min-width: 280px;
            max-width: 320px;
            min-height: 200px;
            color: #222;
            transition: box-shadow 0.25s, transform 0.25s, background 0.25s;
            position: relative;
            overflow: hidden;
          }
          .benefit-card:hover {
            box-shadow: 0 16px 48px 0 rgba(31, 38, 135, 0.18);
            transform: translateY(-8px) scale(1.04);
            background: linear-gradient(120deg, rgba(173,216,230,0.25) 0%, rgba(255,255,255,0.8) 100%);
          }
          .benefit-photo {
            width: 60px;
            height: 60px;
            object-fit: cover;
            border-radius: 50%;
            box-shadow: 0 4px 16px rgba(31,38,135,0.10);
            margin-bottom: 12px;
            display: block;
            margin-left: auto;
            margin-right: auto;
          }
          .benefit-title {
            font-size: 1.2rem;
            font-weight: 700;
            margin-bottom: 12px;
            color: #1976d2;
            text-shadow: 0 2px 8px rgba(173,216,230,0.10);
          }
          .benefit-description {
            font-size: 1rem;
            color: #333;
            line-height: 1.6;
          }
          .benefit-icon {
            font-size: 2.2rem;
            color: #1976d2;
            margin-bottom: 10px;
            filter: drop-shadow(0 2px 8px rgba(173,216,230,0.12));
          }
          .tilt-card {
            will-change: transform;
            transition: transform 0.25s cubic-bezier(.25,.46,.45,.94), box-shadow 0.25s;
            perspective: 800px;
            pointer-events: auto;
            z-index: 1;
          }
          .tilt-card:hover {
            z-index: 2;
            box-shadow: 0 20px 60px 0 rgba(31, 38, 135, 0.22);
          }
          .service-icon {
            display: block;
            font-size: 2.2rem;
            color: #1976d2;
            margin-bottom: 14px;
            filter: drop-shadow(0 2px 8px rgba(173,216,230,0.12));
            transition: color 0.2s, transform 0.2s;
          }
          .service-card:hover .service-icon {
            color: #0d47a1;
            transform: scale(1.18) rotate(-6deg);
          }
        `}</style>

        {/* Introduction Section */}
        <section id="home" className="intro-section">
          <div className="container">
            <h1 className="heading">Our Services</h1>
            <p className="subheading paratext">
              We offer a wide range of professional services tailored to your
              needs. Explore what we can do for you!
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="services-section mt-2">
          <div className="container">
            {/* <h2 className="section-title">Our Services</h2> */}
            <div className="service-cards">
              {/* Service 1 */}
              <div className="service-card tilt-card" data-aos="fade-up">
                <FaLaptopCode className="service-icon" />
                <h5 className="service-title">Web Development</h5>
                <p className="service-description">
                  A website should not just draw attention. The role of a website
                  is to attract and engage the user, as well as communicate your
                  brand and raise awareness about a product or service.
                </p>
              </div>
              {/* Service 2 */}
              <div className="service-card tilt-card" data-aos="fade-up" data-aos-delay="100">
                <FaMobileAlt className="service-icon" />
                <h5 className="service-title">App Development</h5>
                <p className="service-description">
                  your unique ideas transforming into incredible apps for your
                  business requirements. our app developers can build mobile app
                  your requirement, in your budget, and as per your timeline.
                </p>
              </div>
              {/* Service 3 */}
              <div className="service-card tilt-card" data-aos="fade-up" data-aos-delay="200">
                <FaSearch className="service-icon" />
                <h5 className="service-title">Search Engine Optimization</h5>
                <p className="service-description">
                SEO enhances a website's visibility and ranking on SERPs through keyword optimization, content creation, backlinking, and technical tweaks to drive organic traffic.
                </p>
              </div>
            </div>
            <div className="service-cards">
              {/* Service 4 */}
              <div className="service-card tilt-card" data-aos="fade-up">
                <FaGavel className="service-icon" />
                <h5 className="service-title">Govt. Tender(Material Supply)</h5>
                <p className="service-description">
                  we supply the material for structured procedure and different
                  potential suppliers or contractors, business activity in works,
                  supply, or service contracts.
                </p>
              </div>
              {/* Service 5 */}
              <div className="service-card tilt-card" data-aos="fade-up" data-aos-delay="100">
                <AiOutlineProject className="service-icon" />
                <h5 className="service-title">
                  
                  Project Explaination & video Creation
                </h5>
                <p className="service-description">
                  High-quality video ads can easily generate traffic of customers.
                  Do not stick with traditional marketing,use digital tools to
                  gather more and more customers at your point.
                </p>
              </div>
              {/* Service 6 */}
              <div className="service-card tilt-card" data-aos="fade-up" data-aos-delay="200">
                <FaVideo className="service-icon" />
                <h5 className="service-title">Commercial Video Creation</h5>
                <p className="service-description">
                  Understand how your video are performing, and the kind of target
                  audience viewing and engaging with them.
                </p>
              </div>
            </div>

            <div className="service-cards">
              {/* Service 4 */}
              <div className="service-card tilt-card" data-aos="fade-up">
                <FaCube className="service-icon" />
                <h5 className="service-title">Block Chain Consultant</h5>
                <p className="service-description">
                  Blockchain Lab we believe that Distributed Ledger Technologies
                  carry the potential to introduce a new level of transparency,
                  automation, and efficiency in businesses and nonprofits.
                </p>
              </div>
              {/* Service 5 */}
              <div className="service-card tilt-card" data-aos="fade-up" data-aos-delay="100">
                <FaMousePointer className="service-icon" />
                <h5 className="service-title">Pay Per Click (PPC) Management</h5>
                <p className="service-description">
                  Pay Per Click has an instant impact and gives your brand a much
                  larger reach and exposure as a result of first page exposure on
                  major search engines.
                </p>
              </div>
              {/* Service 6 */}
              <div className="service-card tilt-card" data-aos="fade-up" data-aos-delay="200">
                <FaLightbulb className="service-icon" />
                <h5 className="service-title">Digital Consultancy</h5>
                <p className="service-description">
                We deliver cost-effective and innovative digital solutions with measurable ROI, effectively meeting audience needs, driving impactful conversions, and aligning strategies with your business goals.
                </p>
              </div>
            </div>
            <div className="service-cards">
              {/* Service 4 */}
              <div className="service-card tilt-card" data-aos="fade-up">
                <FaEnvelope className="service-icon" />
                <h5 className="service-title">Email Marketing</h5>
                <p className="service-description">
                  We create tailored marketing campaigns for each segment of your
                  audience to help advertise products and services in efforts to
                  efficiently and effectively engage new customers.
                </p>
              </div>
              {/* Service 5 */}
              <div className="service-card tilt-card" data-aos="fade-up" data-aos-delay="100">
                <FaUserFriends className="service-icon" />
                <h5 className="service-title">Affiliate Management</h5>
                <p className="service-description">
                  Affiliate Marketing is the term used to describe a form of
                  online advertising which consists of rewarding an affiliate for
                  referring a visitor or rewarding a customer for performing a
                  desired action.
                </p>
              </div>
              {/* Service 6 */}
              <div className="service-card tilt-card" data-aos="fade-up" data-aos-delay="200">
                <FaSync className="service-icon" />
                <h5 className="service-title">Conversion Rate Optimization</h5>
                <p className="service-description">
                  Conversion rate results also influence ROI from every traffic
                  source and campaign you run; so the higher your conversion rate,
                  the better your ROI will be.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact-section">
         
        </section>
        {/* new section */}
        <section id="benefits" className="benefits-section">
          <div className="container text-center">
            <div className="benefits-cards">
              <div className="benefit-card tilt-card" data-aos="fade-up">
                <img src="assets/img/mission.jpg" alt="Mission" className="benefit-photo" />
                <i className="bi bi-people-fill benefit-icon"></i>
                <h5 className="benefit-title">Our Mission</h5>
                <p className="benefit-description">
                  Our mission is to help enterprises accelerate adoption of new
                  technologies, untangle complex issues that always emerge during
                  digital evolution, and orchestrate ongoing innovation.
                </p>
              </div>
              <div className="benefit-card tilt-card" data-aos="fade-up" data-aos-delay="100">
                <img src="assets/img/plan.jpg" alt="Plan" className="benefit-photo" />
                <i className="bi bi-bar-chart-line benefit-icon"></i>
                <h5 className="benefit-title">Our Plan</h5>
                <p className="benefit-description">
                  Whether it is a consumer-oriented app or a transformative
                  enterprise-class solution, the company leads the process from
                  ideation and concept to delivery.
                </p>
              </div>
              <div className="benefit-card tilt-card" data-aos="fade-up" data-aos-delay="200">
                <img src="assets/img/vision.jpg" alt="Vision" className="benefit-photo" />
                <i className="bi bi-heart-fill benefit-icon"></i>
                <h5 className="benefit-title">Our Vision</h5>
                <p className="benefit-description">
                  We are the most respected Internet marketing agency.
                  Our mission is to revolutionize the way businesses connect with their audience online.
                  We strive to change how businesses speak

                </p>
              </div>
              <div className="benefit-card tilt-card" data-aos="fade-up" data-aos-delay="300">
                <img src="assets/img/care.jpg" alt="Care" className="benefit-photo" />
                <i className="bi bi-heart-fill benefit-icon"></i>
                <h5 className="benefit-title">We Care</h5>
                <p className="benefit-description">
                  At Firstminer Tech, we prioritize your privacy and data security above everything else. We are committed to ensuring that your personal information remains confidential and protected.

                </p>
              </div>

            </div>


          </div>
        </section>
      </div>}
      {/* Header Section */}



    </div>
  );
}

export default Service;
