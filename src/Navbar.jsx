import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import NikRenewLogo from "./assets/Nik_Renew_Logo.jpg";
const Navbar = () => {
  useEffect(() => {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        const navbarToggler = document.querySelector('.navbar-toggler');
        if (navbarToggler.getAttribute('aria-expanded') === 'true') {
          navbarToggler.click();
        }
      });
    });

    return () => {
      navLinks.forEach(link => {
        link.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow">
<div className="container-fluid">
  <div className="d-flex align-items-center justify-content-between w-100">
    <Link className="navbar-brand d-flex align-items-center" to="/">
      <img
        src={NikRenewLogo}  // Use imported logo
        alt="NIK RENEW"
        className="me-2"
        style={{
          height: '30px',  // Slightly reduced for mobile
          width: 'auto',
          objectFit: 'contain'
        }}
      />
      <span className="fw-bold text-primary">NIK RENEW</span>
    </Link>
    
    <button 
      className="navbar-toggler" 
      type="button" 
      data-bs-toggle="collapse" 
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
  </div>
  
  <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
      <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
      <li className="nav-item"><Link className="nav-link" to="/blog">Blog</Link></li>
      <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
    </ul>
  </div>
</div>
    </nav>
  );
};

export default Navbar;
