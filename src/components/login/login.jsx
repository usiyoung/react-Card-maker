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
        <h1 className={styles.title}>Hello, Try making your card!</h1>     
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
                <li onClick={()=>window.location.href="https://github.com/usiyoung/card-maker" }className={styles.loginBtn}>
                    <i className="fas fa-sign-out-alt"></i>
                    <button className={styles.btn}>Usiyoung Page</button>
                </li>
            </ul>
        </section>
    </section>
    )
    };

export default Login;