import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './maker.module.css';

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
        <>
          <button className={styles.logout} onClick={onLogout}>
          <i className="fas fa-sign-out-alt"></i> Log out</button>
        </>
    );
}

export default Maker;