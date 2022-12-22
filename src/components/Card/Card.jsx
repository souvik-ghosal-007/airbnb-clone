import React from "react";
import './Card.css';

const Card = (props) => {

  return (
    <div className="card">

      {props.openSpots === 0 && <div className="card-badge">Sold Out</div>}
      {props.openSpots !== 0 && <div className="card-badge">Online</div>}

      <img className="card-img" src={props.url} alt="" />

      <p className="card-rating"> &#9733; <strong className="rating">{props.rating}</strong> <span className="rating-count">({props.count}) </span> <span className="card-country">&#x2022; {props.country}</span> </p>
      
      <p className="card-text">{props.text}</p>
      
      <p className="card-price"><strong>From &#8377; {props.price}</strong> / person</p>
    </div>
  )
}

export default Card;