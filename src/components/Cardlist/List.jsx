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
    />
  )})

  return (
    <div className="list">

      {/* <Card 
        url="https://www.athletespeakers.com/storage/celebrities/1627410490_Katie-Zaferes-Banner-1.jpg"
        rating='5.0'
        count='6'
        country='USA'
        text='Life lessons with Katie Zaferes'
        price='11,275'
      />

      <Card 
        url='https://static.toiimg.com/imagenext/toiblogs/photo/readersblog/wp-content/uploads/2020/04/Indian-Bride-Feature-Image.jpg'
        rating='5.0'
        count='30'
        country='USA'
        text='Learn Wedding Photography'
        price='10,500'
      /> */}

      {list}
  
    </div>
  )
}

export default List;