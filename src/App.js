import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import LoginPage from "./components/Login"; 
import ForgotPassword from "./components/Forgotpassword"; 
import LandingPage from "./components/LandingPage"; 
import NewsFeed from "./components/NewFeed";
import CinemaPage from "./components/cinema";
import LifestylePage from "./components/Lifestyle";
import NotificationsPage from "./components/Notification";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/Footer";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
      
        <Routes>
          <Route path="/login" element={<LoginPage handleLogin={handleLogin} />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/newsfeed" element={<NewsFeed/>} />
          <Route path="/cinema" element={<CinemaPage/>} />
          <Route path="/lifestyle" element={<LifestylePage/>} />
          <Route path="/" element={<LandingPage />} /> 
          <Route path="/notifications" element={<NotificationsPage/>} />
        </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
