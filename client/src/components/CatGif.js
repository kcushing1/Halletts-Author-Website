import React, { useEffect, useState } from "react";
//import env from "react-dotenv";
//require("dotenv").config();

export default function CatGif() {
  let [catGif, setCatGif] = useState([]);

  function loadGiphy() {
    let giphyAPI = "ybBRMVWaKQggpR921jK2HwDEBcuDKd8b";
    let giphyURL =
      "https://api.giphy.com/v1/gifs/search?api_key=" +
      giphyAPI +
      "&q=cats&limit=3&offset=0&rating=g&lang=en";

    let catgifs = fetch(giphyURL);
    catgifs
      .then((resp) => resp.json())
      .then((res) => {
        setCatGif(res.data);
      });
  }

  useEffect(() => {
    loadGiphy();
  }, []);

  return (
    <div>
      {catGif.map((gif) => {
        return (
          <img
            alt={gif.title}
            key={gif.title}
            src={gif.images.fixed_height.url}
            className="rounded mx-3"
          />
        );
      })}
    </div>
  );
}
