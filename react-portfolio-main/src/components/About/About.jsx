import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>B-TECH</h3>
              <p>
                NATIONAL INSTITUTE OF TECHNOLOGY PATNA(2019-2023)<br></br> 
                Electronics and communication
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>INTERMEDIATE(2017-2019)</h3>
              <p>
                Narayana junior college  -- vijayawada
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>10TH BOARD(2017)</h3>
              <p>
               Sri Chaitanya high school -- vijayawada
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
