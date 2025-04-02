import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Payment() {
  const location = useLocation();
  const navigate = useNavigate();
  const movie = location.state?.movie;
  const [step, setStep] = useState(1);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const seatRows = ["A", "B", "C", "D"];
  const seatNumbers = [1, 2, 3, 4, 5, 6, 7, 8];

  if (!movie) {
    return (
      <div className="container text-center mt-5">
        <h3>No movie selected!</h3>
        <button className="btn btn-primary mt-3" onClick={() => navigate("/movies")}>
          Back to Movies
        </button>
      </div>
    );
  }

  const toggleSeat = (seat) => {
    setSelectedSeats((prevSeats) =>
      prevSeats.includes(seat) ? prevSeats.filter((s) => s !== seat) : [...prevSeats, seat]
    );
  };

  const proceedToPayment = () => {
    if (selectedSeats.length === 0) {
      alert("Please select at least one seat!");
      return;
    }
    setStep(2);
  };

  const completePayment = () => {
    setStep(3);
  };

  return (
    <div className="payment-page">
      <div className="container mt-5">
        <div className="card shadow p-4">
          <h2 className="text-center mb-4">🎟 Booking: {movie.name}</h2>

          {/* Step 1: Seat Selection */}
          {step === 1 && (
            <>
              <h4 className="text-center">Select Your Seats</h4>
              <div className="seat-selection-container">
                {seatRows.map((row) => (
                  <div key={row} className="d-flex justify-content-center">
                    {seatNumbers.map((num) => {
                      const seat = `${row}${num}`;
                      return (
                        <button
                          key={seat}
                          className={`seat-btn ${selectedSeats.includes(seat) ? "selected" : ""}`}
                          onClick={() => toggleSeat(seat)}
                        >
                          {seat}
                        </button>
                      );
                    })}
                  </div>
                ))}
              </div>
              <button className="btn btn-primary mt-4 w-100" onClick={proceedToPayment}>
                Proceed to Payment
              </button>
            </>
          )}

          {/* Step 2: Payment */}
          {step === 2 && (
            <>
              <h4 className="text-center">💳 Payment</h4>
              <div className="text-center mt-3">
                <p><strong>Movie:</strong> {movie.name}</p>
                <p><strong>Seats:</strong> {selectedSeats.join(", ")}</p>
                <p><strong>Total Price:</strong> ${selectedSeats.length * parseInt(movie.price.replace("$", ""))}</p>
                <button className="btn btn-success w-100" onClick={completePayment}>Pay Now</button>
              </div>
            </>
          )}

          {/* Step 3: Ticket Download */}
          {step === 3 && (
            <>
              <h4 className="text-center text-success">✅ Payment Successful!</h4>
              <p className="text-center">Your tickets are confirmed.</p>
              <button
                className="btn btn-primary w-100"
                onClick={() => navigate("/ticket", { state: { movie, seats: selectedSeats } })}
              >
                Download Ticket 🎟
              </button>
            </>
          )}
        </div>
      </div>

      {/* Custom CSS */}
      <style>{`
        .payment-page {
          background-color:#dc143c; 
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .seat-selection-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 15px;
        }

        .seat-btn {
          width: 50px;
          height: 50px;
          margin: 5px;
          border: none;
          font-size: 14px;
          font-weight: bold;
          border-radius: 8px;
          background-color: #ddd; /* Default Seat Color */
          transition: 0.3s;
        }

        .seat-btn:hover {
          background-color: #b0bec5; /* Hover Color */
        }

        .seat-btn.selected {
          background-color: #28a745 !important; /* Selected Seat Color */
          color: white;
        }

        .card {
          background: white; /* Keeps card separate from page background */
          border-radius: 12px;
        }
      `}</style>
    </div>
  );
}