import React from "react"
import styles from './StudentsDisplay.module.css'



export const StudentShow = ()=>{
    return(
        <section className={styles['successfully-trained']}>
        <div className={styles.container3}>
            <div className={styles['trained-card']}>
                <p>Successfully<br/>Trained</p>
                <h3>1478</h3>
                <span>ENROLLED LEARNERS</span>
            </div>
            <div className={styles['trained-card']}>
                <p>Successfully<br/>Trained</p>
                <h3>1731</h3>
                <span>ENROLLED LEARNERS</span>
            </div>
            <div className={styles['trained-card']}>
                <p>Successfully<br/>Trained</p>
                <h3>280</h3>
                <span>ENROLLED LEARNERS</span>
            </div>
            <div className={styles['trained-card']}>
                <p>Successfully<br/>Trained</p>
                <h3>1045</h3>
                <span>ENROLLED LEARNERS</span>
            </div>
        </div>
    </section>

    )
}