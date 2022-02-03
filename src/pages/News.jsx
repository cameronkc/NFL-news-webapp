import React from "react";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";

const News = ({ title, description, url, urlToImage }) => {
  return (
    <>
      <div className="mt-20">
        <div className="card card-bordered m-4">
          <figure>
            <img src={urlToImage} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {title}
              <div className="badge mx-2 badge-secondary">NEW</div>
            </h2>
            <p>{description}</p>
            <div className="justify-end card-actions">
              <button className="btn btn-secondary">
                <a href={url} target="_blank">
                  More info{" "}
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
