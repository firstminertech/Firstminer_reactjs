import React, { useState, useEffect } from "react";
import { Form, Button, Alert, Row, Col } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";
import Header from "../component/Header";
import websiteStore from "../store/WebsiteStore";
import Loader from "../elements/loader";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const ContactPage = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loader, setLoader] = useState(true);
  setTimeout(() => {
    setLoader(false);
  }, 500)

  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  // Function to handle form submission using mailto
  const handleSubmit = (values, { resetForm }) => {
    setLoading(true);
    setIsSuccess(false); // Reset success state before submitting

    // Construct the mailto link with form values
    const subject = encodeURIComponent(values.subject);
    const body = encodeURIComponent(
      `Name: ${values.name}\nEmail: ${values.email}\n\nMessage: ${values.message}`
    );
    const mailtoLink = `mailto:firstminertech@gmail.com?subject=${subject}&body=${body}`;

    // Open the default email client with the pre-filled email
    window.location.href = mailtoLink;

    // Reset the form and success state
    resetForm();
    setIsSuccess(true); // Indicate that the form was "successfully submitted" (even though it relies on the user's email client)
    setLoading(false);
  };

  return (
    <div>
      {loader ? <Loader /> : <div>

        <Header />
        {/* Top Contact Image - now above the heading */}
        <div className="contact-top-image-wrapper" style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '32px auto 0 auto' }}>
          <img 
            src="/assets/img/contactus.jpg" 
            alt="Contact Us Banner" 
            className="contact-top-image"
            style={{ width: '100vw', maxWidth: '1500px', height: '220px', objectFit: 'cover', borderRadius: '15px', boxShadow: '0 4px 24px rgba(0,0,0,0.10)' }}
          />
        </div>
        <section id="contact" className="wow fadeInUp py-5 ">
          <div className="container">
            <style>{`
              .contact-info {
                display: flex;
                justify-content: center;
                gap: 32px;
                margin-bottom: 32px;
                flex-wrap: wrap;
              }
              .contact-card {
                flex: 1 1 280px;
                max-width: 340px;
                min-width: 260px;
                min-height: 180px;
                background: linear-gradient(135deg, #f8faff 60%, #e3f0ff 100%);
                border-radius: 22px;
                box-shadow: 0 4px 16px rgba(31,38,135,0.08);
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                padding: 32px 24px;
                margin: 0;
                transition: box-shadow 0.25s, transform 0.25s, background 0.25s;
                cursor: pointer;
                position: relative;
              }
              .contact-card:hover {
                transform: scale(1.05);
                box-shadow: 0 12px 32px rgba(104,141,215,0.18);
                background: #fff;
                color: #111;
              }
              .contact-title {
                font-weight: 700;
                font-size: 1.2rem;
                color: #1de9b6;
                display: flex;
                align-items: center;
                gap: 8px;
                margin-bottom: 10px;
                text-transform: uppercase;
                letter-spacing: 1px;
              }
              .contact-icon {
                font-size: 1.3em;
                color: #1de9b6;
                vertical-align: middle;
              }
              .contact-para10, .contact-card p, .contact-card address {
                color: #222;
                font-size: 1.05rem;
                text-align: center;
                margin-bottom: 0;
              }
            `}</style>
            <>
              <div className="section-header text-center mb-4">
                <h2>Contact Us</h2>
                <p className="d-flex justify-content-center">
                  Reach out to us for inquiries or assistance. We're here to help!
                </p>
              </div>
            </>

            <div className="row contact-info mb-5">
              <div className="contact-card" data-aos="fade-up">
                <div className="contact-title">
                  Address <FaMapMarkerAlt className="contact-icon" />
                </div>
                <address className="contact-para10">
                  Firstminer Technology Solutions Pvt. Ltd, 3rd floor RK
                  Complex,, Jagdamba colony,Seepat Road Bilaspur 495001 (CG)
                </address>
              </div>
              <div className="contact-card" data-aos="fade-up" data-aos-delay="100">
                <div className="contact-title">
                  Phone Number <FaPhoneAlt className="contact-icon" />
                </div>
                <p>
                  <a href="tel:07752358727">07752358727</a>
                </p>
              </div>
              <div className="contact-card" data-aos="fade-up" data-aos-delay="200">
                <div className="contact-title">
                  Email <FaEnvelope className="contact-icon" />
                </div>
                <p>
                  <a href="mailto:firstminertech@gmail.com">
                    Info@firstminer.in
                  </a>
                </p>
              </div>
            </div>

            <div className="contact-container">
              <div className="col-md-6" data-aos="fade-up">
                <div className="form-container">
                  <h2 className="form-title">For Inquery</h2>
                  {isSuccess && (
                    <Alert variant="success" className="success-alert">
                      Your message has been sent. Thank you!
                    </Alert>
                  )}
                  <Formik
                    initialValues={{
                      name: "",
                      email: "",
                      subject: "",
                      message: "",
                      phone: "", // Add phone field
                      address: "", // Add address field
                    }}

                    validationSchema={Yup.object({
                      name: Yup.string()
                        .min(4, "Name must be at least 4 characters")
                        .required("Name is required"),
                      email: Yup.string()
                        .email("Invalid email address")
                        .required("Email is required"),
                      subject: Yup.string()
                        .min(4, "Subject must be at least 4 characters")
                        .required("Subject is required"),
                      message: Yup.string().required("Message is required"),
                      phone: Yup.string()
                        .matches(/^\d{10}$/, "Phone number must be exactly 10 digits")
                        .required("Phone number is required"),
                      address: Yup.string().required("Address is required"),
                    })}

                    onSubmit={handleSubmit} // Pass the handleSubmit function
                  >
                    {(formik) => (
                      <Form onSubmit={formik.handleSubmit}>
                        <Row>
                          <Col md={6} className="mt-1">
                            <Form.Group controlId="name">
                              <Form.Control
                                type="text"
                                name="name"
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                placeholder="Your Name"
                                className="form-input"
                                isInvalid={
                                  formik.touched.name && formik.errors.name
                                }
                              />
                              <Form.Control.Feedback type="invalid">
                                {formik.errors.name}
                              </Form.Control.Feedback>
                            </Form.Group>
                          </Col>
                          <Col md={6} className="mt-1">
                            <Form.Group controlId="email">
                              <Form.Control
                                type="email"
                                name="email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                placeholder="Your Email"
                                className="form-input"
                                isInvalid={
                                  formik.touched.email && formik.errors.email
                                }
                              />
                              <Form.Control.Feedback type="invalid">
                                {formik.errors.email}
                              </Form.Control.Feedback>
                            </Form.Group>
                          </Col>
                          <Col md={6} className="mt-1">
                            <Form.Group controlId="phoneNumber">
                              <Form.Control
                                type="text"
                                name="phone"
                                value={formik.values.phone}
                                onChange={(e) => {
                                  const value = e.target.value;
                                  // Allow only numeric values and limit to 10 digits
                                  if (/^\d{0,10}$/.test(value)) {
                                    formik.setFieldValue("phone", value);
                                  }
                                }}
                                onBlur={formik.handleBlur}
                                placeholder="Phone number"
                                className="form-input"
                                isInvalid={
                                  formik.touched.phone && formik.errors.phone
                                }
                              />
                              <Form.Control.Feedback type="invalid">
                                {formik.errors.phone}
                              </Form.Control.Feedback>
                            </Form.Group>
                          </Col>

                          <Col md={6} className="mt-1">
                            <Form.Group controlId="address">
                              <Form.Control
                                type="text" // Address doesn't need to be of type email
                                name="address"
                                value={formik.values.address}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                placeholder="Address"
                                className="form-input"
                                isInvalid={formik.touched.address && formik.errors.address}
                              />
                              <Form.Control.Feedback type="invalid">
                                {formik.errors.address}
                              </Form.Control.Feedback>
                            </Form.Group>
                          </Col>

                        </Row>
                        <Form.Group controlId="subject" className="mt-1">
                          <Form.Control
                            type="text"
                            name="subject"
                            value={formik.values.subject}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder="Subject"
                            className="form-input"
                            isInvalid={
                              formik.touched.subject && formik.errors.subject
                            }
                          />
                          <Form.Control.Feedback type="invalid">
                            {formik.errors.subject}
                          </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="message" className="mt-1">
                          <Form.Control
                            as="textarea"
                            name="message"
                            rows={5}
                            value={formik.values.message}
                            onChange={(e) => {
                              const value = e.target.value;
                              // Allow up to 250 characters
                              if (value.length <= 250) {
                                formik.setFieldValue("message", value); // Update Formik value
                              }
                            }}
                            onBlur={formik.handleBlur}
                            placeholder="Message"
                            className="form-input"
                            isInvalid={formik.touched.message && formik.errors.message}
                          />
                          <Form.Control.Feedback type="invalid">
                            {formik.errors.message}
                          </Form.Control.Feedback>

                          {/* Display the character count */}
                          <div className="char-count">
                            Characters entered: {formik.values.message.length} / 250
                          </div>
                        </Form.Group>





                        <div className="text-center">
                          <button
                            type="submit"
                            variant="primary"
                            disabled={loading}
                            className="submit-button submit10"
                          >
                            {loading ? "Sending..." : "Send Message"}
                          </button>
                        </div>
                      </Form>
                    )}
                  </Formik>
                </div>
              </div>

              <div className="col-md-6" data-aos="fade-up" data-aos-delay="100">
                <div id="google-map" className="map-container">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3696.730331263791!2d82.15783957474363!3d22.098113350194648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a280b0e9ca001ed%3A0x86b6263922c5064d!2sE-DigitalBaba!5e0!3m2!1sen!2sin!4v1734764627163!5m2!1sen!2sin"
                    className="map-iframe"
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>}

    </div>
  );
};

export default ContactPage;
