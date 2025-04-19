import { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [blogs] = useState([]);

  const values = [
    {
      icon: "integrity",
      title: "Integrity",
      description: "Transparency and accountability in every interaction and decision."
    },
    {
      icon: "excellence",
      title: "Excellence",
      description: "Delivering top-tier services and measurable results for clients."
    },
    {
      icon: "customer",
      title: "Customer Centric",
      description: "Prioritizing the needs and goals of our client to ensure long term success."
    },
    {
      icon: "innovation",
      title: "Innovation",
      description: "Leveraging cutting edge technology to enhance the performance and longevity of solar assets."
    },
    {
      icon: "sustainability",
      title: "Sustainability",
      description: "We are dedicated to promoting renewable energy and reducing the carbon footprints."
    }
  ];

  const services = [
    {
      icon: "pmo",
      title: "PMO & Pre-Construction Support",
      description: "Comprehensive project management and planning before breaking ground."
    },
    {
      icon: "development",
      title: "Development & Construction Management",
      description: "End-to-end oversight of solar project development and construction phases."
    },
    {
      icon: "design",
      title: "Design Support",
      description: "Expert guidance on system design optimization for maximum efficiency."
    },
    {
      icon: "technical",
      title: "Technical Oversight",
      description: "Ensuring all technical aspects meet industry standards and specifications."
    },
    {
      icon: "financial",
      title: "Financial & Compliance Management",
      description: "Comprehensive financial tracking and regulatory compliance solutions."
    },
    {
      icon: "optimization",
      title: "Asset Optimization & Revenue Maximization",
      description: "Strategic approaches to enhance performance and increase returns on solar investments."
    }
  ];

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to NIK RENEW</h1>
          <p>Discover the latest insights on renewable energy and sustainability</p>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="vision-mission-section">
        <div className="container">
          <div className="section-title">
            <div className="company-logo">
              <div className="green-checkmark"></div>
            </div>
            <h2>Our Commitment</h2>
          </div>
          <div className="card-container">
            {/* Vision Card */}
            <div className="card vision-card">
              <div className="card-header">
                <div className="icon-circle">
                  <i className="vision-icon"></i>
                </div>
                <h3>Our Vision</h3>
              </div>
              <p>
                "To become the most trusted partner for solar energy asset management. Empowering the growth of renewable energy world-wide through innovation, reliability and exceptional services."
              </p>
            </div>

            {/* Mission Card */}
            <div className="card mission-card">
              <div className="card-header">
                <div className="icon-circle">
                  <i className="mission-icon"></i>
                </div>
                <h3>Our Mission</h3>
              </div>
              <p>
                "To maximize the value of solar energy investment by providing industry leading asset management solutions that drive efficiency, profitability and sustainability."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      {/* <section className="services-section">
        <div className="container">
          <div className="section-title">
            <h2>Our Services</h2>
            <div className="underline"></div>
          </div>
          <div className="services-subtitle">
            <h3>Comprehensive Solutions for Solar Asset Management</h3>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">
                  <i className={`icon-${service.icon}`}></i>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
          
          <div className="services-cta">
            <button className="cta-button">View All Services</button>
          </div>
        </div>
      </section> */}
         <section className="services-section">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <div className="underline"></div>
        </div>
        <div className="services-subtitle">
          <h3>Comprehensive Solutions for Solar Asset Management</h3>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className={`service-icon icon-${service.icon}`}></div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
        
        {/* <div className="services-cta">
          <button className="cta-button">View All Services</button>
        </div> */}
      </div>
    </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <div className="section-title">
            <h2>Our Values</h2>
            <div className="underline"></div>
          </div>

          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">
                  <i className={`icon-${value.icon}`}></i>
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solar Solutions Section */}
      <section className="solutions-section">
        <div className="container">
          <div className="solutions-content">
            <div className="solutions-text">
              <h2>Leading Solar Asset Management</h2>
              <p>
                At NIK RENEW, we specialize in maximizing the performance and longevity of solar energy investments. Our dedicated team of professionals combines industry expertise with cutting-edge technology to ensure optimal results for our clients.
              </p>
              {/* <button className="cta-button">Learn More</button> */}
            </div>
            <div className="solutions-image">
              <div className="image-placeholder">
                <div className="solar-icon"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;