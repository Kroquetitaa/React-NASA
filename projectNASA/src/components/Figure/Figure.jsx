import React from "react";
import './Figure.css'

const Figure = ({ data }) => {
    return (
      <figure>
        <img src={data.url} alt={data.title} className="image" />
        <div className="window">
          <div className="title-bar">
            <h1 className="title">{data.title}</h1>
          </div>
          <div className="details-bar">
            <span>{data.date}</span>
            <span>{data.copyright}</span>
          </div>
          <div className="window-pane">{data.explanation}</div>
        </div>
      </figure>
    );
  };

  export default Figure