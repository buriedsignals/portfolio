import React, { Component } from "react"
import { Link } from "gatsby"
import styles from "./nav.module.css"
import logo from '../../images/favicon.png'

class Nav extends Component {
    constructor(){
        super();
        this.toggleSideDrawer = this.toggleSideDrawer.bind(this);
        this.state = {
            active: false,
        }
    }

    toggleSideDrawer() {
        const currentState = this.state.active;
        this.setState({ active: !currentState });
        console.log(this.state);
    }

    render () {
        const hamburgerActive = [styles.isActive, styles.hamburger].join(' ')
        const menuActive = [styles.overlay, styles.open].join(' ')
        
        return (
            <div className={styles.navbar}>
                    <Link className={styles.navLogo} style={{position: "absolute", top: "10px", left: "15px", height: "45px"}} to="/">
                        <img src={logo} alt="" />
                    </Link>
                <div className={styles.three}>
                    <div className={this.state.active ? hamburgerActive : styles.hamburger} id="hamburger" onClick={this.toggleSideDrawer}>
                        <span className={styles.line}></span>
                        <span className={styles.line}></span>
                        <span className={styles.line}></span>
                    </div>
                </div>
                <div id="side-drawer" className={this.state.active ? menuActive : styles.overlay}>
                    <nav>
                        <ul>
                            <li>
                            <a href="https://buriedsignals.com" rel="noreferrer noopener">Blog</a>
                            </li>
                            <li>
                                <Link to="/consulting/">Consulting</Link>
                            </li>
                            <li>
                                <Link to="/now/">Now</Link>
                            </li>
                            <li>
                                <a href="https://buriedsignals.substack.com/welcome" rel="noreferrer noopener">Subscribe</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        )
    }
}

export default Nav



 // let attachedClasses = [styles.SideDrawer, styles.Close];
    // if (props.open) {
    //     attachedClasses = [styles.SideDrawer, styles.Open];
    // // }
    // menuClasses() {
    //     let menuClasses = [styles.overlay]
    //     if (this.state.showMenu) {
    //         menuClasses = [styles.overlay, styles.open]
    //         menuClasses.join(' ');
    //     }
    //     console.log(menuClasses);
    //     return menuClasses;
    // }

    
    // hamburgerClasses() {
    //     if (this.state.showMenu) {
    //         this.hamburgerClasses = [styles.isActive, styles.hamburger]
    //         this.hamburgerClasses.join(' ')
    //     } else {
    //         this.hamburgerClasses = [styles.hamburger]
    //     }
    //     console.log(this.hamburgerClasses);
    //     return this.hamburgerClasses;
// const hamburger = document.getElementById("hamburger");
// console.log(hamburger);
// const sideDrawer = document.getElementById("side-drawer");
// console.log(sideDrawer);
// hamburger.classList.toggle("is-active");
// sideDrawer.classList.toggle("open");