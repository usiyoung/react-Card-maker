import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';

const Login = ({authService}) => {
    const onLogin = (e)=>{   
        authService.login(e.currentTarget.textContent);
    }
    return(
    <section>
        <Header/>
            <section>
                <h1>Login</h1>
                <ul>
                    <li><button onClick={onLogin}>Github</button></li>
                    <li><button onClick={onLogin}>Google</button></li>
                </ul>
            </section>
        <Footer/>
    </section>
    )
    };

export default Login;