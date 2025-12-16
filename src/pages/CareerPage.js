import React, { useState } from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Loader from "../elements/loader";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

function CareerPage() {

    const [loader, setLoader] = useState(true);
    setTimeout(() => {
        setLoader(false);
    }, 500)

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "JobPosting",
        "title": "Software Developer Jobs at FirstMiner Technology Solutions",
        "description": "Join our team of talented software developers, web developers, and UI/UX designers. We offer exciting career opportunities in web development, mobile app development, and digital marketing.",
        "hiringOrganization": {
            "@type": "Organization",
            "name": "FirstMiner Technology Solutions Pvt. Ltd.",
            "url": "https://firstminer.in",
            "logo": "https://firstminer.in/assets/img/firstminerlogo.png"
        },
        "jobLocation": {
            "@type": "Place",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "3rd floor RK Complex, Jagdamba Colony, Seepat Road",
                "addressLocality": "Bilaspur",
                "addressRegion": "Chhattisgarh",
                "postalCode": "495001",
                "addressCountry": "IN"
            }
        },
        "employmentType": "FULL_TIME",
        "workHours": "40 hours per week",
        "datePosted": "2025-01-27",
        "validThrough": "2025-02-27",
        "jobBenefits": [
            "Competitive salary",
            "Health insurance",
            "Professional development opportunities",
            "Flexible working hours",
            "Collaborative work environment"
        ]
    };

    return (
        <div>
            <SEO
                title="Careers - Join FirstMiner Technology Solutions | Software Developer Jobs"
                description="Join our team of talented software developers, web developers, and UI/UX designers. We offer exciting career opportunities in web development, mobile app development, and digital marketing at FirstMiner Technology Solutions."
                keywords="careers, jobs, software developer jobs, web developer jobs, UI UX designer jobs, technology careers, FirstMiner jobs, Bilaspur jobs, Chhattisgarh jobs, software development careers"
                url="https://firstminer.in/careers"
                structuredData={structuredData}
            />
            {loader ? <Loader /> :
                <div>  <Header />

            {/* Hero Section */}
            <section className="hero-section">
                <div className="container">
                    <h1 className="hero-title">Join Our Team</h1>
                    <p className="hero-description paratext">
                        Be part of a global company where your skills and passion matter.
                    </p>
                    <Link
                                to="#"
                                className="btn-cta"
                                onClick={() => {
                                    document.getElementById("job-listings")?.scrollIntoView({ behavior: "smooth" });
                                }}
                            >
                                Explore Jobs
                            </Link>
                </div>
            </section>



                    {/* Benefits Section */}
                    <section id="benefits" className="benefits-section">
                        <div className="container text-center">
                            <h2 className="benefits-title">Why Work With Us?</h2>
                            <div className="benefits-cards">
                                <div className="benefit-card">
                                    <i className="bi bi-people-fill benefit-icon"></i>
                                    <h5 className="benefit-title">Collaborative Culture</h5>
                                    <p className="benefit-description">
                                        Work in a team-oriented environment where innovation thrives.
                                    </p>
                                </div>
                                <div className="benefit-card">
                                    <i className="bi bi-bar-chart-line benefit-icon"></i>
                                    <h5 className="benefit-title">Growth Opportunities</h5>
                                    <p className="benefit-description">
                                        Enhance your career with training and development programs.
                                    </p>
                                </div>
                                <div className="benefit-card">
                                    <i className="bi bi-heart-fill benefit-icon"></i>
                                    <h5 className="benefit-title">Work-Life Balance</h5>
                                    <p className="benefit-description">
                                        Enjoy flexible working hours and employee wellness programs.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Job Listings Section */}
                    <section id="job-listings" className="job-listings-section">
                        <div className="container">
                            <h2 className="job-listings-title d-flex justify-content-center">Current Openings</h2>
                            <div className="job-cards">
                                {/* Job 1 */}
                                <div className="job-card">
                                    <div className="job-card-body">
                                        <h5 className="job-card-title">Software Developer</h5>
                                        <p className="job-card-location">Bilaspur | Open Till: 27 Feb 2025</p>
                                        <p className="job-card-description">
                                            Develop infotainment products for the automotive domain.
                                        </p>
                                        <Link to={"/contactform"} className="btn-apply">
                                            Apply Now
                                        </Link>
                                    </div>
                                </div>
                                {/* Job 2 */}
                                <div className="job-card">
                                    <div className="job-card-body">
                                        <h5 className="job-card-title">Full-Stack Web Developer</h5>
                                        <p className="job-card-location">Bilaspur | Open Till: 27 Feb 2025</p>
                                        <p className="job-card-description">
                                            Work on web platforms and deliver seamless user experiences.
                                        </p>
                                        <Link to={"/contactform"} className="btn-apply">
                                            Apply Now
                                        </Link>
                                    </div>
                                </div>
                                {/* Job 3 */}
                                <div className="job-card">
                                    <div className="job-card-body">
                                        <h5 className="job-card-title">UI/UX Designer</h5>
                                        <p className="job-card-location">Bilaspur | Open Till: 27 Feb 2025</p>
                                        <p className="job-card-description">
                                            Design user-friendly and visually appealing interfaces.
                                        </p>
                                        <Link to={"/contactform"} className="btn-apply">
                                            Apply Now
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                    {/* Call to Action Section */}
                    <section id="apply" className="apply-section">
                        <div className="container">
                            <h2 className="apply-title">Ready to Join?</h2>
                            <p className="apply-description paratext">Take the next step in your career with us.</p>
                            <Link to="/contactform" className="btn-cta">
                                Apply Now
                            </Link>
                        </div>
                    </section>


                </div>}
        </div>
    );
}

export default CareerPage;
