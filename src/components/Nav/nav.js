import React from "react"
import { Link } from "gatsby"
import styles from "./nav.module.css"

const Nav = () => {

    const toggleSideDrawer = () => {
        const hamburger = document.getElementById("hamburger");
        console.log(hamburger);
        const sideDrawer = document.getElementById("side-drawer");
        console.log(sideDrawer);
        hamburger.classList.toggle("is-active");
        sideDrawer.classList.toggle("open");
    }

    return (
        <div className={styles.navbar}>
        <div className={`${styles.three} ${styles.col}`}>
            <div className={styles.hamburger} id="hamburger" onClick={toggleSideDrawer}>
                <span className={styles.line}></span>
                <span className={styles.line}></span>
                <span className={styles.line}></span>
            </div>
        </div>
        <div id="side-drawer" className={styles.overlay}>
                <nav>
                    <ul>
                        <Link to="/about/">About</Link>
                        <a href="https://buriedsignals.com">Blog</a>
                        <Link to="/consulting/">Consulting</Link>
                        <Link to="/now/">Now</Link>
                        <a href="https://buriedsignals.substack.com/welcome">Subscribe</a>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Nav