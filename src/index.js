import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from './app.jsx';
import AuthService from './service/auth_service';
import firebaseApp from './service/firebase';

const authService = new AuthService(firebaseApp);

ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} />
  </React.StrictMode>,
  document.getElementById('root')
);


