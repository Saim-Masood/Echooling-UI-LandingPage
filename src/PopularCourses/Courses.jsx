import React from "react"
import styles from './Courses.module.css'


export const Courses = ()=>{
    return(
        <section className={styles['popular-courses']}>
        <h2>Popular Courses</h2>
        <div className={styles['courses-container']}>
            <div className={styles['course-card']}>
                <img src="./landing Page Images/1.2b718c64abf3cba58c0a.png" alt="Course 1"/>
                <div className={styles['course-info']}>
                    <p className={styles['course-category']}><span className={styles.red}>UX Design</span> <span className={styles.bullet}>&bull;</span> <span className={styles.blue}>5 Lessons</span></p>
                    <h3>Dave conservatoire is the Entirely free online</h3>
                    <div className={styles['course-details']}>
                        <img src="./landing Page Images/vector7.svg" alt="Students" className={styles['students-icon']}/>
                        <span>56 Students</span>
                        <span className={styles.price}>$72.00</span>
                    </div>
                </div>
            </div>
            <div className={styles['course-card']}>
                <img src="./landing Page Images/2.0f4fbbe4e32c8eec212e.png" alt="Course 2"/>
                <div className={styles['course-info']}>
                    <p className={styles['course-category']}><span className={styles.red}>UX Design</span> <span className={styles.bullet}>&bull;</span> <span className={styles.blue}>7 Lessons</span></p>
                    <h3>Strategy law and Organization foundation</h3>
                    <div className={styles['course-details']}>
                        <img src="./landing Page Images/vector7.svg" alt="Students" className={styles['students-icon']}/>
                        <span>77 Students</span>
                        <span className="price">$68.00</span>
                    </div>
                </div>
            </div>
            <div className={styles['course-card']}>
                <img src="./landing Page Images/3.2f7b3c10359c070cae98.png" alt="Course 3"/>
                <div className={styles['course-info']}>
                    <p className={styles['course-category']}><span className={styles.red}>UX Design</span> <span className={styles.bullet}>&bull;</span> <span className={styles.blue}>4 Lessons</span></p>
                    <h3>Python for Data Science & Machine Learning</h3>
                    <div className={styles['course-details']}>
                        <img src="./landing Page Images/vector7.svg" alt="Students" className={styles['students-icon']}/>
                        <span>77 Students</span>
                        <span className={styles.price}>$68.00</span>
                    </div>
                </div>
            </div>
            <div className={styles['course-card']}>
                <img src="./landing Page Images/4.1e8ed20eff0c42a15afb.png" alt="Course 4"/>
                <div className={styles['course-info']}>
                    <p className={styles['course-category']}><span className={styles.red}>UX Design</span> <span className={styles.bullet}>&bull;</span> <span className={styles.red}>8 Lessons</span></p>
                    <h3>The complete web develop Ment bootcamp.</h3>
                    <div className={styles['course-details']}>
                        <img src="./landing Page Images/vector7.svg" alt="Students" className={styles['students-icon']}/>
                        <span>77 Students</span>
                        <span className={styles.price}>$68.00</span>
                    </div>
                </div>
            </div>
        </div>
        <button className={styles['view-all-btn']}>View All Courses</button>
    </section>
    )
}