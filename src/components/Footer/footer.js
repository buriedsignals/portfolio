import React from "react"
import styles from "./footer.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

const Footer = () => (
    <div className={styles.footer}>
        <div className={styles.substackEmbed}>
            <iframe src="https://buriedsignals.substack.com/embed" width="300" height="90" frameBorder="0" scrolling="no" style={{marginBottom: "0px"}}></iframe>
        </div>
        <div className={styles.footerSocialIcons}>
            <a href="mailto:tom@buriedsignals.com" className={styles.footerSocialIcon} rel="me" target="_blank">
                <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <a href="https://twitter.com/tomvaillant_" className={styles.footerSocialIcon} rel="me" target="_blank">
                <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://instagram.com/tomvaillant_" className={styles.footerSocialIcon} rel="me" target="_blank">
            <FontAwesomeIcon icon={faInstagram} />
            </a>        
            <a href="https://www.linkedin.com/in/tomvaillant" className={styles.footerSocialIcon} rel="me" target="_blank">
                <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://github.com/buriedsignals" className={styles.footerSocialIcon} rel="me" target="_blank">
            <FontAwesomeIcon icon={faGithub} />
            </a>
        </div>      
        <div className={styles.footerSlogan}>
        </div>      
    </div>
)

export default Footer

