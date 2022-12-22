import React from "react";
import './List.css';
import Card from '../Card/Card'
import cardData from './cardlist'

const List = () => {

  const list = cardData.map(it => {
    return (
            <Card 
              url={it.url}
              rating={it.rating}
              count={it.count}
              country={it.country}
              text={it.text}
              price={it.price}
              openSpots={it.openSpots}
            />
            )
    })

  return (
    <div className="list">

      {list}
  
    </div>
  )
}

export default List;