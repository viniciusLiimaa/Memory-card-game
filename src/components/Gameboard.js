import React, {useState, useEffect} from 'react';

import '../styles/gameboard.css';
import Score from './Score';
import Input from './Input';
import Button from './Button';
import Card from './Card';


const Gameboard = () => {

  const [cardCount, setCardCount] = useState(5);
  const [imgs, setImages] = useState([]);

  // Update the card count based on what the user types in the input box
  const updateCardCount = (count) => {
    setCardCount(count.target.value)
  };

  // Fetch images to display on the card
  useEffect(() => {
    const getImages = async () => {
      let url = `https://picsum.photos/v2/list?limit=${cardCount}`
      try {
        let response = await fetch(url)
        let data = await response.json()
        setImages(data.map(element => element.download_url+".jpg"))
      } catch (error) {
        console.log(`Error getting data`, error);
      }
    }

    getImages();

  }, [cardCount])

  

  const displayCards = () => {

    let cardArray = []
    for (let i = 0; i < cardCount; i++) {
      let imgUrl = imgs[i]
      cardArray.push(<Card key={i} imgUrl={imgUrl}/>)
      cardArray.push(<Card key={i+cardCount} imgUrl={imgUrl}/>)
    };
    let shuffledCardArray = cardArray.sort((a,b) => 0.5 - Math.random())
    
    return (
      <div>
       {shuffledCardArray}
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