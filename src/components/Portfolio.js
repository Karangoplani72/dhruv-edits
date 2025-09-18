import React from "react";
import "./Portfolio.css";

const Portfolio = () => {
  // Example array of portfolio items
  const portfolioItems = [
    // {
    //   id: 1,
    //   type: "image",
    //   src: "/assets/project1.jpg",
    //   alt: "Project 1",
    //   title: "Project 1",
    //   description: "This is the description of Project 1.",
    // },
    {
      id: 2,
      type: "video",
      src: "/videos/demo1.mp4",
      title: "Video Project 1",
      description: "This is a demo video of Project 1.",
    },
    {
      id: 3,
      type: "video",
      src: "/videos/demo2.mp4",
      alt: "Project 2",
      title: "Project 2",
      description: "This is the description of Project 2.",
    },
    {
      id: 4,
      type: "video",
      src: "/videos/demo1.mp4",
      title: "Video Project 2",
      description: "This is a demo video of Project 2.",
    },
  ];

  return (
    <section className="portfolio" id="portfolio">
      <h2 className="section-title">My Portfolio</h2>
      <div className="portfolio-container">
        {portfolioItems.map((item) => (
          <div key={item.id} className="portfolio-item">
            {item.type === "image" ? (
              <img
                src={item.src}
                alt={item.alt}
                className="portfolio-image"
              />
            ) : (
              <video
                className="portfolio-video"
                src={item.src}
                controls
                preload="metadata"
              >
                Your browser does not support the video tag.
              </video>
            )}
            <div className="portfolio-info">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
