import React from "react";
import { Star } from "lucide-react"; // make sure lucide-react is installed

const dealProducts = [
  { name: "Drone (Black)", price: 99, oldPrice: 250, image: "assets/images/mydrone4.png" },
  { name: "Drone (Yellow)", price: 99, oldPrice: 250, image: "assets/images/mydrone3.png" }
];

const Deal = () => {
  const product = dealProducts[0]; 

  return (
    <section className="gradient-bg" style={{ padding: "110px 0", position: "relative" }}>
      <div className="curve curve-bottom"></div>

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <h2 style={{ fontSize: "40px", lineHeight: "50px", fontWeight: 700, marginBottom: "13px", color: "#000" }}>
            Deal Of the Week
          </h2>
          <p style={{ fontSize: "16px", lineHeight: "26px", color: "#222", maxWidth: "650px", margin: "0 auto" }}>
            Prepared is me marianne pleasure likewise debating. Wonder an unable except better stairs do ye admire.
          </p>
        </div>

        <div style={{
          background: "#fff",
          borderRadius: "3px",
          padding: "40px",
          boxShadow: "0 5px 20px rgba(0,0,0,0.1)"
        }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "40px",
            alignItems: "center"
          }}>
            <div style={{ textAlign: "center" }}>
              <img src={product.image} alt={product.name} style={{ maxWidth: "100%", height: "auto" }} />
            </div>
            <div>
              <div style={{ display: "flex", gap: "5px", marginBottom: "10px" }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="#f9bd22" color="#f9bd22" />
                ))}
              </div>
              <h4 style={{ fontSize: "24px", fontWeight: 600, marginBottom: "15px" }}>{product.name}</h4>
              <p style={{ fontSize: "16px", lineHeight: "26px", color: "#555", marginBottom: "20px" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam illo reiciendis saepe molestias veritatis!
              </p>
              <div style={{ marginBottom: "25px" }}>
                <span className="gradient-text" style={{ fontSize: "30px", fontWeight: 900, marginRight: "15px" }}>
                  ${product.price}
                </span>
                <del style={{ fontSize: "18px", color: "#888" }}>${product.oldPrice}</del>
              </div>
              <button className="mybtn1" style={{ cursor: "pointer", border: "none" }}>
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Deal;
