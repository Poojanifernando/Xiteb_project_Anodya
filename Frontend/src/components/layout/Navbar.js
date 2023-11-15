// navigation bar


import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  let userRole = localStorage.getItem("userRole");

  const handleSubmit = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userRole");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">

                {/* user pages */} 

                <a
                  style={{
                    display: userRole == "user" ? "flex" : "none",
                    textDecoration: "none",
                  }}
                  className="sidebarListItem"
                  href="/dashboard"
                  aria-current="page"
                >
                  Home
                </a>

                <a
                  style={{
                    display: userRole == "user" ? "flex" : "none",
                    textDecoration: "none",
                  }}
                  className="sidebarListItem"
                  aria-current="page"
                  href="/Prescription "
                >
                  Prescription 
                </a>


                <a
                  style={{
                    display: userRole == "user" ? "flex" : "none",
                    textDecoration: "none",
                  }}
                  className="sidebarListItem"
                  aria-current="page"
                  href="/QuotationView "
                >
                  QuotationView 
                </a>
                
                <a
                  style={{
                    display: userRole == "Pharmacy" ? "flex" : "none",
                    textDecoration: "none",
                  }}
                  className="sidebarListItem"
                  aria-current="page"
                  href="/GetPrescription "
                >
                  View Prescription 
                </a>
               
               
             
                
              
                

              </div>
            </div>
          </div>
        
          <button
            onClick={handleSubmit}
            className="btn btn-primary"
            type="submit"
            style={{
              float: "right",
              marginRight: "10px",
              display: userRole ? "flex" : "none",
            }}
          >
            {"Logout"}
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
