function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <h2>My Work</h2>
      <div className="video-row">
        <div className="video-card">
          <video
            className="portrait-video"
            src="videos/sample1.mp4"
            autoPlay
            muted
            loop
          />
          <h3>Wedding Highlight</h3>
          <p>A cinematic wedding edit capturing emotions and memories.</p>
        </div>
        <div className="video-card">
          <video
            className="portrait-video"
            src="videos/sample2.mp4"
            autoPlay
            muted
            loop
          />
          <h3>Instagram Reel</h3>
          <p>Trendy short-form edit with fast cuts & transitions.</p>
        </div>
        <div className="video-card">
          <video
            className="portrait-video"
            src="videos/sample3.mp4"
            autoPlay
            muted
            loop
          />
          <h3>Travel Montage</h3>
          <p>Beautiful locations synced with beats & storytelling.</p>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
