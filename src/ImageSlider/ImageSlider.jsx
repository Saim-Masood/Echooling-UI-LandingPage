import React from "react";
import styles from './ImageSlider.module.css'

export const ImageSlider = ()=> { 

    return(
<section className={styles.slider}>
<div className={`${styles.slide} ${styles.active}`}>
  <img src="./landing Page Images/1.ddb463a076b58bbe0ea3.jpg" alt="University Image 1" />
  <div className={styles.caption}>
    <h2>Discover the world of possible university.</h2>
    <button>Admissions</button>
  </div>
</div>
<div className={styles.slide}>
  <img src="./landing Page Images/2.924b429a0601a89b04e1.jpg" alt="University Image 2" />
  <div className={styles.caption}>
    <h2>Experience Quality Social Life.</h2>
    <button>Admissions</button>
  </div>
</div>
<button className={styles.prev}>&lt;</button>
<button className={styles.next}>&gt;</button>
</section>
    )
};
