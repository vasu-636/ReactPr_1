// src/components/Testimonials.js
import React from "react";

const testimonialsData = [
  {
    id: 1,
    image: "assets/images/1.jpg",
    text:
      "Do play they miss give so up. Words to up style of since world. Way own uncommonly travelling now acceptance bed compliment.",
    name: "Natha Roy",
    role: "CEO of Apple",
  },
  {
    id: 2,
    image: "assets/images/2.jpg",
    text:
      "Way own uncommonly travelling now acceptance bed compliment solicitude. We leaf to snug on no need.",
    name: "Natasha Li",
    role: "CEO of Facebook",
  },
];

const Testimonial = () => {
  const id = "testiCarousel";
  return (
    <section id="testimonial-area" className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-4">
          <h2 className="fw-bold">Our Clients Say</h2>
          <p className="text-muted">Prepared is me marianne pleasure likewise debating.</p>
        </div>

        <div id={id} className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {testimonialsData.map((t, idx) => (
              <div className={`carousel-item ${idx === 0 ? "active" : ""}`} key={t.id}>
                <div className="row justify-content-center">
                  <div className="col-md-8">
                    <div className="card border-0 text-center p-4">
                      <img src={t.image} alt={t.name} className="rounded-circle mb-3" style={{ width: 90 }} />
                      <p className="mb-2">{t.text}</p>
                      <h6 className="mb-0">{t.name}</h6>
                      <small className="text-muted">{t.role}</small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="carousel-control-prev" type="button" data-bs-target={`#${id}`} data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target={`#${id}`} data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
