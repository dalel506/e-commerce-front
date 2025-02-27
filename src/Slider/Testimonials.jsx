import React, { useState, useEffect } from "react";
import { Quote } from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Testimonials.css";

const testimonials = [
  {
    text: "Amazing product! I've never seen anything like this before.",
    name: "Jhon Doe",
    role: "Doctor",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    text: "Incredible product! nothing else compares to this.",
    name: "Jane Smith",
    role: "Beauty Expert",
    avatar: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    text: "Fantastic product! truly one of a kind.",
    name: "Emily Rose",
    role: "Makeup Artist",
    avatar: "https://randomuser.me/api/portraits/women/50.jpg",
  },
];

const TestimonialSection = () => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        setFade(true);
      }, 300);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="testimonial-section">
      <div className="container">
      <h2 className="fw-light display-5">TEMOINIAGE</h2>
        <div className="row justify-content-center">
          {/* Témoignage centré */}
          <div className="col-md-6 text-center">
            {/* Icône de citation au-dessus */}
            <div className="quote-icon">
              <Quote className="quote-svg" />
            </div>

            <div className={`testimonial-card ${fade ? "fade-in" : "fade-out"}`}>
              <p className="testimonial-text">{testimonials[index].text}</p>
              <div className="testimonial-author">
                <img
                  src={testimonials[index].avatar}
                  alt="User"
                  className="author-img"
                />
                <div>
                  <h5 className="author-name">{testimonials[index].name}</h5>
                  <p className="author-role">{testimonials[index].role}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>





      
    </div>
  );
};

export default TestimonialSection;
