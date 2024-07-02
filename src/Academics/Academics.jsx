import React from "react"
import styles from './Academics.module.css'

export const Academics = ()=>{
    return(
        <section className={styles.academics}>
      <h1>Academics</h1>
      <div className={styles.cards}>
        <div className={styles.card}>
          <img src="./landing Page Images/1.987e87b22a8f90492eb4.jpg" alt="Let's Talk Science" />
          <div className={styles.overlay}>
            <h2>Let's Talk Science</h2>
            <a href="#" className={styles['learn-more']}>Learn More <span>&rarr;</span></a>
          </div>
        </div>
        <div className={styles.card}>
          <img src="./landing Page Images/2.ec9d013b7d4f44fa4112.png" alt="Innovative Courses" />
          <div className={styles.overlay}>
            <h2>Innovative Courses</h2>
            <a href="#" className={styles['learn-more']}>Learn More <span>&rarr;</span></a>
          </div>
        </div>
        <div className={styles.card}>
          <img src="./landing Page Images/3.0cf44447da5e6fb16e49.png" alt="Cloud Storage" />
          <div className={styles.overlay}>
            <h2>Cloud Storage</h2>
            <a href="#" className={styles['learn-more']}>Learn More <span>&rarr;</span></a>
          </div>
        </div>
        <div className={styles.card}>
          <img src="./landing Page Images/4.3d31b426e478a4d304b8.png" alt="Online Education" />
          <div className={styles.overlay}>
            <h2>Online Education</h2>
            <a href="#" className={styles['learn-more']}>Learn More <span>&rarr;</span></a>
          </div>
        </div>
      </div>
    </section>
  );
};
    
