
import React from "react"
import styles from './CampusLife.module.css'


export const Campus = ()=>{
    return(
        <div>
    <div className={styles.container}>
        <div className={styles.content}>
            <h1>Campus Life</h1>
            <div className={styles.item}>
                <div>
                    <img src="https://via.placeholder.com/24\\" alt="icon"/>
                    <div className={styles.text}>
                        <h2>Do More, Stress Less</h2>
                        <p>Why I say old chap that is spiffing he legged it in my flat easy peasy.</p>
                    </div>
                </div>
                <img src="./landing Page Images/vector.svg" alt=""/>
            </div>
            <div className={styles.item}>
                <div>
                    <img src="https://via.placeholder.com/24" alt="icon"/>
                    <div className={styles.text}>
                        <h2>The Business Intelligence</h2>
                        <p>Why I say old chap that is spiffing he legged it in my flat easy peasy.</p>
                    </div>
                </div>
                <img src="./landing Page Images/vector.svg" alt=""/>
            </div>
            <div className={styles.item}>
                <div>
                    <img src="https://via.placeholder.com/24" alt="icon"/>
                    <div className={styles.text}>
                        <h2>System Administration</h2>
                        <p>Why I say old chap that is spiffing he legged it in my flat easy peasy.</p>
                    </div>
                </div>
                <img src="./landing Page Images/vector.svg" alt=""/>
            </div>
        </div>
        <div className={styles.image}>
            <img src="./landing Page Images/4.ff3894830e71cdd1965f.png" width="300px" height="500px" alt="Campus Life Image"/>
        </div>
    </div>
    <div className={styles['more-info']}>
        <a href="#">More about Campus Life </a>
    </div>
    </div>
)
        
    
}