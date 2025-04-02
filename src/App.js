import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import SplashScreen from "./pages/SplashScreen";
import AuthPage from "./pages/AuthPage";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Events from "./pages/Events";
import Sports from "./pages/Sports";
import Navbar from "./components/Navbar";
import Payment from "./pages/Payment"; // Import the Payment page
import Ticket from "./pages/Ticket"; // Import the Ticket page
import EventSportsPayment from './pages/EventSportsPayment';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min"; 

function App() {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem("isAuthenticated") === "true");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      {loading ? (
        <SplashScreen />
      ) : (
        <>
          {isAuthenticated && (
            <Navbar 
              isAuthenticated={isAuthenticated} 
              onSignOut={() => {
                localStorage.removeItem("isAuthenticated");
                setIsAuthenticated(false);
              }} 
              toggleDarkMode={toggleDarkMode}
              darkMode={darkMode}
            />
          )}
          <div className={`min-vh-100 p-3 ${darkMode ? "bg-dark text-white" : "bg-light text-dark"}`}>
            <Routes>
              <Route path="/" element={isAuthenticated ? <Home darkMode={darkMode} /> : <Navigate to="/auth" />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/events" element={<Events />} />
              <Route path="/sports" element={<Sports />} />
              <Route path="/auth" element={<AuthPage setIsAuthenticated={setIsAuthenticated} />} />
              <Route path="/payment" element={<Payment />} /> {/* Payment Page Route Added */}
              <Route path="/ticket" element={<Ticket />} />
              <Route path="/eventsportspayment" element={<EventSportsPayment />} />
            </Routes>
          </div>
        </>
      )}
    </Router>
  );
}

export default App;
