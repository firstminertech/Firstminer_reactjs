import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
  title = "FirstMiner Technology Solutions - Web Development, App Development & Digital Marketing",
  description = "FirstMiner Technology Solutions Pvt. Ltd. offers comprehensive web development, mobile app development, digital marketing, SEO, and blockchain consulting services. Transform your business with our expert solutions.",
  keywords = "web development, mobile app development, digital marketing, SEO services, blockchain consulting, software development, React, Node.js, MERN stack, Bilaspur, Chhattisgarh, India",
  image = "/assets/img/firstminerlogo.png",
  url = "https://firstminer.in",
  type = "website",
  structuredData = null
}) => {
  const fullTitle = title.includes("FirstMiner") ? title : `${title} | FirstMiner Technology Solutions`;
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="FirstMiner Technology Solutions Pvt. Ltd." />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="FirstMiner Technology Solutions" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@firstminertech" />
      <meta name="twitter:creator" content="@firstminertech" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#28c3b4" />
      <meta name="msapplication-TileColor" content="#28c3b4" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="FirstMiner Technology" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
