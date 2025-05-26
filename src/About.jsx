import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//import "./About.css"; // You'll need to create this CSS file

const About = () => {
  return (
    <div className="about-container">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-8">
            <div className="about-content">
              <h1 className="display-4 fw-bold mb-4">About Us</h1>
              
              <h3 className="mb-4">Who We Are</h3>
              <p className="lead">
                Nik Renew is a leading provider of comprehensive solar energy asset management solutions, helping 
                businesses, utilities, and investors maximize the performance and profitability of their solar assets.
              </p>
              <p>
                Established in 2025, we have built a reputation for delivering end-to-end services 
                that ensure the seamless operation, maintenance, and optimization of solar energy
                systems across the globe.
              </p>
              
              {/* <div className="my-5">
                <h3 className="mb-4">Our Mission</h3>
                <p>
                  Our mission is to drive the transition to a more sustainable and renewable energy future by providing
                  world-class management services that extend the lifespan of solar assets and enhance their financial
                  return. We are committed to ensure that our client investment in solar energy remains productive,
                  profitable, and environmentally responsible.
                </p>
              </div> */}
              
              <div className="my-5">
                <h3 className="mb-4">Our Expertise</h3>
                <p>
                  With a team of seasoned professionals who are experts in both technical and project
                  management aspects of solar energy, Nik Renew offers a holistic approach to asset management.
                </p>
                <p>
                  From real-time monitoring and performance analysis to predictive
                  maintenance and regulatory compliance, we take care of every detail so that our clients can focus on
                  growth and innovation.
                </p>
              </div>
            </div>
          </div>
          
          <div className="col-lg-4">
            <div className="contact-card bg-light p-4 rounded shadow-sm">
              <h3 className="text-primary fw-bold mb-4">Contact Information</h3>
              <div className="mb-3">
                <h5 className="text-dark fw-bold">Email</h5>
                <p className="text-muted">admin@nikrenewenergy.com</p>
              </div>
              <div className="mb-3">
                <h5 className="text-dark fw-bold">Phone</h5>
                <p className="text-muted">07399128526</p>
              </div>
              <div className="mb-3">
                <h5 className="text-dark fw-bold">LinkedIn</h5>
                <p>
                  <a href="https://www.linkedin.com/company/106505900/admin/dashboard/" className="text-decoration-none text-primary" target="_blank" rel="noopener noreferrer">
                    Nik Renew
                  </a>
                </p>
              </div>
              <div className="mb-3">
                <h5 className="text-dark fw-bold">Address</h5>
                <p className="text-muted">70 Lancaster Road, London, NW10 1HA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;