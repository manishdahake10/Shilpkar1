import React from "react";
import "../Component/blog.css";

const BlogSection = () => {
  const blogs = [
    {
      date: "Jul 14, 2023",
      title: <h3> From Concept to Construction: <br /> The Creative Journey of Traz In <br /> A 
      Nutshell Architectural Marvels</h3>,
      image: "/image/blog1.jpg", // Local image inside 'public/images/'
    },
    {
      date: "Jul 15, 2023",
      title: <h3>Unveiling Architectural Marvels: [Architecture Agency]’s Impressive Portfolio</h3>,
      image: "/image/image.png", // Online image
    },
    {
      date: "Jul 16, 2023",
      title: <h3>From Concept to Construction: The Creative Journey of Traz In A Nutshell Architectural Marvels</h3>,
      image: "/image/Museum.jpg",
    },
  ];

  return (
    <div className="blog-section">
      <h2 className="blog-title">
        <span className="outline">Blog & Articles</span> 
      </h2>

      <div className="blog-cards">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="blog-card"
            style={{
              backgroundImage: `url(${blog.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="overlay">
              <p className="blog-date">
                <span className="bold">Interior</span> - {blog.date}
              </p>
              <h3 className="blog-heading">{blog.title}</h3>
              <p className="read-more">→ READ MORE</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
