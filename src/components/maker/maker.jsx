import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Editor from '../editor/editor';
import Preview from '../preview/preview';
import styles from './maker.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";

const Maker = ({authService}) => {
  const nav = useNavigate();

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
              <FontAwesomeIcon icon={faCheckCircle} className={styles.logoIcon}/>
              <p className={styles.logoName}>CARD MAKER</p>
            </div>
            <button className={styles.logout} onClick={onLogout}>
              Log out
            </button>
          </nav>

          <div className={styles.content}>
            <Editor/>
            <Preview/>
          </div>
        </div>      
    );
}

export default Maker;