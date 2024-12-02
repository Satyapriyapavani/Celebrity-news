
import React, { useState, useEffect } from "react";
import "../App.css"; 

const CinemaPage = () => {
  const [hindiMovies, setHindiMovies] = useState([]);
  const [teluguMovies, setTeluguMovies] = useState([]);
  const [hindiStartIndex, setHindiStartIndex] = useState(0);
  const [teluguStartIndex, setTeluguStartIndex] = useState(0);

  const moviesPerClick = 3;

  useEffect(() => {
    fetch("http://localhost:5000/hindiMovies")
      .then((response) => response.json())
      .then((data) => {
        setHindiMovies(data); 
      })
      .catch((error) => console.error("Error fetching Hindi movies:", error));
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/teluguMovies")
      .then((response) => response.json())
      .then((data) => {
        setTeluguMovies(data); 
      })
      .catch((error) => console.error("Error fetching Telugu movies:", error));
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const showNextHindiMovies = () => {
    if (hindiStartIndex + moviesPerClick < hindiMovies.length) {
      setHindiStartIndex(hindiStartIndex + moviesPerClick);
    }
  };

  const showNextTeluguMovies = () => {
    if (teluguStartIndex + moviesPerClick < teluguMovies.length) {
      setTeluguStartIndex(teluguStartIndex + moviesPerClick);
    }
  };

  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}>Movies Coming Soon</h1>

      <h2 style={{ textAlign: "center" }}>Hindi Movies</h2>
      <div className="movie-row" >
        {hindiMovies.slice(hindiStartIndex, hindiStartIndex + moviesPerClick).map((movie) => (
          <div key={movie.id} className="movie-card-container" >
            <div className="movie-card" style={{height:"400px"}}>
              <img src={movie.poster} alt={movie.title} style={{height:"200px"}} />
              <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.description}</p>
                <p>Release Date: {movie.releaseDate}</p>
              </div>
            </div>
          </div>
        ))}
        <button className="show-more-button" onClick={showNextHindiMovies}>
          <span className="arrow">{'>'}</span> 
        </button>
      </div>
      <br></br>

      <h2 style={{ textAlign: "center" }}>Telugu Movies</h2>
      <div className="movie-row">
        {teluguMovies.slice(teluguStartIndex, teluguStartIndex + moviesPerClick).map((movie) => (
          <div key={movie.id} className="movie-card-container">
            <div className="movie-card" style={{height:"400px"}}>
              <img src={movie.poster} alt={movie.title}  style={{height:"200px"}}/>
              <div className="movie-info" >
                <h3>{movie.title}</h3>
                <p>{movie.description}</p>
                <p>Release Date: {movie.releaseDate}</p>
              </div>
            </div>
          </div>
        ))}
        <button className="show-more-button" onClick={showNextTeluguMovies}>
          <span className="arrow">{'>'}</span>
        </button>
      </div>
    </div>
  );
};

export default CinemaPage;
