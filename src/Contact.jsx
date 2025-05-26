import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';

const ContactPage = () => {
  const contacts = [
    {
      name: 'Rahul Chourasia',
      role: 'CEO & Co-Founder',
      //phone: '+44 7774 842038',
      email: 'Rahul@nikrenewenergy.com',
      location: 'London, United Kingdom',
      whatsapp: 'https://wa.me/447774842038'
    },
    {
      name: 'Nikhil Kumar',
      role: 'Co-Founder',
      //phone: '+44 7745 238153',
      email: 'Nikhil@nikrenewenergy.com',
      location: 'London, United Kingdom',
      whatsapp: 'https://wa.me/447745238153'
    }
  ];

  return (
    <div className="bg-light-subtle py-5 min-vh-10 d-flex align-items-center justify-content-center">
      <div className="w-100" style={{ maxWidth: '1300px' }}>
        <div className="shadow-lg rounded-4 bg-white p-4">
          <div className="text-center mb-4">
            <h2 className="fw-bold">Contact Us</h2>
            <p className="text-secondary mb-0">
              Get in touch with our leadership team. We are here to assist and collaborate!
            </p>
          </div>
          <div className="row g-4 d-flex">
            {contacts.map((person, index) => (
              <div key={index} className="col-md-6 d-flex">
                <div className="p-3 border rounded-3 d-flex flex-column w-100">
                  <h4 className="fw-bold text-success">{person.name}</h4>
                  <p className="text-muted">{person.role}</p>
                  {/* <div className="d-flex align-items-start mb-2">
                    <FaPhone className="me-2 mt-1 text-success" />
                    <span>{person.phone}</span>
                  </div> */}
                  <div className="d-flex align-items-start mb-2">
                    <FaEnvelope className="me-2 mt-1 text-success" />
                    <span className="text-break text-nowrap">{person.email}</span>
                  </div>
                  <div className="d-flex align-items-start mb-3">
                    <FaMapMarkerAlt className="me-2 mt-1 text-success" />
                    <span>{person.location}</span>
                  </div>
                  <div className="mt-auto">
                    <a
                      href={person.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-success w-100 d-flex align-items-center justify-content-center fw-semibold"
                    >
                      <FaWhatsapp className="me-2" />
                      WhatsApp Me
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-4 text-muted small">
            Email us directly or use WhatsApp for quicker responses
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
