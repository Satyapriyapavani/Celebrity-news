
// import React, { useEffect } from "react";
// import { Link } from "react-router-dom";

// const Navbar = ({ isLoggedIn, handleLogout }) => {
//   // Function to close the menu
//   const closeMenu = () => {
//     const navbarCollapse = document.getElementById("navbarNav");
//     if (navbarCollapse && navbarCollapse.classList.contains("show")) {
//       navbarCollapse.classList.remove("show");
//     }
//   };

//   useEffect(() => {
//     // Add event listener for clicks outside the menu
//     const handleClickOutside = (event) => {
//       const navbar = document.querySelector(".navbar");
//       if (navbar && !navbar.contains(event.target)) {
//         closeMenu();
//       }
//     };

//     document.addEventListener("click", handleClickOutside);

//     // Cleanup the event listener on component unmount
//     return () => {
//       document.removeEventListener("click", handleClickOutside);
//     };
//   }, []);

//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#d32f2f" }}>
//       <div className="container-fluid">
//         <Link className="navbar-brand" to="/" style={{ display: "flex", alignItems: "center" }}>
//           <i className="fas fa-home" style={{ fontSize: "18px", color: "white", marginRight: "10px" }}></i>
//           TTT Celebrity-News
//         </Link>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav ms-auto">
//             <li className="nav-item">
//               <Link className="nav-link" to="/newsfeed" onClick={closeMenu}>
//                 News
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/cinema" onClick={closeMenu}>
//                 Cinema
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/lifestyle" onClick={closeMenu}>
//                 Lifestyle
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/notifications" onClick={closeMenu}>
//                 Notifications
//               </Link>
//             </li>
//             {isLoggedIn ? (
//               <li className="nav-item">
//                 <button className="btn btn-light" onClick={() => { handleLogout(); closeMenu(); }}>
//                   Logout
//                 </button>
//               </li>
//             ) : (
//               <li className="nav-item">
//                 <Link className="btn btn-light" to="/login" onClick={closeMenu}>
//                   Login
//                 </Link>
//               </li>
//             )}
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;






import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ isLoggedIn, handleLogout }) => {
  // Function to close the menu
  const closeMenu = () => {
    const navbarCollapse = document.getElementById("navbarNav");
    if (navbarCollapse && navbarCollapse.classList.contains("show")) {
      navbarCollapse.classList.remove("show");
    }
  };

  useEffect(() => {
    // Add event listener for clicks outside the menu
    const handleClickOutside = (event) => {
      const navbar = document.querySelector(".navbar");
      if (navbar && !navbar.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener("click", handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{ backgroundColor: "#d32f2f" }}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" style={{ display: "flex", alignItems: "center" }}>
          <i className="fas fa-home" style={{ fontSize: "18px", color: "white", marginRight: "10px" }}></i>
          TTT Celebrity-News
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/newsfeed" onClick={closeMenu}>
                News
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cinema" onClick={closeMenu}>
                Cinema
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/lifestyle" onClick={closeMenu}>
                Lifestyle
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/notifications" onClick={closeMenu}>
                Notifications
              </Link>
            </li>
            {isLoggedIn ? (
              <li className="nav-item">
                <button className="btn btn-light" onClick={() => { handleLogout(); closeMenu(); }}>
                  Logout
                </button>
              </li>
            ) : (
              <li className="nav-item">
                <Link className="btn btn-light" to="/login" onClick={closeMenu}>
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
