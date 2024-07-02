import React from "react"
import styles from './Footer.module.css'
export const Footer = ()=>{
    return(
        <footer className={styles.footer}>
        <div className={styles['footer-container']}>
          <div className={styles['footer-section about']}>
            <img src="" alt="Echooing Logo" className={styles['footer-logo']}/>
            <p>There are course and event custom post types so you can easily create and manage course, events.</p>
            <div className={styles['contact-info']}>
              <p><img src="./landing Page Images/vector4.svg" alt="Phone Icon"/> +(402) 762 441 83</p>
              <p><img src="./landing Page Images/vector2.svg" alt="Mail Icon"/> info@echooing.com</p>
            </div>
          </div>
          <div className={styles['footer-section']}>
            <h4>About Us</h4>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Courses</a></li>
              <li><a href="#">Events</a></li>
              <li><a href="#">Career</a></li>
              <li><a href="#">Become a Teacher</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className={styles['footer-section']}>
            <h4>Useful Links</h4>
            <ul>
              <li><a href="#">Browse Library</a></li>
              <li><a href="#">Library</a></li>
              <li><a href="#">Partners</a></li>
              <li><a href="#">News & Blog</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Tutorials</a></li>
            </ul>
          </div>
          <div className={styles['footer-section newsletter']}>
            <h4>Newsletter</h4>
            <p>Get the latest Echooing news delivered to your inbox</p>
            <form>
              <input type="email" placeholder="Enter your email"/>
              <button type="submit">→</button>
            </form>
          </div>
        </div>
        <div className={styles['footer-bottom']}>
          <p>© 2024 <span className={styles.red2}>Echooing </span>. All Rights Reserved. <pre/>  Made  By <span className={styles.offwhite}>Saim Masood</span></p>
          <div className={styles['footer-social']}>
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </footer>

    )
}