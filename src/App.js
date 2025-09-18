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
import Clients from "./components/Clients";

function App() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Header />
      <Hero setShowForm={setShowForm} />
      <About />
      <Services />
      <Clients />
      <Portfolio />
      <Contact setShowForm={setShowForm} />
      <Footer />
      {showForm && <Form onClose={() => setShowForm(false)} />}
    </>
  );
}

export default App;
