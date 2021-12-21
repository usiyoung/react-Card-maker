import React,{useEffect} from 'react';
import styles from './login.module.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { faSignOutAlt} from '@fortawesome/free-solid-svg-icons';
import {
    faGithub,
    faGoogle
} from '@fortawesome/free-brands-svg-icons';
import loginbackground from '../../image/background.jpg';

const Login = ({authService}) => {
    const nav = useNavigate();

    const goToMaker = (userID) =>{
        nav({
            pathname: '/maker',
            state: {id: userID}
        })
    }
    
    const onLogin = event =>{   
        authService //
        .login(event)
        .then((result) => {
            goToMaker(result.user.uid);
          })
    };

    useEffect(()=>{
        authService.onAuthChanged(user => {
            user && goToMaker(user.uid);
        })
    })

    return(
        <div className={styles.login}>
            <img className={styles.background}src={loginbackground}alt="" />
            <section className={styles.container}>
                <div className={styles.logo}>
                    <FontAwesomeIcon icon={faCheckCircle} />
                </div>
                <p className={styles.title}>welcome, Try making <span>your card!</span></p>     
                <section>
                    <ul>
                        <li onClick={()=>{onLogin('Github')}} className={`${styles.loginBtn} ${styles.git}`}>
                        <FontAwesomeIcon icon={faGithub}/>
                            <button className={styles.btn} >Github</button>
                        </li>
                        <li onClick={()=>{onLogin('Google')}} className={`${styles.loginBtn} ${styles.google}`}>
                        <FontAwesomeIcon icon={faGoogle} />
                            <button className={styles.btn} >Google</button>
                        </li>
                        <li onClick={()=>window.location.href="https://github.com/usiyoung/card-maker" }className={styles.loginBtn}>
                            <FontAwesomeIcon icon={faSignOutAlt}/>
                            <button className={styles.btn}>Usiyoung Page</button>
                        </li>
                    </ul>
                </section>
            </section>
        </div>
        
    )
    };

export default Login;