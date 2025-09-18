import { useRef } from "react";
import "./Portfolio.css";

function Portfolio() {
  const videosRef = useRef([]);

  const handleVolume = (index) => {
    videosRef.current.forEach((video, i) => {
      if (video) {
        video.muted = i !== index; // Mute all except the clicked one
      }
    });
  };

  const videos = [
    {
      src: "videos/demo1.mp4",
      title: "Wedding Highlight",
      desc: "A cinematic wedding edit capturing emotions and memories.",
    },
    {
      src: "videos/demo2.mp4",
      title: "Instagram Reel",
      desc: "Trendy short-form edit with fast cuts & transitions.",
    },
    {
      src: "videos/demo3.mp4",
      title: "Travel Montage",
      desc: "Beautiful locations synced with beats & storytelling.",
    },
  ];

  return (
    <section className="portfolio" id="portfolio">
      <h2>My Work</h2>
      <div className="video-row">
        {videos.map((video, index) => (
          <div className="video-card" key={index}>
            <video
              className="portrait-video"
              src={video.src}
              autoPlay
              loop
              muted
              playsInline
              controls
              ref={(el) => (videosRef.current[index] = el)}
              onClick={() => handleVolume(index)} // Click to unmute this video
            />
            <h3>{video.title}</h3>
            <p>{video.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
