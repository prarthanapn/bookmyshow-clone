import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Ticket() {
  const location = useLocation();
  const navigate = useNavigate();
  const movie = location.state?.movie;
  const seats = location.state?.seats;

  if (!movie || !seats) {
    return (
      <div className="container text-center mt-5">
        <h3>Invalid Ticket Details</h3>
        <button className="btn btn-primary mt-3" onClick={() => navigate("/")}>
          Back to Home
        </button>
      </div>
    );
  }

  const downloadTicket = () => {
    const ticketData = `
      🎟 Movie Ticket 🎟
      --------------------
      Movie: ${movie.name}
      Seats: ${seats.join(", ")}
      Price: $${seats.length * parseInt(movie.price.replace("$", ""))}
    `;
    const blob = new Blob([ticketData], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Movie_Ticket.txt";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="card shadow p-4 text-center" style={{ maxWidth: "400px" }}>
        <h2>🎟 Your Ticket</h2>
        <img src={movie.image} alt={movie.name} className="img-fluid rounded mb-3" />
        <p><strong>Movie:</strong> {movie.name}</p>
        <p><strong>Seats:</strong> {seats.join(", ")}</p>
        <p><strong>Total Price:</strong> ${seats.length * parseInt(movie.price.replace("$", ""))}</p>
        <button className="btn btn-success w-100 mb-2" onClick={downloadTicket}>Download Ticket</button>
        <br /><br />
        <button className="btn btn-primary w-100" onClick={() => navigate("/")}>Back to Home</button>
      </div>
    </div>
  );
}
