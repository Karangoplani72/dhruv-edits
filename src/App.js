import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Form from "./components/Form";

function App() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Header />
      <Hero setShowForm={setShowForm} />
      <About />
      <Services />
      <Portfolio />
      <Contact setShowForm={setShowForm} />
      <Footer />
      {showForm && <Form setShowForm={setShowForm} />}
    </>
  );
}

export default App;
