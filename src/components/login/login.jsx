import React,{useEffect} from 'react';
import styles from './login.module.css';
import { useNavigate } from 'react-router-dom';

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
        <section className={styles.container}>
            <div className={styles.logo}>
                <i className="far fa-check-circle"></i>
            </div>
            <p className={styles.title}>welcome, Try making <span>your card!</span></p>     
            <section>
                <ul>
                    <li onClick={()=>{onLogin('Github')}} className={`${styles.loginBtn} ${styles.git}`}>
                        <i className='fab fa-github'></i>
                        <button className={styles.btn} >Github</button>
                    </li>
                    <li onClick={()=>{onLogin('Google')}} className={`${styles.loginBtn} ${styles.google}`}>
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