import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import React, { useState, useEffect, useRef } from 'react';

const Blog = () => {
  const [currentView, setCurrentView] = useState('list');
  const [selectedPostId, setSelectedPostId] = useState(null);
  const [blogPost, setBlogPost] = useState({});
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState({ name: '', email: '', text: '' });
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef(null);
  const scrollPositionRef = useRef(0); // Ref to store the scroll position
  // ✅ Fetch comments when switching to detail view
  useEffect(() => {
    if (currentView === 'detail' && blogPost?.id) {
      fetchComments(blogPost.id);
    }
  }, [currentView, blogPost]);
  useEffect(() => {
  const savedPostId = localStorage.getItem("selectedPostId");
  if (savedPostId) {
    const post = blogData.find((b) => b.id === parseInt(savedPostId));
    if (post) {
      setBlogPost(post);
      setSelectedPostId(post.id);
      setCurrentView("detail");
      fetchComments(post.id);
    }
  }
}, []);

  const blogData = [
    {
      id: 1,
      title: "The Future of Renewable Energy",
      excerpt: "Renewable energy is shaping the world's future. Let's explore its impact and how it's transforming industries worldwide with sustainable solutions.",
      image: "https://brookfieldrenewableus.com/wp-content/uploads/2020/05/lightbulb-renewable-energy-1200x675.jpg",
      date: "March 25, 2025",
      category: "Energy",
      content: `How Data Analytics is Revolutionizing Renewable Energy Management
  
  In today's rapidly evolving energy landscape, the integration of sophisticated data analytics capabilities has emerged as a pivotal factor in maximizing the efficiency, reliability, and profitability of renewable energy assets. As the renewable sector continues its exponential growth trajectory, stakeholders are increasingly leveraging advanced analytical methodologies to optimize performance and ensure sustainable returns on investment.
  
  The Analytics Advantage in Renewable Energy
  
  The renewable energy sector generates unprecedented volumes of operational data from diverse sources—meteorological stations, equipment sensors, grid interfaces, and market systems. This extensive data ecosystem presents both significant challenges and extraordinary opportunities. Organizations equipped with robust analytics frameworks can transform these complex data streams into actionable intelligence, fundamentally enhancing their strategic decision-making capabilities.
  
  Predictive Maintenance: Anticipating Issues Before They Materialize
  
  One of the most compelling applications of analytics in renewable energy management is predictive maintenance. By employing machine learning algorithms to analyze performance patterns, system operators can identify potential equipment failures before they occur. This proactive approach yields multiple benefits:
  
  • Reduction in unscheduled downtime by up to 45%
  • Extension of asset lifespan by 20-25%
  • Optimization of maintenance scheduling and resource allocation
  • Significant decrease in operational expenditures
  
  For solar installations specifically, predictive analytics can detect subtle efficiency degradations in inverters, connection issues, or panel underperformance that might otherwise remain undetected for months, resulting in substantial production losses.
  
  Performance Optimization Through Comparative Analytics
  
  Comparative analytics—benchmarking performance across similar assets under comparable conditions—provides invaluable insights into optimization opportunities. This methodology enables:
  
  • Identification of underperforming assets relative to their theoretical potential
  • Isolation of environmental versus technical factors impacting generation
  • Implementation of targeted interventions to address specific performance gaps
  • Quantification of improvement initiatives' ROI
  
  By establishing normalized performance metrics across diverse operational contexts, renewable energy managers can systematically identify and address inefficiencies with unprecedented precision.
  
  Weather Integration and Production Forecasting
  
  The intrinsic relationship between meteorological conditions and renewable energy production necessitates sophisticated forecasting capabilities. State-of-the-art analytics platforms now integrate:
  
  • High-resolution weather forecasting data
  • Historical production correlations
  • Topographical considerations
  • Equipment-specific response characteristics
  
  These integrated models enable remarkably accurate production forecasts, with leading systems achieving 97%+ accuracy within a 24-hour horizon. Such precision facilitates optimized grid integration, market participation strategies, and resource planning.
  
  Financial Optimization Through Data Intelligence
  
  Beyond operational enhancements, analytics delivers substantial financial benefits through:
  
  • Dynamic pricing strategies for market-participating assets
  • Sophisticated PPA (Power Purchase Agreement) valuation models
  • Risk-adjusted portfolio optimization
  • Regulatory compliance automation
  • Warranty claim substantiation through forensic data analysis
  
  These capabilities transform renewable assets from passive investments into actively managed financial instruments with enhanced returns and reduced volatility profiles.
  
  The Implementation Framework: From Data to Decisions
  
  Implementing an effective analytics strategy for renewable energy management requires a systematic approach:
  
  1. Data Infrastructure Development: Establishing robust data acquisition, validation, and storage architectures
  2. Analytical Model Creation: Developing customized models addressing specific operational objectives
  3. Integration with Operational Systems: Ensuring seamless information flow between analytical insights and operational controls
  4. Continuous Refinement: Implementing feedback mechanisms to enhance model accuracy over time
  5. Organizational Alignment: Cultivating an analytics-driven decision-making culture
  
  Organizations that methodically execute these implementation phases consistently realize superior operational and financial performance compared to their peers.
  
  Future Trajectories: The Evolving Analytics Landscape
  
  As the renewable energy sector continues its maturation process, several emerging analytical frontiers promise additional value creation opportunities:
  
  • Artificial Intelligence Integration: Autonomous system optimization through reinforcement learning algorithms
  • Digital Twin Technology: High-fidelity virtual replication of physical assets for scenario testing
  • Blockchain Applications: Transparent and secure transaction verification for distributed energy resources
  • Edge Computing: Real-time analytics processing at the asset level to enable instantaneous optimization
  
  These advancing capabilities suggest that the competitive differentiation afforded by analytics excellence will only increase in significance within the renewable energy ecosystem.
  
  Conclusion: Analytics as a Competitive Imperative
  
  The integration of sophisticated analytics capabilities has transitioned from an operational luxury to a strategic necessity within the renewable energy sector. Organizations that establish comprehensive analytics frameworks position themselves advantageously to maximize asset performance, enhance financial returns, and contribute meaningfully to the global energy transition.
  
  For stakeholders across the renewable energy value chain—from developers and operators to investors and regulators—the message is unequivocal: excellence in data analytics is inextricably linked to excellence in renewable energy management. Those who embrace this reality will thrive in the increasingly data-centric energy landscape of tomorrow.`
    },
    // Add more posts if needed
  ];

  // const fetchComments = async (postId) => {
  //   setIsLoading(true);
  //   setTimeout(() => {
  //     setComments([
  //     ]);
  //     setIsLoading(false);
  //   }, 500);
  // };
  const fetchComments = async (postId) => {
    setIsLoading(true);
    try {
      const res = await fetch("http://localhost:5000/comments");
      const data = await res.json();
      // Filter by blogPost.id if supporting multiple posts
      setComments(data.filter(c => c.postId === postId));
    } catch (err) {
      console.error("Error fetching comments", err);
    }
    setIsLoading(false);
  };
const handleReadMore = (postId) => {
  localStorage.setItem("selectedPostId", postId); // 👈 store to localStorage

  setSelectedPostId(postId);
  const post = blogData.find((b) => b.id === postId);
  setBlogPost(post);
  setCurrentView("detail");
  fetchComments(postId);

  setTimeout(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, 0);
};


  // const handleReadMore = (postId) => {
  //   setSelectedPostId(postId);
  //   const post = blogData.find((b) => b.id === postId);
  //   setBlogPost(post);
  //   setCurrentView('detail');
  //   fetchComments(postId);

  //   setTimeout(() => {
  //     window.scrollTo({ top: 0, behavior: 'smooth' });
  //   }, 0);
  // };

  // const handleBackToBlog = () => {
  //   setCurrentView('list');
  //   setSelectedPostId(null);
  //   setComments([]);
  // };
const handleBackToBlog = () => {
  localStorage.removeItem("selectedPostId"); // 👈 clear on back
  setCurrentView("list");
  setSelectedPostId(null);
  setComments([]);
};

  const handleCommentChange = (e) => {
    const { name, value } = e.target;
    setNewComment((prev) => ({ ...prev, [name]: value }));
  };

  // const handleCommentSubmit = (e) => {
  //   e.preventDefault();
  //   const comment = {
  //     ...newComment,
  //     id: comments.length + 1,
  //     date: new Date().toLocaleDateString(),
  //     likes: 0,
  //   };
  //   setComments((prev) => [...prev, comment]);
  //   setNewComment({ name: '', email: '', text: '' });

  //   // Save scroll position before submitting the comment
  //   scrollPositionRef.current = window.scrollY;

  //   // Optionally, reset the scroll position to where it was after submission
  //   setTimeout(() => {
  //     window.scrollTo({ top: scrollPositionRef.current, behavior: 'smooth' });
  //   }, 0);
  // };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    const comment = {
      ...newComment,
      postId: blogPost.id,
      date: new Date().toLocaleDateString(),
      likes: 0,
    };

    const res = await fetch("http://localhost:5000/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(comment),
    });
    const saved = await res.json();
    setComments((prev) => [...prev, saved]);
    setNewComment({ name: "", email: "", text: "" });
  };


  // const handleLikeComment = (id) => {
  //   setComments((prev) =>
  //     prev.map((comment) =>
  //       comment.id === id ? { ...comment, likes: comment.likes + 1 } : comment
  //     )
  //   );
  // };
  const handleLikeComment = async (id) => {
    const comment = comments.find(c => c.id === id);
    const updated = { ...comment, likes: comment.likes + 1 };

    await fetch(`http://localhost:5000/comments/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updated),
    });

    setComments(prev =>
      prev.map(c => c.id === id ? updated : c)
    );
  };

  const handleDeleteComment = async (id) => {
    await fetch(`http://localhost:5000/comments/${id}`, {
      method: "DELETE",
    });
    setComments((prev) => prev.filter((c) => c.id !== id));
  };


  const BlogListView = () => (
    <div className="container py-5">
      {/* Header Section */}
      <h2 className="text-center mb-4">Blog</h2>

      {/* Blog Posts */}
      <div className="row justify-content-center">
        {blogData.map((post) => (
          <div className="col-md-8 mb-4" key={post.id}>
            <div className="card h-100">
              <img
                src={post.image}
                className="card-img-top"
                alt={post.title}
                style={{ height: "300px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text text-muted">{post.date}</p>
                <p className="card-text">{post.content.slice(0, 100)}...</p>
                <button
                  className="btn btn-primary mt-auto"
                  onClick={() => handleReadMore(post.id)}
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  useEffect(() => {
  fetch('http://localhost:5000/comments')
    .then(res => res.json())
    .then(data => setComments(data))
    .catch(console.error);
}, []);

// useEffect(() => {
//   if (currentView === 'detail' && blogPost?.id) {
//     fetchComments(blogPost.id);
//   }
// }, [currentView, blogPost]);


  return (
    <>
      {currentView === 'list' ? (
        <BlogListView />
      ) : (
        <div className="container py-5">
          <button className="btn btn-link mb-4" onClick={handleBackToBlog}>
            ← Back to Blog List
          </button>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h1 className="mb-3">{blogPost.title}</h1>
              <img
                src={blogPost.image}
                alt={blogPost.title}
                className="img-fluid rounded mb-4"
              />
              <p className="text-muted">{blogPost.date}</p>
              <p className="lead">{blogPost.category}</p>
              <article className="mb-5" style={{ whiteSpace: 'pre-line' }}>
                {blogPost.content}
              </article>

              <section>
                <h4 className="mb-4">Comments</h4>
                {isLoading ? (
                  <p>Loading comments...</p>
                ) : comments.length === 0 ? (
                  <p>No comments yet. Be the first to comment!</p>
                ) : (
                  <ul className="list-unstyled">
                    {comments.map((comment) => (
                      <li key={comment.id} className="mb-4 p-3 border rounded shadow-sm">
                        <div className="d-flex justify-content-between align-items-center mb-1">
                          <strong>{comment.name}</strong>
                          <small className="text-muted">{comment.date}</small>
                        </div>
                        <p className="mb-2">{comment.text}</p>
                        <button
                          className="btn btn-sm btn-outline-primary"
                          onClick={() => handleLikeComment(comment.id)}
                        >
                          <i className="bi bi-hand-thumbs-up me-1"></i>
                          {comment.likes} Likes
                        </button>
                        <button
                          className="btn btn-sm btn-outline-danger ms-2"
                          onClick={() => handleDeleteComment(comment.id)}
                        >
                          Delete
                        </button>

                      </li>
                    ))}
                  </ul>
                )}
              </section>

              <section className="mt-5" ref={formRef}>
                <h5 className="mb-3">Leave a Comment</h5>
                <form onSubmit={handleCommentSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name *</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={newComment.name}
                      onChange={handleCommentChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email (optional)</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={newComment.email}
                      onChange={handleCommentChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="text" className="form-label">Comment *</label>
                    <textarea
                      className="form-control"
                      id="text"
                      name="text"
                      rows="4"
                      value={newComment.text}
                      onChange={handleCommentChange}
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Submit Comment
                  </button>
                </form>
              </section>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Blog;
