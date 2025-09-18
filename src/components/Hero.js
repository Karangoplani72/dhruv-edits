function Hero({ setShowForm }) {
  return (
    <section className="hero" id="hero">
      <h1>Welcome to DhruvEdits</h1>
      <p>Where your moments become timeless stories 🎬✨</p>
      <button onClick={() => setShowForm(true)}>Get Started</button>
    </section>
  );
}

export default Hero;
