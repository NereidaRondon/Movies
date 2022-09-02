import ReactStars from "react-stars";
import React from "react";
import './App.css';

const ratingChanged = (newRating) => {
  console.log(`rating: ${newRating}`)
}

export default function Stars() {

  return (
    <ReactStars
    count={5}
    color2={'#ffd700'}
    size={24}
    onChange={ratingChanged}/>
  );
}


