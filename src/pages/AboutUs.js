import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import SEO from "../components/SEO";

function AboutUs() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "name": "About FirstMiner Technology Solutions",
        "description": "Learn about FirstMiner Technology Solutions Pvt. Ltd. - a leading technology company specializing in web development, mobile app development, digital marketing, and blockchain consulting services.",
        "mainEntity": {
            "@type": "Organization",
            "name": "FirstMiner Technology Solutions Pvt. Ltd.",
            "description": "We pursue relationships based on transparency, persistence, mutual trust, and integrity with our employees, customers and other business partners.",
            "foundingDate": "2020",
            "numberOfEmployees": "10-50",
            "areaServed": "India"
        }
    };

    return (
        <div>
            <SEO
                title="About Us - FirstMiner Technology Solutions"
                description="Learn about FirstMiner Technology Solutions Pvt. Ltd. - a leading technology company specializing in web development, mobile app development, digital marketing, and blockchain consulting services. We pursue relationships based on transparency, persistence, mutual trust, and integrity."
                keywords="about FirstMiner, technology company, web development company, mobile app development, digital marketing agency, blockchain consulting, software development company, Bilaspur, Chhattisgarh, India"
                url="https://firstminer.in/about"
                structuredData={structuredData}
            />
            {/* Header Section */}
            <Header />
            {/* Introduction Section */}
      <section id="home" className="intro-section">
        <div className="container">
          <h1 className="heading">Welcome to About</h1>
          <p className="subheading">
          We pursue relationships based on transparency, persistence, mutual trust, and integrity with our employees, customers and other business partners.
          </p>
        </div>
      </section>
            {/* About Section */}
            <section id="about" className="py-5 bg-light">
                <div className="Edigibaba">
                    <div className="container text-center">
                       
                        {/* <h2 className="about fw-bold mb-4 fs-1">About Us</h2> */}
                        


                        <section className="about aos-init aos-animate" data-aos="fade-up">
                            <div className="container">
                                {/* <div className="row">
                                    <div className="col-lg-12 para2">
                                        <h3
                                            style={{
                                                fontFamily: 'Georgia',
                                                fontSize: '20px',
                                                textAlign: 'center',
                                            }}
                                        >
                                            <b>
                                                "We pursue relationships based on transparency, persistence, mutual trust,
                                                and integrity with our employees, customers and other business partners."
                                            </b>
                                        </h3>
                                    </div>
                                </div> */}
                             
                                

                                <div className="row">
                                    <div className="mb-5">
                                        <img
                                            src="assets/img/EdigitalbabaLOGO.webp"
                                            alt="Team Member"
                                            className="img-fluid"
                                            style={{ borderColor: "#28c3b4" }}
                                        />
                                        <br />
                                        <h4 className="technology" style={{ fontFamily: 'Georgia' }}>
                                            <b>Power By:-<br /> Firstminer Technology Solutions Pvt. Ltd.</b>
                                        </h4>
                                    </div>
                                    <div className="paragraph1">
                                        <p
                                            className="fst-italic"
                                            style={{
                                                fontFamily: 'Georgia',
                                                fontSize: '18px',
                                               
                                            }}
                                        >
                                            Our team of specialists consistently delivers outstanding results combining creative ideas with our vast
                                            experience. We can help you build a sustainable, meaningful relationship with your clients by engaging
                                            them with your brand using social media. We work in areas as diverse as search engine optimization,
                                            social media marketing, email marketing, and digital marketing.
                                        </p>
                                        <ul>
                                            <li
                                                style={{
                                                    fontFamily: 'Georgia',
                                                    fontSize: '18px',
                                                   
                                                }}
                                            >
                                                <i className="bi bi-check2-circle"></i> Our team develops effective content strategies for forward-thinking companies. We have a proven track record in increasing search engine rankings.
                                            </li>
                                            <li
                                                style={{
                                                    fontFamily: 'Georgia',
                                                    fontSize: '18px'
                                                }}
                                            >
                                                <i className="bi bi-check2-circle"></i> Our digital marketing, Mobile Application Development, Website Development work speaks for itself. We deliver an outstanding service custom-tailored to each and every one of our clients.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* 
                        <p className="about01-text">
                            Our team of specialists consistently delivers outstanding results combining creative ideas with our vast experience.
                            We can help you build a sustainable, meaningful relationship with your clients by engaging them with your brand using social media.
                            We work in areas as diverse as search engine optimization, social media marketing, email marketing and digital marketing.
                            <br />
                            Our team develops effective content strategies for forward thinking companies.
                            We have a proven track record in increasing search engine rankings.
                            Our digital marketing, Mobile Application Development, Website Development work speaks for itself.
                            We deliver an outstanding service custom-tailored to each and every one of our clients.</p> */}
                    </div>
                </div>
            </section>

            {/* Mission and Vision Section */}
            {/* <section id="mission" className="py-5">
                <div className="container text-center">
                    <h2>Our Mission & Vision</h2>
                    <p className="mt-3">
                        <strong>Mission:</strong> To provide top-notch solutions that create
                        value and make a difference in the lives of our customers.
                    </p>
                    <p>
                        <strong>Vision:</strong> To be a global leader recognized for
                        innovation, excellence, and sustainability.
                    </p>
                </div>
            </section> */}

            {/* Team Section */}
            <section id="team" className="py-5 bg-light">
                <div className="container">
                    <h2 className="text-center">Testimonials</h2>
                    <div className="row mt-5">
                      
                        <div className="col-md-6 text-center">
                            <img
                                src="./assets/img/testimonial-1.jpg"
                                alt="Team Member"
                                className="rounded-circle mb-3 testmonial22"
                            />
                            <h5>Yugal Kishor Gendle</h5>
                            <p>Founder & CEO</p>
                        </div>
                        <div className="col-md-6 text-center">
                            <img
                                src="./assets/img/testimonial-2.jpg"
                                alt="Team Member"
                                className="rounded-circle mb-3 testmonial22"
                            />
                            <h5>Harish Giri</h5>
                            <p>Founder & CEO</p>
                        </div>
                    </div>
                </div>
            </section>
            

            {/* Contact Section */}
            {/* <section id="contact" className="py-5">
                <div className="container text-center">
                    <h2>Contact Us</h2>
                    <p className="mt-3">
                        Have questions or want to work with us? Reach out at{" "}
                        <strong>contact@ourcompany.com</strong>.
                    </p>
                </div>
            </section> */}
           
           
        </div>
    );
}

export default AboutUs;
