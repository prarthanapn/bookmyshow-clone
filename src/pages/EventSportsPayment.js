import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const seatPrices = {
  public: 1,
  golden: 1.5,
  diamond: 2,
};

const EventSportsPayment = () => {
  const location = useLocation();
  const { event, sport } = location.state || {}; // Access event or sport data
  const item = event || sport; // Determine whether it's an event or sport

  const [seatType, setSeatType] = useState("public");
  const [seatCount, setSeatCount] = useState(1);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  if (!item) {
    return <p className="text-center text-danger">No event or sport selected for booking.</p>;
  }

  const eventName = item.title || item.name || "Not Specified"; // Ensure proper event name
  const basePrice = parseFloat(item.price) || 0; // Convert price to number
  const totalPrice = (basePrice * seatCount * seatPrices[seatType]).toFixed(2);

  // Handle payment
  const handlePayment = () => {
    setPaymentSuccess(true);
  };

  // Handle ticket download
  const handleDownloadTicket = () => {
    const ticketContent = `🎟 Event/Sport Ticket 🎟\n----------------------\nEvent/Sport: ${eventName}\nSeat Type: ${seatType}\nSeats: ${seatCount}\nTotal Price: ₹${totalPrice}`;
    
    const blob = new Blob([ticketContent], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "Ticket.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center">Book Your Tickets</h2>
      <div className="card shadow-sm mx-auto" style={{ maxWidth: "500px" }}>
        <div className="card-body">
          <h5 className="card-title">{eventName}</h5>

          <p><strong>Base Price:</strong> ₹{basePrice.toFixed(2)} per seat</p>

          <label className="form-label">Select Seat Type:</label>
          <select className="form-select mb-3" value={seatType} onChange={(e) => setSeatType(e.target.value)}>
            {Object.keys(seatPrices).map((type) => (
              <option key={type} value={type}>
                {type.charAt(0).toUpperCase() + type.slice(1)} - ₹{(basePrice * seatPrices[type]).toFixed(2)}
              </option>
            ))}
          </select>

          <label className="form-label">Number of Seats:</label>
          <input
            type="number"
            className="form-control mb-3"
            value={seatCount}
            min="1"
            max="10"
            onChange={(e) => setSeatCount(Math.max(1, Math.min(10, Number(e.target.value) || 1)))}
          />

          <h5>Total Price: ₹{totalPrice}</h5>

          {!paymentSuccess ? (
            <button className="btn btn-success w-100" onClick={handlePayment}>
              Proceed to Payment
            </button>
          ) : (
            <div className="text-center">
              <h4 className="text-success">Payment Successful!</h4>
              <button className="btn btn-primary mt-3" onClick={handleDownloadTicket}>
                Download Ticket
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventSportsPayment;
