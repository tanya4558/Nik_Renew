import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import BlogDetail from "./BlogDetail";
import Navbar from "./Navbar";
import About from "./About"; // Import your About page component
import Contact from "./Contact"; // Import Contact component
import Blog from "./Blog"; // Import Blog component
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';  // or './index.css'
import './index.css';  // or './index.css'


function App() {
  return (
    <Router basename="/Nik_Renew">
      <Navbar />
      <div className="container mt-5"> {/* Increased margin to prevent overlap */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} /> {/* Add Contact route */}
          <Route path="blog" element={<Blog />} /> {/* Add Blog route */}
          <Route path="blog/:id" element={<BlogDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
