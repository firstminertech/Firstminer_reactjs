import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import Header from "../component/Header";

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
            name: "Anik Ranjan",
            role: "Frontend Developer",
            description: "A versatile full-stack developer, adept at designing, building, and maintaining scalable, user-centric web applications.",
            image: "assets/img/boy1.png",
            
        },
        {
            name: "Sudhanshu Kanwar",
            role: "Fullstack Developer",
            description: "A versatile full-stack developer, adept at designing, building, and maintaining scalable, user-centric web applications.",
            image: "assets/img/boy1.png",
            
        },
        {
            name: "Dharmesh Darshan",
            role: "Backend Developer",
            description: "A versatile full-stack developer, adept at designing, building, and maintaining scalable, user-centric web applications.",
            image: "assets/img/boy1.png",
            
        },
        
        
        {
            name: "Sakshi Rathore",
            role: "App Developer",
            description: "An innovative app developer, proficient in creating seamless, user-friendly, and high-performance mobile applications.",
            image: "assets/img/girl1.png",
            
        },
        {
            name: "Pallavi Rathore",
            role: "Full Stack developer",
            description: "A creative frontend developer, specializing in crafting responsive, intuitive, and visually appealing user interfaces.",
            image: "assets/img/girl1.png",
            
        },
        {
            name: "Anupma Joshi",
            role: "Graphic Designer",
            description: "A Graphic Designer with expertise in leading projects, creating innovative designs, and mentoring junior designers.",
            image: "assets/img/boy1.png",
            
        },
        {
            name: "Sandeep Bhatt",
            role: "Designer",
            description: "A talented graphic designer, skilled in creating visually compelling designs that communicate messages effectively and creatively.",
            image: "assets/img/boy1.png",
            
        },
         {
            name: "Riya Singh",
            role: "Junior Developer",
            description: "A passionate frontend developer with expertise in building adaptive, user-friendly, and aesthetically engaging interfaces..",
            image: "assets/img/girl1.png",
            
        },
           {
            name: "Novel Kathor",
            role: "Python & ML Developer",
            description: "A passionate Python & ML Developer with expertise in building adaptive, user-friendly, and aesthetically engaging Model..",
            image: "assets/img/boy1.png",
            
        },
         {
            name: "Pappu Sharma",
            role: "Junior Python & ML Developer",
            description: "A passionate Python & ML Developer with expertise in building adaptive, user-friendly, and aesthetically engaging Model..",
            image: "assets/img/boy1.png",
            
        },
        

       
       
    ];

    return (
        <div>
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
