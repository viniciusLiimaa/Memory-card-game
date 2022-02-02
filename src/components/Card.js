import React from 'react';
import '../styles/card.css';

const Card = () => {

  const createCard = () => {
    let imgUrl = "https://www.pngmart.com/files/2/Pikachu-PNG-Transparent-Image.png"

    return (

    <React.Fragment>
      <img src={imgUrl} alt="This is a card of the memory game" className="card"></img>
      <img src={imgUrl} alt="This is a card of the memory game" className="card"></img>
    </React.Fragment>
    )
  }

  return ( 
    <React.Fragment>
      {createCard()}
    </React.Fragment>
  )

}

export default Card;