import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  // Phone number to receive messages (without any spaces or special characters)
  const whatsappNumber = "447745238153"; // Replace with your preferred number

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Format the message with all form data
    const formattedMessage = `
Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}
Message: ${formData.message}
    `.trim();
    
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(formattedMessage);
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank");
  };

  // Soothing sage green color
  const sageGreen = "#e8f0e1";
  // Text color that complements the background
  const textColor = "#3a5a40";

  return (
    <div className="contact-page py-5 mt-5">
      <div className="container">
        <div className="row align-items-center min-vh-100">
          {/* Contact Details Section */}
          <div 
            className="col-md-6 p-5 rounded-start" 
            style={{ 
              backgroundColor: sageGreen,
              color: textColor
            }}
          >
            <h2 className="fw-bold mb-4">Contact Us</h2>
            <p className="mb-4">Get in touch with our leadership team. We are here to assist and collaborate!</p>
            <hr style={{ borderColor: textColor, opacity: 0.2 }} />
            
            {/* Nikhil Kumar */}
            <div className="mb-4">
              <h4 className="fw-bold">Nikhil Kumar</h4>
              <p className="mb-1">Co-Founder</p>
              <p className="mb-1"><i className="bi bi-telephone-fill me-2"></i> +44 7745 238153</p>
              <p><i className="bi bi-envelope-fill me-2"></i> <a 
                href="mailto:Nikhil@nikrenewenergy.com" 
                style={{ color: textColor, textDecoration: "none", fontWeight: "500" }}
              >Nikhil@nikrenewenergy.com</a></p>
            </div>

            {/* Rahul Chourasia */}
            <div>
              <h4 className="fw-bold">Rahul Chourasia</h4>
              <p className="mb-1">CEO & Co-Founder</p>
              <p className="mb-1"><i className="bi bi-telephone-fill me-2"></i> +44 7774 842038</p>
              <p><i className="bi bi-envelope-fill me-2"></i> <a 
                href="mailto:Rahul@nikrenewenergy.com" 
                style={{ color: textColor, textDecoration: "none", fontWeight: "500" }}
              >Rahul@nikrenewenergy.com</a></p>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="col-md-6">
            <div className="card p-4 shadow-lg border-0 rounded-end">
              <h3 className="text-center fw-bold mb-4" style={{ color: "#3a5a40" }}>Get in Touch</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input 
                    type="text" 
                    className="form-control form-control-lg" 
                    placeholder="Name" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                {/* <div className="mb-3">
                  <input 
                    type="email" 
                    className="form-control form-control-lg" 
                    placeholder="Email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div> */}
                <div className="mb-3">
                  <input 
                    type="text" 
                    className="form-control form-control-lg" 
                    placeholder="Subject" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <textarea 
                    className="form-control form-control-lg" 
                    rows="4" 
                    placeholder="Message" 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="btn btn-lg w-100 text-white" 
                  style={{ backgroundColor: "#3a5a40" }}
                >
                  <i className="bi bi-whatsapp me-2"></i> Send via WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;