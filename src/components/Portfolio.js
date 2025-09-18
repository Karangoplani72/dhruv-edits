import React from "react";
import "./Portfolio.css";

const Portfolio = () => {
  const portfolioItems = [
    {
      id: 1,
      type: "video",
      src: "/videos/demo1.mp4",
      title: "Video Project 1",
      description: "Demo of Project 1",
    },
    {
      id: 2,
      type: "video",
      src: "/videos/demo2.mp4",
      title: "Video Project 2",
      description: "Demo of Project 2",
    },
    {
      id: 3,
      type: "video",
      src: "videos/demo3.mp4",
      title: "Video Project 3",
      description: "Demo of Project 3",
    },
  ];

  return (
    <section className="portfolio" id="portfolio">
      <h2 className="section-title">My Portfolio</h2>
      <div className="portfolio-grid">
        {portfolioItems.map((item) => (
          <div key={item.id} className="portfolio-item">
            <video
              className="portfolio-video"
              src={item.src}
              controls
              preload="metadata"
            >
              Your browser does not support the video tag.
            </video>
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
