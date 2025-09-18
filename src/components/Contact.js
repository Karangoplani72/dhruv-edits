function Contact({ setShowForm }) {
  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>
      <p>
        Interested in collaborating? Let’s create something amazing together.
      </p>
      <button onClick={() => setShowForm(true)}>Get in Touch</button>
    </section>
  );
}

export default Contact;
