

import React, { useEffect, useState } from "react";
import "../App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 

const LifestylePage = () => {
  const [articles, setArticles] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [newArticle, setNewArticle] = useState({
    title: "",
    description: "",
    image: "",
  });

  useEffect(() => {

    fetch("http://localhost:5000/articles")
      .then((response) => response.json())
      .then((data) => setArticles(data))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewArticle({ ...newArticle, [name]: value });
  };


  const handleSubmitArticle = (e) => {
    e.preventDefault();

 
    fetch("http://localhost:5000/articles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newArticle),
    })
      .then((response) => response.json())
      .then((data) => {

        setArticles([...articles, data]);

        const notification = {
          message: `New article posted: ${newArticle.title}`,
        };

        fetch("http://localhost:5000/notifications", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(notification),
        }).catch((error) => console.error("Error posting notification:", error));


        setNewArticle({ title: "", description: "", image: "" });
        setIsFormVisible(false);

        toast.success("Your article has been posted successfully!");
      })
      .catch((error) => {
        console.error("Error posting article:", error);
        toast.error("Failed to post the article.");
      });
  };
    const handleShare = (title, url) => {
    if (navigator.share) {

      navigator.share({
        title: title,
        url: url,
      }).catch((error) => {
        console.error("Error sharing:", error);
      });
    } else {

      alert(`Share this article: ${title}\n${url}`);
    }
  };


  return (
    <div className="lifestyle-container">
      <ToastContainer position="top-right" autoClose={3000} />

      <h1 className="page-title">Celebrity News</h1>

      <button
        className="post-button"
        onClick={() => setIsFormVisible(!isFormVisible)}
      >
        Post an Article
      </button>

      {isFormVisible && (
        <div className="post-article-form">
          <h3>Post an Article</h3>
          <form onSubmit={handleSubmitArticle}>
            <div className="form-group">
              <label>Title:</label>
              <input
                type="text"
                name="title"
                value={newArticle.title}
                onChange={handleInputChange}
                placeholder="Article Title"
                required
              />
            </div>
            <div className="form-group">
              <label>Description:</label>
              <textarea
                name="description"
                value={newArticle.description}
                onChange={handleInputChange}
                placeholder="Article Description"
                required
              />
            </div>
            <div className="form-group">
              <label>Image URL:</label>
              <input
                type="url"
                name="image"
                value={newArticle.image}
                onChange={handleInputChange}
                placeholder="Image URL"
                required
              />
            </div>
            <button type="submit" className="submit-button">
              Post Article
            </button>
          </form>
        </div>
      )}

      <div className="article-list">
        {articles.length > 0 ? (
          articles.map((article) => (
            <div key={article.id} className="article-item">
              <img src={article.image} alt={article.title} className="article-image" />
              <div className="article-details">
                <h3 className="article-title">{article.title}</h3>
                <p className="article-description">{article.description}</p>
                <button
                  className="share-button"
                  onClick={() => handleShare(article.title, window.location.href)}
                >
                  <i className="fas fa-share-alt"></i>
                </button>
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

export default LifestylePage;
