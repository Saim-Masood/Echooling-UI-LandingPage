import React from "react"
import styles from './WelcomeSection.module.css'

export const Welcome = ()=>{
    return(
        <section className={styles['welcome-section']}>
        <div className={styles['image-container']}>
            <div className={styles.images}>
                <img src="./landing Page Images/ab.fcda2469b98ffc37a148.png" alt="Students" />
            </div>
            <img src="./landing Page Images/badge.ae149076478c64c7b217.png" alt="College Logo" className={styles['floating-logo']} />
        </div>
        <div className={styles['text-container']}>
            <h1>
                <span className={styles.blue}>Welcome to</span><br />
                <span className={styles.red}>Echooling LMS Platform</span>
            </h1>
            <p>Education is both the act of teaching knowledge to others and the act of receiving knowledge from someone else.</p>
            <p>Have questions? <a href="#" className={styles['guide-link']}>Get Free Guide</a></p>
            <p>Education also refers to the knowledge received through schooling instruction and to the institution of teaching as a whole. The main purpose of education is the integral development of a person.</p>
            <a href="#" className={styles['read-more']}>Read More &rarr;</a>
            <div className={styles.support}>
                <span>Get Support</span>
                <a href="mailto:support@react.com">support@react.com</a>
            </div>
        </div>
    </section>  
     )
}