import React from 'react';
import styles from '../card/card.module.css';
const Card = ({card}) => {
    const {
        id,
        name,
        email,
        title,
        company,
        message,
        fileName,
        theme,
        fileURL
    } = card;
        return(
            <li className={`${styles.card}`}>
                <img className={styles.avatar} src={fileURL} alt="profile" />
                <div className={styles.info}>
                    <p className={styles.name}>{name}</p>
                    <p className={styles.title}>{title}</p>
                    <p className={styles.company}>{company}</p>
                    <p className={styles.email}>{email}</p>
                    <p className={styles.message}>{message}</p>
                </div>
            </li>
        )

};

export default Card;