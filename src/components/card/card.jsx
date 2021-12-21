import React from 'react';
import styles from '../card/card.module.css';
import AvatarMan from '../../image/avatar1.png';
import AvatarWoman from '../../image/avatar2.png';

const Card = ({card}) => {
    const {
        id,
        name,
        stack,
        title,
        company,
        message,
        fileName,
        theme,
        fileURL,
        githubURL
    } = card;

    const DEFAULT_PHOTO = fileURL || AvatarMan;

    return(
        <li className={styles.card}>
            <img className={styles.avatar} src={DEFAULT_PHOTO} alt="profile" />
            <div className={styles.info}>
                <p className={styles.name}>{name}</p>
                <p className={styles.title}>{title}</p>
                <p className={styles.company}>{company}</p>
                <p className={styles.stack}>{stack}</p>
                <p className={styles.message}>{message}</p>
                <a className={`${styles.githubURL} ${getTheme(theme)}`} href={githubURL} ></a>
            </div>
        </li>
    )

    function getTheme(theme){
        switch(theme){
            case 'blue':
                return styles.blue;
            case 'dark':
                return styles.dark;
            case 'pink':
                return styles.pink;
            default: 
            throw new Error(`${theme}?`)
        }
    }
};

export default Card;