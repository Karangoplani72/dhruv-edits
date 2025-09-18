import React, { useState } from "react";
import "./Form.css";

export default function Form({ onClose }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const formData = {
      name,
      email,
      message,
    };

    try {
      const response = await fetch("https://formspree.io/f/mrbawnrv", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Thanks — your request was submitted!");
        setName("");
        setEmail("");
        setMessage("");
        if (onClose) onClose();
      } else {
        alert(data.error || "Oops! Something went wrong.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Oops! Something went wrong.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      className="form-overlay"
      onClick={() => onClose && onClose()}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="form-container"
        onClick={(e) => e.stopPropagation()}
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
            <button type="submit" className="submit" disabled={submitting}>
              {submitting ? "Submitting..." : "Submit"}
            </button>
            <button
              type="button"
              className="cancel"
              onClick={() => onClose && onClose()}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
