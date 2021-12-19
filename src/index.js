import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from './app.jsx';
import './index.css';
import AuthService from './service/auth_service';
import firebaseApp from './service/firebase';


const authService = new AuthService(firebaseApp);

ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
      <App authService={authService} />
      </BrowserRouter>
    </React.StrictMode>,
  document.getElementById('root'),
);


