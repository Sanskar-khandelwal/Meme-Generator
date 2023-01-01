// import React from 'react';
// import data from '../component/data'

// export  default function  Meme (){

// const memes = {
//     topText:"",
//     bottomText: "",
//     randomImage: "https://i.imgflip.com/1g8my4.jpg",
// }

// const [allMemeImages, setMemeImages] = React.useState(data.data.memes);

// const [meme, setMeme] = React.useState(memes)
// // console.log(memes);

//  const [memeImage, setMemeImage] = React.useState("https://i.imgflip.com/1g8my4.jpg");

//  function getMemeImage(){
//     const memesArray = data.data.memes;
//     const randomNumber = Math.floor(Math.random()*100);
//     setMemeImage(memesArray[randomNumber].url);
//  }

//     return (
// <div className="meme">
// <input type="text" placeholder="above text" />
// <input type="text" placeholder="Below  text" />
// <input
// type="submit"
// value = "Generate new meme 🤷‍♂️"
// onClick = {getMemeImage} />

// <img src = {memeImage} className = "memeImage" />
// </div>

//     )
// }
import React, { useState } from "react";
import memeData from "../component/data";

export default function Meme() {
  const [memeImage, setMemeImage] = useState(
    "https://i.imgflip.com/1g8my4.jpg"
  );

  const memeArray = memeData.data.memes;
  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * 100 + 1);
    const url = memeArray[randomNumber].url;
    setMemeImage(url);
  }

  return (
    <div className="meme">
      <input type="text" placeholder="TOP TEXT" />
      <input type="text" placeholder="BOTTOM TEXT" />
      <button onClick={getMemeImage} className="btn">
        Get New Meme Image 🥸
      </button>
      <img className="memeImg" src={memeImage} alt="" srcset="" />
    </div>
  );
}
