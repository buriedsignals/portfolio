import { checkPropTypes } from "prop-types"
import React from "react"
import styles from "./list.module.css"

const List = (props) => (
    <div className={styles.list}>
        <a 
            href={props.url ? props.url : null} 
            target="_blank " 
            rel="noreferrer noopener" 
            className={styles.listItem}>
            <img src={props.img_url} alt="" />
            <div className={styles.listItemDetails}>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </div>
        </a>
    </div>
)

export default List