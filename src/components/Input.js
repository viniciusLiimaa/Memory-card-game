import React, {useState} from 'react';
import '../styles/input.css'

const Input = (props) => {

  return (
    <div id="input-container">
      <label hmtlFor="card-num">Type the number of cards you want to match</label>
      <textarea type="text" id="card-num" name="card-num" onChange={props.sendValue}></textarea>
    </div>
  )


}

export default Input;