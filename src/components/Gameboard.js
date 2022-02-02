import React, {useState, useEffect} from 'react';

import '../styles/gameboard.css';
import Score from './Score';
import Input from './Input';
import Button from './Button';
import Card from './Card';


const Gameboard = () => {

  const [cardCount, setCardCount] = useState(10);

  const updateCardCount = (count) => {
    setCardCount(count.target.value)
  };

  useEffect(() => {
    setCardCount(cardCount)
  }, [cardCount]);

  const displayCards = () => {
    let cardArray = []
    for (let i = 0; i < cardCount; i++) {
      cardArray.push(<Card key={i}/>)
    };
    return (
      <div>
       {cardArray}
      </div>
    );
  };

  return (
    <div id="gameboard">
      <Score />
      <div id="sub-menu">
        <Input sendValue={updateCardCount}/>
        <Button />
      </div>
      <div id="cards-container">
        {displayCards()}
      </div>
    </div>
  )

}

export default Gameboard;