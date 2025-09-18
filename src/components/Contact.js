import { useState } from "react";
import { FaEnvelope, FaInstagram, FaLinkedin, FaPhone } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    const response = await fetch("https://formspree.io/f/mrbawnrv", { // ⬅️ replace with your Formspree endpoint
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      setStatus("SUCCESS");
      form.reset();
    } else {
      setStatus("ERROR");
    }
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <p className="tagline">Turning your vision into edits. Drop me a line 👇</p>

      <div className="contact-container">
        {/* Left Info */}
        <div className="contact-info">
          <div className="info-item">
            <FaEnvelope className="icon" />
            <p>dhruvnankani8@gmail.com</p>
          </div>
          <div className="info-item">
            <FaPhone className="icon" />
            <p>+91 91454 92599</p>
          </div>

          <div className="socials">
            <a href="https://instagram.com/dhruv.nankani_/" target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a href="https://linkedin.com/in/dhruv-nankani-333878302/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            </div>
        </div>

        {/* Right Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>

          {status === "SUCCESS" && <p className="success">✅ Message sent successfully!</p>}
          {status === "ERROR" && <p className="error">❌ Something went wrong. Try again!</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
