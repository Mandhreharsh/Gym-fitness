import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Classes from "./pages/Classes";
import Trainers from "./pages/Trainers";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { useState, useEffect } from 'react';
import axios from 'axios';
import ScrollToTop from "./components/ScrollToTop";
import Otp from './pages/Otp';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true); // <-- to handle loading state

  return (
    <div>
      {/* Show Navbar only if user is logged in */}
      {isLoggedIn && <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}

      <ScrollToTop />

      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/otp" element={<Otp />} />

        {/* Protected Routes */}
        {isLoggedIn ? (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/classes" element={<Classes />} />
            <Route path="/trainers" element={<Trainers />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
          </>
        ) : (
          <Route path="*" element={<Navigate to="/login" />} />
        )}
      </Routes>
    </div>
  );
}

export default App;
