import React from "react";
import "boxicons/css/boxicons.min.css";

const Footer = () => {
  return (
    // <div>
    //     <footer id="footer">
    //         <div className="container">
    //             <div className="copyright">
    //                 © Copyright <strong>FirstMiner Technology</strong>. All Rights Reserved
    //             </div>
    //             <div className="credits">

    //                 All the links in the footer should remain intact.
    //                 You can delete the links only if you purchased the pro version.
    //                 Licensing information: https://bootstrapmade.com/license/
    //                 Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/buy/?theme=Reveal

    //                 <a href="https://firstminer.in/">Firstminer.in</a>

    //             </div>
    //         </div>
    //     </footer>
    // </div>
    <div className="footer-top py-5 footer-bg">
      <div className="container">
        <div className="row  d-flex justify-content-center g-3">
          <div className="col-lg-3 col-md-6 footer-links">
            <h4 className="text-uppercase head10 mb-4">Useful Link</h4>
            <ul className="list-unstyled useful-link1">
              <li className="d-flex align-items-center mb-2">
                <i className="bx bx-right-arrow-alt head10 me-2"></i>
                <a
                  href="/our-teams"
                  className="text-decoration-none text-light"
                >
                  Our Team
                </a>
              </li>
              <li className="d-flex align-items-center mb-2">
                <i className="bx bx-right-arrow-alt head10 me-2"></i>
                <a href="/clients" className="text-decoration-none text-light">
                  Client
                </a>
              </li>
              <li className="d-flex align-items-center mb-2">
                <i className="bx bx-right-arrow-alt head10 me-2"></i>
                <a
                  href="/testimonial"
                  className="text-decoration-none text-light"
                >
                  Testimonial
                </a>
              </li>
              <li className="d-flex align-items-center mb-2">
                <i className="bx bx-right-arrow-alt head10 me-2"></i>
                <a href="/careers" className="text-decoration-none text-light">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          {/* Our Services */}
          <div className="col-lg-3 col-md-6 footer-links">
            <h4 className="text-uppercase head10 mb-4">Our Services</h4>
            <ul className="list-unstyled useful-link1 ">
              <li className="d-flex align-items-center mb-2">
                <i className="bx bx-right-arrow-alt head10 me-2"></i>
                <a className="text-decoration-none text-light">
                  Digital Marketing
                </a>
              </li>
              <li className="d-flex align-items-center mb-2">
                <i className="bx bx-right-arrow-alt head10 me-2"></i>
                <a className="text-decoration-none text-light">
                  App / Web Development
                </a>
              </li>

              <li className="d-flex align-items-center mb-2">
                <i className="bx bx-right-arrow-alt head10 me-2"></i>
                <a className="text-decoration-none text-light">Govt. Tender</a>
              </li>
              <li className="d-flex align-items-center mb-2">
                <i className="bx bx-right-arrow-alt head10 me-2"></i>
                <a className="text-decoration-none text-light">
                  Commercial Video Creation
                </a>
              </li>
              <li className="d-flex align-items-center mb-2">
                <i className="bx bx-right-arrow-alt head10 me-2"></i>
                <a className="text-decoration-none text-light">
                  Block Chain Consultant
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="col-lg-3 col-md-6 footer-contact">
            <h4 className="text-uppercase head10 mb-4">Contact Us</h4>
            <address className="text-light">
              Firstminer Technology Solutions Pvt. Ltd
              <br />
              3rd floor RK Complex, Jagdamba Colony
              <br />
              Seepat Road, Bilaspur 495001 (CG)
              <br />
              <br />
              <strong>Phone:</strong> +917752358727
              <br />
              <a className="email-text1" href="mailto:firstminertech@gmail.com">
                <strong>Email:</strong> Info@firstminer.in
              </a>
              <br />
            </address>
          </div>

          {/* About Section */}
          <div className="col-lg-3 col-md-6 footer-info">
            <h4 className="text-uppercase head10 mb-4 ">
              About Us
            </h4>
            <p className="text-light">
              We pursue relationships based on transparency, persistence, mutual
              trust, and integrity with our employees, customers, and other
              business partners.
            </p>
            <div className="social-links mt-3 d-flex justify-content-center  ">
              <a href="#" className="facebook me-3">
                <i className="bx bxl-facebook link10 fs-3"></i>
              </a>
              <a href="#" className="instagram me-3">
                <i className="bx bxl-instagram link10  fs-3"></i>
              </a>
              <a href="#" className="linkedin">
                <i className="bx bxl-linkedin link10 fs-3"></i>
              </a>
              <a href="#" className="twitter me-3">
                <i class="fa-brands fa-twitter link10 fs-3"></i>
              </a>
            </div>
          </div>
          <div className="copyright text-white d-flex justify-content-center">
          2025 © Copyright{" "}
            <a  className="head10  text-decoration-none" href="/">
              <strong className="ms-2">FirstMiner Technology</strong>
            </a>
            . All Rights Reserved
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
