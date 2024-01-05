import axios from "axios";
import React, { useEffect, useState } from "react";
import "../App.css";

export default function Home() {
  const [images, setImages] = useState([]);
  const secretKey = "uiJYSyirQVQhGRoJ5zK5mjUFjalx0Ut2t1XUQ_Imf44";

  const fetchImages = async () => {
    return await axios
      .get(`https://api.unsplash.com/photos/?client_id=${secretKey}`)
      .then((res) => setImages(res.data));
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div className="homePage">
      <div className="searchBlock">
        <div className="searchInput">
          <input placeholder="Поиск" />
        </div>
      </div>
      <div className="container">
        <div className="images">
          {images.map((image) => (
            <div className="image" key={image.id}>
              <img src={image.urls.regular} alt="image" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
