import axios from "axios";
import React, { useEffect, useState, useCallback } from "react";
import "../App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const secretKey = "uiJYSyirQVQhGRoJ5zK5mjUFjalx0Ut2t1XUQ_Imf44";

  const fetchImages = useCallback(async () => {
    try {
      setLoading(true);

      // Раскомментируйте это поле для имитации задержки загрузки с использованием setTimeout
      await new Promise((resolve) => setTimeout(resolve, 2000));

      const response = await axios.get(
        `https://api.unsplash.com/search/photos/?client_id=${secretKey}&page=${page}&query=${searchQuery}`
      );

      if (page === 1) {
        // Если это первая страница, устанавливаем новый результат поиска
        setImages(response.data.results);
      } else {
        // Если это не первая страница, добавляем результаты к предыдущим изображениям
        setImages((prevImages) => [...prevImages, ...response.data.results]);
      }

      return response;
    } catch (error) {
      toast.error("Упс... Ошибка! Посмотрите в консоль.");
    } finally {
      setLoading(false);
    }
  }, [page, searchQuery]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Сбросить страницу при изменении поискового запроса
    setPage(1);

    // Запустить fetchImages после сброса страницы
    fetchImages();
  }, [searchQuery, fetchImages]);

  return (
    <div className="homePage">
      <ToastContainer />
      <div className="searchBlock">
        <div className="searchInput">
          <input
            placeholder="Поиск"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="container">
        <div className="images">
          {images.map((image) => (
            <div className="image" key={image.id}>
              <img src={image.urls.regular} alt={image.alt_description} />
            </div>
          ))}
        </div>
        {loading && (
          <div className="loader">
            <img src="./loader.svg" alt="loader" />
          </div>
        )}
      </div>
    </div>
  );
}
