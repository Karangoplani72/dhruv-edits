import React from "react";
import "./Portfolio.css";

function Portfolio() {
  // Array of videos — just add new video objects here
  const videos = [
    {
      src: "videos/demo1.mp4",
      title: "Wedding Highlight",
      description: "A cinematic wedding edit capturing emotions and memories.",
    },
    {
      src: "videos/demo2.mp4",
      title: "Instagram Reel",
      description: "Trendy short-form edit with fast cuts & transitions.",
    },
    {
      src: "videos/demo3.mp4",
      title: "Travel Montage",
      description: "Beautiful locations synced with beats & storytelling.",
    },
    // {
    //   src: "videos/demo4.mp4",
    //   title: "Event Coverage",
    //   description: "Capturing live events with dynamic storytelling.",
    // },
    // {
    //   src: "videos/demo5.mp4",
    //   title: "Corporate Promo",
    //   description: "Professional corporate video highlighting brand identity.",
    // },
  ];

  return (
    <section className="portfolio" id="portfolio">
      <h2>My Work</h2>
      <div className="video-row">
        {videos.map((video, index) => (
          <div key={index} className="video-card">
            <video
              className="portrait-video"
              src={video.src}
              autoPlay
              muted
              loop
            />
            <h3>{video.title}</h3>
            <p>{video.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
