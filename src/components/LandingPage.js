
import React, { useState, useEffect } from "react";
import "../App.css"; 

const LandingPage = () => {
  const [topNews, setTopNews] = useState([]); 
  const [searchQuery, setSearchQuery] = useState(""); 


  useEffect(() => {
    fetch("http://localhost:5000/topNews")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setTopNews(data); 
      })
      .catch((error) => console.error("Error fetching news data:", error));
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredNews = (topNews || []).filter(news =>
    news.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className="landing-page">
        <header className="header">
          <h1>TTT Celebrity-News</h1>
          <p>The latest updates on your favorite stars!</p>
        </header>

   
        <div className="search-container">
          <div className="search-bar-container">
            <input
              type="text"
              className="search-bar"
              placeholder="Search for news..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />

          </div>
        </div>

        <main className="news-grid">

          {filteredNews.length > 0 && (
            <div className="highlighted-news">
              <img
                src={filteredNews[0].image}
                alt={filteredNews[0].title}
                className="highlighted-image"
              />
              <h2 className="highlighted-title">{filteredNews[0].title}</h2>
              <p className="highlighted-details">{filteredNews[0].details}</p>
            </div>
          )}


          {filteredNews.slice(1).map((news) => (
            <div key={news.id} className="news-card">
              <img src={news.image} alt={news.title} className="news-image" />
              <h2 className="news-title">{news.title}</h2>
              <p className="news-details">{news.details}</p>
            </div>
          ))}
        </main>
      </div>

    </div>
  );
};

export default LandingPage;
