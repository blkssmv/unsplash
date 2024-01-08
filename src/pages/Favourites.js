import React, { useState, useEffect } from "react";
import HeaderComponent from "../components/HeaderComponent/HeaderComponent";
import "../App.css";

export default function Favourites() {
  const [favouriteImages, setFavouriteImages] = useState([]);

  useEffect(() => {
    const allKeys = Object.keys(localStorage);
    const likedImageKeys = allKeys.filter((key) => key.startsWith("liked_"));

    const likedImages = likedImageKeys.map((key) => {
      const imageData = JSON.parse(localStorage.getItem(key));
      return imageData;
    });

    setFavouriteImages(likedImages);
  }, []);

  return (
    <div>
      <HeaderComponent />
      <div className="container">
        <div>
          <h1 className="favourites_title">Избранное</h1>
          <div className="images">
            {favouriteImages.map((image, index) => (
              <div key={index} className="image">
                <img
                  src={image.urls.regular}
                  alt={image.alt_description || "image"}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
