import React from "react"
import styles from './UpcomingEvents.module.css'



export const UpcomingEvent = ()=>{
    return(
        <div className={styles.container4}>
        <h2 className={styles['events-title']}>Upcoming Events</h2>
        <div className={styles.events}>
            <div className={styles['event-card']}>
                <h3>10</h3>
                <p className={styles.time}>January, 2022<br/>10:30AM - 12:00PM</p>
                <p>A Better Alternative To Grading Student Writing</p>
                <p className={styles.location}>
                    <img src="./landing Page Images/vector3.svg" alt="Location Icon"/>
                    New York, USA
                </p>
                <a href="#" className={styles['find-out-more']}>Find Out More →</a>
            </div>
            <div className={styles['event-card']}>
                <h3>14</h3>
                <p className={styles.time}>April, 2022<br/>12:00PM - 02:30PM</p>
                <p>12 Things Successful Mompreneurs</p>
                <p className={styles.location}>
                    <img src="./landing Page Images/vector3.svg" alt="Location Icon"/>
                    New York, USA
                </p>
                <a href="#" className={styles['find-out-more']}>Find Out More →</a>
            </div>
            <div className={styles['event-card']}>
                <h3>26</h3>
                <p className={styles.time}>March, 2022<br/>01:30PM - 02:30PM</p>
                <p>Ethics in AI Live Event Machines Judging</p>
                <p className={styles.location}>
                    <img src="./landing Page Images/vector3.svg" alt="Location Icon"/>
                    New York, USA
                </p>
                <a href="#" className={styles['find-out-more']}>Find Out More →</a>
            </div>
            <div className={styles['event-card']}>
                <h3>10</h3>
                <p className={styles.time}>April, 2022<br/>03:00PM - 04:30PM</p>
                <p>The Importance Of Intrinsic Motivation</p>
                <p className={styles.location}>
                    <img src="./landing Page Images/vector3.svg" alt="Location Icon"/>
                    New York, USA
                </p>
                <a href="#" className={styles['find-out-more']}>Find Out More →</a>
            </div>
        </div>
        <div className={styles.pagination}>
            <span className={styles.active}></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
    )
}