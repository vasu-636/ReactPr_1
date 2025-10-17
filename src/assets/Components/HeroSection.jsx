const HeroSection = () => {
  return (
    <section id="home" className="hero-area my-3">
      <div className="container py-1">
        <div className="row align-items-center">
          {/* Left: Drone image */}
          <div className="col-lg-6 text-center">
            <div className="right-img">
              <img
                src="assets/images/mydrone1.png"
                alt="Drone"
                className="img-fluid hero-img"
              />
            </div>
          </div>

          {/* Right: Text content */}
          <div className="col-lg-6 d-flex align-self-center">
            <div className="left-content">
              <div className="content">
                <h1 className="hero-title">Best quality Drone for your daily life</h1>
                <p className="hero-subtitle">
                  Effects present letters inquiry no an removed or friends. Desire behind
                  latter me though in. Supposing shameless am engrossed itatibus additions.
                </p>
                <div className="links">
                  <a href="#pricing" className="btn hero-btn"><span>Buy Now</span></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;