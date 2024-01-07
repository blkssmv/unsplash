import React, { useState, useEffect } from 'react';

export default function Favourites() {
  const [favouriteImages, setFavouriteImages] = useState([]);

  useEffect(() => {
    const allKeys = Object.keys(localStorage);
    const likedImageKeys = allKeys.filter(key => key.startsWith('liked_'));

    const likedImages = likedImageKeys.map(key => {
      const imageData = JSON.parse(localStorage.getItem(key));
      return imageData;
    });

    setFavouriteImages(likedImages);
  }, []);

  return (
    <div>
      <h1>Favourites</h1>
      <div className="favourites-container">
        {favouriteImages.map((image, index) => (
          <div key={index} className="favourite-image">
            <img src={image.urls.small} alt={image.alt_description || 'Image'} />
            {/* Render more details here */}
          </div>
        ))}
      </div>
    </div>
  );
}
