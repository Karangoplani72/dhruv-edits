import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <div className="about-container">
        {/* Left Side - Profile */}
        <div className="about-image">
          <img src="images/dhruv.jpg" alt="Profile" />
          <div className="gold-glow"></div>
        </div>

        {/* Right Side - Content */}
        <div className="about-text">
          <p className="intro">
            Hey, I’m Dhruv 👋  
            I specialize in creating impactful designs and edits that help brands & creators shine online.
          </p>

          <h3>Areas of Expertise</h3>
          <ul>
            <li>➤ Thumbnail Design</li>
            <li>➤ Post Design</li>
            <li>➤ Social Media Branding</li>
            <li>➤ Long-form Video Editing <span>(including Podcasts)</span></li>
            <li>➤ Short-form Video Editing <span>(YT Shorts, Instagram Reels, TikTok)</span></li>
          </ul>

          <h3>Proficiency</h3>
          <ul>
            <li>➤ Using software for design & editing</li>
            <li>➤ Experimental Video Editing</li>
            <li>➤ Using Graphics & Elements in Video Editing</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
