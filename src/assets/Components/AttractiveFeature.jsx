

const featuresData = [
  {
    icon: "assets/images/icons/gps.png",
    title: "GPS Tracking",
    text: "Accurate real-time positioning ensures safe and easy drone navigation.",
  },
  {
    icon: "assets/images/icons/camera.png",
    title: "HD Camera",
    text: "Capture stunning 4K images and video from any altitude with full clarity.",
  },
  {
    icon: "assets/images/icons/control.png",
    title: "Easy Control",
    text: "User-friendly remote control system designed for smooth handling.",
  },
  {
    icon: "assets/images/icons/battery.png",
    title: "Long Battery Life",
    text: "Enjoy extended flight time with our durable lithium battery pack.",
  },
  {
    icon: "assets/images/icons/propeller.png",
    title: "Stable Flight",
    text: "Advanced stabilization technology ensures smooth and steady operation.",
  },
  {
    icon: "assets/images/icons/wifi.png",
    title: "Wi-Fi Connectivity",
    text: "Stream real-time footage and control your drone via mobile app.",
  },
];

const AttractiveFeatures = () => {
  return (
    <section id="features" className="features-section">
      <div className="container text-center">
        {/* Section heading */}
        <div className="mb-5">
          <h2 className="section-title">Attractive Features</h2>
          <p className="section-subtitle">
            Discover the cutting-edge technologies that make Prolab drones stand out.
          </p>
        </div>

        {/* Dynamic features grid */}
        <div className="row">
          {featuresData.map((item, index) => (
            <div className="col-lg-4" key={index}>
              <div className="feature-box p-4 h-100">
                <div className="feature-icon mb-3">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="feature-icon-img"
                  />
                </div>
                <h5 className="feature-title">{item.title}</h5>
                <p className="feature-text">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AttractiveFeatures;
