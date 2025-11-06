import React from "react";

const featuresDataLeft = [
  {
    icon: "assets/images/camera.png",
    title: "HD Camera",
    text: "Capture stunning 4K images and video from any altitude with full clarity.",
  },
  {
    icon: "assets/images/console.png",
    title: "Easy Control",
    text: "User-friendly remote control system designed for smooth handling.",
  },
  {
    icon: "assets/images/battery.png",
    title: "Long Battery Life",
    text: "Enjoy extended flight time with our durable lithium battery pack.",
  },
];

const featuresDataRight = [
  {
    icon: "assets/images/signal.png",
    title: "GPS Tracking",
    text: "Accurate real-time positioning ensures safe and easy drone navigation.",
  },
  {
    icon: "assets/images/pano.png",
    title: "Stable Flight",
    text: "Advanced stabilization technology ensures smooth and steady operation.",
  },
  {
    icon: "assets/images/selfie-stick.png",
    title: "Wi-Fi Connectivity",
    text: "Stream real-time footage and control your drone via mobile app.",
  },
];

const AttractiveFeatures = () => {
  return (
    <section id="features" className="py-5 text-center bg-white">
      <div className="container my-5">
        {/* Heading */}
        <div className="mb-5">
          <h2 className="fw-bold">Attractive Features</h2>
          <p className="text-muted">
            Discover the cutting-edge technologies that make Prolab drones stand out.
          </p>
        </div>

        {/* Layout: Left features - Drone Image - Right features */}
        <div className="row align-items-center">
          {/* Left Column */}
          <div className="col-md-4">
            {featuresDataLeft.map((item, index) => (
              <div key={index} className="d-flex align-items-center mb-4">
                <img
                  src={item.icon}
                  alt={item.title}
                  width="40"
                  className="me-3"
                />
                <div className="text-start">
                  <h5 className="fw-semibold">{item.title}</h5>
                  <p className="small text-muted mb-0">{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Center Drone Image */}
          <div className="col-md-4 my-4 my-md-0">
            <img
              src="assets/images/drone2.jpg"
              alt="Drone"
              className="img-fluid mx-auto d-block"
            />
          </div>

          {/* Right Column */}
          <div className="col-md-4">
            {featuresDataRight.map((item, index) => (
              <div key={index} className="d-flex align-items-center mb-4">
                <img
                  src={item.icon}
                  alt={item.title}
                  width="40"
                  className="me-3"
                />
                <div className="text-start">
                  <h5 className="fw-semibold">{item.title}</h5>
                  <p className="small text-muted mb-0">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AttractiveFeatures;
