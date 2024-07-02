import React from "react";
import styles from './TestimonialCard.module.css'


export const Testimonial = ()=>{
    return(
        <div className={styles.container5}>
        <h2 className="title">What our student saying</h2>
        <div className={styles['testimonial-card']}>
            <img src="./landing Page Images/testimonial.b4a97b69f2bf8c02fc4f.png" alt="Student Photo"/> 
            <div className={styles['testimonial-content']}>
                <h3>Justin Case</h3>
                <p className={styles.role}>Student</p>
                <p>Nulla porttitor accumsan tincidunt. Vamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Quisque velit nisi, pretium ut lacinia in.</p>
                <div className={styles.rating}>
                    <div className={styles.stars}>★★★★★</div>
                    <span>4.9 (14 Reviews)</span>
                </div>
            </div>
        </div>
    </div>
    )
}