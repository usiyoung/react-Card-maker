import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Editor from '../editor/editor';
import Preview from '../preview/preview';
import styles from './maker.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import AvatarMan from '../../image/avatar1.png';
import AvatarWoman from '../../image/avatar2.png';

const Maker = ({authService}) => {
    const nav = useNavigate();
    const [cards, setCards] = useState({
      '1': {
        id: '1',
        name: 'usiyoung',
        company: 'usiyoungcompany',
        title: 'Front-end',
        stack: 'javascript',
        fileName: 'usiyoung',
        fileURL: AvatarWoman,
        message: 'usiyoung is front-end developer. hi!',
        theme: 'dark',
        githubURL: 'https://github.com/usiyoung',
      },
      '2': {
        id: '2',
        name: 'Georgiana Suclea',
        stack: 'C++',
        company: 'apple',
        title: 'IOS developer',
        fileName: 'CComie',
        fileURL: AvatarMan,
        message: 'Georgiana Suclea is an android and IOS developer who worked at Apple for 6 years.',
        theme: 'blue',
        githubURL: 'https://github.com/usiyoung'
      },
      '3': {
        id: '3',
        name: 'coco',
        stack: 'JAVA',
        company: 'usiyoung company',
        title: 'Back-end',
        fileName: 'coco',
        fileURL: AvatarWoman,
        message: 'coco is 28 year old photographer from London with a real talent for what he does',
        theme: 'pink',
        githubURL: 'https://github.com/usiyoung'
      }
    });

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

    const createOrupdateCard = card =>{
      setCards(cards => {
        const updated = { ...cards };
        updated[card.id] = card;
        setCards(updated);
      })
    }

    const deleteCard = card =>{
      setCards(cards => {
        const updated = { ...cards };
        delete updated[card.id];
        setCards(updated);
      })
    }

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
            <Editor 
              cards={cards} 
              addCard={createOrupdateCard} 
              updateCard={createOrupdateCard} 
              deleteCard={deleteCard}/>
            <Preview cards={cards}/>
          </div>
        </div>      
    );
}

export default Maker;