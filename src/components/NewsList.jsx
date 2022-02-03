import React, { useState, useEffect } from "react";
import axios from "axios";
import News from "../pages/News";

const NewsList = () => {
  const [articles, setArticles] = useState([]);
  const apiKey = process.env.REACT_APP_API_KEY;
  useEffect(() => {
    const getArticles = async () => {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=NFL&apiKey=${apiKey}`
      );
      setArticles(response.data.articles);
      console.log(response);
    };
    getArticles();
  }, []);
  return (
    <div className="lg:grid lg:grid-cols-3">
      {articles.map((article) => {
        return (
          <News
            title={article.title}
            description={article.description}
            url={article.url}
            urlToImage={article.urlToImage}
          />
        );
      })}
    </div>
  );
};

export default NewsList;
