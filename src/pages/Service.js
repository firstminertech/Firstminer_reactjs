
import React, { useEffect, useState } from "react";
import Footer from "../component/Footer";
import Header from "../component/Header";
import Loader from "../elements/loader";
import SEO from "../components/SEO";

function Service() {
  const [loader, setLoader] = useState(true);
  setTimeout(() => {
    setLoader(false);
  }, 500)

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "FirstMiner Technology Solutions Services",
    "description": "Comprehensive technology services including web development, mobile app development, digital marketing, SEO, blockchain consulting, and more.",
    "provider": {
      "@type": "Organization",
      "name": "FirstMiner Technology Solutions Pvt. Ltd.",
      "url": "https://firstminer.in"
    },
    "serviceType": [
      "Web Development",
      "Mobile App Development",
      "Digital Marketing",
      "SEO Services",
      "Blockchain Consulting",
      "Government Tender Services",
      "Video Creation",
      "PPC Management",
      "Email Marketing",
      "Affiliate Management",
      "Conversion Rate Optimization"
    ],
    "areaServed": "India",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Technology Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web Development",
            "description": "Custom website development using modern technologies like React, Node.js, and MERN stack."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mobile App Development",
            "description": "Native and cross-platform mobile app development for iOS and Android."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Digital Marketing",
            "description": "Comprehensive digital marketing strategies including SEO, PPC, social media marketing, and content marketing."
          }
        }
      ]
    }
  };

  return (
    <div>
      <SEO
        title="Our Services - Web Development, App Development & Digital Marketing | FirstMiner Technology"
        description="Explore our comprehensive technology services including web development, mobile app development, digital marketing, SEO, blockchain consulting, government tender services, and more. Professional solutions tailored to your business needs."
        keywords="web development services, mobile app development, digital marketing services, SEO services, blockchain consulting, government tender, video creation, PPC management, email marketing, affiliate management, conversion optimization, Bilaspur, Chhattisgarh, India"
        url="https://firstminer.in/service"
        structuredData={structuredData}
      />
      {loader ? <Loader /> : <div>
        <Header />

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
              <div className="service-card">
                <h5 className="service-title">Web Development</h5>
                <p className="service-description">
                  A website should not just draw attention. The role of a website
                  is to attract and engage the user, as well as communicate your
                  brand and raise awareness about a product or service.
                </p>
              </div>
              {/* Service 2 */}
              <div className="service-card">
                <h5 className="service-title">App Development</h5>
                <p className="service-description">
                  your unique ideas transforming into incredible apps for your
                  business requirements. our app developers can build mobile app
                  your requirement, in your budget, and as per your timeline.
                </p>
              </div>
              {/* Service 3 */}
              <div className="service-card">
                <h5 className="service-title">Search Engine Optimization</h5>
                <p className="service-description">
                SEO enhances a website's visibility and ranking on SERPs through keyword optimization, content creation, backlinking, and technical tweaks to drive organic traffic.
                </p>
              </div>
            </div>
            <div className="service-cards">
              {/* Service 4 */}
              <div className="service-card">
                <h5 className="service-title">Govt. Tender(Material Supply)</h5>
                <p className="service-description">
                  we supply the material for structured procedure and different
                  potential suppliers or contractors, business activity in works,
                  supply, or service contracts.
                </p>
              </div>
              {/* Service 5 */}
              <div className="service-card">
                <h5 className="service-title">
                  Project Explaination & Video Creation
                </h5>
                <p className="service-description">
                  High-quality video ads can easily generate traffic of customers.
                  Do not stick with traditional marketing,use digital tools to
                  gather more and more customers at your point.
                </p>
              </div>
              {/* Service 6 */}
              <div className="service-card">
                <h5 className="service-title">Commercial Video Creation</h5>
                <p className="service-description">
                  Understand how your video are performing, and the kind of target
                  audience viewing and engaging with them.
                </p>
              </div>
            </div>

            <div className="service-cards">
              {/* Service 4 */}
              <div className="service-card">
                <h5 className="service-title">Block Chain Consultant</h5>
                <p className="service-description">
                  Blockchain Lab we believe that Distributed Ledger Technologies
                  carry the potential to introduce a new level of transparency,
                  automation, and efficiency in businesses and nonprofits.
                </p>
              </div>
              {/* Service 5 */}
              <div className="service-card">
                <h5 className="service-title">Pay Per Click (PPC) Management</h5>
                <p className="service-description">
                  Pay Per Click has an instant impact and gives your brand a much
                  larger reach and exposure as a result of first page exposure on
                  major search engines.
                </p>
              </div>
              {/* Service 6 */}
              <div className="service-card">
                <h5 className="service-title">Digital Consultancy</h5>
                <p className="service-description">
                We deliver cost-effective and innovative digital solutions with measurable ROI, effectively meeting audience needs, driving impactful conversions, and aligning strategies with your business goals.
                </p>
              </div>
            </div>
            <div className="service-cards">
              {/* Service 4 */}
              <div className="service-card">
                <h5 className="service-title">Email Marketing</h5>
                <p className="service-description">
                  We create tailored marketing campaigns for each segment of your
                  audience to help advertise products and services in efforts to
                  efficiently and effectively engage new customers.
                </p>
              </div>
              {/* Service 5 */}
              <div className="service-card">
                <h5 className="service-title">Affiliate Management</h5>
                <p className="service-description">
                  Affiliate Marketing is the term used to describe a form of
                  online advertising which consists of rewarding an affiliate for
                  referring a visitor or rewarding a customer for performing a
                  desired action.
                </p>
              </div>
              {/* Service 6 */}
              <div className="service-card">
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
          <div className="container text-center">
            <h2 className="contact-title">Contact Us</h2>
            <p className="contact-info">
              Have questions? Reach out to us at{" "}
              <a href="mailto:firstminertech@gmail.com" className="e-mail10">
                Info@firstminer.in
              </a>

            </p>
          </div>
        </section>
        {/* new section */}
        <section id="benefits" className="benefits-section">
          <div className="container text-center">
            <div className="benefits-cards">
              <div className="benefit-card">
                <i className="bi bi-people-fill benefit-icon"></i>
                <h5 className="benefit-title">Our Mission</h5>
                <p className="benefit-description">
                  Our mission is to help enterprises accelerate adoption of new
                  technologies, untangle complex issues that always emerge during
                  digital evolution, and orchestrate ongoing innovation.
                </p>
              </div>
              <div className="benefit-card">
                <i className="bi bi-bar-chart-line benefit-icon"></i>
                <h5 className="benefit-title">Our Plan</h5>
                <p className="benefit-description">
                  Whether it is a consumer-oriented app or a transformative
                  enterprise-class solution, the company leads the process from
                  ideation and concept to delivery.
                </p>
              </div>
              <div className="benefit-card">
                <i className="bi bi-heart-fill benefit-icon"></i>
                <h5 className="benefit-title">Our Vision</h5>
                <p className="benefit-description">
                  We are the most respected Internet marketing agency.
                  Our mission is to revolutionize the way businesses connect with their audience online.
                  We strive to change how businesses speak

                </p>
              </div>
              <div className="benefit-card">
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
