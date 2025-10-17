const bestData = [
  {
    icon: "assets/images/signal.png",
    title: "Powerful Antenna",
    text: "New had happen unable uneasy. Drawings pronounce can be followed improved out.",
  },
  {
    icon: "assets/images/selfie-stick.png",
    title: "3-Axis Stabilization",
    text: "New had happen unable uneasy. Drawings pronounce can be followed improved out.",
  },
  {
    icon: "assets/images/camera.png",
    title: "4K / 1080P video capture",
    text: "New had happen unable uneasy. Drawings pronounce can be followed improved out.",
  },
  {
    icon: "assets/images/pano.png",
    title: "Wide angle lens",
    text: "New had happen unable uneasy. Drawings pronounce can be followed improved out.",
  },
];

 const WeAreBestLeft = () => {
  return (
    <section id="feature" className="wearebest-section">
      <div className="container">
        <div className="row align-items-center">
          {/* Left: Drone image */}
          <div className="col-lg-6 text-center mb-4 mb-lg-0 order-1 order-lg-1">
            <img
              src="assets/images/mydrone5.png"
              alt="Prolab Drone"
              className="img-fluid best-drone-img"
            />
          </div>

          {/* Right: Dynamic features */}
          <div className="col-lg-6 order-2 order-lg-2">
           <h2 className="section-title my-4">A Drone Can Make Your Life Easy and Fast.</h2>

            <div className="row">
              {bestData.map((item, index) => (
                <div className="col-md-6 mb-4" key={index}>
                  <div className="best-box d-flex align-items-start">
                    <div className="best-icon me-3">
                      <img
                        src={item.icon}
                        alt={item.title}
                        className="best-icon-img"
                      />
                    </div>
                    <div>
                      <h5 className="best-title">{item.title}</h5>
                      <p className="best-text">{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeAreBestLeft;