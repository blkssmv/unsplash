import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.header_container}>
        <div>
          <Link to={"/"}>
            <img width={185.5} height={72.5} src={"./logo.svg"} alt="logo" />
          </Link>
        </div>

        <Link to={"/favourites"} className={styles.link}>
          <img width={23} height={21} src="/favourites.svg" alt="favourites" />
          <span>Избранное</span>
        </Link>
      </div>
    </div>
  );
}
