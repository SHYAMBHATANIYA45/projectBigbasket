import React from "react";
import image from "../assets/image_1.jpg"; 
import Navbar from "./Navbar";



function Header() {
  return (
    <>

      <div
        className="header-section"
         style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "570px", // set height or it won’t show
          width: "100%",
          overflow:"hidden"
        }}
      >
        {/* <Navbar/> */}
        
       
        <div className="content text-center pt-4">
            <h2 className="pt-5 text-white">
              
                <i
              className="bi bi-cart4 me-1 ms-2 text-white" 
              style={{ fontFamily: "Poppins, sans-serif" }}
            ></i>
            <span>  BigBasket</span></h2>
            <h4 className="text-white p-4">
                we are for work something Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus, sint.
                Lorem ipsum dolor sit amet.
            </h4>
        </div>
      </div>
     
    </>
   
  );
}

export default Header;
