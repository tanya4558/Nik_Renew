import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import NavBarImage from './assets/Nik_Renew_Logo.jpg';
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg fixed-top w-100 ${scrolled ? 'bg-white shadow-sm' : 'bg-transparent'}`}
      style={{ transition: 'all 0.3s ease' }}>
      <div className="container">
        {/* Left-aligned logo and brand name */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src={NavBarImage} alt="Logo" width="60" height="45" className="me-2 rounded" />
          <span className="fw-bold" style={{ fontSize: '1.3rem', background: 'linear-gradient(to right, #0062cc, #0097ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            NIK RENEW
          </span>
        </Link>

        <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Right-aligned menu */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav gap-1">
            {['Home', 'About', 'Blog', 'Contact'].map((item) => (
              <li className="nav-item" key={item}>
                <Link
                  className="nav-link px-3 py-2 rounded-pill fw-medium"
                  to={item === "Home" ? "" : item.toLowerCase()} // Fix: Remove leading "/"
                  style={{
                    transition: 'all 0.2s ease',
                    position: 'relative'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(13, 110, 253, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                >
                  {item}
                </Link>
              </li>
            ))}

            {/* <li className="nav-item ms-2">
              <Link 
                className="nav-link px-4 py-2 rounded-pill text-white fw-medium" 
                to="/get-started"
                style={{ backgroundColor: '#0d6efd' }}
              >
                Get Started
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;