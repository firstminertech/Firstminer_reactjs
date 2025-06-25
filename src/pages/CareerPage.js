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
                <div>
                    <Header />
                    <div className="career-dark-bg">
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
                                        <img src="assets/img/teamwork.jpg" alt="Collaborative Culture" className="benefit-photo" />
                                        <i className="bi bi-people-fill benefit-icon"></i>
                                        <h5 className="benefit-title">Collaborative Culture</h5>
                                        <p className="benefit-description">
                                            Work in a team-oriented environment where innovation thrives. Share ideas openly, collaborate on exciting projects, and be part of a supportive workplace that values every voice.
                                        </p>
                                    </div>
                                    <div className="benefit-card tilt-card" data-aos="fade-up" data-aos-delay="100">
                                        <img src="assets/img/growth.jpg" alt="Growth Opportunities" className="benefit-photo" />
                                        <i className="bi bi-bar-chart-line benefit-icon"></i>
                                        <h5 className="benefit-title">Growth Opportunities</h5>
                                        <p className="benefit-description">
                                            Enhance your career with training and development programs. Take advantage of mentorship, upskilling workshops, and clear paths for advancement within the company.
                                        </p>
                                    </div>
                                    <div className="benefit-card tilt-card" data-aos="fade-up" data-aos-delay="200">
                                        <img src="assets/img/balance.jpg" alt="Work-Life Balance" className="benefit-photo" />
                                        <i className="bi bi-heart-fill benefit-icon"></i>
                                        <h5 className="benefit-title">Work-Life Balance</h5>
                                        <p className="benefit-description">
                                            Enjoy flexible working hours and employee wellness programs. We support your personal and professional life, ensuring you have time for what matters most.
                                        </p>
                                    </div>
                                    {/* New Card 1: Diversity & Inclusion */}
                                    <div className="benefit-card tilt-card" data-aos="fade-up" data-aos-delay="300">
                                        <img src="assets/img/diversity.jpg" alt="Diversity & Inclusion" className="benefit-photo" />
                                        <i className="bi bi-people benefit-icon"></i>
                                        <h5 className="benefit-title">Diversity & Inclusion</h5>
                                        <p className="benefit-description">
                                            We celebrate diversity and foster an inclusive environment where everyone feels respected and valued, regardless of background or identity.
                                        </p>
                                    </div>
                                    {/* New Card 2: Cutting-Edge Technology */}
                                    <div className="benefit-card tilt-card" data-aos="fade-up" data-aos-delay="400">
                                        <img src="assets/img/technology.jpg" alt="Cutting-Edge Technology" className="benefit-photo" />
                                        <i className="bi bi-cpu benefit-icon"></i>
                                        <h5 className="benefit-title">Cutting-Edge Technology</h5>
                                        <p className="benefit-description">
                                            Work with the latest tools and technologies, and be part of a team that encourages innovation and continuous learning.
                                        </p>
                                    </div>
                                    {/* New Card 3: Employee Recognition */}
                                    <div className="benefit-card tilt-card" data-aos="fade-up" data-aos-delay="500">
                                        <img src="assets/img/recognition.jpg" alt="Employee Recognition" className="benefit-photo" />
                                        <i className="bi bi-award benefit-icon"></i>
                                        <h5 className="benefit-title">Employee Recognition</h5>
                                        <p className="benefit-description">
                                            Your contributions are noticed and rewarded. We believe in recognizing and celebrating achievements, big and small.
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
                                                Develop infotainment products for the automotive domain. Collaborate with cross-functional teams, write clean code, and contribute to innovative solutions that impact millions of users.
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
                                                Work on web platforms and deliver seamless user experiences. Build scalable applications, integrate APIs, and stay updated with the latest web technologies in a dynamic environment.
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
                                                Design user-friendly and visually appealing interfaces. Collaborate with developers and product managers to turn ideas into intuitive digital products that delight users.
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
                    </div>
                </div>
            }
            <style>{`
                .container {
                    background: none !important;
                }
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
                    background: linear-gradient(135deg, #e0f7fa 60%, #b2ebf2 100%);
                    border-radius: 22px;
                    box-shadow: 0 8px 32px 0 rgba(0,0,0,0.18);
                    border: 1.5px solid rgba(255,255,255,0.10);
                    backdrop-filter: blur(8px);
                    -webkit-backdrop-filter: blur(8px);
                    padding: 32px 28px 28px 28px;
                    min-width: 280px;
                    max-width: 340px;
                    min-height: 180px;
                    color:rgb(61, 97, 144);
                    transition: box-shadow 0.25s, transform 0.25s, background 0.25s, border 0.25s, filter 0.25s;
                    position: relative;
                    overflow: hidden;
                    will-change: transform, box-shadow, border, filter;
                    perspective: 800px;
                    pointer-events: auto;
                    z-index: 1;
                    animation: floatCard 3.2s ease-in-out infinite;
                }
                .benefit-card:hover, .job-card:hover {
                    transform: scale(1.06);
                    box-shadow: 0 24px 64px 0 rgba(25, 118, 210, 0.18), 0 8px 32px 0 rgba(0,0,0,0.18);
                    background: linear-gradient(135deg, #4fc3f7 0%, #00bcd4 100%);
                    border: 2.5px solid #1976d2;
                    filter: brightness(1.05) saturate(1.10);
                }
                .benefit-title, .job-card-title {
                    font-size: 1.2rem;
                    font-weight: 700;
                    margin-bottom: 12px;
                    color: #7ecbff;
                    text-shadow: 0 2px 8px rgba(173,216,230,0.10);
                }
                .benefit-description, .job-card-description {
                    font-size: 1rem;
                    color:rgb(15, 21, 31);
                    line-height: 1.6;
                    margin-bottom: 48px;
                }
                .benefit-icon {
                    font-size: 2.2rem;
                    color: #7ecbff;
                    margin-bottom: 10px;
                    filter: drop-shadow(0 2px 8px rgba(173,216,230,0.12));
                }
                .benefit-photo {
                    width: 60px;
                    height: 60px;
                    object-fit: cover;
                    border-radius: 50%;
                    box-shadow: 0 4px 16px rgba(0,0,0,0.18);
                    margin-bottom: 12px;
                    display: block;
                    margin-left: auto;
                    margin-right: auto;
                }
                .job-cards {
                    display: flex;
                    justify-content: center;
                    align-items: stretch;
                    gap: 40px;
                    margin-bottom: 32px;
                    flex-wrap: wrap;
                }
                .job-card {
                    flex: 1 1 320px;
                    max-width: 370px;
                    min-width: 300px;
                    min-height: 320px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    margin-bottom: 0;
                }
                .job-card-body {
                    display: flex;
                    flex-direction: column;
                    flex: 1 1 auto;
                }
                .job-card-description {
                    font-size: 1rem;
                    color:rgb(15, 21, 31);
                    line-height: 1.6;
                    margin-bottom: auto;
                    flex: 1 1 auto;
                }
                .btn-apply {
                    margin-top: 32px;
                    align-self: flex-start;
                }
                @media (max-width: 1200px) {
                    .job-cards {
                        gap: 24px;
                    }
                    .job-card {
                        max-width: 340px;
                        min-width: 260px;
                    }
                }
                @media (max-width: 900px) {
                    .job-cards {
                        flex-direction: column;
                        align-items: center;
                        gap: 28px;
                    }
                    .job-card {
                        width: 90%;
                        max-width: 420px;
                        min-width: 220px;
                    }
                }
            `}</style>
        </div>
    );
}

export default CareerPage;
