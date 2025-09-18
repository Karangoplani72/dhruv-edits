import React, { useState, useEffect, useRef } from "react";
import "./Services.css";
import { FaUsers, FaVideo, FaStar } from "react-icons/fa";

function Counter({ end, duration }) {
  const [count, setCount] = useState(0);
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(ref.current);
  }, []);

  useEffect(() => {
    if (isVisible) {
      let start = 0;
      const increment = end / (duration / 20); // step
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(timer);
        }
        setCount(Math.floor(start));
      }, 20);
    }
  }, [isVisible, end, duration]);

  return <h3 ref={ref}>{count}+</h3>;
}

function Services() {
  return (
    <section className="services" id="services">
      <h2>Services & Achievements</h2>
      <div className="stats-row">
        <div className="stat-card">
          <FaUsers className="stat-icon" />
          <Counter end={50} duration={2000} />
          <p>Happy Clients</p>
        </div>
        <div className="stat-card">
          <FaVideo className="stat-icon" />
          <Counter end={200} duration={2500} />
          <p>Videos Delivered</p>
        </div>
        <div className="stat-card">
          <FaStar className="stat-icon" />
          <Counter end={5} duration={1500} />
          <p>Years Experience</p>
        </div>
      </div>
    </section>
  );
}

export default Services;
