import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import './Navbar.css'
function Navbar() {
  const [isMobile, setisMobile] = useState(window.innerWidth < 700);
  const [showMobile, setShowMobile] = useState(false);

useEffect(() => {
    const handleResize = () => setisMobile(window.innerWidth < 700);
    window.addEventListener("resize", handleResize);
 
  }, []);

  
    return (
    <nav className="navbar navbar-expand-lg navbar-dark gradient-navbar">
      <div className="container-fluid d-flex py-2">
        <div className="d-flex gap-5">
          <div className="fw-bold d-flex align-items-center">
            <i
              className="bi bi-cart  me-1 ms-2 text-white"
              style={{ fontFamily: "Poppins, sans-serif" }}
            ></i>
            <span className=" text-white">bigBasket</span>
          </div>

          {/* Desktop >700 */}


          {!isMobile && (
            <div className="d-flex text-end gap-3">
              <Link to="/home" className="text-decoration-none text-white ">
                Home
              </Link>
              <Link to="/list" className="text-decoration-none text-white">
                Product
              </Link>
            
             
               <Link
                to="/admin"
                className=" text-decoration-none text-white admin"
                onClick={() => setShowMobile(false)}
              >
                Admin
              </Link>
           
            </div>
          )}


          {/* mobile*/}



          {isMobile&&(
            <div className="mobile-menu-wrapper">
            <button className="btn btn-outline-light menu " 
            onClick={()=>setShowMobile(!showMobile)}>
              <i className="bi bi-list "></i>
            </button>
          

          {isMobile && showMobile && (
            <div className="d-lg-none text-light ">
              <Link
                to="/home"
                className=" text-decoration-none text-white p-2"
              
              >
                Home
              </Link>
              <Link
                to="/list"
                className="text-decoration-none text-white p-2"
                
              >
                Product
              </Link>
              <Link
                to="/admin"
                className="text-decoration-none text-white p-2"
               
              >
                Admin
              </Link>
            </div>
             
          
          )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

