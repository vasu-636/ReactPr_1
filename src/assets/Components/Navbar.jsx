const Navbar = () => {
  return (
    <header className="navigation py-2">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          {/* Logo */}
          <a className="navbar-brand" href="#home">
            <img
              src="assets/images/logo-color.png"
              alt="Prolab Logo"
              style={{ height: "45px" }}
            />
          </a>

          {/* Mobile toggle */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainmenu"
            aria-controls="mainmenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Nav links */}
          <div className="collapse navbar-collapse justify-content-end" id="mainmenu">
            <ul className="navbar-nav ml-auto align-items-center">
              <li className="nav-item">
                <a className="nav-link active" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#feature">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#pricing">
                  Products
                </a>
              </li>

              {/* Dropdown */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="pagesDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Pages
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Blog Grid</a></li>
                  <li><a className="dropdown-item" href="#">Blog Sidebar</a></li>
                  <li><a className="dropdown-item" href="#">Blog Details</a></li>
                  <li><a className="dropdown-item" href="#">Login</a></li>
                  <li><a className="dropdown-item" href="#">Register</a></li>
                  <li><a className="dropdown-item" href="#">404</a></li>
                </ul>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#testimonial-area">
                  Testimonial
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#faq">
                  FAQ
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;