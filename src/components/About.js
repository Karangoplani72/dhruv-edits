import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        {/* Left Side - Image */}
        <div className="about-image">
          <img
            src="/images/dhruv.jpg"
            alt="Dhruv - Video Editor"
          />
        </div>

        {/* Right Side - Content */}
        <div className="about-content">
          <h2>About Me</h2>
          <p>
            Hi, I’m <span>Dhruv</span> — a passionate{" "}
            <strong>video editor & storyteller</strong>.  
            I specialize in crafting cinematic edits, engaging short-form content,
            and creative visuals that connect with audiences.
          </p>
          <p>
            With <strong>50+ projects</strong> delivered and experience across
            YouTube, Instagram, and short films, I bring a mix of technical
            skills and creativity to every project.
          </p>

          {/* Skills / Tools */}
          <div className="skills">
            <span>🎬 Premiere Pro</span>
            <span>🎨 After Effects</span>
            <span>🎞️ DaVinci Resolve</span>
            <span>✨ Photoshop</span>
          </div>

          {/* Call to Action */}
          <div className="about-buttons">
            <a href="#contact" className="btn">Let’s Work Together</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
