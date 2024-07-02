import React from "react";
import ReactDOM from "react-dom/client";
import styles from './Nav.module.css'


export const Nav = ()=>{
    return(
        <header>
        <div className={styles['top-bar']}>
            <div className={styles['contact-info']}>
                <span><img src="./landing Page Images/vector4.svg" alt="" /> (+1) 3344 999 999</span>
                <span><img src="./landing Page Images/vector2.svg" alt="" /> info@reactheme.com</span>
            </div>
            <div className={styles['social-media']}>
                <span>🔗</span>
                <span>🔗</span>
                <span>🔗</span>
            </div>
        </div>
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <h1>Echoooling.</h1>
            </div>
            <div className={styles['menu-icon']} ></div>
            <ul className={styles['nav-links']}>
                <li><a href="#">Home</a></li>
                <li><a href="#">Pages</a></li>
                <li><a href="#">Courses</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <div className={styles['search-bar']}>
                <input type="text" placeholder="Search Course" />
                <button><img src="./landing Page Images/vector5.svg" alt="" /></button>
            </div>
        </nav>
    </header>
    )
}