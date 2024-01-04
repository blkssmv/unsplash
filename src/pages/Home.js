import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [images, setImages] = useState([]);
  const secretKey = "uiJYSyirQVQhGRoJ5zK5mjUFjalx0Ut2t1XUQ_Imf44";

  const fetchImages = async () => {
    return await axios
      .get(`https://api.unsplash.com/photos/?client_id=${secretKey}`)
      .then((res) => setImages(res.data));
  };

//   useEffect(() => {
//     fetchImages();
//   }, []);



  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 15 }}>
      {images.map((image) => (
        <div key={image.id} style={{ width: 100, height: 100 }}>
          <img src={image.urls.regular} width={100} height={100} />
        </div>
      ))}
    </div>
  );
}
