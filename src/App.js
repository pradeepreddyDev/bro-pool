import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Profile from "./components/Profile";
import OfferRide from "./components/OfferRide";
import FindRide from "./components/FindRide";
import ResetPassword from "./components/ResetPassword";
import EnableLocationAccess from "./components/EnableLocationAccess";
import Myrides from "./components/Myrides";
import RequestRide from "./components/RequestRide";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/offer-ride" element={<OfferRide />} />
          <Route path="/find-ride" element={<FindRide />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/enable-location" element={<EnableLocationAccess />} />
          <Route path="/my-rides" element={<Myrides />} />
          <Route path="/request-ride" element={<RequestRide />} />
        </Routes>
      </div>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
