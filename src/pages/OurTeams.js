import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import Header from "../component/Header";
import SEO from "../components/SEO";

const OurTeams = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedMember, setSelectedMember] = useState(null);

    // Function to open the modal and set the selected member
    const handleShowModal = (member) => {
        setSelectedMember(member);
        setShowModal(true);
    };

    // Function to close the modal
    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedMember(null);
    };

     
    // Sample team members (you can replace these with actual data or state)
    const teamMembers = [
        {
            name: "Deepak soni",
            role: " Senior Software Developer (Manager)",
            description: "A developer",
            image: "assets/img/boy1.png",
            socials: {
                instagram: "#",
                facebook: "#",
                whatsapp: "#",
                linkedin: "#",
            },
        },
        {
            name: "Anik Ranjan",
            role: "Software Developer",
            description: "A developer",
            image: "assets/img/boy1.png",
            socials: {
                instagram: "#",
                facebook: "#",
                whatsapp: "#",
                linkedin: "#",
            },
        },
        {
            name: "Sudhanshu Kanwar",
            role: "Software Developer (Team Leader)",
            description: "A developer",
            image: "assets/img/boy1.png",
            socials: {
                instagram: "#",
                facebook: "#",
                whatsapp: "#",
                linkedin: "#",
            },
        },
        {
            name: "Dharmesh Darshan",
            role: "Software Developer",
            description: "A developer",
            image: "assets/img/boy1.png",
            socials: {
                instagram: "#",
                facebook: "#",
                whatsapp: "#",
                linkedin: "#",
            },
        },
        
        {
            name: "Shivam Gupta",
            role: "Software Developer",
            description: "A developer",
            image: "assets/img/boy1.png",
            socials: {
                instagram: "#",
                facebook: "#",
                whatsapp: "#",
                linkedin: "#",
            },
        },
        {
            name: "Sakshi Rathore",
            role: "App Developer",
            description: "A developer",
            image: "assets/img/girl1.png",
            socials: {
                instagram: "#",
                facebook: "#",
                whatsapp: "#",
                linkedin: "#",
            },
        },
        {
            name: "Pallavi Rathore",
            role: "Tester & Frontend Developer",
            description: "Intern",
            image: "assets/img/girl1.png",
            socials: {
                instagram: "#",
                facebook: "#",
                whatsapp: "#",
                linkedin: "#",
            },
        },
        {
            name: "Sandeep Bhatt",
            role: "Designer",
            description: "Graphic Designer",
            image: "assets/img/boy1.png",
            socials: {
                instagram: "#",
                facebook: "#",
                whatsapp: "#",
                linkedin: "#",
            },
        },
        {
            name: "Hritwik Ujjaini",
            role: "Senior Designer",
            description: "Senior Designer",
            image: "assets/img/boy1.png",
            socials: {
                instagram: "#",
                facebook: "#",
                whatsapp: "#",
                linkedin: "#",
            },
        },
    ];

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "name": "Our Team - FirstMiner Technology Solutions",
        "description": "Meet our talented team of software developers, designers, and technology experts at FirstMiner Technology Solutions. We are passionate about delivering innovative solutions.",
        "mainEntity": {
            "@type": "Organization",
            "name": "FirstMiner Technology Solutions Pvt. Ltd.",
            "employee": [
                {
                    "@type": "Person",
                    "name": "Deepak Soni",
                    "jobTitle": "Senior Software Developer (Manager)"
                },
                {
                    "@type": "Person",
                    "name": "Anik Ranjan",
                    "jobTitle": "Software Developer"
                },
                {
                    "@type": "Person",
                    "name": "Sudhanshu Kanwar",
                    "jobTitle": "Software Developer (Team Leader)"
                },
                {
                    "@type": "Person",
                    "name": "Dharmesh Darshan",
                    "jobTitle": "Software Developer"
                },
                {
                    "@type": "Person",
                    "name": "Shivam Gupta",
                    "jobTitle": "Software Developer"
                },
                {
                    "@type": "Person",
                    "name": "Sakshi Rathore",
                    "jobTitle": "App Developer"
                },
                {
                    "@type": "Person",
                    "name": "Pallavi Rathore",
                    "jobTitle": "Tester & Frontend Developer"
                },
                {
                    "@type": "Person",
                    "name": "Sandeep Bhatt",
                    "jobTitle": "Designer"
                },
                {
                    "@type": "Person",
                    "name": "Hritwik Ujjaini",
                    "jobTitle": "Senior Designer"
                }
            ]
        }
    };

    return (
        <div>
            <SEO
                title="Our Team - Meet the FirstMiner Technology Solutions Team"
                description="Meet our talented team of software developers, designers, and technology experts at FirstMiner Technology Solutions. We are passionate about delivering innovative web development, mobile app development, and digital marketing solutions."
                keywords="our team, software developers, web developers, designers, technology team, FirstMiner team, Bilaspur team, Chhattisgarh team, software development team, digital marketing team"
                url="https://firstminer.in/our-teams"
                structuredData={structuredData}
            />
            <Header />
            
            <section className="team-section">
                <div className="container">
                    <div className="section-header">
                        <h2>Our Team</h2>
                    </div>
                    <div className="team-grid">
                        {teamMembers.map((member, index) => (
                            <div
                                key={index}
                                className="team-member"
                                onClick={() => handleShowModal(member)}
                            >
                                <div className="member-image">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                    />
                                </div>
                                <div className="member-details">
                                    <h4>{member.name}</h4>
                                    <span>{member.role}</span>
                                    <p>{member.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Modal for displaying selected team member's details */}
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{selectedMember?.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="member-details-modal">
                        <div className="member-image">
                            <img
                                src={selectedMember?.image}
                                alt={selectedMember?.name}
                                style={{ width: "100px", height: "100px", borderRadius: "50%" }}
                            />
                        </div>
                        <h4>{selectedMember?.name}</h4>
                        <p>{selectedMember?.role}</p>
                        <p>{selectedMember?.description}</p>
                        <div className="social-links">
                            <a href={selectedMember?.socials.instagram} target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-instagram"></i>
                            </a>
                            <a href={selectedMember?.socials.facebook} target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-facebook"></i>
                            </a>
                            <a href={selectedMember?.socials.whatsapp} target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-whatsapp"></i>
                            </a>
                            <a href={selectedMember?.socials.linkedin} target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-linkedin"></i>
                            </a>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default OurTeams;
