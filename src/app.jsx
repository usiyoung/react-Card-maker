import React from 'react';
import Login from './components/login/login';
import Maker from './components/maker/maker';
import styles from './app.module.css';
import {Route, Routes} from 'react-router-dom';

function App({authService}) {

  return (
      <div className={styles.container}>
          <Routes>
            <Route path="/*" element={<Login authService={authService}/>} />
            <Route path="/maker" element={<Maker authService={authService} />} />
          </Routes>
        </div>
  )
}


export default App;
