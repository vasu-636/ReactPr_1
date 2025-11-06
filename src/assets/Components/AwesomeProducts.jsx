import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const products = [
  { img: "assets/images/mydrone1.png", price: 135, oldPrice: 193, name: "Prolab Blue" },
  { img: "assets/images/mydrone3.png", price: 135, oldPrice: 193, name: "Prolab Blue" },
  { img: "assets/images/mydrone4.png", price: 135, oldPrice: 193, name: "Prolab Blue" },
  { img: "assets/images/mydrone5.png", price: 135, oldPrice: 193, name: "Prolab Blue" },
];

const AwesomeProducts = () => {
  return (
    <section id="features" className="py-5 text-center bg-white">
        <div className="container py-5 my-5">
        <div className="mb-5">
          <h2 className="fw-bold">Our Awesome Products</h2>
          <p className="text-muted">
            Discover the cutting-edge technologies that make Prolab drones stand out.
          </p>
        </div>
      <div className="row justify-content-center">
        {products.map((p, i) => (
          <div key={i} className="col-md-3 col-sm-6 mb-4">
            <div className="card border-0 shadow-sm rounded-3 overflow-hidden text-center">
              <div className="card-img-top  d-flex justify-content-center align-items-center" style={{ height: "200px", backgroundColor: "#ecd2e6" }}>
                <img src={p.img} alt={p.name} width="150" height="150" style={{ objectFit: "contain" }} />
              </div>
              <div className="card-body" style={{ backgroundColor: "#f2f6fc" }}>
                <div className="text-success mb-2">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /> 4.5
                </div>
                <h5 className="text-primary">${p.price} <span className="text-muted text-decoration-line-through fs-6">${p.oldPrice}</span></h5>
                <h6 className="fw-bold">{p.name}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
    </section>
  );
};

export default AwesomeProducts;
