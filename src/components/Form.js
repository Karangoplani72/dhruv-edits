import React, { useState } from "react";
import "./Form.css";

export default function Form({ onClose }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", { name, email, message });
    alert("Thanks — your request was submitted!");

    // Reset and close
    setName("");
    setEmail("");
    setMessage("");
    if (onClose) onClose();
  };

  return (
    <div
      className="form-overlay"
      onClick={() => {
        if (onClose) onClose();
      }}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="form-container"
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside form
      >
        <h2>Get Started with DhruvEdits</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            aria-label="Your name"
          />

          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            aria-label="Your email"
          />

          <textarea
            placeholder="Tell us about your project..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="4"
            required
            aria-label="Project details"
          />

          <div className="form-buttons">
            <button type="submit" className="submit">
              Submit
            </button>
            <button
              type="button"
              className="cancel"
              onClick={() => {
                if (onClose) onClose();
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
