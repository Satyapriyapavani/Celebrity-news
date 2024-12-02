import React, { useEffect, useState } from 'react';
import "./news.css"

const NewsFeed = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Fetch articles from the local server
    fetch('http://localhost:5000/News')
      .then((response) => response.json())
      .then((data) => setArticles(data))
      .catch((error) => console.error('Error fetching data: ', error));
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="container my-4">
      <div className="row">
        <h2>Top Celebrity News</h2>
        {articles.length > 0 ? (
          articles.map((article, index) => (
            <div key={index} className="col-md-6">
              <div className="card mb-3">
                <img src={article.image} className="card-img-top" alt={article.title} />
                <div className="card-body">
                  <h5 className="card-title">{article.title}</h5>
                  <p className="card-text">{article.description}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default NewsFeed;
