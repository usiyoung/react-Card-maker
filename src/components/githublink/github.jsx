import React from 'react';
import styles from './github.module.css';
const GithubLink = (props) => {
    return(
        <a href="https://github.com/usiyoung/card-maker"   rel="noreferrer"target="_blank" className={styles.link}>
            <i className="fas fa-angle-double-right"></i> Github Link
        </a>
    )
}

export default GithubLink;