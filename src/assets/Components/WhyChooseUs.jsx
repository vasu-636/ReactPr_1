import React from 'react'



const WhyChooseUs = () => {
    return (
        <section id="feature" className="wearebest-section text-center">
            <div className="container my-1">
                <div className="mb-5">
                    <h2 className="fw-bold">Why Choose Us </h2>
                    <p className="text-muted">
                        Prepared is me marianne pleasure likewise debating. Wonder an unable except better stairs <br /> do ye admire. His secure called esteem praise.
                    </p>
                </div>
                <div className="row align-items-center">
                    {/* Left: video with overlay */}
                    <div className="col-lg-6">
                        <div className="position-relative rounded overflow-hidden" style={{ maxWidth: "540px" }}>
                            <video
                                className="w-100 rounded"
                                src="assets/images/13772-251867974_small.mp4"
                                muted
                                loop
                                playsInline
                            />
                            <div
                                className="position-absolute top-0 start-0 w-100 h-100 rounded"
                                style={{
                                    background: "linear-gradient(135deg, rgba(2,80,197,0.5), rgba(212,63,141,0.5))",
                                }}
                            ></div>
                            <a
                                href="assets/images/13772-251867974_small.mp4"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="position-absolute top-50 start-50 translate-middle bg-white rounded-circle d-flex align-items-center justify-content-center"
                                style={{ width: "80px", height: "80px", color: "#6c63ff", fontSize: "28px" }}
                            >
                                <i className="fas fa-play"></i>
                            </a>
                        </div>
                    </div>

                    {/* Right: four boxes */}
                    <div className="col-lg-6">
                        <div className="row g-3">
                            <div className="col-6">
                                <div className="p-4 bg-primary text-white text-center rounded shadow-sm">
                                    <i className="fas fa-shield-alt fa-2x mb-2"></i>
                                    <h6>1 Year Guarantee</h6>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="p-4 bg-white text-dark text-center rounded shadow-sm">
                                    <i className="fas fa-truck fa-2x text-primary mb-2"></i>
                                    <h6>Free Shipping</h6>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="p-4 bg-light text-dark text-center rounded shadow-sm">
                                    <i className="fas fa-undo fa-2x text-danger mb-2"></i>
                                    <h6>Product Return</h6>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="p-4 bg-danger text-white text-center rounded shadow-sm">
                                    <i className="fas fa-headset fa-2x mb-2"></i>
                                    <h6>Dedicated Support</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyChooseUs