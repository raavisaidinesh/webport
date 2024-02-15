import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>HEY THERE, It's D<span>i</span>nesh</h1>
        <p className={styles.description}>
          I'm a full-stack engineer with a passion for everything back-end.Welcome to my corner of the internet. I'm glad you are here!
        </p>
        <a href="mailto:raavisaidinesh@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/cartoon.jpeg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
