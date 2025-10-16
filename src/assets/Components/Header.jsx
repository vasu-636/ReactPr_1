// const Header = () => {
//     return (
// <nav className="navbar navbar-expand-lg bg-body-tertiary ">
//   <div className="container-fluid container">
//     <a className="navbar-brand" href="#"><img src="public\assets\images\logo-color.png" alt="" /></a>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon" />
//     </button>
//    <div className="d-flex">
//      <div className="collapse navbar-collapse " id="navbarSupportedContent">
//       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//         <li className="nav-item px-1 py-3">
//           <a className="nav-link fs-5 fw-bold " aria-current="page" href="#">Home</a>
//         </li>
//         <li className="nav-item px-1 py-3">
//           <a className="nav-link fs-5 fw-bold" href="#">About</a>
//         </li>
//         <li className="nav-item px-1 py-3">
//           <a className="nav-link fs-5 fw-bold" href="#">Features</a>
//         </li>
//         <li className="nav-item px-1 py-3">
//           <a className="nav-link fs-5 fw-bold" href="#">Products</a>
//         </li>
//         <li className="nav-item px-1 py-3 dropdown">
//           <a className="nav-link fs-5 fw-bold dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//             Pages
//           </a>
//           <ul className="dropdown-menu">
//             <li><a className="dropdown-item" href="#">Action</a></li>
//             <li><a className="dropdown-item" href="#">Another action</a></li>
//             <li><hr className="dropdown-divider" /></li>
//             <li><a className="dropdown-item" href="#">Something else here</a></li>
//           </ul>
//         </li>
//         <li className="nav-item px-1 py-3">
//           <a className="nav-link fs-5 fw-bold " aria-disabled="true">Testimonial</a>
//         </li>
//         <li className="nav-item px-1 py-3 ">
//           <a className="nav-link fs-5 fw-bold " aria-disabled="true">FAQ</a>
//         </li>
//         <li className="nav-item px-1 py-3">
//           <a className="nav-link fs-5 fw-bold " aria-disabled="true">Contact</a>
//         </li>
//       </ul>
//     </div>
//    </div>
//   </div>
// </nav>

//     )
// }

// export default Header

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary prolab-navbar"> {/* Added prolab-navbar */}
            <div className="container-fluid container">
                <a className="navbar-brand" href="#"><img src="public\assets\images\logo-color.png" alt="" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                {/* Removed the extra d-flex wrapper here */}
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0"> {/* Use ms-auto to push to right */}
                        <li className="nav-item px-1 py-3">
                            <a className="nav-link fs-5 fw-bold active" aria-current="page" href="#">Home</a> {/* Added .active */}
                        </li>
                        <li className="nav-item px-1 py-3">
                            <a className="nav-link fs-5 fw-bold" href="#">About</a>
                        </li>
                        <li className="nav-item px-1 py-3">
                            <a className="nav-link fs-5 fw-bold" href="#">Features</a>
                        </li>
                        <li className="nav-item px-1 py-3">
                            <a className="nav-link fs-5 fw-bold" href="#">Products</a>
                        </li>
                        <li className="nav-item px-1 py-3 dropdown">
                            <a className="nav-link fs-5 fw-bold dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Pages
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li className="nav-item px-1 py-3">
                            <a className="nav-link fs-5 fw-bold" aria-disabled="true">Testimonial</a>
                        </li>
                        <li className="nav-item px-1 py-3 ">
                            <a className="nav-link fs-5 fw-bold" aria-disabled="true">FAQ</a>
                        </li>
                        <li className="nav-item px-1 py-3">
                            <a className="nav-link fs-5 fw-bold" aria-disabled="true">Contact</a>
                        </li>
                    </ul>
                </div>
                {/* Added a new element for the line on the far right */}
                <div className="prolab-right-line d-none d-lg-block"></div> 
            </div>
        </nav>
    )
}

export default Header;