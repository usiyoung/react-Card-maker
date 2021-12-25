import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Editor from '../editor/editor';
import Preview from '../preview/preview';
import styles from './maker.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";

const Maker = ({FileInput, authService, cardRepository}) => {
  const nav = useNavigate();
    const navState = nav?.location?.state;
    const [userId, setUserId] = useState(navState && navState.id);
    const [cards, setCards] = useState({});

    const onLogout = () => {
        authService.logout();
    };

    useEffect(() => {
      if (!userId) {
        return;
      }
      const stopSync = cardRepository.syncCards(userId, cards => {
        setCards(cards);
      });
      return () => stopSync();
    }, [cardRepository, userId,cards]);

    useEffect(
      () => {
        authService.onAuthChanged((user) => {
            if(user){
              setUserId(user.uid);
            }else{
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
      cardRepository.saveCard(userId, card);
    }

    const deleteCard = card =>{
      setCards(cards => {
        const updated = { ...cards };
        delete updated[card.id];
        setCards(updated);
      })
      cardRepository.removeCard(userId, card);
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
              FileInput={FileInput}
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