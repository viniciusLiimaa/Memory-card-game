import React from 'react';
import '../styles/card.css';

const Card = (props) => {

  const createCard = () => {

    return (

    <React.Fragment>
      <img src={props.imgUrl} alt="This is a card of the memory game" className="card"></img>
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