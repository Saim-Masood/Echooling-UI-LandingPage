import React from "react"
import styles from './NewsBlog.module.css'

export const News= ()=>{
    return(
        <section classNameName={styles['news-blogs']}>
        <h2>Echooling News and Blogs</h2>
        <div className={styles.container6}>
            <div className={styles.card}>
                <img src="./landing Page Images/1.987e87b22a8f90492eb4.jpg" alt="News Image"/>
                <div className={styles['card-content']}>
                    <span className={styles.category}>Education</span>
                    <h3>Kids future Schools & Corona Prevent to Growth</h3>
                    <div className={styles.author}>
                        <img src="./landing Page Images/vector6.svg" alt="Author"/>
                        <span>Charlie Doyle</span>
                    </div>
                </div>
                <div className={styles.date}>April 18</div>
            </div>
            <div className={styles.card}>
                <img src="./landing Page Images/2.8f0076f5a86838542c39.jpg" alt="News Image"/>
                <div className={styles['card-content']}>
                    <span className={styles.category}>Education</span>
                    <h3>Echooling future Schools & social Innovation</h3>
                    <div className={styles.author}>
                        <img src="./landing Page Images/vector6.svg" alt="Author"/>
                        <span>Charlie Doyle</span>
                    </div>
                </div>
                <div className={styles.date}>April 18</div>
            </div>
            <div className={styles.card}>
                <img src="./landing Page Images/3.356c9579b8137ed75a03.jpg" alt="News Image"/>
                <div className={styles['card-content']}>
                    <span className={styles.category}>Education</span>
                    <h3>7 Learning system design tips For better eLearning</h3>
                    <div className={styles.author}>
                        <img src="./landing Page Images/vector6.svg" alt="Author"/>
                        <span>Charlie Doyle</span>
                    </div>
                </div>
                <div className={styles.date}>April 18</div>
            </div>
            <div className={styles.card}>
                <img src="./landing Page Images/1.987e87b22a8f90492eb4.jpg" alt="News Image"/>
                <div className={styles['card-content']}>
                    <span className={styles.category}>Education</span>
                    <h3>Why schools should continue remote study</h3>
                    <div className={styles.author}>
                        <img src="./landing Page Images/vector6.svg" alt="Author"/>
                        <span>Charlie Doyle</span>
                    </div>
                </div>
                <div className={styles.date}>April 18</div>
            </div>
        </div>
    </section>
    )
}