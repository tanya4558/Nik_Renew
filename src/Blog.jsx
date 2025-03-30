import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

const Blog = () => {
  // State to track whether we're viewing the blog list or the article
  const [currentView, setCurrentView] = useState('list');
  
  // Single blog post data
  const blogPost = {
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
  };

  // Handler for clicking "Read More"
  const handleReadMore = () => {
    setCurrentView('article');
    // In a real app, you might use router navigation here
    window.scrollTo(0, 0); // Scroll to top when viewing article
  };

  // Handler for going back to blog list
  const handleBackToBlog = () => {
    setCurrentView('list');
  };

  // Blog list view component
  const BlogListView = () => (
    <div className="container py-5">
      {/* Header Section */}
      <header className="text-center mb-5">
        <h1 className="display-4 fw-bold">Our Blog</h1>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <p className="lead text-muted">
              Explore insightful articles on technology, business, and productivity.
            </p>
            <hr className="my-4" />
          </div>
        </div>
      </header>

      {/* Blog Post */}
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-sm border-0 rounded-3 overflow-hidden mb-5">
            <img 
              src={blogPost.image} 
              className="card-img-top" 
              alt={blogPost.title}
              style={{ height: "300px", objectFit: "cover" }}
            />
            <div className="card-body p-4">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <span className="badge bg-primary rounded-pill">{blogPost.category}</span>
                <small className="text-muted">{blogPost.date}</small>
              </div>
              <h3 className="card-title fw-bold">{blogPost.title}</h3>
              <p className="card-text text-muted my-3">{blogPost.excerpt}</p>
              <div className="d-flex justify-content-between align-items-center mt-4">
                {/* <small className="text-muted">By {blogPost.author}</small> */}
                <button 
                  onClick={handleReadMore} 
                  className="btn btn-primary rounded-pill px-4"
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      {/* <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card bg-light border-0 shadow-sm p-4 rounded-3">
            <div className="row align-items-center">
              <div className="col-lg-7">
                <h4>Subscribe to our Newsletter</h4>
                <p className="text-muted mb-lg-0">Get the latest articles and updates delivered to your inbox.</p>
              </div>
              <div className="col-lg-5">
                <div className="input-group">
                  <input type="email" className="form-control" placeholder="Your email address" />
                  <button className="btn btn-primary" type="button">Subscribe</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );

  // Article view component
  const ArticleView = () => {
    // Function to format content with proper paragraphs and bullets
    const formatContent = (content) => {
      return content.split('\n\n').map((paragraph, index) => {
        // Check if paragraph contains bullet points
        if (paragraph.includes('• ')) {
          const items = paragraph.split('• ').filter(item => item.trim());
          return (
            <div key={index} className="mb-4">
              <ul className="list-group list-group-flush">
                {items.map((item, i) => (
                  <li key={i} className="list-group-item bg-transparent ps-0">{item.trim()}</li>
                ))}
              </ul>
            </div>
          );
        } 
        // Check if paragraph contains numbered list (starts with number followed by period)
        else if (/^\d+\./.test(paragraph)) {
          const items = paragraph.split(/\d+\.\s/).filter(item => item.trim());
          return (
            <div key={index} className="mb-4">
              <ol className="list-group list-group-numbered">
                {items.map((item, i) => (
                  <li key={i} className="list-group-item bg-transparent ps-0">{item.trim()}</li>
                ))}
              </ol>
            </div>
          );
        } 
        // Regular paragraph
        else {
          return <p key={index} className="mb-4">{paragraph}</p>;
        }
      });
    };

    return (
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            {/* Back button */}
            <div className="mb-4">
              <button 
                onClick={handleBackToBlog} 
                className="btn btn-outline-secondary"
              >
                <i className="bi bi-arrow-left me-2"></i>Back to Blog
              </button>
            </div>
            
            {/* Article header */}
            <div className="mb-5">
              <span className="badge bg-primary rounded-pill mb-2">{blogPost.category}</span>
              <h1 className="display-5 fw-bold mb-3">{blogPost.title}</h1>
              <div className="d-flex align-items-center text-muted">
                {/* <span>By {blogPost.author}</span> */}
                <span className="mx-2">•</span>
                <span>{blogPost.date}</span>
              </div>
            </div>
            
            {/* Featured image */}
            <div className="mb-5">
              <img 
                src={blogPost.image} 
                alt={blogPost.title}
                className="img-fluid rounded shadow-sm"
                style={{ width: "100%", maxHeight: "500px", objectFit: "cover" }}
              />
            </div>
            
            {/* Article content */}
            <div className="article-content">
              {formatContent(blogPost.content)}
            </div>
            
            {/* Article footer */}
            <div className="mt-5 pt-4 border-top">
              <div className="row">
                <div className="col-md-6">
                  <h5>Share this article</h5>
                  <div className="d-flex gap-2">
                    <button className="btn btn-outline-primary">
                      <i className="bi bi-facebook"></i>
                    </button>
                    <button className="btn btn-outline-info">
                      <i className="bi bi-twitter"></i>
                    </button>
                    <button className="btn btn-outline-danger">
                      <i className="bi bi-pinterest"></i>
                    </button>
                    <button className="btn btn-outline-secondary">
                      <i className="bi bi-linkedin"></i>
                    </button>
                  </div>
                </div>
                <div className="col-md-6 text-md-end mt-3 mt-md-0">
                  <h5>Tags</h5>
                  <button className="btn btn-sm btn-light me-1 mb-1">Energy</button>
                  <button className="btn btn-sm btn-light me-1 mb-1">Analytics</button>
                  <button className="btn btn-sm btn-light me-1 mb-1">Renewable</button>
                  <button className="btn btn-sm btn-light me-1 mb-1">Data</button>
                </div>
              </div>
            </div>
            
            {/* Back to top button */}
            <div className="text-center mt-5">
              <button 
                onClick={() => window.scrollTo(0, 0)} 
                className="btn btn-primary rounded-circle"
                style={{ width: "50px", height: "50px" }}
              >
                <i className="bi bi-arrow-up"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Render the current view
  return currentView === 'list' ? <BlogListView /> : <ArticleView />;
};

export default Blog;