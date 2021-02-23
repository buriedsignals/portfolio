import React from "react"
import styles from "./footer.module.css"

const Footer = () => (
    <div className={styles.footer}>
        <div className={styles['footer-first-row']}>
            <div className={styles['substack-embed']}>
            <p>Sign up for my newsletter</p>
            <iframe src="https://buriedsignals.substack.com/embed" width="300" height="90" frameBorder="0" scrolling="no"></iframe>
            </div>
            <div className={styles['footer-right']}>
            <a href="mailto:tom.vaillant@hey.com">tom.vaillant@hey.com</a>
            </div>
        </div>
        <div className={styles['footer-second-row']}>
            <div className={styles['footer-slogan']}>
            <span>Visual experiments in journalism and fiction.</span>
            </div>
            <div className={styles['footer-social-icons']}>
                <a href="https://twitter.com/buriedsignals" className={styles['footer-social-icon']} rel="me" target="_blank">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="https://mamot.fr/@buriedsignals" className={styles['footer-social-icon']} rel="me" target="_blank">
                    <i class="fab fa-mastodon"></i>
                </a>        
                <a href="https://www.linkedin.com/in/tomvaillant" className={styles['footer-social-icon']} rel="me" target="_blank">
                    <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://github.com/buriedsignals" className={styles['footer-social-icon']} rel="me" target="_blank">
                    <i className="fab fa-github"></i>
                </a>
            </div>            
        </div>
    </div>
)

export default Footer

