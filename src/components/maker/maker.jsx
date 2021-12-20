import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Editor from '../editor/editor';
import Preview from '../preview/preview';
import styles from './maker.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";

const Maker = ({authService}) => {
    const nav = useNavigate();
    const [cards, setCards] = useState([
      {
        id: '1',
        name: 'usiyoung',
        email: 'usiyoung7@gmail.com',
        company: 'usiyoung company',
        title: 'Front-end',
        fileName: 'usiyoung',
        fileURL: '../../image/avatar1.png',
        message: 'usiyoung is front-end developer. hi!',
        theme: 'dark',

      },
      {
        id: '2',
        name: 'Georgiana Suclea',
        email: 'Georgiana Suclea@gmail.com',
        company: 'apple',
        title: 'IOS developer',
        fileName: 'CComie',
        fileURL: '../../image/avatar2.png',
        message: 'Georgiana Suclea is an android and IOS developer who worked at Apple for 6 years.',
        theme: 'light',
      },
      {
        id: '3',
        name: 'coco',
        email: 'coco@gmail.com',
        company: 'usiyoung company',
        title: 'Back-end',
        fileName: 'coco',
        fileURL: '../../image/avatar1.png',
        message: 'coco is 28 year old photographer from London with a real talent for what he does',
        theme: 'pink',
      }
    ]);
    const onLogout = () => {
        authService.logout();
      };

    useEffect(
      () => {
        authService.onAuthChanged((user) => {
            if(!user){
              nav('/');
            }
        })
      }
    );

    return(
      <div className={styles.container}>
          <nav className={styles.nav}>
            <div className={styles.logo}>
              <FontAwesomeIcon size="2x" icon={faCheckCircle} className={styles.logoIcon}/>
              <p className={styles.logoName}>CARD MAKER</p>
            </div>
            <button className={styles.logout} onClick={onLogout}>
              Log out
            </button>
          </nav>

          <div className={styles.content}>
            <Editor cards={cards}/>
            <Preview cards={cards}/>
          </div>
        </div>      
    );
}

export default Maker;