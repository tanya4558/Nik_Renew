import { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [blogs] = useState([
    // {
    //   id: 1,
    //   title: "Corona virus is dangerous, stay away from it.",
    //   date: "January 02, 2020",
    //   category: "Health Blog",
    //   image: "https://catalyst.harvard.edu/wp-content/uploads/2022/05/iStock-1297985631.jpg",
    //   content: "There are many variations of passages of Lorem Ipsum available...",
    // },
    // {
    //   id: 2,
    //   title: "Delicious Blueberry Pancakes Recipe",
    //   date: "January 02, 2020",
    //   category: "Food Blog",
    //   image: "https://www.inspiredtaste.net/wp-content/uploads/2019/02/Easy-Homemade-Blueberry-Pancakes-Recipe-2-1200.jpg",
    //   content: "There are many variations of passages of Lorem Ipsum available...",
    // },
    // {
    //   id: 3,
    //   title: "Morning Workout Tips",
    //   date: "January 02, 2020",
    //   category: "Fitness Blog",
    //   image: "https://tse2.mm.bing.net/th?id=OIP.JqZi23AI1gDcIZ1KSjC_HAHaE8&pid=Api&P=0&h=180",
    //   content: "There are many variations of passages of Lorem Ipsum available...",
    // },
  ]);

  return (
    <div className="home-container">
      <div className="hero-section">
        <div className="overlay"></div>
        <div className="hero-content container">
          <h1>Welcome to NIK RENEW</h1>
          <p>Discover the latest insights on renewable energy and sustainability</p>
        </div>
      </div>

      {/* <div className="container blog-section">
        <div className="section-header">
          <h2 className="section-title">LATEST BLOGS</h2>
          <div className="section-divider"></div>
        </div>

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {blogs.map((blog) => (
            <div key={blog.id} className="col">
              <div className="blog-card">
                <div className="blog-image-container">
                  <img src={blog.image} alt={blog.title} className="blog-image" />
                  <div className="blog-category">{blog.category}</div>
                </div>
                <div className="blog-content">
                  <div className="blog-date">{blog.date}</div>
                  <h3 className="blog-title">{blog.title}</h3>
                  <p className="blog-excerpt">{blog.content.substring(0, 80)}...</p>
                  <Link to={`/blog/${blog.id}`} className="read-more-btn">
                    Read More
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default Home;