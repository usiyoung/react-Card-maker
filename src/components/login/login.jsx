import React from 'react';
import styles from './login.module.css';

const Login = ({authService}) => {
    const onLogin = (e)=>{   
        authService.login(e);
    }
    return(
    <section className={styles.container}>
        <div className={styles.logo}>
            <i className="far fa-check-circle"></i>
        </div>
        <section>
            <ul>
                <li onClick={()=>{onLogin('Github')}} className={styles.loginBtn}>
                    <i className="fab fa-github"></i>
                    <button className={styles.btn} >Github</button>
                </li>
                <li onClick={()=>{onLogin('Google')}} className={styles.loginBtn}>
                    <i className="fab fa-google"></i>
                    <button className={styles.btn} >Google</button>
                </li>
                <li className={styles.loginBtn}>
                    <i className="fas fa-sign-out-alt"></i>
                    <button className={styles.btn}>Log out</button>
                </li>
            </ul>
        </section>
        <p className={styles.footer}>Hello, Try making your card!</p>     
    </section>
    )
    };

export default Login;