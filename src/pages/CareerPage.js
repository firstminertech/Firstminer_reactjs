import React, { useState, useEffect } from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Loader from "../elements/loader";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

function CareerPage() {

    const [loader, setLoader] = useState(true);
    setTimeout(() => {
        setLoader(false);
    }, 500)

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
                                <div className="benefit-card tilt-card" data-aos="fade-up">
                                    <i className="bi bi-people-fill benefit-icon"></i>
                                    <h5 className="benefit-title">Collaborative Culture</h5>
                                    <p className="benefit-description">
                                        Work in a team-oriented environment where innovation thrives.
                                    </p>
                                </div>
                                <div className="benefit-card tilt-card" data-aos="fade-up" data-aos-delay="100">
                                    <i className="bi bi-bar-chart-line benefit-icon"></i>
                                    <h5 className="benefit-title">Growth Opportunities</h5>
                                    <p className="benefit-description">
                                        Enhance your career with training and development programs.
                                    </p>
                                </div>
                                <div className="benefit-card tilt-card" data-aos="fade-up" data-aos-delay="200">
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
                                <div className="job-card tilt-card" data-aos="fade-up">
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
                                <div className="job-card tilt-card" data-aos="fade-up" data-aos-delay="100">
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
                                <div className="job-card tilt-card" data-aos="fade-up" data-aos-delay="200">
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
            <style>{`
                @keyframes floatCard {
                    0% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                    100% { transform: translateY(0); }
                }
                @keyframes pulseShadow {
                    0% { box-shadow: 0 8px 32px 0 rgba(31,38,135,0.10); }
                    50% { box-shadow: 0 16px 48px 0 rgba(31,38,135,0.18); }
                    100% { box-shadow: 0 8px 32px 0 rgba(31,38,135,0.10); }
                }
                .benefits-cards, .job-cards {
                    display: flex;
                    justify-content: center;
                    gap: 32px;
                    margin-bottom: 32px;
                    flex-wrap: wrap;
                }
                .benefit-card, .job-card {
                    background: linear-gradient(135deg, rgba(255,255,255,0.7) 60%, rgba(173,216,230,0.25) 100%);
                    border-radius: 22px;
                    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.10);
                    border: 1.5px solid rgba(255,255,255,0.25);
                    backdrop-filter: blur(8px);
                    -webkit-backdrop-filter: blur(8px);
                    padding: 32px 28px 28px 28px;
                    min-width: 280px;
                    max-width: 340px;
                    min-height: 180px;
                    color: #222;
                    transition: box-shadow 0.25s, transform 0.25s, background 0.25s, border 0.25s;
                    position: relative;
                    overflow: hidden;
                    will-change: transform, box-shadow, border;
                    perspective: 800px;
                    pointer-events: auto;
                    z-index: 1;
                    animation: floatCard 3.2s ease-in-out infinite;
                }
                .benefit-card:hover, .job-card:hover {
                    z-index: 2;
                    box-shadow: 0 20px 60px 0 rgba(31, 38, 135, 0.22);
                    border: 2.5px solid #1976d2;
                    animation: pulseShadow 1.2s infinite;
                }
                .benefit-title, .job-card-title {
                    font-size: 1.2rem;
                    font-weight: 700;
                    margin-bottom: 12px;
                    color: #1976d2;
                    text-shadow: 0 2px 8px rgba(173,216,230,0.10);
                }
                .benefit-description, .job-card-description {
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
            `}</style>
        </div>
    );
}

export default CareerPage;
