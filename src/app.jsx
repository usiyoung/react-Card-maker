import React from 'react';
import Login from './components/login/login';
import Maker from './components/maker/maker';
import styles from './app.module.css';
import {Route, Routes} from 'react-router-dom';

function App({FileInput,authService,cardRepository}) {

  return (
      <div className={styles.container}>
          <Routes>
            <Route path="/*" element={<Login authService={authService}/>} />
            <Route path="/maker" element={<Maker authService={authService} FileInput={FileInput} cardRepository={cardRepository} />} />
          </Routes>
        </div>
  )
}


export default App;
