import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

import HeaderComponent from "../components/HeaderComponent/HeaderComponent";

export default function ImageDetail() {
  const { id } = useParams();
  const [imageData, setImageData] = useState(null);
  const [liked, setLiked] = useState(false);
  const [loading, setLoading] = useState(true);


  const clientKey = "uiJYSyirQVQhGRoJ5zK5mjUFjalx0Ut2t1XUQ_Imf44";

  useEffect(() => {
    const fetchImageData = async () => {
      try {
        const response = await axios.get(
          `https://api.unsplash.com/photos/${id}?client_id=${clientKey}`
        );
        setImageData(response.data);

        const isLiked = localStorage.getItem(`liked_${id}`);
        setLiked(!!isLiked);
      } catch (error) {
        toast.error("Ошибка: ", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchImageData();
    }
  }, [id]);

  const handleLikeClick = () => {
    const newLikedStatus = !liked;
    setLiked(newLikedStatus);

    if (newLikedStatus) {
      localStorage.setItem(`liked_${id}`, JSON.stringify(imageData));
    } else {
      localStorage.removeItem(`liked_${id}`);
    }
  };

  if (loading) {
    return (
      <div className="loader">
        <img src="/loader.svg" alt="loader" />
      </div>
    );
  }

  return (
    <div>
      <HeaderComponent />
      <div className="imageDetailPage">
        <div className="container">
          <div className="imageDetailPage_header">
            <div className="imageDetailPage_author">
              <div className="author_avatar">
                <img
                  width={"100%"}
                  height={"100%"}
                  src={imageData.user.profile_image.small}
                  alt="avatar"
                />
              </div>
              <div className="author_info">
                <div className="author_name">{imageData.user.name}</div>
                <div className="author_login">
                  @{imageData.user.instagram_username}
                </div>
              </div>
            </div>
            <div className="imageDetailPage_actions">
              <div className="actions_like">
                <button onClick={handleLikeClick}>
                  <svg
                    width="23"
                    height="22"
                    viewBox="0 0 23 22"
                    fill={liked ? "red" : "black"}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.0103 0C14.4591 0 12.352 2.36963 11.4999 3.488C10.6478 2.36963 8.54065 0 5.98945 0C2.68679 0 -0.00012207 3.03645 -0.00012207 6.76824C-0.00012207 8.80424 0.808022 10.7017 2.22257 12.0002C2.24314 12.0358 2.26843 12.0686 2.2979 12.098L11.1616 20.9434C11.2551 21.0366 11.3773 21.0834 11.4999 21.0834C11.6225 21.0834 11.7451 21.0366 11.8387 20.943L20.9971 11.7878L21.0916 11.6961C21.1665 11.6254 21.2405 11.5538 21.3233 11.4621C21.3579 11.428 21.3864 11.3896 21.4084 11.3479C22.4356 10.0901 22.9999 8.46777 22.9999 6.76824C22.9999 3.03645 20.313 0 17.0103 0ZM20.6111 10.8089C20.5979 10.8243 20.5858 10.8407 20.575 10.8575C20.5301 10.909 20.481 10.9544 20.4323 11.0007L11.4994 19.9271L3.08453 11.529C3.0574 11.4757 3.01948 11.427 2.97317 11.3863C1.6924 10.2679 0.958196 8.58475 0.958196 6.76824C0.958196 3.56473 3.21507 0.958363 5.98945 0.958363C8.73251 0.958363 11.0736 4.53621 11.097 4.57224C11.2739 4.8455 11.7259 4.8455 11.9028 4.57224C11.9262 4.53621 14.2672 0.958363 17.0103 0.958363C19.7847 0.958363 22.0416 3.56478 22.0416 6.76824C22.0416 8.2778 21.5334 9.71296 20.6111 10.8089Z"
                      fill={liked ? "red" : "black"}
                    />
                  </svg>
                </button>
              </div>
              <div className="actions_download">
                <button>
                  <img src="/download.svg" alt="download" />
                  <a href={imageData.links.download} target="_blank" rel="noreferrer" download>
                    <span>Скачать</span>
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div className="imageDetailPage_mainImage">
            <img src={imageData.urls.raw} alt={imageData.alt_description} />
          </div>
        </div>
      </div>
    </div>
  );
}
