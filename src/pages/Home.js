import axios from "axios";
import React, { useEffect, useState } from "react";
import "../App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import HeaderComponent from "../components/HeaderComponent/HeaderComponent";

export default function Home() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const secretKey = "uiJYSyirQVQhGRoJ5zK5mjUFjalx0Ut2t1XUQ_Imf44"; // * Ваш секретный ключ на странице unsplash.com

  const fetchImages = async () => {
    setLoading(true);
    const baseUrl = searchQuery
      ? `https://api.unsplash.com/search/photos?query=${encodeURIComponent(
          searchQuery
        )}&page=${page}`
      : `https://api.unsplash.com/photos?page=${page}`;
    const url = `${baseUrl}&client_id=${secretKey}`;

    try {
      const response = await axios.get(url);
      const newImages = searchQuery ? response.data.results : response.data;
      setImages((prev) => (page === 1 ? newImages : [...prev, ...newImages]));
    } catch (error) {
      toast.error("Упс! Ошибка... Проверьте консоль.");
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    setPage(1);
    setImages([]);
    fetchImages();
  };

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    fetchImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="homePage">
      <HeaderComponent />
      <ToastContainer />
      <div className="button_top" onClick={handleScrollToTop}>
        <img src="/button_top.svg" alt="button_top" />
      </div>
      <div className="searchBlock">
        <div className="searchInput">
          <input
            placeholder="Поиск"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <img onClick={handleSearch} src="./search.svg" alt="search" />
        </div>
      </div>

      <div className="container">
        <div className="images">
          {images.map((image) => (
            <Link to={`/image/${image.id}`} className="image" key={image.id}>
              <img src={image.urls.regular} alt={image.alt_description} />
            </Link>
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
