import React, { useEffect, useState } from 'react';
import Header from '../component/Header';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Portfolio = () => {

  const [filter, setFilter] = useState('all');

  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const data = params.get('data');
    if (data) {
      setFilter(data);
    }
  }, [location]);
  const portfolioItems = [
    {
      title: 'Atal Bihari Bajpayee University Website',
      category: 'Web App',
      description: `A dynamic, user-friendly platform built with the MERN stack, offering an engaging and seamless experience for students, faculty, and visitors.`,
      image: './assets/img/abvv100.jpg',
      href:'/abvv-subpage',
    },
    {
      title: 'Railway Management System',
      category: 'Govt. Projects',
      description: `A comprehensive, efficient web platform built using the MERN stack, designed to streamline train scheduling, ticket booking, and passenger management.`,
      image: './assets/img/railway12.png',
      href:'/railway-subpage',
    },
    {
      title: 'Outreach.money',
      category: 'Web App',
      description: `A cutting-edge blockchain-based platform designed to revolutionize financial transactions and decentralized finance (DeFi).`,
      image: './assets/img/buy1.jpg',
      href:'/outreach-web-subpage',
    },
    {
      title: 'Outreach.money App',
      category: 'Mobile App',
      description: `A secure and innovative mobile application built on blockchain technology, offering users a seamless experience for managing digital assets.`,
      image: './assets/img/out.jpg',
      href:'/outreach-app-subpage',
    },
    {
      title: 'Learn & Earn',
      category: 'Web App',
      description: `An interactive learning platform that allows users to earn rewards by engaging with educational content.`,
      image: './assets/img/learn1.png',
      href:'/learnearn-subpage',
    },
    {
      title: 'RealStateBaba',
      category: 'Web App',
      description: `A modern, user-friendly real estate platform developed using the MERN stack, designed to simplify property buying, selling, and renting.`,
      image: 'https://storage.googleapis.com/a1aa/image/jLBDyT9eTA2Abq5wIT3j0aPvcx7oixMp1fS08oTpopPdFBAUA.jpg',
      href:'#',
    },
    {
      title: 'Video Creation',
      category: 'Video Creation',
      description: `
"Crafting engaging and high-quality videos tailored to your needs, from concept to completion. Elevate your brand with captivating visuals and storytelling."`,
      image: './assets/img/video c.jpg',
      href:'#',
    },
    {
      title: 'Graphic Design',
      category: 'Graphic Design',
      description: `Create stunning visuals that bring your brand's vision to life with professional graphic design.`,
      image: './assets/img/graphic10.jpg',
      href:'#',
    },
    {
      title: 'Digital Marketing',
      category: 'Digital Marketing',
      description: `Accelerate your brand's growth with data-driven digital marketing strategies for maximum online impact.`,
      image: './assets/img/digital1.jpg',
      href:'#',
    },
  ];

  const navigate = useNavigate();

  

  const filteredItems = filter === 'all' ? portfolioItems : portfolioItems.filter(item => item.category === filter);

  return (
    <div>
      <Header />
      <section id="home" className="intro-section">
        <div className="container">
          <h1 className="heading">Our Portfolio</h1>
          <p className="subheading paratext">
            We offer a wide range of professional services tailored to your
            needs. Explore what we can do for you!
          </p>
        </div>
      </section>
      <div className="portfolio-container mt-3">
        

        <div className="portfolio">
          {/* <div className="portfolio-item">
            <img
              alt="Major Kalshi Classes app interface"
              src="https://storage.googleapis.com/a1aa/image/feL0e5qySnXheQTyloJV4jPfxFtMkFuKZsOFZbdl8wAesBwfJA.jpg"
            />
            <div className="portfolio-description">
              <p><b className='fs-6'>Atal Bihari Bajpayee University Website:</b> <br /> A dynamic, user-friendly platform built with the MERN stack, offering an engaging and seamless experience for students, faculty, and visitors. The website features real-time updates, course management, and easy navigation, all designed to enhance the university's digital presence and interaction with its community.</p>
            </div>

          </div>

          <div className="portfolio-item">
            <img
              alt="Social media app interface"
              src="https://storage.googleapis.com/a1aa/image/BL4MI2hlMk5RKVYcfvK0uaZkvUYlnXQxz5vECgwWk2TbDgfTA.jpg"
            />
            <div className="portfolio-description">
              <p><b className='fs-6'>Railway Management System:</b> <br /> A comprehensive, efficient web platform built using the MERN stack, designed to streamline train scheduling, ticket booking, and passenger management. The system offers a user-friendly interface for both passengers and railway staff, providing real-time updates, seamless ticketing, and enhanced operational efficiency.</p>
            </div>

          </div>

          <div className="portfolio-item">
            <img
              alt="Veda learning app interface"
              src="https://storage.googleapis.com/a1aa/image/kFzCnlShMWagDtCeRRaiVBy7NdQ5oOLT42J1dJf3dsA4GAfnA.jpg"
            />
            <div className="portfolio-description">
              <p><b className='fs-6'>Outreach.money:</b> <br /> A cutting-edge blockchain-based platform designed to revolutionize financial transactions and decentralized finance (DeFi). Built with secure and transparent blockchain technology, Outreach.money provides users with a seamless and efficient way to manage digital assets, investments, and transactions. The platform offers robust features for peer-to-peer transactions, smart contracts, and financial empowerment, ensuring trust and security for every user.</p>
            </div>
          </div>

          <div className="portfolio-item">
            <img
              alt="Major Kalshi Classes app interface"
              src="https://storage.googleapis.com/a1aa/image/pxLCAsfDVBwVJqXtbZ1JpsWPp1UeuyPcAvVdkNtcacgbFBAUA.jpg"
            />
            <div className="portfolio-description">
              <p><b className='fs-6'>Outreach.money App:</b> <br /> A secure and innovative mobile application built on blockchain technology, offering users a seamless experience for managing digital assets, conducting peer-to-peer transactions, and exploring decentralized finance (DeFi) opportunities. The app ensures transparency, trust, and security, empowering users to make efficient financial decisions with real-time updates, smart contract capabilities, and a user-friendly interface.</p>
            </div>

          </div>

          <div className="portfolio-item">
            <img
              alt="Social media app interface"
              src="https://storage.googleapis.com/a1aa/image/YrebfyuSSghzuEKBb3VCx5JT969NjtUufrKIZUmcijbyKCAoA.jpg"
            />
            <div className="portfolio-description">
              <p><b className='fs-6'>Learn & Earn:</b> <br /> An interactive learning platform that allows users to earn rewards by engaging with educational content. Users watch informative videos, answer related questions, and earn coins for their participation and correct answers. Designed to make learning both fun and rewarding, the platform encourages knowledge retention through incentives, providing a seamless experience for learners to enhance their skills while earning rewards.</p>
            </div>

          </div>

          <div className="portfolio-item">
            <img
              alt="Veda learning app interface"
              src="https://storage.googleapis.com/a1aa/image/jLBDyT9eTA2Abq5wIT3j0aPvcx7oixMp1fS08oTpopPdFBAUA.jpg"
            />
            <div className="portfolio-description">
              <p><b className='fs-6'>RealStateBaba:</b> <br /> A modern, user-friendly real estate platform developed using the MERN stack, designed to simplify property buying, selling, and renting. RealStateBaba offers seamless search, filtering, and transaction features, providing users with real-time property listings, detailed information, and a secure transaction process. The platform connects buyers, sellers, and agents with ease, transforming the real estate experience with a responsive, intuitive interface.</p>
            </div>

          </div> */}

          {/* <div className="portfolio-item">
            <img
              alt="Major Kalshi Classes app interface"
              src="https://storage.googleapis.com/a1aa/image/8mZIBvibqGI0DtBOt5kiO9OvIlvlofNDlhBfWSsbyLDAfBAoA.jpg"
            />
            <div className="portfolio-description">
              <p>Major Kalshi Classes App: Interface design for an educational platform.</p>
            </div>
          </div>

          <div className="portfolio-item">
            <img
              alt="Social media app interface"
              src="https://storage.googleapis.com/a1aa/image/3fddt9rA0M3mGyXVvIQcvMM2ExYYJ2DYY1iNyTCPevVDfBAoA.jpg"
            />
            <div className="portfolio-description">
              <p>Social Media App: A clean, user-friendly interface for social networking.</p>
            </div>
          </div>

          <div className="portfolio-item">
            <img
              alt="Veda learning app interface"
              src="https://storage.googleapis.com/a1aa/image/L0PAvcucUF6WEdendox7nAw5jvay1Sk4g0NMetPE0BZBfBAoA.jpg"
            />
            <div className="portfolio-description">
              <p>Veda Learning App: Intuitive design for a learning management system.</p>
            </div>
          </div> */}

          {filteredItems.map((item, index) => (
            <div  key={index} className="portfolio-item" onClick={()=>navigate(item?.href)}>
              <img
                alt={item.title}
                src={item.image}
                className='img-fluid'
              />
              <div className="portfolio-description">
                <p><b className='fs-6'>{item?.title}:</b> <br /> {item.description}</p>
              </div>
            </div>
          ))}

        </div>

        <Link to='/contact'><div className="online-button">Contact</div></Link>
      </div>
    </div>

  );
};

export default Portfolio;
