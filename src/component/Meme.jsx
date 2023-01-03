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

  const [numCount, setNumCount] = React.useState({
    countTop: 0,
    countBottom: 0,
  });

  const handleChange = function (event) {
    console.log(event.target.dataset.tag);
    setNumCount((prevNumCount) => ({
      ...prevNumCount,
      [event.target.dataset.tag]: event.target.value.length,
    }));
    setMeme((prevMeme) => ({
      ...prevMeme,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <main>
      <div className="form">
        <div className="form-cover">
          <input
            type="text"
            placeholder="TOP TEXT"
            onChange={handleChange}
            name="topText"
            value={meme.topText}
            maxLength={25}
            data-tag="countTop"
          />
          <div className="number-count">
            <span
              className={`count form-number ${
                numCount.countTop > 20 ? "form-orange" : "form-light"
              } ${numCount.countTop == 25 && "form-red"}`}
            >
              {numCount.countTop}
            </span>
            <span
              className={`limit form-number ${
                numCount.countTop == 25 ? "form-red" : "form-light"
              }`}
            >
              25
            </span>
          </div>
        </div>

        <div className="form-cover">
          <input
            type="text"
            placeholder="BOTTOM TEXT"
            onChange={handleChange}
            name="bottomText"
            value={meme.bottomText}
            maxLength={25}
            data-tag="countBottom"
          />
          <div className="number-count">
            <span
              className={`count form-number ${
                numCount.countBottom > 7 ? "form-orange" : "form-light"
              } ${numCount.countBottom == 25 && "form-red"}`}
            >
              {numCount.countBottom}
            </span>
            <span
              className={`limit form-number ${
                numCount.countBottom == 25 ? "form-red" : "form-light"
              }`}
            >
              25
            </span>
          </div>
        </div>

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
