import React from "react";
import { Link } from "react-router-dom";
import styles from "./HomePageHeader.module.css";

export default function HomePageHeader() {
  return (
    <div className={styles.header}>
      <div className={styles.header_container}>
        <div className={styles.logo}>
          <Link to={"/"}>
            <img width={185.5} height={72.5} src={"./logo.svg"} alt="logo" />
          </Link>
        </div>

        <Link to={"/favourites"} className={styles.link}>
          <img width={23} height={21} src="/favourites.svg" alt="favourites" />
          <span className={styles.favourites_title}>Избранное</span>
        </Link>
      </div>
    </div>
  );
}
