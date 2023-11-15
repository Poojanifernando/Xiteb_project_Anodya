import React, { Profiler, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


//all the impors of componenets
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Dashboard from "./components/Dashboard";

import Prescription from "./components/User/prescription";
import GetPrescription from "./components/Pharmacy/getPrescription";
import QuotationView from "./components/User/QuotationView";











export default function Router() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          {/* to route the basic pages  */}
          <Route exact path="/" element={<Landing />} />
          <Route  path="/dashboard" element={<Dashboard />} />
          <Route  path="/register" element={<Register />} />
          <Route  path="/login" element={<Login />} />
        
          {/* to routes to user pages */}
          <Route  path="/Prescription" element={<Prescription />} />
          <Route  path="/GetPrescription" element={<GetPrescription />} />

          {/* to route the Pharmacy pages */}
          <Route  path="/QuotationView" element={<QuotationView />} />

           

          
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
