import React from "react";
import "./Card.scss"

const Card = ({ item }) => {
  return (
    <div className="video">
      <div className="video__thumbnail w-full">
        <img
        className=" w-full h-full"
          src={item.snippet.thumbnails.default.url}
          alt=""
        />
      </div>
      <div className="video__details flex">
        <div className="author">
          <img src="http://aninex.com/images/srvc/web_de_icon.png" alt="" />
        </div>
        <div className="title flex flex-col">
          <h3>
            {item.snippet.channelTitle}
          </h3>
          <a href="">{item.snippet.title}</a>
          <span>10M Views • 3 Months Ago</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
