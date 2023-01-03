import React, { useState } from "react";

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/1g8my4.jpg",
  });

  const [allMeme, setAllMeme] = React.useState([]);

  React.useEffect(function () {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((data) => setAllMeme(data.data.memes))
      .catch((err) => console.log(err));
  }, []);

  const memeArray = allMeme;
  function getMemeImage(event) {
    const randomNumber = Math.floor(Math.random() * 100 + 1);
    const url = memeArray[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  const handleChange = function (event) {
    setMeme((prevMeme) => ({
      ...prevMeme,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <main>
      <div className="form">
        <input
          type="text"
          placeholder="TOP TEXT"
          onChange={handleChange}
          name="topText"
          value={meme.topText}
        />
        <input
          type="text"
          placeholder="BOTTOM TEXT"
          onChange={handleChange}
          name="bottomText"
          value={meme.bottomText}
        />
        <button onClick={getMemeImage} className="btn">
          Get New Meme Image 🥸
        </button>
      </div>
      <div className="meme">
        <img
          className="memeImg"
          src={meme.randomImage}
          alt="This is the place where Api will fetch the meme image"
          srcset=""
        />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
