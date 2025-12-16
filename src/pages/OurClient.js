import React from 'react';
import Testimonials from '../elements/Testimonials';
import Header from '../component/Header';
import ClientPage from '../elements/ClientPage';
import Footer from '../component/Footer';
import SEO from '../components/SEO';

const OurClient = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "Our Clients - FirstMiner Technology Solutions",
    "description": "Discover our diverse range of clients across various industries. FirstMiner Technology Solutions has helped numerous businesses achieve success through our tailored web development, mobile app development, and digital marketing solutions.",
    "mainEntity": {
      "@type": "Organization",
      "name": "FirstMiner Technology Solutions Pvt. Ltd.",
      "description": "We are proud to collaborate with a diverse range of clients across industries. Our tailored solutions help them achieve success and exceed their goals."
    }
  };

  return (
    <div>
      <SEO
        title="Our Clients - Success Stories | FirstMiner Technology Solutions"
        description="Discover our diverse range of clients across various industries. FirstMiner Technology Solutions has helped numerous businesses achieve success through our tailored web development, mobile app development, and digital marketing solutions."
        keywords="our clients, client success stories, web development clients, mobile app development clients, digital marketing clients, technology solutions clients, FirstMiner clients, Bilaspur clients, Chhattisgarh clients"
        url="https://firstminer.in/clients"
        structuredData={structuredData}
      />
      {/* Header Section */}
      <Header />

      {/* Introduction Section */}
      <section id="home" className="intro-section">
        <div className="container">
          <h1 className="heading">Our Clients</h1>
          <p className="subheading paratext">
            At FirstMiner, we are proud to collaborate with a diverse range of clients across industries like [list industries]. Our tailored solutions help them achieve success and exceed their goals. We value long-lasting partnerships and work closely with each client to deliver impactful results.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section">
        <div className="container">
          <ClientPage />
        </div>
      </section>

      {/* Contact Section */}


      
    </div>
  );
};

export default OurClient;
