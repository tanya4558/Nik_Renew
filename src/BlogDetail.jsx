import { useParams, Link } from "react-router-dom";

const BlogDetail = () => {
  const { id } = useParams();
  const blog = {
    id,
    title: "Corona virus is dangerous, stay away from it.",
    date: "January 02, 2020",
    category: "Health Blog",
    image: "https://source.unsplash.com/800x400/?virus",
    content: "This is the full blog content with more details...",
  };

  return (
    <div className="container my-5">
      <div className="card shadow">
        <img src={blog.image} className="card-img-top" alt={blog.title} />
        <div className="card-body">
          <span className="badge bg-primary">{blog.category}</span>
          <p className="text-muted small">{blog.date}</p>
          <h1 className="card-title">{blog.title}</h1>
          <p className="card-text">{blog.content}</p>
          <Link to="/" className="btn btn-outline-primary">← Back to Home</Link>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
