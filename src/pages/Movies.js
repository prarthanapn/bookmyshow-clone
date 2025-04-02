import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const movies = [
  { name: "Black Bag", genre: "Action", language: "English", releaseDate: "2023", price: "$10", trailer: "n_56L6WzLT8", image: "/assets/movies/Black Bag.avif" },
  { name: "Chhaava", genre: "Drama", language: "Hindi", releaseDate: "2024", price: "$12", trailer: "77vRyWNqZjM", image: "/assets/movies/Chhaava.avif" },
  { name: "Court State", genre: "Thriller", language: "English", releaseDate: "2022", price: "$11", trailer: "kEziwmmMH_U", image: "/assets/movies/Courtstate.avif" },
  { name: "Empuraan", genre: "Action", language: "Malayalam", releaseDate: "2024", price: "$13", trailer: "PGqltBCo6cU", image: "/assets/movies/Empuraan.avif" },
  { name: "Interstellar", genre: "Sci-Fi", language: "English", releaseDate: "2014", price: "$15", trailer: "zSWdZVtXT7E", image: "/assets/movies/Intersteller.avif" },
  { name: "Mad Square", genre: "Comedy", language: "English", releaseDate: "2021", price: "$9", trailer: "x9jlQ0_K5Zc", image: "/assets/movies/Mad Square.avif" },
  { name: "Middle Class Family", genre: "Drama", language: "Kannada", releaseDate: "2023", price: "$10", trailer: "iiKYKUVP6Ic", image: "/assets/movies/Middle Class Family.avif" },
  { name: "Mithde", genre: "Thriller", language: "Hindi", releaseDate: "2022", price: "$12", trailer: "Jt_phYOqL9c", image: "/assets/movies/Mithde.avif" },
  { name: "Moana 2", genre: "Animation", language: "English", releaseDate: "2024", price: "$10", trailer: "hDZ7y8RP5HE", image: "/assets/movies/Moana2.avif" },
  { name: "Sikandar", genre: "Action", language: "Hindi", releaseDate: "2024", price: "$14", trailer: "yab_2u7a12M", image: "/assets/movies/Sikandar.avif" },
  { name: "Six Each", genre: "Drama", language: "Tamil", releaseDate: "2023", price: "$11", trailer: "DmiODNxFEf0", image: "/assets/movies/Six Each.avif" },
  { name: "The Diplomat", genre: "Thriller", language: "Hindi", releaseDate: "2023", price: "$13", trailer: "CnEOLuCojY0", image: "/assets/movies/The Diplomat.avif" },
  { name: "Snow White", genre: "Fantasy", language: "English", releaseDate: "2024", price: "$12", trailer: "iV46TJKL8cU", image: "/assets/movies/Snow White.avif" },
  { name: "The Wild Robot", genre: "Animation", language: "English", releaseDate: "2025", price: "$11", trailer: "67vbA5ZJdKQ", image: "/assets/movies/The Wild Robot.avif" },
  { name: "Veera Dheera Shoora", genre: "Action", language: "Telugu", releaseDate: "2024", price: "$14", trailer: "vHPae4sZbu8", image: "/assets/movies/Veera Dheera Sooran.avif" }
];

export default function MovieList() {
  const [genre, setGenre] = useState("all");
  const [language, setLanguage] = useState("all");
  const [selectedTrailer, setSelectedTrailer] = useState(null);
  const navigate = useNavigate();

  const filteredMovies = movies.filter(
    (movie) =>
      (genre === "all" || movie.genre === genre) &&
      (language === "all" || movie.language === language)
  );

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-white bg-white border border-3 border-grey rounded-pill p-2">
        <div className="container">
          <Link className="navbar-brand" to="/">Movie Hub</Link>
          <div className="navbar-nav">
            <Link className="nav-link fw-bold" to="/">Home</Link>
          </div>
        </div>
      </nav>

      <div className="container mt-4">
        <h2 className="text-center text-danger mb-4">🎬 Watch Your Favorite Movie! 🍿</h2>

        {/* Filter Section */}
        <div className="row mb-4">
          <div className="col-md-3">
            <select className="form-select" onChange={(e) => setGenre(e.target.value)}>
              <option value="all">All Genres</option>
              <option value="Action">Action</option>
              <option value="Sci-Fi">Sci-Fi</option>
              <option value="Thriller">Thriller</option>
              <option value="Drama">Drama</option>
              <option value="Comedy">Comedy</option>
              <option value="Fantasy">Fantasy</option>
              <option value="Animation">Animation</option>
            </select>
          </div>
          <div className="col-md-3">
            <select className="form-select" onChange={(e) => setLanguage(e.target.value)}>
              <option value="all">All Languages</option>
              <option value="English">English</option>
              <option value="Hindi">Hindi</option>
              <option value="Malayalam">Malayalam</option>
              <option value="Telugu">Telugu</option>
              <option value="Tamil">Tamil</option>
              <option value="Kannada">Kannada</option>
            </select>
          </div>
        </div>

        {/* Movie Cards */}
        <div className="row">
          {filteredMovies.map((movie, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card p-3 shadow-sm">
                <img src={movie.image} className="card-img-top" alt={movie.name} />
                <div className="card-body">
                  <h5 className="card-title">{movie.name}</h5>
                  <p className="card-text">🎭 Genre: {movie.genre}</p>
                  <p className="card-text">🌍 Language: {movie.language}</p>
                  <p className="card-text">📅 Release Date: {movie.releaseDate}</p>
                  <p className="card-text">💰 Price: {movie.price}</p>
                  <div className="mt-2 d-flex gap-2">
                    <button 
                      className="btn btn-danger" 
                      onClick={() => navigate("/payment", { state: { movie } })}
                    >
                      🎟 Buy Now
                    </button>
                    <button
                      className="btn btn-primary"
                      onClick={() => setSelectedTrailer(selectedTrailer === movie.trailer ? null : movie.trailer)}
                    >
                      {selectedTrailer === movie.trailer ? "❌ Hide Trailer" : "▶ Watch Trailer"}
                    </button>
                  </div>

                  {/* Show Trailer */}
                  {selectedTrailer === movie.trailer && (
                    <div className="mt-3">
                      <iframe
                        width="100%"
                        height="200"
                        src={`https://www.youtube.com/embed/${movie.trailer}`}
                        title={`Trailer for ${movie.name}`}
                        frameBorder="0"
                        allowFullScreen
                      ></iframe>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
