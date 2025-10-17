const aboutData = [
  {
    icon: "assets/images/camera.png",
    alt: "camera",
    title: "4K Camera",
    text: "Viewing hastily or written dearest elderly up weather. Direction so sweetness.",
  },
  {
    icon: "assets/images/console.png",
    alt: "console",
    title: "Control Panel",
    text: "Viewing hastily or written dearest elderly up weather. Direction so sweetness.",
  },
  {
    icon: "assets/images/battery.png",
    alt: "battery",
    title: "Battery Life",
    text: "Viewing hastily or written dearest elderly up weather. Direction so sweetness.",
  },
];

const AboutUs = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        {/* Section Heading */}
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-8">
            <h2 className="section-title">Why Prolab is Best</h2>
            <p className="section-subtitle">
              Prepared is me Marianne pleasure likewise debating. Wonder an unable
              except better stairs do ye admire.
            </p>
          </div>
        </div>

        {/* Dynamic feature boxes */}
        <div className="row">
          {aboutData.map((item, index) => (
            <div className="col-lg-4 col-md-6 mb-4" key={index}>
              <div className="about-box text-center  shadow-sm">
                <div className="about-icon mb-3">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="about-icon-img"
                  />
                </div>
                <h4 className="about-title">{item.title}</h4>
                <p className="about-text">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;